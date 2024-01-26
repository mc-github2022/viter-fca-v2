import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import NoData from "@/components/partials/NoData.jsx";
import Pills from "@/components/partials/Pills.jsx";
import Table from "@/components/partials/Table.jsx";
import TableLoading from "@/components/partials/TableLoading.jsx";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";
import { BsArchive } from "react-icons/bs";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { MdOutlineRestore } from "react-icons/md";

const ClientList = () => {
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

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("", {
      header: "#",
      cell: (row) => {
        return row.row.index + 1;
      },
      sortable: false,
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
              <button
                type="button"
                className="tooltip "
                data-tooltip="Edit"
                onClick={() => handleEdit(row.row.original)}
              >
                <FiEdit2 />
              </button>
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
    </div>
  );
};

export default ClientList;
