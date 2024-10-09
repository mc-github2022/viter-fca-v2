import React from "react";

import useQueryData from "@/components/custom-hooks/useQueryData";
import NoData from "@/components/partials/NoData";
import TableLoading from "@/components/partials/TableLoading";
import ModalConfirm from "@/components/partials/modals/ModalConfirm";
import ModalDelete from "@/components/partials/modals/ModalDelete";
import ModalInvalidRequestError from "@/components/partials/modals/ModalInvalidRequestError";
import TableSpinner from "@/components/partials/spinners/TableSpinner";
import {
  setIsSettingAdd,
  setSettingIsConfirm,
  setSettingIsDelete,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { BsArchive } from "react-icons/bs";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { MdOutlineRestore } from "react-icons/md";

const BaseRateList = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [dataItem, setData] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [isArchive, setIsArchive] = React.useState(1);

  const {
    isLoading,
    isFetching,
    error,
    data: baseRate,
  } = useQueryData(
    "/v2/dev-settings-base-rate", // endpoint
    "get", // method
    "base-rate" // key
  );

  const handleEdit = (item) => {
    dispatch(setIsSettingAdd(true));
    setItemEdit(item);
  };

  const handleArchive = (item) => {
    dispatch(setSettingIsConfirm(true));
    setId(item.settings_base_rate_aid);
    setData(item);
    setIsArchive(0);
  };

  const handleRestore = (item) => {
    dispatch(setSettingIsConfirm(true));
    setId(item.settings_base_rate_aid);
    setData(item);
    setIsArchive(1);
  };

  const handleDelete = (item) => {
    dispatch(setSettingIsDelete(true));
    setId(item.settings_base_rate_aid);
    setData(item);
  };
  return (
    <>
      <h5 className="text-sm">Base Rate List</h5>

      <div className="datalist custom__scroll">
        {isFetching && !isLoading && <TableSpinner />}

        {(!isLoading && baseRate.success === false) || error ? (
          <ModalInvalidRequestError />
        ) : isLoading ? (
          <TableLoading count={20} cols={3} />
        ) : baseRate?.data.length === 0 ? (
          <NoData />
        ) : (
          !isLoading &&
          baseRate.success === true &&
          baseRate?.data.map((item, key) => (
            <div
              className={
                "datalist__item max-w-[650px] text-xs flex justify-between lg:items-center border-b border-line py-2 first:pt-5 lg:flex-row last:border-none"
              }
              key={key}
            >
              <div
                className={`${
                  item.settings_base_rate_is_active
                    ? "opacity-100"
                    : "opacity-40"
                } `}
              >
                <p className="mb-1">{item.settings_base_rate_name}</p>
              </div>

              <ul className="datalist__action flex items-center gap-1 pr-3 ">
                {item.settings_base_rate_is_active === 1 ? (
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

      {store.isSettingConfirm && (
        <ModalConfirm
          mysqlApiArchive={`/v2/dev-settings-base-rate/active/${id}`}
          msg={`Are you sure you want to ${
            isArchive ? "restore" : "archive"
          } this record?`}
          item={dataItem.settings_base_rate_name}
          queryKey={"base-rate"}
          isArchive={isArchive}
        />
      )}

      {store.isSettingDelete && (
        <ModalDelete
          mysqlApiDelete={`/v2/dev-settings-base-rate/${id}`}
          msg={"Are you sure you want to delete this record?"}
          item={dataItem.settings_base_rate_name}
          queryKey={"base-rate"}
        />
      )}
    </>
  );
};

export default BaseRateList;
