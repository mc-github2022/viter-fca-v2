import useQueryData from "@/components/custom-hooks/useQueryData";
import { queryDataInfinite } from "@/components/helpers/queryDataInfinite.jsx";
import Loadmore from "@/components/partials/Loadmore.jsx";
import NoData from "@/components/partials/NoData.jsx";
import TableLoading from "@/components/partials/TableLoading.jsx";
import ModalInvalidRequestError from "@/components/partials/modals/ModalInvalidRequestError";
import FetchingSpinner from "@/components/partials/spinners/FetchingSpinner.jsx";
import { StoreContext } from "@/components/store/StoreContext";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { FaEye } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import FilterBar from "./FilterBar";
import SearchBarFilterReportStudents from "./SearchBarFilterReportStudents";
import { checkBoxColumn, getCount, getRecord } from "./functions-report";

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

  const [isShowStatus, setIsShowStatus] = React.useState(true);
  const [isShowLrn, setIsShowLrn] = React.useState(true);
  const [isShowStudentName, setIsShowStudentName] = React.useState(true);
  const [isShowDob, setIsShowDob] = React.useState(true);
  const [isShowStudentEmail, setIsShowStudentEmail] = React.useState(true);
  const [isShowFatherName, setIsShowFatherName] = React.useState(true);
  const [isShowFatherContact, setIsShowFatherContact] = React.useState(true);
  const [isShowFatherEmail, setIsShowFatherEmail] = React.useState(true);
  const [isShowFatherDob, setIsShowFatherDob] = React.useState(true);
  const [isShowMotherMaiden, setIsShowMotherMaiden] = React.useState(true);
  const [isShowMotherContact, setIsShowMotherContact] = React.useState(true);
  const [isShowMotherEmail, setIsShowMotherEmail] = React.useState(true);
  const [isShowMotherDob, setIsShowMotherDob] = React.useState(true);
  const [isShowGender, setIsShowGender] = React.useState(true);
  const [isShowGradeLevel, setIsShowGradeLevel] = React.useState(true);
  const [isShowSy, setIsShowSy] = React.useState(true);
  const [isShowAddress, setIsShowAddress] = React.useState(true);
  const [isShowFilterColumn, setIsShowFilterColumn] = React.useState(false);

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

  const { data: guardian } = useQueryData(
    "/v2/dev-info-guardian", // endpoint
    "get", // method
    "dev-info-guardian" // key
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
        <div className="mb-3 md:mb-0 w-full flex items-center gap-5">
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

          <h6>
            Result:{" "}
            <span>
              {result?.pages[0].success === true &&
                getCount(result, gender, gradeLevel, withLrn, birthDate)}
            </span>
          </h6>
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
        <div className="table__wrapper mb-[50px] custom__scroll">
          {checkBoxColumn(
            isShowStatus,
            setIsShowStatus,
            isShowLrn,
            setIsShowLrn,
            isShowStudentName,
            setIsShowStudentName,
            isShowDob,
            setIsShowDob,
            isShowStudentEmail,
            setIsShowStudentEmail,
            isShowFatherName,
            setIsShowFatherName,
            isShowFatherContact,
            setIsShowFatherContact,
            isShowFatherEmail,
            setIsShowFatherEmail,
            isShowFatherDob,
            setIsShowFatherDob,
            isShowMotherMaiden,
            setIsShowMotherMaiden,
            isShowMotherContact,
            setIsShowMotherContact,
            isShowMotherEmail,
            setIsShowMotherEmail,
            isShowMotherDob,
            setIsShowMotherDob,
            isShowGender,
            setIsShowGender,
            isShowGradeLevel,
            setIsShowGradeLevel,
            isShowSy,
            setIsShowSy,
            isShowAddress,
            setIsShowAddress,
            setIsShowFilterColumn,
            isShowFilterColumn
          )}
          <div className="my-2 px-2 bg-primary rounded-md max-h-[calc(100vh-26rem)] overflow-x-auto custom__scroll">
            <table className="table__sm">
              <thead>
                <tr>
                  <th>#</th>
                  {isShowStatus && (
                    <th className="w-20">
                      Status
                      {/* <FaEye className="tooltip w-3 h-3" data-tooltip="Show" /> */}
                    </th>
                  )}
                  {isShowLrn && <th className="min-w-[8rem]">LRN</th>}
                  {isShowStudentName && (
                    <th className="min-w-[10rem]">Student Name</th>
                  )}
                  {isShowDob && <th className="min-w-[7rem]">Date of Birth</th>}
                  {isShowStudentEmail && (
                    <th className="min-w-[13rem]">Student Email</th>
                  )}
                  {isShowFatherName && (
                    <th className="min-w-[13rem]">Father's Name</th>
                  )}
                  {isShowFatherContact && (
                    <th className="min-w-[8rem]">Contact Number</th>
                  )}
                  {isShowFatherEmail && (
                    <th className="min-w-[10rem]">Father's Email</th>
                  )}
                  {isShowFatherDob && (
                    <th className="min-w-[10rem]">Father's Date of Birth</th>
                  )}
                  {isShowMotherMaiden && (
                    <th className="min-w-[10rem]">Mother's Maiden Name</th>
                  )}
                  {isShowMotherContact && (
                    <th className="min-w-[8rem]">Contact Number</th>
                  )}
                  {isShowMotherEmail && (
                    <th className="min-w-[13rem]">Mother's Email</th>
                  )}
                  {isShowMotherDob && (
                    <th className="min-w-[10rem]">Mother's Date of Birth</th>
                  )}
                  {isShowGender && <th className="min-w-[5rem]">Gender</th>}
                  {isShowGradeLevel && (
                    <th className="min-w-[10rem]">Grade Level</th>
                  )}
                  {isShowSy && <th className="min-w-[7rem]">S.Y</th>}
                  {isShowAddress && <th>Address</th>}
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
                            gradeLevelData,
                            guardian,
                            isShowStatus,
                            isShowLrn,
                            isShowStudentName,
                            isShowDob,
                            isShowStudentEmail,
                            isShowFatherName,
                            isShowFatherContact,
                            isShowFatherEmail,
                            isShowFatherDob,
                            isShowMotherMaiden,
                            isShowMotherContact,
                            isShowMotherEmail,
                            isShowMotherDob,
                            isShowGender,
                            isShowGradeLevel,
                            isShowSy,
                            isShowAddress
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
                            gradeLevelData,
                            guardian,
                            isShowStatus,
                            isShowLrn,
                            isShowStudentName,
                            isShowDob,
                            isShowStudentEmail,
                            isShowFatherName,
                            isShowFatherContact,
                            isShowFatherEmail,
                            isShowFatherDob,
                            isShowMotherMaiden,
                            isShowMotherContact,
                            isShowMotherEmail,
                            isShowMotherDob,
                            isShowGender,
                            isShowGradeLevel,
                            isShowSy,
                            isShowAddress
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
                            gradeLevelData,
                            guardian,
                            isShowStatus,
                            isShowLrn,
                            isShowStudentName,
                            isShowDob,
                            isShowStudentEmail,
                            isShowFatherName,
                            isShowFatherContact,
                            isShowFatherEmail,
                            isShowFatherDob,
                            isShowMotherMaiden,
                            isShowMotherContact,
                            isShowMotherEmail,
                            isShowMotherDob,
                            isShowGender,
                            isShowGradeLevel,
                            isShowSy,
                            isShowAddress
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
                            gradeLevelData,
                            guardian,
                            isShowStatus,
                            isShowLrn,
                            isShowStudentName,
                            isShowDob,
                            isShowStudentEmail,
                            isShowFatherName,
                            isShowFatherContact,
                            isShowFatherEmail,
                            isShowFatherDob,
                            isShowMotherMaiden,
                            isShowMotherContact,
                            isShowMotherEmail,
                            isShowMotherDob,
                            isShowGender,
                            isShowGradeLevel,
                            isShowSy,
                            isShowAddress
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
                            gradeLevelData,
                            guardian,
                            isShowStatus,
                            isShowLrn,
                            isShowStudentName,
                            isShowDob,
                            isShowStudentEmail,
                            isShowFatherName,
                            isShowFatherContact,
                            isShowFatherEmail,
                            isShowFatherDob,
                            isShowMotherMaiden,
                            isShowMotherContact,
                            isShowMotherEmail,
                            isShowMotherDob,
                            isShowGender,
                            isShowGradeLevel,
                            isShowSy,
                            isShowAddress
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
                            gradeLevelData,
                            guardian,
                            isShowStatus,
                            isShowLrn,
                            isShowStudentName,
                            isShowDob,
                            isShowStudentEmail,
                            isShowFatherName,
                            isShowFatherContact,
                            isShowFatherEmail,
                            isShowFatherDob,
                            isShowMotherMaiden,
                            isShowMotherContact,
                            isShowMotherEmail,
                            isShowMotherDob,
                            isShowGender,
                            isShowGradeLevel,
                            isShowSy,
                            isShowAddress
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
                            gradeLevelData,
                            guardian,
                            isShowStatus,
                            isShowLrn,
                            isShowStudentName,
                            isShowDob,
                            isShowStudentEmail,
                            isShowFatherName,
                            isShowFatherContact,
                            isShowFatherEmail,
                            isShowFatherDob,
                            isShowMotherMaiden,
                            isShowMotherContact,
                            isShowMotherEmail,
                            isShowMotherDob,
                            isShowGender,
                            isShowGradeLevel,
                            isShowSy,
                            isShowAddress
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
                            gradeLevelData,
                            guardian,
                            isShowStatus,
                            isShowLrn,
                            isShowStudentName,
                            isShowDob,
                            isShowStudentEmail,
                            isShowFatherName,
                            isShowFatherContact,
                            isShowFatherEmail,
                            isShowFatherDob,
                            isShowMotherMaiden,
                            isShowMotherContact,
                            isShowMotherEmail,
                            isShowMotherDob,
                            isShowGender,
                            isShowGradeLevel,
                            isShowSy,
                            isShowAddress
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
                            gradeLevelData,
                            guardian,
                            isShowStatus,
                            isShowLrn,
                            isShowStudentName,
                            isShowDob,
                            isShowStudentEmail,
                            isShowFatherName,
                            isShowFatherContact,
                            isShowFatherEmail,
                            isShowFatherDob,
                            isShowMotherMaiden,
                            isShowMotherContact,
                            isShowMotherEmail,
                            isShowMotherDob,
                            isShowGender,
                            isShowGradeLevel,
                            isShowSy,
                            isShowAddress
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
                            gradeLevelData,
                            guardian,
                            isShowStatus,
                            isShowLrn,
                            isShowStudentName,
                            isShowDob,
                            isShowStudentEmail,
                            isShowFatherName,
                            isShowFatherContact,
                            isShowFatherEmail,
                            isShowFatherDob,
                            isShowMotherMaiden,
                            isShowMotherContact,
                            isShowMotherEmail,
                            isShowMotherDob,
                            isShowGender,
                            isShowGradeLevel,
                            isShowSy,
                            isShowAddress
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
                            gradeLevelData,
                            guardian,
                            isShowStatus,
                            isShowLrn,
                            isShowStudentName,
                            isShowDob,
                            isShowStudentEmail,
                            isShowFatherName,
                            isShowFatherContact,
                            isShowFatherEmail,
                            isShowFatherDob,
                            isShowMotherMaiden,
                            isShowMotherContact,
                            isShowMotherEmail,
                            isShowMotherDob,
                            isShowGender,
                            isShowGradeLevel,
                            isShowSy,
                            isShowAddress
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
                            gradeLevelData,
                            guardian,
                            isShowStatus,
                            isShowLrn,
                            isShowStudentName,
                            isShowDob,
                            isShowStudentEmail,
                            isShowFatherName,
                            isShowFatherContact,
                            isShowFatherEmail,
                            isShowFatherDob,
                            isShowMotherMaiden,
                            isShowMotherContact,
                            isShowMotherEmail,
                            isShowMotherDob,
                            isShowGender,
                            isShowGradeLevel,
                            isShowSy,
                            isShowAddress
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
                            gradeLevelData,
                            guardian,
                            isShowStatus,
                            isShowLrn,
                            isShowStudentName,
                            isShowDob,
                            isShowStudentEmail,
                            isShowFatherName,
                            isShowFatherContact,
                            isShowFatherEmail,
                            isShowFatherDob,
                            isShowMotherMaiden,
                            isShowMotherContact,
                            isShowMotherEmail,
                            isShowMotherDob,
                            isShowGender,
                            isShowGradeLevel,
                            isShowSy,
                            isShowAddress
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
                            gradeLevelData,
                            guardian,
                            isShowStatus,
                            isShowLrn,
                            isShowStudentName,
                            isShowDob,
                            isShowStudentEmail,
                            isShowFatherName,
                            isShowFatherContact,
                            isShowFatherEmail,
                            isShowFatherDob,
                            isShowMotherMaiden,
                            isShowMotherContact,
                            isShowMotherEmail,
                            isShowMotherDob,
                            isShowGender,
                            isShowGradeLevel,
                            isShowSy,
                            isShowAddress
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
                            gradeLevelData,
                            guardian,
                            isShowStatus,
                            isShowLrn,
                            isShowStudentName,
                            isShowDob,
                            isShowStudentEmail,
                            isShowFatherName,
                            isShowFatherContact,
                            isShowFatherEmail,
                            isShowFatherDob,
                            isShowMotherMaiden,
                            isShowMotherContact,
                            isShowMotherEmail,
                            isShowMotherDob,
                            isShowGender,
                            isShowGradeLevel,
                            isShowSy,
                            isShowAddress
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
                            gradeLevelData,
                            guardian,
                            isShowStatus,
                            isShowLrn,
                            isShowStudentName,
                            isShowDob,
                            isShowStudentEmail,
                            isShowFatherName,
                            isShowFatherContact,
                            isShowFatherEmail,
                            isShowFatherDob,
                            isShowMotherMaiden,
                            isShowMotherContact,
                            isShowMotherEmail,
                            isShowMotherDob,
                            isShowGender,
                            isShowGradeLevel,
                            isShowSy,
                            isShowAddress
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
                            gradeLevelData,
                            guardian,
                            isShowStatus,
                            isShowLrn,
                            isShowStudentName,
                            isShowDob,
                            isShowStudentEmail,
                            isShowFatherName,
                            isShowFatherContact,
                            isShowFatherEmail,
                            isShowFatherDob,
                            isShowMotherMaiden,
                            isShowMotherContact,
                            isShowMotherEmail,
                            isShowMotherDob,
                            isShowGender,
                            isShowGradeLevel,
                            isShowSy,
                            isShowAddress
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
