import useQueryData from "@/components/custom-hooks/useQueryData";
import { queryDataInfinite } from "@/components/helpers/queryDataInfinite.jsx";
import Loadmore from "@/components/partials/Loadmore.jsx";
import NoData from "@/components/partials/NoData.jsx";
import SearchBar from "@/components/partials/SearchBar";
import TableLoading from "@/components/partials/TableLoading.jsx";
import ModalConfirm from "@/components/partials/modals/ModalConfirm";
import ModalDelete from "@/components/partials/modals/ModalDelete";
import ModalReEnrolling from "@/components/partials/modals/ModalReEnrolling";
import FetchingSpinner from "@/components/partials/spinners/FetchingSpinner.jsx";
import {
  setError,
  setIsConfirm,
  setIsDelete,
  setMessage,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { BsArchive } from "react-icons/bs";
import { CiSquarePlus, CiViewList } from "react-icons/ci";
import { FiTrash } from "react-icons/fi";
import { LiaListAlt } from "react-icons/lia";
import { MdOutlineRestore } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import ModalRequirements from "../clients/student-info/requirement/ModalRequirements";
import ModalEditStudent from "../students/StudentEdit/ModalEditStudent";
import {
  getGradeLevelByStudentId,
  getGradeLevelOrderByStudentId,
  getStudentStatus,
} from "./functions-all-students";

const AllStudentList = ({ gradeLevel, isOngoing, schoolYear }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setId] = React.useState(null);
  const [dataItem, setData] = React.useState(null);
  const [isArchive, setIsArchive] = React.useState(1);
  const search = React.useRef({ value: "" });
  const [isEnroll, setIsEnroll] = React.useState(false);
  const [isViewInfo, setIsViewInfo] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const { ref, inView } = useInView();
  const [onSearch, setOnSearch] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [viewRequirements, setViewRequirements] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(null);
  const queryClient = useQueryClient();

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

  // console.log(registrarRequirement);
  // console.log(getCurrentSchoolYear);
  // console.log(result?.pages[0].data);

  const handleViewInfoRequirements = (item) => {
    setItemEdit(item);
    setViewRequirements(true);
  };

  const handleArchive = (item) => {
    dispatch(setIsConfirm(true));
    setId(item.students_aid);
    setData(item);
    setIsArchive(0);
  };

  const handleRestore = (item) => {
    dispatch(setIsConfirm(true));
    setId(item.students_aid);
    setData(item);
    setIsArchive(1);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.students_aid);
    setData(item);
  };

  const handleViewInfo = (item) => {
    setData(item);
    setIsViewInfo(true);
  };

  const handleEnroll = async (item) => {
    if (isOngoing === 0 || !isOngoing) {
      dispatch(setError(true));
      dispatch(setMessage("There's no enrollment yet."));
      return;
    }

    setIsEnroll(true);
    setData(item);
  };

  React.useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <SearchBar
        search={search}
        dispatch={dispatch}
        store={store}
        result={result?.pages}
        isFetching={isFetching}
        setOnSearch={setOnSearch}
        onSearch={onSearch}
      />
      <div className="main__table relative">
        {((isFetching && !isFetchingNextPage && status !== "loading") ||
          loading) && <FetchingSpinner />}
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
                  <th className="text-right pr-2">Action</th>
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

                          <td>
                            {item.students_is_active === 1 ? (
                              <div className="flex gap-2 justify-end">
                                <button
                                  className="tooltip text-base"
                                  data-tooltip="Enroll"
                                  onClick={() => handleEnroll(item)}
                                >
                                  <CiSquarePlus />
                                </button>

                                <button
                                  className="tooltip text-base"
                                  data-tooltip="Requirements"
                                  onClick={() =>
                                    handleViewInfoRequirements(item)
                                  }
                                >
                                  <LiaListAlt />
                                </button>

                                <button
                                  className="tooltip text-base"
                                  data-tooltip="Info"
                                  onClick={() => handleViewInfo(item)}
                                >
                                  <CiViewList />
                                </button>

                                <button
                                  type="button"
                                  className="tooltip"
                                  data-tooltip="Archive"
                                  onClick={() => handleArchive(item)}
                                >
                                  <BsArchive />
                                </button>
                              </div>
                            ) : (
                              <div className="flex gap-2 justify-end">
                                <button
                                  type="button"
                                  className="tooltip"
                                  data-tooltip="Restore"
                                  onClick={() => handleRestore(item)}
                                >
                                  <MdOutlineRestore />
                                </button>
                                <button
                                  type="button"
                                  className="tooltip"
                                  data-tooltip="Delete"
                                  onClick={() => handleDelete(item)}
                                >
                                  <FiTrash />
                                </button>
                              </div>
                            )}
                          </td>
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

      {viewRequirements && (
        <ModalRequirements
          setViewRequirements={setViewRequirements}
          itemEdit={itemEdit}
          schoolYear={schoolYear}
        />
      )}

      {isViewInfo && (
        <ModalEditStudent
          setIsViewInfo={setIsViewInfo}
          dataItem={dataItem}
          gradeLevel={gradeLevel}
        />
      )}

      {isEnroll && (
        <ModalReEnrolling
          mysqlApiEnroll={`/v2/dev-client-student/enroll`}
          msg={`Are you sure you want to enroll this student ?`}
          item={{
            ...dataItem,
            grade_level_order: getGradeLevelOrderByStudentId(
              gradeLevel,
              dataItem.current_students_grade_level_id
            ),
            current_students_sy_id: schoolYear?.data[0].school_year_aid,
          }}
          queryKey={"all-students"}
          setIsEnroll={setIsEnroll}
        />
      )}

      {store.isConfirm && (
        <ModalConfirm
          mysqlApiArchive={`/v2/dev-students/active/${id}`}
          msg={`Are you sure you want to ${
            isArchive ? "restore" : "archive"
          } this record?`}
          item={dataItem.student_fullname}
          queryKey={"all-students"}
          isArchive={isArchive}
        />
      )}

      {store.isDelete && (
        <ModalDelete
          mysqlApiDelete={`/v2/dev-students/${id}/${dataItem.school_year_aid}`}
          msg={"Are you sure you want to delete this record?"}
          item={dataItem.student_fullname}
          queryKey={"all-students"}
        />
      )}
    </>
  );
};

export default AllStudentList;
