import NoData from "@/components/partials/NoData.jsx";
import SearchBar from "@/components/partials/SearchBar";
import ServerError from "@/components/partials/ServerError";
import TableLoading from "@/components/partials/TableLoading.jsx";
import ModalConfirm from "@/components/partials/modals/ModalConfirm";
import ModalDelete from "@/components/partials/modals/ModalDelete";
import {
  setError,
  setIsConfirm,
  setIsDelete,
  setMessage,
  setSuccess,
} from "@/components/store/StoreAction";

import useQueryData from "@/components/custom-hooks/useQueryData";
import { queryData } from "@/components/helpers/queryData";
import { queryDataInfinite } from "@/components/helpers/queryDataInfinite.jsx";
import Loadmore from "@/components/partials/Loadmore.jsx";
import FetchingSpinner from "@/components/partials/spinners/FetchingSpinner.jsx";
import { StoreContext } from "@/components/store/StoreContext";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { BsArchive } from "react-icons/bs";
import { CiSquarePlus, CiViewList } from "react-icons/ci";
import { FiTrash } from "react-icons/fi";
import { MdOutlineRestore } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import ModalEditStudent from "../students/StudentEdit/ModalEditStudent";

const AllStudentList = ({ gradeLevel, isOngoing }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setId] = React.useState(null);
  const [dataItem, setData] = React.useState(null);
  const [isArchive, setIsArchive] = React.useState(1);
  const search = React.useRef({ value: "" });
  const [isViewInfo, setIsViewInfo] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const { ref, inView } = useInView();
  const [onSearch, setOnSearch] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const queryClient = useQueryClient();

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

  const { data: schoolYear } = useQueryData(
    "/v2/dev-school-year", // endpoint
    "get", // method
    "school-year" // key
  );

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
    // console.log(item);
    setLoading(true);

    if (isOngoing === 0 || !isOngoing) {
      dispatch(setError(true));
      dispatch(setMessage("There's no enrollment yet."));
      return;
    }

    const enroll = await queryData("/v2/dev-client-student/enroll", "post", {
      ...item,
      current_students_sy_id: schoolYear?.data[0].school_year_aid,
    });

    if (enroll.success) {
      queryClient.invalidateQueries({ queryKey: ["mystudent"] });
      setLoading(false);
      dispatch(setSuccess(true));
      dispatch(setMessage("Successfully enrolled."));
    }
    if (!enroll.success) {
      dispatch(setError(true));
      dispatch(setMessage(enroll.error));
      setLoading(false);
    }
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
          <div className="my-2 px-2 bg-primary rounded-md min-h-[100px] overflow-x-auto custom__scroll">
            <table className="table__sm">
              <thead>
                <tr>
                  <th>#</th>
                  {/* <th className="w-20">Status</th> */}
                  <th>Name</th>
                  <th>Grade Level</th>
                  <th>S.Y</th>
                  <th className="text-right pr-2">Action</th>
                </tr>
              </thead>

              <tbody>
                {(status === "loading" ||
                  result?.pages[0].data.length === 0) && (
                  <tr className="text-center hover:bg-transparent ">
                    <td colSpan="100%" className="p-10">
                      {status === "loading" ? (
                        <TableLoading count={20} cols={3} />
                      ) : (
                        <NoData />
                      )}
                    </td>
                  </tr>
                )}

                {error && (
                  <tr className="text-center hover:bg-transparent ">
                    <td colSpan="100%" className="p-10">
                      <ServerError />
                    </td>
                  </tr>
                )}

                {result?.pages.map((page, key) => (
                  <React.Fragment key={key}>
                    {page.data.map((item, key) => (
                      <tr key={key}>
                        <td>{counter++}.</td>
                        {/* <td>
                          <Pills
                            bg="bg-gray-200"
                            label={
                              item.students_is_active === 1
                                ? "Active"
                                : "Inactive"
                            }
                            color={
                              item.students_is_active === 1
                                ? "text-green-500"
                                : "text-gray-500"
                            }
                          />
                        </td> */}
                        <td>{item.student_fullname}</td>
                        <td>{item.grade_level_name}</td>
                        <td>{item.school_year}</td>

                        <td>
                          {item.students_is_active === 1 ? (
                            <div className="flex gap-2 justify-end">
                              {isOngoing === 1 && (
                                <button
                                  className="tooltip text-base"
                                  data-tooltip="Enroll"
                                  onClick={() => handleEnroll(item)}
                                >
                                  <CiSquarePlus />
                                </button>
                              )}

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
                ))}
              </tbody>
            </table>
            <div className="flex justify-between mt-10">
              <h6>
                Count: <span>{result?.pages[0].data.length}</span>
              </h6>
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

      {isViewInfo && (
        <ModalEditStudent
          setIsViewInfo={setIsViewInfo}
          dataItem={dataItem}
          gradeLevel={gradeLevel}
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
