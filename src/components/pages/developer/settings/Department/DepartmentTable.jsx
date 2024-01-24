import useQueryData from "@/components/custom-hooks/useQueryData";
import NoData from "@/components/partials/NoData";
import Pills from "@/components/partials/Pills";
import RecordCount from "@/components/partials/RecordCount";
import ServerError from "@/components/partials/ServerError";
import TableLoading from "@/components/partials/TableLoading";
import ModalConfirm from "@/components/partials/modals/ModalConfirm.jsx";
import ModalDeleteAndRestore from "@/components/partials/modals/ModalDeleteAndRestore.jsx";
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
import QuickEditDepartment from "./QuickEditDepartment.jsx";
import { getDepartmentCountRecord } from "./functions-department";

const DepartmentTable = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [dataItem, setData] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [isDel, setDel] = React.useState(false);
  let counter = 1;

  const {
    isLoading,
    isFetching,
    error,
    data: department,
  } = useQueryData(
    "/v2/dev-department", // endpoint
    "get", // method
    "settings-department" // key
  );

  const handleArchive = (item) => {
    dispatch(setIsConfirm(true));
    setId(item.department_aid);
    setData(item);
    setDel(null);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setId(item.department_aid);
    setData(item);
    setDel(null);
  };

  const handleDelete = (item) => {
    dispatch(setIsRestore(true));
    setId(item.department_aid);
    setData(item);
    setDel(true);
  };

  const handleQuickEdit = (item) => {
    dispatch(setQuickEditID(item.department_aid));
    setId(item.department_aid);
    setData(item);
  };

  return (
    <>
      <div className="table__wrapper relative rounded-md shadow-md overflow-x-auto">
        {isFetching && !isLoading && <TableSpinner />}

        <RecordCount
          record={department?.count}
          status={getDepartmentCountRecord(department)}
        />
        <table className="table__sm">
          <thead>
            <tr className="bg-[#e5e7eb]">
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              {/* <th>Satus</th> */}
              <th className="action"></th>
            </tr>
          </thead>
          <tbody>
            {(isLoading || department?.data.length === 0) && (
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
            {department?.data.map((item, key) => {
              return (
                <Fragment key={key}>
                  <tr>
                    <td>{counter++}.</td>
                    <td>{item.department_name}</td>
                    <td>{item.department_description}</td>
                    {/* <td>
                      {item.department_active === 1 ? (
                        <Pills label="Active" textColor="text-success" />
                      ) : (
                        <Pills label="Inactive" textColor="text-archive" />
                      )}
                    </td> */}

                    <td
                      className="table__action top-3 right-5 "
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
                            {/* <li>
                              <button
                                className="tooltip"
                                data-tooltip="Archive"
                                onClick={() => handleArchive(item)}
                              >
                                <FiArchive />
                              </button>
                            </li> */}
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Delete"
                                onClick={() => handleDelete(item)}
                              >
                                <RiDeleteBinLine />
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
                          <QuickEditDepartment
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

      {store.isRestore && (
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
      )}
    </>
  );
};

export default DepartmentTable;
