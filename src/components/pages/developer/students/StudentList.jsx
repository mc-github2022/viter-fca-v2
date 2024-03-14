import NoData from "@/components/partials/NoData.jsx";
import SearchBar from "@/components/partials/SearchBar";
import TableLoading from "@/components/partials/TableLoading.jsx";
import ModalConfirm from "@/components/partials/modals/ModalConfirm";
import { setIsConfirm, setIsDelete } from "@/components/store/StoreAction";

import { queryDataInfinite } from "@/components/helpers/queryDataInfinite.jsx";
import Loadmore from "@/components/partials/Loadmore.jsx";
import ModalInvalidRequestError from "@/components/partials/modals/ModalInvalidRequestError";
import FetchingSpinner from "@/components/partials/spinners/FetchingSpinner.jsx";
import { StoreContext } from "@/components/store/StoreContext";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { FaWpforms } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import ModalRemoveFromEnrollment from "./modals/ModalRemoveFromEnrollment";
import TableSpinner from "@/components/partials/spinners/TableSpinner";

const StudentList = ({ setIsViewInfo, setData, dataItem }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setId] = React.useState(null);

  const [isArchive, setIsArchive] = React.useState(1);
  const search = React.useRef({ value: "" });
  const [page, setPage] = React.useState(1);
  const { ref, inView } = useInView();
  const [onSearch, setOnSearch] = React.useState(false);
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
    queryKey: ["students", onSearch, store.isSearch],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `/v2/dev-students/search`, // search endpoint
        `/v2/dev-students/page/${pageParam}`, // list endpoint
        store.isSearch, // search boolean
        { searchValue: search.current.value }
      ),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total) {
        return lastPage.page + lastPage.count;
      }
      return;
    },
    refetchOnWindowFocus: true,
  });

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

  React.useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  }, [inView, result?.pages[0].success]);

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
        {isFetching && !isFetchingNextPage && status !== "loading" && (
          <TableSpinner />
        )}
        <div className="table__wrapper mb-[80px] custom__scroll scroll-gutter-stable ">
          <h6>
            Count:
            <span>
              {result?.pages[0].success === true &&
                result?.pages[0].data.length}
            </span>
          </h6>
          <div className="my-2 px-2 bg-primary rounded-md min-h-[100px] overflow-x-auto custom__scroll">
            <table className="table__sm  ">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Grade Level</th>
                  <th>S.Y</th>
                  <th className="text-right pr-2">Action</th>
                </tr>
              </thead>

              <tbody>
                {(status === "loading" || result?.pages[0].count === 0) && (
                  <tr className="text-center hover:bg-transparent ">
                    <td colSpan="100%" className="p-10">
                      {status === "loading" && (
                        <TableLoading count={20} cols={3} />
                      )}
                      <NoData />
                    </td>
                  </tr>
                )}
                {result?.pages[0].success === false ? (
                  <tr className="text-center hover:bg-transparent ">
                    <td colSpan="100%" className="p-10">
                      <ModalInvalidRequestError />
                    </td>
                  </tr>
                ) : (
                  status !== "loading" &&
                  result?.pages.map((page, key) => (
                    <React.Fragment key={key}>
                      {page.data.map((item, key) => (
                        <tr key={key}>
                          <td>{counter++}.</td>
                          <td>{item.student_fullname}</td>
                          <td>{item.grade_level_name}</td>
                          <td>{item.school_year}</td>
                          <td>
                            {item.students_is_active === 1 && (
                              <div className="flex gap-2 justify-end pr-2">
                                <button
                                  className="tooltip text-base"
                                  data-tooltip="Info"
                                  onClick={() => handleViewInfo(item)}
                                >
                                  <FaWpforms className="text-[17px]" />
                                </button>
                                <button
                                  type="button"
                                  className="tooltip"
                                  data-tooltip="Delete"
                                  onClick={() => handleDelete(item)}
                                >
                                  <FiTrash className="text-[17px]" />
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
      {store.isConfirm && (
        <ModalConfirm
          mysqlApiArchive={`/v2/dev-students/active/${id}`}
          msg={`Are you sure you want to ${
            isArchive ? "restore" : "archive"
          } this record?`}
          item={dataItem.student_fullname}
          queryKey={"students"}
          isArchive={isArchive}
        />
      )}

      {store.isDelete && (
        <ModalRemoveFromEnrollment
          mysqlApiDelete={`/v2/dev-students/remove-from-enrollment/${id}/${dataItem.school_year_aid}`}
          msg={"Are you sure you want to remove this record ?"}
          item={dataItem.student_fullname}
          queryKey={"students"}
        />
      )}
    </>
  );
};

export default StudentList;
