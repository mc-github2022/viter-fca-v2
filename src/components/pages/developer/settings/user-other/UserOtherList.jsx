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

import NoData from "@/components/partials/NoData.jsx";
import ModalConfirm from "@/components/partials/modals/ModalConfirm.jsx";
import ModalDelete from "@/components/partials/modals/ModalDelete.jsx";
import ModalInvalidRequestError from "@/components/partials/modals/ModalInvalidRequestError";
import ModalReset from "@/components/partials/modals/ModalReset";
import React from "react";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { MdOutlineRestore, MdPassword } from "react-icons/md";
import { PiPasswordLight } from "react-icons/pi";
const UserOtherList = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [dataItem, setData] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [isArchive, setIsArchive] = React.useState(1);
  const [isReset, setReset] = React.useState(false);

  const {
    isLoading,
    isFetching,
    error,
    data: other,
  } = useQueryData(
    "/v2/user-other", // endpoint
    "get", // method
    "other" // key
  );

  const handleEdit = (item) => {
    dispatch(setIsSettingAdd(true));
    setItemEdit(item);
  };

  const handleArchive = (item) => {
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

  return (
    <>
      <h5 className="text-sm">List</h5>

      <div className="datalist max-w-[650px] w-full overflow-x-hidden overflow-y-auto max-h-[450px] lg:max-h-[580px] custom__scroll  poco:max-h-[640px] lg:poco:max-h-[400px]">
        {isFetching && !isLoading && <TableSpinner />}

        {!isLoading && other.success === false ? (
          <ModalInvalidRequestError />
        ) : isLoading ? (
          <TableLoading count={20} cols={3} />
        ) : other?.data.length === 0 ? (
          <NoData />
        ) : (
          !isLoading &&
          other.success === true &&
          other?.data.map((item, key) => (
            <div
              className={
                "datalist__item text-xs  flex justify-between md:grid md:grid-cols-[468px,92px] items-center lg:items-center border-b border-line py-2 first:pt-5 lg:flex-row last:border-none"
              }
              key={key}
            >
              <div
                className={`${
                  item.user_other_is_active ? "opacity-100" : "opacity-40"
                } `}
              >
                <div className="sm:grid sm:grid-cols-[180px,220px,68px]">
                  <p className="mb-1">
                    {item.user_other_fname} {item.user_other_lname}
                  </p>
                  <p className="mb-1">{item.user_other_email}</p>
                  <p className="mb-1">{item.role_name}</p>
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
                        data-tooltip="Archive"
                        onClick={() => handleArchive(item)}
                      >
                        <BsArchive />
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
          ))
        )}
      </div>

      {isReset && (
        <ModalReset
          setReset={setReset}
          mysqlApiReset={`/v2/user-other/reset`}
          msg={"Are you sure you want to reset the password of this record?"}
          item={dataItem.user_other_email}
          queryKey={"other"}
        />
      )}

      {store.isSettingConfirm && (
        <ModalConfirm
          mysqlApiArchive={`/v2/user-other/active/${id}`}
          msg={`Are you sure you want to ${
            isArchive ? "restore" : "archive"
          } this record?`}
          item={`${dataItem.user_other_fname} ${dataItem.user_other_lname}`}
          queryKey={"other"}
          isArchive={isArchive}
        />
      )}

      {store.isSettingDelete && (
        <ModalDelete
          mysqlApiDelete={`/v2/user-other/${id}`}
          msg={"Are you sure you want to delete this record?"}
          item={`${dataItem.user_other_fname} ${dataItem.user_other_lname}`}
          queryKey={"other"}
        />
      )}
    </>
  );
};

export default UserOtherList;
