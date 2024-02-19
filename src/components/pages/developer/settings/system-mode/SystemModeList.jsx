import useQueryData from "@/components/custom-hooks/useQueryData";
import TableLoading from "@/components/partials/TableLoading";
import TableSpinner from "@/components/partials/spinners/TableSpinner";
import {
  setIsSettingAdd,
  setSettingIsConfirm,
  setSettingIsDelete,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";

import NoData from "@/components/partials/NoData.jsx";
import ModalConfirm from "@/components/partials/modals/ModalConfirm.jsx";
import ModalDelete from "@/components/partials/modals/ModalDelete.jsx";
import ModalInvalidRequestError from "@/components/partials/modals/ModalInvalidRequestError.jsx";
import React from "react";
import { FiTrash } from "react-icons/fi";
import ModalTurnOnAndOff from "./ModalTurnOnAndOff";
const SystemModeList = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [dataItem, setData] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [isArchive, setIsArchive] = React.useState(1);

  const {
    isLoading,
    isFetching,
    error,
    data: system_mode,
  } = useQueryData(
    "/v2/dev-system-mode", // endpoint
    "get", // method
    "settings_system_mode" // key
  );

  const handleEdit = (item) => {
    dispatch(setIsSettingAdd(true));
    setItemEdit(item);
  };

  const handleArchive = (item) => {
    dispatch(setSettingIsConfirm(true));
    setId(item.system_mode_aid);
    setData(item);
    setIsArchive(0);
    console.log(isArchive);
  };

  const handleRestore = (item) => {
    dispatch(setSettingIsConfirm(true));
    setId(item.system_mode_aid);
    setData(item);
    setIsArchive(1);
    console.log(isArchive);
  };

  const handleDelete = (item) => {
    dispatch(setSettingIsDelete(true));
    setId(item.system_mode_aid);
    setData(item);
  };

  return (
    <>
      <h5 className="text-sm">List</h5>

      <div className="datalist max-w-[650px] w-full overflow-x-hidden overflow-y-auto max-h-[450px] lg:max-h-[580px] custom__scroll  poco:max-h-[640px] lg:poco:max-h-[400px]">
        {isFetching && !isLoading && <TableSpinner />}

        {!isLoading && system_mode.success === false ? (
          <ModalInvalidRequestError />
        ) : isLoading ? (
          <TableLoading count={20} cols={3} />
        ) : system_mode?.data.length === 0 ? (
          <NoData />
        ) : (
          !isLoading &&
          system_mode.success === true &&
          system_mode?.data.map((item, key) => (
            <div
              className={
                "datalist__item text-xs  flex justify-between lg:items-center border-b border-line py-2 first:pt-5 lg:flex-row last:border-none "
              }
              key={key}
            >
              <div
                className={`grow text-left ${
                  item.system_mode_is_on ? "opacity-100" : "opacity-40"
                } `}
              >
                <div className="flex flex-col lg:flex-row gap-1 w-[80%] justify-between">
                  <p className="mb-1">{item.system_mode_name}</p>
                  <p className="mb-1">
                    {item.system_mode_is_on === 1 ? "ON" : "OFF"}
                  </p>
                </div>
              </div>

              <ul className="datalist__action flex items-center gap-2 pr-3 ">
                {item.system_mode_is_on === 1 ? (
                  <>
                    {/* <li>
                      <button
                        className="tooltip"
                        data-tooltip="Archive"
                        onClick={() => handleArchive(item)}
                      >
                        <BsArchive />
                      </button>
                    </li> */}
                    <li
                      className="tooltip hover:!bg-transparent mr-8"
                      data-tooltip="Turn OFF"
                      onClick={() => handleArchive(item)}
                    >
                      <span className="bg-green-50 border border-accent rounded-full text-[5px] px-2 absolute cursor-pointer">
                        <span className="bg-accent p-1 rounded-full relative right-[0.44rem] text-white">
                          ON
                        </span>
                      </span>
                    </li>
                  </>
                ) : (
                  <>
                    {/* <li className="">
                      <button
                        className="tooltip"
                        data-tooltip="Restore"
                        onClick={() => handleRestore(item)}
                      >
                        <MdOutlineRestore className="text-base" />
                      </button>
                    </li> */}
                    <li
                      className="tooltip hover:!bg-transparent"
                      data-tooltip="Turn ON"
                      onClick={() => handleRestore(item)}
                    >
                      <span className="bg-gray-50 border border-gray-200 rounded-full text-[5px] px-2 absolute cursor-pointer">
                        <span className="bg-gray-200 p-1 rounded-full relative left-[0.44rem]">
                          OFF
                        </span>
                      </span>
                    </li>

                    <li>
                      <button
                        className="tooltip "
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
        <ModalTurnOnAndOff
          mysqlApiArchive={`/v2/dev-system-mode/active/${id}`}
          msg={`Are you sure you want to ${
            isArchive ? "turn on" : "turn off"
          } "${dataItem.system_mode_name} Mode"?`}
          queryKey={"settings_system_mode"}
          isArchive={isArchive}
        />
      )}

      {store.isSettingDelete && (
        <ModalDelete
          mysqlApiDelete={`/v2/dev-system-mode/${id}`}
          msg={"Are you sure you want to delete this record?"}
          item={dataItem.system_mode_name}
          queryKey={"settings_system_mode"}
        />
      )}
    </>
  );
};

export default SystemModeList;
