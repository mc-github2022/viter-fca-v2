import useQueryData from "@/components/custom-hooks/useQueryData";
import TableLoading from "@/components/partials/TableLoading";
import TableSpinner from "@/components/partials/spinners/TableSpinner";
import {
  setIsAdd,
  setIsConfirm,
  setIsDelete,
  setIsSettingAdd,
  setSettingIsConfirm,
  setSettingIsDelete,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { BsArchive } from "react-icons/bs";

import { queryDataInfinite } from "@/components/helpers/queryDataInfinite";
import Loadmore from "@/components/partials/Loadmore";
import NoData from "@/components/partials/NoData.jsx";
import SearchBar from "@/components/partials/SearchBar";
import ModalConfirm from "@/components/partials/modals/ModalConfirm.jsx";
import ModalDelete from "@/components/partials/modals/ModalDelete.jsx";
import ModalInvalidRequestError from "@/components/partials/modals/ModalInvalidRequestError";
import ModalReset from "@/components/partials/modals/ModalReset";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { MdOutlineRestore, MdPassword } from "react-icons/md";
import { PiPasswordLight } from "react-icons/pi";
import { TbUserOff } from "react-icons/tb";
import { useInView } from "react-intersection-observer";
import ModalSuspend from "../ModalSuspend";
const UserOtherParentList = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [dataItem, setData] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [isArchive, setIsArchive] = React.useState(1);
  const [isReset, setReset] = React.useState(false);

  const search = React.useRef({ value: "" });
  const [page, setPage] = React.useState(1);
  const { ref, inView } = useInView();
  const [onSearch, setOnSearch] = React.useState(false);

  // const {
  //   isLoading,
  //   isFetching,
  //   error,
  //   data: other,
  // } = useQueryData(
  //   "/v2/user-other", // endpoint
  //   "get", // method
  //   "other" // key
  //   );

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
    queryKey: ["other-parent", onSearch, store.isSearch],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `/v2/user-other/search`, // search endpoint
        `/v2/user-other/page/${pageParam}`, // list endpoint
        store.isSearch, // search boolean
        { searchValue: search.current.value, role_is_parent: 1 },
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

  const handleEdit = (item) => {
    dispatch(setIsSettingAdd(true));
    setItemEdit(item);
  };

  const handleSuspend = (item) => {
    dispatch(setSettingIsConfirm(true));
    setId(item.user_other_aid);
    setData(item);
    setIsArchive(0);
  };

  const handleRestore = (item) => {
    dispatch(setSettingIsConfirm(true));
    setId(item.user_other_aid);
    setData(item);
    setIsArchive(1);
  };

  const handleDelete = (item) => {
    dispatch(setSettingIsDelete(true));
    setId(item.user_other_aid);
    setData(item);
  };

  const handleReset = (item) => {
    setId(item.user_other_aid);
    setReset(true);
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
      <div className="w-1/2">
        <SearchBar
          search={search}
          dispatch={dispatch}
          store={store}
          result={result?.pages}
          isFetching={isFetching}
          setOnSearch={setOnSearch}
          onSearch={onSearch}
        />
      </div>
      <h5 className="text-sm">List</h5>

      <div className="datalist custom__scroll">
        {isFetching && !isFetchingNextPage && status !== "loading" && (
          <TableSpinner />
        )}

        {result?.pages[0].success === false ? (
          <ModalInvalidRequestError />
        ) : status === "loading" ? (
          <TableLoading count={20} cols={3} />
        ) : result?.pages[0].count === 0 ? (
          <NoData />
        ) : (
          status !== "loading" &&
          result?.pages[0].success === true &&
          result?.pages.map((page, key) => (
            <React.Fragment key={key}>
              {page.data.map((item, key) => (
                <div
                  className={
                    "datalist__item text-xs flex justify-between  md:grid md:grid-cols-[468px,92px] items-center lg:items-center border-b border-line py-2 first:pt-5 lg:flex-row last:border-none"
                  }
                  key={key}
                >
                  <div
                    className={`${
                      item.user_other_is_active ? "opacity-100" : "opacity-40"
                    } `}
                  >
                    <div className="sm:grid sm:grid-cols-[180px,280px,68px]">
                      <p className="mb-1 truncate">
                        {item.user_other_fname} {item.user_other_lname}
                      </p>
                      <p className="mb-1 truncate">{item.user_other_email}</p>
                      <p className="mb-1 truncate">{item.role_name}</p>
                    </div>
                  </div>

                  <ul className="datalist__action flex items-center gap-1 pr-3 ">
                    {item.user_other_is_active === 1 ? (
                      <>
                        <li className=" ">
                          <button
                            className="tooltip"
                            data-tooltip="Edit"
                            onClick={() => handleEdit(item)}
                          >
                            <FiEdit2 />
                          </button>
                        </li>
                        <li>
                          <button
                            className="tooltip"
                            data-tooltip="Reset password"
                            onClick={() => handleReset(item)}
                          >
                            <PiPasswordLight />
                          </button>
                        </li>
                        <li>
                          <button
                            className="tooltip"
                            data-tooltip="Suspend"
                            onClick={() => handleSuspend(item)}
                          >
                            <TbUserOff />
                          </button>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className=" ">
                          <button
                            className="tooltip"
                            data-tooltip="Restore"
                            onClick={() => handleRestore(item)}
                          >
                            <MdOutlineRestore className="text-base" />
                          </button>
                        </li>
                        <li>
                          <button
                            className="tooltip"
                            data-tooltip="Delete"
                            onClick={() => handleDelete(item)}
                          >
                            <FiTrash />
                          </button>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              ))}
            </React.Fragment>
          ))
        )}
      </div>

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

      {isReset && (
        <ModalReset
          setReset={setReset}
          mysqlApiReset={`/v2/user-other/reset`}
          msg={"Are you sure you want to reset the password of this record?"}
          item={dataItem.user_other_email}
          queryKey={"other-parent"}
        />
      )}

      {store.isSettingConfirm && (
        <ModalSuspend
          mysqlApiArchive={`/v2/user-other/active/${id}`}
          msg={`Are you sure you want to ${
            isArchive ? "restore" : "suspend"
          } this record?`}
          item={dataItem.user_other_email}
          queryKey={"other-parent"}
          isArchive={isArchive}
        />
      )}

      {store.isSettingDelete && (
        <ModalDelete
          mysqlApiDelete={`/v2/user-other/${id}`}
          msg={"Are you sure you want to delete this record?"}
          item={`${dataItem.user_other_fname} ${dataItem.user_other_lname}`}
          queryKey={"other-parent"}
        />
      )}
    </>
  );
};

export default UserOtherParentList;
