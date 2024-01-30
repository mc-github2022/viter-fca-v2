import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import { devNavUrl } from "@/components/helpers/functions-general";
import NoData from "@/components/partials/NoData.jsx";
import Pills from "@/components/partials/Pills.jsx";
import Table from "@/components/partials/Table.jsx";
import TableLoading from "@/components/partials/TableLoading.jsx";
import ModalConfirm from "@/components/partials/modals/ModalConfirm";
import ModalDelete from "@/components/partials/modals/ModalDelete";
import {
  setIsAdd,
  setIsConfirm,
  setIsDelete,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";
import { BsArchive } from "react-icons/bs";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { MdOutlineRestore } from "react-icons/md";
import { Link } from "react-router-dom";

const ClientList = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setId] = React.useState(null);
  const [dataItem, setData] = React.useState(null);
  const [isArchive, setIsArchive] = React.useState(1);

  const [columnVisibility, setColumnVisibility] = React.useState({
    user_other_email: false,
    user_other_is_active: false,
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

  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor("", {
      header: "#",
      cell: (row) => {
        return row.row.index + 1;
      },
    }),

    columnHelper.accessor("user_other_fname", {
      header: "Name",
      cell: (row) =>
        `${row.row.original.user_other_fname} ${row.row.original.user_other_lname}`,
    }),

    columnHelper.accessor("user_other_is_active", {
      header: "Active",
      cell: (row) => {
        if (row.row.original.user_other_is_active === 1) {
          return (
            <Pills bg="bg-green-500" label="Active" color="text-green-500" />
          );
        } else {
          return (
            <Pills bg="bg-gray-200" label="Inactive" color="text-gray-300" />
          );
        }
      },
    }),

    columnHelper.accessor("user_other_email", {
      header: "Email",
    }),

    columnHelper.accessor("action", {
      header: "Action",
      cell: (row) => (
        <>
          {row.row.original.user_other_is_active === 1 ? (
            <div className="flex gap-2 justify-end">
              <Link
                to={`${devNavUrl}/system/client/information?id=${row.row.original.user_other_aid}`}
                className="text-2xl text-black"
              >
                <FiEdit2 />
              </Link>
              <button
                type="button"
                className="tooltip"
                data-tooltip="Archive"
                onClick={() => handleArchive(row.row.original)}
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
                onClick={() => handleRestore(row.row.original)}
              >
                <MdOutlineRestore />
              </button>
              <button
                type="button"
                className="tooltip"
                data-tooltip="Delete"
                onClick={() => handleDelete(row.row.original)}
              >
                <FiTrash />
              </button>
            </div>
          )}
        </>
      ),
      sortable: false,
    }),
  ];

  return (
    <div>
      <div className="main__table">
        <div className="table__wrapper mb-[80px]">
          {isFetching || isLoading ? (
            <TableLoading count={20} cols={3} />
          ) : clients?.data.length === 0 ? (
            <NoData />
          ) : (
            <Table
              columns={columns}
              data={clients.data}
              hasFilter={true}
              setColumnVisibility={setColumnVisibility}
              columnVisibility={columnVisibility}
            />
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
    </div>
  );
};

export default ClientList;
