import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import { devNavUrl } from "@/components/helpers/functions-general.jsx";
import NoData from "@/components/partials/NoData.jsx";
import Pills from "@/components/partials/Pills.jsx";
import Table from "@/components/partials/Table.jsx";
import TableLoading from "@/components/partials/TableLoading.jsx";
import ModalConfirm from "@/components/partials/modals/ModalConfirm";
import ModalDelete from "@/components/partials/modals/ModalDelete";
import ModalReset from "@/components/partials/modals/ModalReset.jsx";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner.jsx";
import {
  setIsAdd,
  setIsConfirm,
  setIsDelete,
} from "@/components/store/StoreAction";

import { StoreContext } from "@/components/store/StoreContext";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";
import { BsArchive } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { MdOutlineRestore } from "react-icons/md";
import { PiPasswordLight, PiStudentLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const ClientList = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setId] = React.useState(null);
  const [dataItem, setData] = React.useState(null);
  const [isArchive, setIsArchive] = React.useState(1);
  const [reset, setReset] = React.useState(false);

  const [columnVisibility, setColumnVisibility] = React.useState({
    user_other_email: true,
    user_other_is_active: true,
  });

  const {
    isLoading,
    isFetching,
    error,
    data: clients,
  } = useQueryData(
    "/v2/user-other", // endpoint
    "get", // method
    "clients" // key
  );

  const handleEdit = (item) => {
    setItemEdit(item);
    dispatch(setIsAdd(true));
    setId(item.user_other_aid);
  };

  const handleArchive = (item) => {
    dispatch(setIsConfirm(true));
    setId(item.user_other_aid);
    setData(item);
    setIsArchive(0);
  };

  const handleRestore = (item) => {
    dispatch(setIsConfirm(true));
    setId(item.user_other_aid);
    setData(item);
    setIsArchive(1);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.user_other_aid);
    setData(item);
  };

  const handleResetPassword = (item) => {
    setReset(true);
    setData(item);
  };

  return (
    <>
      <div className="main__table">
        <div className="table__wrapper mb-[80px] custom__scroll scroll-gutter-stable ">
          {isFetching || isLoading ? (
            <TableLoading count={20} cols={3} />
          ) : clients?.data.length === 0 ? (
            <NoData />
          ) : (
            <div className="my-2 px-2 bg-primary rounded-md min-h-[100px] overflow-x-auto custom__scroll">
              <table className="table__sm">
                <thead>
                  <th>#</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th className="text-right pr-2">Action</th>
                </thead>

                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Ramon Plaza</td>
                    <td>
                      <Pills
                        bg="bg-green-500"
                        label="Active"
                        color="text-green-500"
                      />
                    </td>
                    <td>
                      {1 ? (
                        <div className="flex gap-2 justify-end">
                          <Link
                            to={`${devNavUrl}/system/clients/students?cid=${1}`}
                            className="tooltip text-base"
                            data-tooltip="Student"
                          >
                            <PiStudentLight />
                          </Link>

                          <Link
                            to={`${devNavUrl}/system/clients/information?cid=${1}`}
                            className="tooltip text-base"
                            data-tooltip="Info"
                          >
                            <CiViewList />
                          </Link>

                          <button
                            type="button"
                            className="tooltip "
                            data-tooltip="Edit"
                            // onClick={() => handleEdit(row.row.original)}
                          >
                            <FiEdit2 />
                          </button>

                          <button
                            type="button"
                            className="tooltip text-lg"
                            data-tooltip="Reset"
                            // onClick={() =>
                            //   handleResetPassword(row.row.original)
                            // }
                          >
                            <PiPasswordLight />
                          </button>
                          <button
                            type="button"
                            className="tooltip"
                            data-tooltip="Archive"
                            // onClick={() => handleArchive(row.row.original)}
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
                            // onClick={() => handleRestore(row.row.original)}
                          >
                            <MdOutlineRestore />
                          </button>
                          <button
                            type="button"
                            className="tooltip"
                            data-tooltip="Delete"
                            // onClick={() => handleDelete(row.row.original)}
                          >
                            <FiTrash />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>Ramon Plaza</td>
                    <td>
                      <Pills
                        bg="bg-green-500"
                        label="Active"
                        color="text-green-500"
                      />
                    </td>
                    <td>
                      {1 ? (
                        <div className="flex gap-2 justify-end">
                          <Link
                            to={`${devNavUrl}/system/clients/students?cid=${1}`}
                            className="tooltip text-base"
                            data-tooltip="Student"
                          >
                            <PiStudentLight />
                          </Link>

                          <Link
                            to={`${devNavUrl}/system/clients/information?cid=${1}`}
                            className="tooltip text-base"
                            data-tooltip="Info"
                          >
                            <CiViewList />
                          </Link>

                          <button
                            type="button"
                            className="tooltip "
                            data-tooltip="Edit"
                            // onClick={() => handleEdit(row.row.original)}
                          >
                            <FiEdit2 />
                          </button>

                          <button
                            type="button"
                            className="tooltip text-lg"
                            data-tooltip="Reset"
                            // onClick={() =>
                            //   handleResetPassword(row.row.original)
                            // }
                          >
                            <PiPasswordLight />
                          </button>
                          <button
                            type="button"
                            className="tooltip"
                            data-tooltip="Archive"
                            // onClick={() => handleArchive(row.row.original)}
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
                            // onClick={() => handleRestore(row.row.original)}
                          >
                            <MdOutlineRestore />
                          </button>
                          <button
                            type="button"
                            className="tooltip"
                            data-tooltip="Delete"
                            // onClick={() => handleDelete(row.row.original)}
                          >
                            <FiTrash />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>Ramon Plaza</td>
                    <td>
                      <Pills
                        bg="bg-green-500"
                        label="Active"
                        color="text-green-500"
                      />
                    </td>
                    <td>
                      {1 ? (
                        <div className="flex gap-2 justify-end">
                          <Link
                            to={`${devNavUrl}/system/clients/students?cid=${1}`}
                            className="tooltip text-base"
                            data-tooltip="Student"
                          >
                            <PiStudentLight />
                          </Link>

                          <Link
                            to={`${devNavUrl}/system/clients/information?cid=${1}`}
                            className="tooltip text-base"
                            data-tooltip="Info"
                          >
                            <CiViewList />
                          </Link>

                          <button
                            type="button"
                            className="tooltip "
                            data-tooltip="Edit"
                            // onClick={() => handleEdit(row.row.original)}
                          >
                            <FiEdit2 />
                          </button>

                          <button
                            type="button"
                            className="tooltip text-lg"
                            data-tooltip="Reset"
                            // onClick={() =>
                            //   handleResetPassword(row.row.original)
                            // }
                          >
                            <PiPasswordLight />
                          </button>
                          <button
                            type="button"
                            className="tooltip"
                            data-tooltip="Archive"
                            // onClick={() => handleArchive(row.row.original)}
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
                            // onClick={() => handleRestore(row.row.original)}
                          >
                            <MdOutlineRestore />
                          </button>
                          <button
                            type="button"
                            className="tooltip"
                            data-tooltip="Delete"
                            // onClick={() => handleDelete(row.row.original)}
                          >
                            <FiTrash />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="flex justify-between mt-10">
                <h6>
                  Count: <span>2</span>
                </h6>
                <button className="btn text-xs hover:underline">
                  Load More <ButtonSpinner color={"!stroke-[#123909]"} />
                </button>
                <span></span>
              </div>
            </div>
          )}
        </div>
      </div>

      {store.isConfirm && (
        <ModalConfirm
          mysqlApiArchive={`/v2/user-other/active/${id}`}
          msg={`Are you sure you want to ${
            isArchive ? "restore" : "archive"
          } this record?`}
          item={dataItem.user_other_email}
          queryKey={"clients"}
          isArchive={isArchive}
        />
      )}

      {store.isDelete && (
        <ModalDelete
          mysqlApiDelete={`/v2/user-other/${id}`}
          msg={"Are you sure you want to delete this record?"}
          item={dataItem.user_other_email}
          queryKey={"clients"}
        />
      )}

      {reset && (
        <ModalReset
          setReset={setReset}
          mysqlApiReset={`/v2/user-other/reset`}
          msg={"Are you sure you want to reset this client password?"}
          item={dataItem.user_other_email}
          queryKey="clients"
        />
      )}
    </>
  );
};

export default ClientList;
