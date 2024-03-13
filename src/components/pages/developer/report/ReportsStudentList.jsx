import { formatDateMonth } from "@/components/helpers/functions-general";
import { queryDataInfinite } from "@/components/helpers/queryDataInfinite.jsx";
import Loadmore from "@/components/partials/Loadmore.jsx";
import NoData from "@/components/partials/NoData.jsx";
import TableLoading from "@/components/partials/TableLoading.jsx";
import ModalInvalidRequestError from "@/components/partials/modals/ModalInvalidRequestError";
import FetchingSpinner from "@/components/partials/spinners/FetchingSpinner.jsx";
import { StoreContext } from "@/components/store/StoreContext";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { useInView } from "react-intersection-observer";
import FilterBar from "./FilterBar";
import SearchBarFilterReportStudents from "./SearchBarFilterReportStudents";

const ReportsStudentList = ({ schoolYear }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const search = React.useRef({ value: "" });
  const [page, setPage] = React.useState(1);
  const { ref, inView } = useInView();
  const [onSearch, setOnSearch] = React.useState(false);
  const [gender, setGender] = React.useState("");
  const [withLrn, setWithLrn] = React.useState(0);
  const [gradeLevel, setGradeLevel] = React.useState({});
  const [birthDate, setBirthDate] = React.useState("");

  let counter = 1;

  // console.log(getCurrentSchoolYear[0]?.school_year);

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
  React.useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <div className="w-full flex items-center justify-between flex-wrap">
        <FilterBar
          error={error}
          isFetching={isFetching}
          isLoading={isLoading}
          schoolYear={schoolYear}
          gender={gender}
          setGender={setGender}
          withLrn={withLrn}
          setWithLrn={setWithLrn}
          gradeLevel={gradeLevel}
          setGradeLevel={setGradeLevel}
          birthDate={birthDate}
          setBirthDate={setBirthDate}
        />

        <SearchBarFilterReportStudents
          search={search}
          dispatch={dispatch}
          store={store}
          result={result?.pages}
          isFetching={isFetching}
          setOnSearch={setOnSearch}
          onSearch={onSearch}
        />
      </div>

      <ul className="my-2">
        <li className="flex items-center gap-1">
          {gender !== "" && (
            <span className="leading-snug text-[10px] text-accent border bg-[#f3f4f6] py-px px-2 whitespace-nowrap rounded-md">
              {gender === "m" ? "Male" : "Female"}
            </span>
          )}
          {Object.keys(gradeLevel).length > 0 && (
            <span className="leading-snug text-[10px] text-accent border bg-[#f3f4f6] py-px px-2 whitespace-nowrap rounded-md">
              {gradeLevel.grade}
            </span>
          )}
          {withLrn === 1 && (
            <span className="leading-snug text-[10px] text-accent border bg-[#f3f4f6] py-px px-2 whitespace-nowrap rounded-md">
              With LRN
            </span>
          )}
          {birthDate !== "" && (
            <span className="leading-snug text-[10px] text-accent border bg-[#f3f4f6] py-px px-2 whitespace-nowrap rounded-md">
              {formatDateMonth(birthDate)}
            </span>
          )}
        </li>
      </ul>

      <div className="main__table">
        {isFetching && !isFetchingNextPage && status !== "loading" && (
          <FetchingSpinner />
        )}
        <div className="table__wrapper mb-[80px] custom__scroll">
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
                            {/* {getStudentStatus(
                              item,
                              getCurrentSchoolYear,
                              studentRequirement,
                              registrarRequirement
                            )} */}
                          </td>
                          <td>{item.student_fullname}</td>
                          <td>
                            {/* {getGradeLevelByStudentId(
                              gradeLevel,
                              item.current_students_grade_level_id
                            )} */}
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
