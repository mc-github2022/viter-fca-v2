import useQueryData from "@/components/custom-hooks/useQueryData";
import NoData from "@/components/partials/NoData";
import Pills from "@/components/partials/Pills";
import RecordCount from "@/components/partials/RecordCount";
import ServerError from "@/components/partials/ServerError";
import TableLoading from "@/components/partials/TableLoading";
import ModalConfirm from "@/components/partials/modals/ModalConfirm.jsx";
import TableSpinner from "@/components/partials/spinners/TableSpinner";
import { StoreContext } from "@/components/store/StoreContext";
import React, { Fragment } from "react";
import { FiArchive, FiEdit3 } from "react-icons/fi";
import { MdOutlinePersonOff, MdRestore } from "react-icons/md";
import { PiKey } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  setIsAdd,
  setIsConfirm,
  setIsRestore,
  setQuickEditID,
} from "../../../../store/StoreAction.jsx";
import {
  default as QuickEditDepartment,
  default as QuickEditNotification,
} from "./QuickEditNotification.jsx";
import { getDepartmentCountRecord } from "./functions-notification.jsx";

const NotificationTable = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [dataItem, setData] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [isDel, setDel] = React.useState(false);
  let counter = 1;

  const {
    isLoading,
    isFetching,
    error,
    data: notification,
  } = useQueryData(
    "/v2/dev-notification", // endpoint
    "get", // method
    "settings-department" // key
  );

  const handleArchive = (item) => {
    dispatch(setIsConfirm(true));
    setId(item.notification_aid);
    setData(item);
    setDel(null);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setId(item.notification_aid);
    setData(item);
    setDel(null);
  };

  const handleDelete = (item) => {
    dispatch(setIsRestore(true));
    setId(item.notification_aid);
    setData(item);
    setDel(true);
  };

  const handleQuickEdit = (item) => {
    dispatch(setQuickEditID(item.notification_aid));
    setId(item.notification_aid);
    setData(item);
  };

  return (
    <>
      <div className="table__wrapper relative rounded-md shadow-md overflow-x-auto">
        {isFetching && !isLoading && <TableSpinner />}

        <RecordCount
          record={notification?.count}
          status={getDepartmentCountRecord(notification)}
        />
        <table>
          <thead>
            <tr className="bg-[#e5e7eb]">
              <th>#</th>
              <th>Full Name</th>
              <th>Department</th>
              <th>Email</th>
              <th className="action"></th>
            </tr>
          </thead>
          <tbody>
            {(isLoading || notification?.data.length === 0) && (
              <tr className="text-center ">
                <td colSpan="100%" className="p-2 md:p-10">
                  {isLoading ? (
                    <TableLoading count={20} cols={3} />
                  ) : (
                    <NoData />
                  )}
                </td>
              </tr>
            )}

            {error && (
              <tr className="text-center ">
                <td colSpan="100%" className="p-10">
                  <ServerError />
                </td>
              </tr>
            )}
            {notification?.data.map((item, key) => {
              return (
                <Fragment key={key}>
                  <tr>
                    <td>{counter++}.</td>
                    <td>{item.notification_name}</td>
                    <td>{item.department_name}</td>
                    <td>{item.notification_email}</td>
                    <td
                      className="table__action top-4 right-5 "
                      data-ellipsis=". . ."
                    >
                      <ul className="flex items-center justify-end gap-2 mr-2">
                        {item.department_active === 1 ? (
                          <>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Edit"
                                onClick={() => handleQuickEdit(item)}
                              >
                                <FiEdit3 />
                              </button>
                            </li>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Archive"
                                onClick={() => handleArchive(item)}
                              >
                                <FiArchive />
                              </button>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Delete"
                                onClick={() => handleDelete(item)}
                              >
                                <RiDeleteBinLine />
                              </button>
                            </li>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Restore"
                                onClick={() => handleRestore(item)}
                              >
                                <MdRestore />
                              </button>
                            </li>
                          </>
                        )}
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={4} className="p-0 w-full">
                      {dataItem !== null &&
                        item.department_aid === store.quickEditID && (
                          <QuickEditNotification
                            dataItem={dataItem}
                            setData={setData}
                            endpoint={`/v2/dev-department/${dataItem.department_aid}`}
                            queryKey="settings-department"
                            id={id}
                          />
                        )}
                    </td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      {store.isConfirm && (
        <ModalConfirm
          mysqlApiArchive={`/v2/dev-department/active/${id}`}
          msg={"Are you sure you want to archive this department?"}
          item={dataItem.department_name}
          queryKey={"settings-department"}
        />
      )}

      {/* {store.isRestore && (
        <ModalDeleteAndRestore
          id={id}
          isDel={isDel}
          mysqlApiDelete={`/v2/dev-department/${id}`}
          mysqlApiRestore={`/v2/dev-department/active/${id}`}
          msg={
            isDel
              ? "Are you sure you want to delete this department?"
              : "Are you sure you want to restore this department?"
          }
          item={dataItem.department_name}
          queryKey={"settings-department"}
        />
      )} */}
    </>
  );
};

export default NotificationTable;
