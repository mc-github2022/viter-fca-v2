import useQueryData from "@/components/custom-hooks/useQueryData";
import { queryDataInfinite } from "@/components/helpers/queryDataInfinite.jsx";
import Loadmore from "@/components/partials/Loadmore.jsx";
import NoData from "@/components/partials/NoData.jsx";
import SearchBar from "@/components/partials/SearchBar";
import TableLoading from "@/components/partials/TableLoading.jsx";
import ModalInvalidRequestError from "@/components/partials/modals/ModalInvalidRequestError";
import FetchingSpinner from "@/components/partials/spinners/FetchingSpinner.jsx";
import { StoreContext } from "@/components/store/StoreContext";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { useInView } from "react-intersection-observer";
import {
  getGradeLevelByStudentId,
  getStudentStatus,
} from "../../all-students/functions-all-students";
import FilterAndSearch from "./FilterAndSearch";
import TableSpinner from "@/components/partials/spinners/TableSpinner";
import { setIsFilter } from "@/components/store/StoreAction";

const ReportsStudentList = ({ gradeLevel, isOngoing, schoolYear }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const search = React.useRef({ value: "" });
  const [page, setPage] = React.useState(1);
  const { ref, inView } = useInView();
  const [onSearch, setOnSearch] = React.useState(false);
  const [filterValue, setFilterValue] = React.useState("0");
  const [filterText, setFilterText] = React.useState("All");

  const getCurrentSchoolYear = schoolYear?.data.find(
    (item) => item.school_year_is_active === 1
  );

  let counter = 1;

  const {
    data: result,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["all-students", onSearch, store.isSearch],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `/v2/dev-all-students/search`, // search endpoint
        `/v2/dev-all-students/page/${pageParam}`, // list endpoint
        store.isSearch, // search boolean
        { searchValue: search.current.value }
      ),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total) {
        return lastPage.page + lastPage.count;
      }
      return;
    },
    refetchOnWindowFocus: false,
  });

  const { data: registrarRequirement } = useQueryData(
    "/v2/dev-requirement-registrar", // endpoint
    "get", // method
    "registrar-all-student" // key
  );

  const { data: studentRequirement } = useQueryData(
    `/v2/dev-students-requirement`, // endpoint
    "get", // method
    "students-requirements" // key
  );

  React.useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  }, [inView]);

  const handleClick = () => {
    dispatch(setIsFilter(false));
  };
  return (
    <>
      <FilterAndSearch
        search={search}
        dispatch={dispatch}
        store={store}
        result={result?.pages}
        isFetching={isFetching}
        setOnSearch={setOnSearch}
        onSearch={onSearch}
        setFilterValue={setFilterValue}
        setFilterText={setFilterText}
        filterValue={filterValue}
        filterText={filterText}
      />
      <div className="main__table" onClick={handleClick}>
        {isFetching && !isFetchingNextPage && status !== "loading" && (
          <FetchingSpinner />
        )}
        <div className="table__wrapper mb-[80px] custom__scroll scroll-gutter-stable ">
          <h6>
            Count:{" "}
            <span>
              {result?.pages[0].success === true &&
                result?.pages[0].data.length}
            </span>
          </h6>
          <div className="my-2 px-2 bg-primary rounded-md min-h-[100px] overflow-x-auto custom__scroll">
            <table className="table__sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th className="w-20">Status</th>
                  <th>Name</th>
                  <th>Grade Level</th>
                  <th>S.Y</th>
                </tr>
              </thead>

              <tbody>
                {result?.pages[0].success === false ? (
                  <tr className="text-center hover:bg-transparent ">
                    <td colSpan="100%" className="p-10">
                      <ModalInvalidRequestError />
                    </td>
                  </tr>
                ) : status === "loading" || result?.pages[0].count === 0 ? (
                  <tr className="text-center hover:bg-transparent ">
                    <td colSpan="100%" className="p-10">
                      {status === "loading" ? (
                        <TableLoading count={20} cols={3} />
                      ) : (
                        <NoData />
                      )}
                    </td>
                  </tr>
                ) : (
                  status !== "loading" &&
                  result?.pages[0].success === true &&
                  result?.pages.map((page, key) => (
                    <React.Fragment key={key}>
                      {page.data.map((item, key) => (
                        <tr key={key}>
                          <td>{counter++}.</td>
                          <td>
                            {getStudentStatus(
                              item,
                              getCurrentSchoolYear,
                              studentRequirement,
                              registrarRequirement
                            )}
                          </td>
                          <td>{item.student_fullname}</td>
                          <td>
                            {getGradeLevelByStudentId(
                              gradeLevel,
                              item.current_students_grade_level_id
                            )}
                          </td>
                          <td>{item.school_year}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))
                )}
              </tbody>
            </table>
            <div className="flex justify-center mt-10">
              <Loadmore
                fetchNextPage={fetchNextPage}
                isFetchingNextPage={isFetchingNextPage}
                hasNextPage={hasNextPage}
                result={result?.pages[0]}
                setPage={setPage}
                page={page}
                refView={ref}
              />
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportsStudentList;
