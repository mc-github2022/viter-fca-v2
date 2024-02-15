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
import Table from "@/components/partials/Table.jsx";
import ModalConfirm from "@/components/partials/modals/ModalConfirm.jsx";
import ModalDelete from "@/components/partials/modals/ModalDelete.jsx";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";
import { FaEdit, FaHistory, FaTrash } from "react-icons/fa";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { MdArchive, MdOutlineRestore } from "react-icons/md";
const DepartmentList = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [dataItem, setData] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [isArchive, setIsArchive] = React.useState(1);

  const {
    isLoading,
    isFetching,
    error,
    data: department,
  } = useQueryData(
    "/v2/dev-department", // endpoint
    "get", // method
    "department" // key
  );

  const handleEdit = (item) => {
    dispatch(setIsSettingAdd(true));
    setItemEdit(item);
  };

  const handleArchive = (item) => {
    dispatch(setSettingIsConfirm(true));
    setId(item.department_aid);
    setData(item);
    setIsArchive(0);
  };

  const handleRestore = (item) => {
    dispatch(setSettingIsConfirm(true));
    setId(item.department_aid);
    setData(item);
    setIsArchive(1);
  };

  const handleDelete = (item) => {
    dispatch(setSettingIsDelete(true));
    setId(item.department_aid);
    setData(item);
  };

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("", {
      header: "#",
      cell: (row) => {
        return row.row.index + 1;
      },
    }),

    columnHelper.accessor("department_name", {
      header: "Title",
    }),

    columnHelper.accessor("action", {
      header: "Action",
      cell: (row) => (
        <>
          {row.row.original.department_active === 1 ? (
            <div className="flex gap-2 justify-end">
              <button
                type="button"
                className="tooltip"
                data-tooltip="Edit"
                onClick={() => handleEdit(row.row.original)}
              >
                <FaEdit />
              </button>
              <button
                type="button"
                className="tooltip"
                data-tooltip="Archive"
                onClick={() => handleArchive(row.row.original)}
              >
                <MdArchive />
              </button>
            </div>
          ) : (
            <div className="flex gap-2 justify-end">
              <button
                type="button"
                className="tooltip"
                data-tooltip="Restore"
                onClick={() => handleRestore(row.row.original)}
              >
                <FaHistory />
              </button>
              <button
                type="button"
                className="tooltip"
                data-tooltip="Delete"
                onClick={() => handleDelete(row.row.original)}
              >
                <FaTrash />
              </button>
            </div>
          )}
        </>
      ),
    }),
  ];

  return (
    <>
      <div className="datalist max-w-[650px] w-full overflow-x-hidden overflow-y-auto max-h-[450px] lg:max-h-[580px] custom__scroll  poco:max-h-[640px] lg:poco:max-h-[400px]">
        {isFetching || isLoading ? (
          <TableLoading count={20} cols={3} />
        ) : department?.data.length === 0 ? (
          <NoData />
        ) : (
          <Table columns={columns} data={department.data} />
        )}
      </div>

      {store.isSettingConfirm && (
        <ModalConfirm
          mysqlApiArchive={`/v2/dev-department/active/${id}`}
          msg={`Are you sure you want to ${
            isArchive ? "restore" : "archive"
          } this record?`}
          item={dataItem.department_name}
          queryKey={"department"}
          isArchive={isArchive}
        />
      )}

      {store.isSettingDelete && (
        <ModalDelete
          mysqlApiDelete={`/v2/dev-department/${id}`}
          msg={"Are you sure you want to delete this record?"}
          item={dataItem.department_name}
          queryKey={"department"}
        />
      )}
    </>
  );
};

export default DepartmentList;
