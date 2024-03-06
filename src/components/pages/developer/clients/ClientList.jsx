import { devNavUrl } from "@/components/helpers/functions-general.jsx";
import { queryDataInfinite } from "@/components/helpers/queryDataInfinite";
import Loadmore from "@/components/partials/Loadmore";
import NoData from "@/components/partials/NoData.jsx";
import Pills from "@/components/partials/Pills.jsx";
import SearchBar from "@/components/partials/SearchBar";
import ServerError from "@/components/partials/ServerError";
import TableLoading from "@/components/partials/TableLoading.jsx";
import ModalConfirm from "@/components/partials/modals/ModalConfirm";
import ModalDelete from "@/components/partials/modals/ModalDelete";
import FetchingSpinner from "@/components/partials/spinners/FetchingSpinner";
import {
  setIsAdd,
  setIsConfirm,
  setIsDelete,
} from "@/components/store/StoreAction";

import { StoreContext } from "@/components/store/StoreContext";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { BsArchive } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { MdOutlineRestore } from "react-icons/md";
import { PiStudentLight } from "react-icons/pi";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const ClientList = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setId] = React.useState(null);
  const [dataItem, setData] = React.useState(null);
  const [isArchive, setIsArchive] = React.useState(1);
  const search = React.useRef({ value: "" });
  const [onSearch, setOnSearch] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const { ref, inView } = useInView();
  let counter = 1;

  let link =
    store.credentials.data.role_name.toLowerCase() === "developer"
      ? "system"
      : store.credentials.data.role_name.toLowerCase();

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
    queryKey: ["parents", onSearch, store.isSearch],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `/v2/dev-parents/search`, // search endpoint
        `/v2/dev-parents/page/${pageParam}`, // list endpoint
        store.isSearch, // search boolean
        { search: search.current.value }
      ),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total) {
        return lastPage.page + lastPage.count;
      }
      return;
    },
    refetchOnWindowFocus: false,
  });

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleArchive = (item) => {
    dispatch(setIsConfirm(true));
    setId(item.parents_aid);
    setData(item);
    setIsArchive(0);
  };

  const handleRestore = (item) => {
    dispatch(setIsConfirm(true));
    setId(item.parents_aid);
    setData(item);
    setIsArchive(1);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.parents_aid);
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
        {isFetching && !isFetchingNextPage && status !== "loading" && (
          <FetchingSpinner />
        )}
        <div className="table__wrapper mb-[80px] custom__scroll scroll-gutter-stable ">
          <h6>
            Count: <span>{result?.pages[0].data.length}</span>
          </h6>
          <div className="my-2 px-2 bg-primary rounded-md min-h-[100px] overflow-x-auto custom__scroll">
            <table className="table__sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th className="w-20">Status</th>
                  <th>Name</th>
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
                            <Pills
                              bg="bg-gray-200"
                              label={
                                item.parents_is_active === 1
                                  ? "Active"
                                  : "Inactive"
                              }
                              color={
                                item.parents_is_active === 1
                                  ? "text-green-500"
                                  : "text-gray-500"
                              }
                            />
                          </td>
                          <td>
                            {item.parents_fname} {item.parents_lname}
                          </td>
                          <td>
                            {item.parents_is_active === 1 ? (
                              <div className="table-action flex gap-2 justify-end">
                                <Link
                                  to={`${devNavUrl}/${link}/clients/students?cid=${item.parents_aid}`}
                                  className="tooltip text-base"
                                  data-tooltip="Student"
                                >
                                  <PiStudentLight />
                                </Link>

                                <Link
                                  to={`${devNavUrl}/${link}/clients/information?cid=${item.parents_aid}`}
                                  className="tooltip text-base"
                                  data-tooltip="Info"
                                >
                                  <CiViewList />
                                </Link>

                                <button
                                  type="button"
                                  className="tooltip "
                                  data-tooltip="Edit"
                                  onClick={() => handleEdit(item)}
                                >
                                  <FiEdit2 />
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

            <div className="flex justify-between mt-10">
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
          mysqlApiArchive={`/v2/dev-parents/active/${id}`}
          msg={`Are you sure you want to ${
            isArchive ? "restore" : "archive"
          } this record?`}
          item={dataItem.parents_email}
          queryKey={"parents"}
          isArchive={isArchive}
        />
      )}

      {store.isDelete && (
        <ModalDelete
          mysqlApiDelete={`/v2/dev-parents/${id}`}
          msg={"Are you sure you want to delete this record?"}
          item={dataItem.parents_email}
          queryKey={"parents"}
        />
      )}
    </>
  );
};

export default ClientList;
