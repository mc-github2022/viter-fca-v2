import useQueryData from "@/components/custom-hooks/useQueryData";
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
import { getCount, getRecord } from "./functions-report";

const ReportsStudentList = ({ schoolYear }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const search = React.useRef({ value: "" });
  const [page, setPage] = React.useState(1);
  const { ref, inView } = useInView();
  const [onSearch, setOnSearch] = React.useState(false);
  const [gender, setGender] = React.useState("");
  const [syId, setSyId] = React.useState(0);
  const [withLrn, setWithLrn] = React.useState(0);
  const [gradeLevel, setGradeLevel] = React.useState({});
  const [birthDate, setBirthDate] = React.useState("");
  const [totalCount, setTotalCount] = React.useState(0);

  let counter = 1;
  let total = [];

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
    queryKey: [
      "report",
      onSearch,
      store.isSearch,
      gender,
      syId,
      withLrn,
      gradeLevel?.id,
      birthDate,
    ],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `/v2/dev-report/search`, // search endpoint
        `/v2/dev-report/page/${pageParam}`, // list endpoint
        store.isSearch && !store.isShowSetting, // search boolean
        {
          searchValue: search.current.value,
          gender,
          gradeLevelId:
            gradeLevel.id === 0 || gradeLevel.id === undefined
              ? 0
              : gradeLevel.id,
          withLrn,
          birthDate,
          syId,
        },
        "post"
      ),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total) {
        return lastPage.page + lastPage.count;
      }
      return;
    },
    refetchOnWindowFocus: false,
  });

  const { data: gradeLevelData } = useQueryData(
    "/v2/dev-grade-level", // endpoint
    "get", // method
    "grade-level" // key
  );

  const { data: studentRequirement } = useQueryData(
    `/v2/dev-students-requirement`, // endpoint
    "get", // method
    "students-requirements" // key
  );

  const { data: registrarRequirement } = useQueryData(
    "/v2/dev-requirement-registrar", // endpoint
    "get", // method
    "registrar-all-student" // key
  );

  const getCurrentSchoolYear = schoolYear?.data.find(
    (item) => item.school_year_is_active === 1
  );

  React.useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  }, [inView]);

  // console.log(
  //   "Gender:",
  //   gender,
  //   "Grade ID:",
  //   gradeLevel.id,
  //   "With LRN:",
  //   withLrn,
  //   "Birthdate:",
  //   birthDate,
  //   "SY:",
  //   syId
  // );

  // console.log(getCount(result, gender, gradeLevel, withLrn, birthDate));

  React.useEffect(() => {
    setSyId(schoolYear?.data[0].school_year_aid);
  }, [schoolYear]);

  return (
    <>
      <div className="w-full flex flex-col md:flex-row items-center justify-between">
        <div className="mb-3 md:mb-0 w-full">
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
            setSyId={setSyId}
          />
        </div>
        <div className="w-full ">
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
                getCount(result, gender, gradeLevel, withLrn, birthDate)}
            </span>
          </h6>
          <div className="my-2 px-2 bg-primary rounded-md min-h-[100px] overflow-x-auto custom__scroll">
            <table className="table__sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th className="w-20">Status</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Grade Level</th>
                  <th>LRN</th>
                  <th>Birth Date</th>
                  <th>S.Y</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {result?.pages[0].success === false ? (
                  <tr className="text-center hover:bg-transparent ">
                    <td colSpan="100%" className="p-10">
                      <ModalInvalidRequestError />
                    </td>
                  </tr>
                ) : status === "loading" ||
                  result?.pages[0].count === 0 ||
                  getCount(result, gender, gradeLevel, withLrn, birthDate) ===
                    0 ? (
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
                      {page.data.map((item, key) => {
                        // if all student of SY
                        if (
                          gender === "" &&
                          (gradeLevel.id === 0 ||
                            gradeLevel.id === undefined) &&
                          withLrn === 0 &&
                          birthDate === ""
                        ) {
                          return getRecord(
                            counter++,
                            item,
                            key,
                            getCurrentSchoolYear,
                            studentRequirement,
                            registrarRequirement,
                            gradeLevelData
                          );
                        }
                        // if gender only
                        if (
                          gender !== "" &&
                          item.students_gender === gender &&
                          (gradeLevel.id === 0 ||
                            gradeLevel.id === undefined) &&
                          withLrn === 0 &&
                          birthDate === ""
                        ) {
                          return getRecord(
                            counter++,
                            item,
                            key,
                            getCurrentSchoolYear,
                            studentRequirement,
                            registrarRequirement,
                            gradeLevelData
                          );
                        }
                        // if gender and level
                        if (
                          gender !== "" &&
                          item.students_gender === gender &&
                          (gradeLevel.id !== 0 ||
                            gradeLevel.id !== undefined) &&
                          item.grade_level_aid === gradeLevel.id &&
                          withLrn === 0 &&
                          birthDate === ""
                        ) {
                          return getRecord(
                            counter++,
                            item,
                            key,
                            getCurrentSchoolYear,
                            studentRequirement,
                            registrarRequirement,
                            gradeLevelData
                          );
                        }
                        // if gender, level and with LRN
                        if (
                          gender !== "" &&
                          item.students_gender === gender &&
                          (gradeLevel.id !== 0 ||
                            gradeLevel.id !== undefined) &&
                          item.grade_level_aid === gradeLevel.id &&
                          withLrn !== 0 &&
                          item.students_lrn !== "" &&
                          birthDate === ""
                        ) {
                          return getRecord(
                            counter++,
                            item,
                            key,
                            getCurrentSchoolYear,
                            studentRequirement,
                            registrarRequirement,
                            gradeLevelData
                          );
                        }
                        // if gender, level, with LRN, and birthdate
                        if (
                          gender !== "" &&
                          item.students_gender === gender &&
                          (gradeLevel.id !== 0 ||
                            gradeLevel.id !== undefined) &&
                          item.grade_level_aid === gradeLevel.id &&
                          withLrn !== 0 &&
                          item.students_lrn !== "" &&
                          birthDate !== "" &&
                          Number(item.students_birth_date.split("-")[1]) ===
                            Number(birthDate)
                        ) {
                          return getRecord(
                            counter++,
                            item,
                            key,
                            getCurrentSchoolYear,
                            studentRequirement,
                            registrarRequirement,
                            gradeLevelData
                          );
                        }
                        // if level only
                        if (
                          gender === "" &&
                          (gradeLevel.id !== 0 ||
                            gradeLevel.id !== undefined) &&
                          item.grade_level_aid === gradeLevel.id &&
                          withLrn === 0 &&
                          birthDate === ""
                        ) {
                          return getRecord(
                            counter++,
                            item,
                            key,
                            getCurrentSchoolYear,
                            studentRequirement,
                            registrarRequirement,
                            gradeLevelData
                          );
                        }
                        // if level and with LRN
                        if (
                          gender === "" &&
                          (gradeLevel.id !== 0 ||
                            gradeLevel.id !== undefined) &&
                          item.grade_level_aid === gradeLevel.id &&
                          withLrn === 0 &&
                          item.students_lrn !== "" &&
                          birthDate === ""
                        ) {
                          return getRecord(
                            counter++,
                            item,
                            key,
                            getCurrentSchoolYear,
                            studentRequirement,
                            registrarRequirement,
                            gradeLevelData
                          );
                        }
                        // if level, with LRN and birthdate
                        if (
                          gender === "" &&
                          (gradeLevel.id !== 0 ||
                            gradeLevel.id !== undefined) &&
                          item.grade_level_aid === gradeLevel.id &&
                          withLrn !== 0 &&
                          item.students_lrn !== "" &&
                          birthDate !== "" &&
                          Number(item.students_birth_date.split("-")[1]) ===
                            Number(birthDate)
                        ) {
                          return getRecord(
                            counter++,
                            item,
                            key,
                            getCurrentSchoolYear,
                            studentRequirement,
                            registrarRequirement,
                            gradeLevelData
                          );
                        }
                        // if with LRN only
                        if (
                          gender === "" &&
                          (gradeLevel.id === 0 ||
                            gradeLevel.id === undefined) &&
                          withLrn !== 0 &&
                          item.students_lrn !== "" &&
                          birthDate === ""
                        ) {
                          return getRecord(
                            counter++,
                            item,
                            key,
                            getCurrentSchoolYear,
                            studentRequirement,
                            registrarRequirement,
                            gradeLevelData
                          );
                        }
                        // if with LRN and birthdate
                        if (
                          gender === "" &&
                          (gradeLevel.id === 0 ||
                            gradeLevel.id === undefined) &&
                          withLrn !== 0 &&
                          item.students_lrn !== "" &&
                          birthDate !== "" &&
                          Number(item.students_birth_date.split("-")[1]) ===
                            Number(birthDate)
                        ) {
                          return getRecord(
                            counter++,
                            item,
                            key,
                            getCurrentSchoolYear,
                            studentRequirement,
                            registrarRequirement,
                            gradeLevelData
                          );
                        }
                        // if birthdate only
                        if (
                          gender === "" &&
                          (gradeLevel.id === 0 ||
                            gradeLevel.id === undefined) &&
                          withLrn === 0 &&
                          birthDate !== "" &&
                          Number(item.students_birth_date.split("-")[1]) ===
                            Number(birthDate)
                        ) {
                          return getRecord(
                            counter++,
                            item,
                            key,
                            getCurrentSchoolYear,
                            studentRequirement,
                            registrarRequirement,
                            gradeLevelData
                          );
                        }
                        // if gender and with LRN
                        if (
                          gender !== "" &&
                          item.students_gender === gender &&
                          (gradeLevel.id === 0 ||
                            gradeLevel.id === undefined) &&
                          withLrn !== 0 &&
                          item.students_lrn !== "" &&
                          birthDate === ""
                        ) {
                          return getRecord(
                            counter++,
                            item,
                            key,
                            getCurrentSchoolYear,
                            studentRequirement,
                            registrarRequirement,
                            gradeLevelData
                          );
                        }
                        // if gender, with LRN, and birthdate
                        if (
                          gender !== "" &&
                          item.students_gender === gender &&
                          (gradeLevel.id === 0 ||
                            gradeLevel.id === undefined) &&
                          withLrn !== 0 &&
                          item.students_lrn !== "" &&
                          birthDate !== "" &&
                          Number(item.students_birth_date.split("-")[1]) ===
                            Number(birthDate)
                        ) {
                          return getRecord(
                            counter++,
                            item,
                            key,
                            getCurrentSchoolYear,
                            studentRequirement,
                            registrarRequirement,
                            gradeLevelData
                          );
                        }
                        // if gender and birthdate
                        if (
                          gender !== "" &&
                          item.students_gender === gender &&
                          (gradeLevel.id === 0 ||
                            gradeLevel.id === undefined) &&
                          withLrn === 0 &&
                          birthDate !== "" &&
                          Number(item.students_birth_date.split("-")[1]) ===
                            Number(birthDate)
                        ) {
                          return getRecord(
                            counter++,
                            item,
                            key,
                            getCurrentSchoolYear,
                            studentRequirement,
                            registrarRequirement,
                            gradeLevelData
                          );
                        }
                        // if level and birthdate
                        if (
                          gender === "" &&
                          (gradeLevel.id !== 0 ||
                            gradeLevel.id !== undefined) &&
                          item.grade_level_aid === gradeLevel.id &&
                          withLrn === 0 &&
                          birthDate !== "" &&
                          Number(item.students_birth_date.split("-")[1]) ===
                            Number(birthDate)
                        ) {
                          return getRecord(
                            counter++,
                            item,
                            key,
                            getCurrentSchoolYear,
                            studentRequirement,
                            registrarRequirement,
                            gradeLevelData
                          );
                        }
                        // if with LRN only
                        if (
                          gender === "" &&
                          (gradeLevel.id === 0 ||
                            gradeLevel.id === undefined) &&
                          withLrn !== 0 &&
                          item.students_lrn !== "" &&
                          birthDate === ""
                        ) {
                          return getRecord(
                            counter++,
                            item,
                            key,
                            getCurrentSchoolYear,
                            studentRequirement,
                            registrarRequirement,
                            gradeLevelData
                          );
                        }
                        // if with LRN and birthdate
                        if (
                          gender === "" &&
                          (gradeLevel.id === 0 ||
                            gradeLevel.id === undefined) &&
                          withLrn !== 0 &&
                          item.students_lrn !== "" &&
                          birthDate !== "" &&
                          Number(item.students_birth_date.split("-")[1]) ===
                            Number(birthDate)
                        ) {
                          return getRecord(
                            counter++,
                            item,
                            key,
                            getCurrentSchoolYear,
                            studentRequirement,
                            registrarRequirement,
                            gradeLevelData
                          );
                        }
                      })}
                    </React.Fragment>
                  ))
                )}
              </tbody>
            </table>
            {(gender !== "" ||
              (gradeLevel.id !== 0 && gradeLevel.id !== undefined) ||
              withLrn !== 0 ||
              birthDate !== "") && (
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
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportsStudentList;
