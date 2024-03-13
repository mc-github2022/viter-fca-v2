import useQueryData from "@/components/custom-hooks/useQueryData";
import { queryDataInfinite } from "@/components/helpers/queryDataInfinite.jsx";
import Loadmore from "@/components/partials/Loadmore.jsx";
import NoData from "@/components/partials/NoData.jsx";
import TableLoading from "@/components/partials/TableLoading.jsx";
import ModalInvalidRequestError from "@/components/partials/modals/ModalInvalidRequestError";
import FetchingSpinner from "@/components/partials/spinners/FetchingSpinner.jsx";
import { setIsFilter } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import {
  getGradeLevelByStudentId,
  getStudentStatus,
} from "../../all-students/functions-all-students";
import SearchBarFilterReportStudents from "./SearchBarFilterReportStudents";

const ReportsStudentList = ({ schoolYear }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const search = React.useRef({ value: "" });
  const [page, setPage] = React.useState(1);
  const { ref, inView } = useInView();
  const [onSearch, setOnSearch] = React.useState(false);
  const [onFocus, setOnFocus] = React.useState(false);
  const [syValue, setSyValue] = React.useState("All");
  const refFilter = React.useRef();
  let counter = 1;

  const { data: gradeLevel } = useQueryData(
    "/v2/dev-grade-level", // endpoint
    "get", // method
    "grade-level" // key
  );

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

  const getCurrentSchoolYear =
    schoolYear?.count > 0 &&
    schoolYear?.data.filter((item) => item.school_year_is_active === 1);

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

  const handleChange = (e) => {
    console.log(e.target.value);
    // e.preventDefault();
  };

  const handleClick = (e) => {
    console.log(e.target.value);
  };

  const handleClickOutside = (e) => {
    if (
      refFilter.current !== undefined &&
      refFilter.current !== null &&
      !refFilter.current.contains(e.target)
    ) {
      setOnFocus(false);
    }
  };

  console.log(syValue);

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  React.useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <div className="w-full flex items-center justify-between flex-wrap mb-2">
        <form
          action=""
          className="w-1/3"
          onChange={(e) => handleChange(e)}
          ref={refFilter}
        >
          <div className="relative w-full">
            <input
              type="text"
              className="text-[12px] caret-transparent"
              onFocus={() => setOnFocus(true)}
              value={syValue}
              onChange={(e) => e}
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2">
              <FaCaretDown className="h-4 w-4 fill-gray-600" />
            </span>

            {onFocus && (
              <ul className="absolute z-50 h-48 overflow-y-auto w-full bg-white border border-gray-200 rounded-md ">
                <button
                  type="button"
                  className="p-1 pl-3 pr-3 w-full text-left break-all bg-white hover:bg-black/5 focus:bg-black/5 outline-none cursor-pointer duration-200"
                  value="all"
                  onClick={(e) => handleClick(e)}
                >
                  All
                </button>
                <button
                  type="button"
                  className="p-1 pl-3 pr-3 w-full text-left break-all bg-white hover:bg-black/5 focus:bg-black/5 outline-none  cursor-pointer duration-200"
                  value="lrn"
                  onClick={(e) => handleClick(e)}
                >
                  LRN
                </button>

                {getCurrentSchoolYear?.map((item, key) => {
                  return (
                    <button
                      key={key}
                      type="button"
                      className="p-1 pl-3 pr-3 w-full text-left break-all bg-white hover:bg-black/5 focus:bg-black/5 outline-none  cursor-pointer duration-200"
                      value={item.school_year_aid}
                      onClick={(e) => handleClick(e)}
                    >
                      {item.start_year}-{item.end_year}
                    </button>
                  );
                })}

                <div className="flex flex-wrap w-full items-center">
                  <button className="p-2 w-1/3">
                    <select className="!border-gray-200 text-[12px]">
                      {error ? (
                        <option hidden disabled>
                          Error
                        </option>
                      ) : (
                        <option hidden>
                          {isFetching || isLoading
                            ? "...Loading"
                            : "School Year"}
                        </option>
                      )}

                      {schoolYear?.count > 0 ? (
                        <>
                          {schoolYear?.data.map((item, key) => {
                            return (
                              <option key={key} value={item.school_year}>
                                {item.school_year}
                              </option>
                            );
                          })}
                        </>
                      ) : (
                        <option disabled>No Data</option>
                      )}
                    </select>
                  </button>

                  <button className="p-2 w-1/3">
                    <select className="!border-gray-200 text-[12px]">
                      <option hidden>
                        {isFetching || isLoading ? "...Loading" : "Gender"}
                      </option>

                      <option value="m">Male</option>
                      <option value="f">Female</option>
                    </select>
                  </button>

                  <button className="p-2 w-1/3">
                    <select className="!border-gray-200 text-[12px]">
                      {error ? (
                        <option hidden disabled>
                          Error
                        </option>
                      ) : (
                        <option hidden>
                          {isFetching || isLoading ? "...Loading" : "Level"}
                        </option>
                      )}

                      {gradeLevel?.count > 0 ? (
                        <>
                          {gradeLevel?.data.map((item, key) => {
                            return (
                              <option key={key} value={item.grade_level_aid}>
                                {item.grade_level_name}
                              </option>
                            );
                          })}
                        </>
                      ) : (
                        <option disabled>No Data</option>
                      )}
                    </select>
                  </button>
                </div>
              </ul>
            )}
          </div>
        </form>

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
