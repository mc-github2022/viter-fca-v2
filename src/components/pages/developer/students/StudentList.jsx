import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import { DebouncedInputSearch } from "@/components/helpers/function-table.jsx";
import NoData from "@/components/partials/NoData.jsx";
import Pills from "@/components/partials/Pills.jsx";
import SearchBar from "@/components/partials/SearchBar";
import Table from "@/components/partials/Table.jsx";
import TableLoading from "@/components/partials/TableLoading.jsx";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";
import { BsArchive, BsThreeDotsVertical } from "react-icons/bs";
import { FaEdit, FaFilter, FaHistory, FaSearch, FaTrash } from "react-icons/fa";
import { FiArchive, FiEdit2, FiEdit3, FiTrash } from "react-icons/fi";
import { MdArchive, MdOutlineRestore, MdRestore } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

const StudentList = () => {
  const {
    isLoading,
    isFetching,
    error,
    data: student,
  } = useQueryData(
    "/v2/student", // endpoint
    "get", // method
    "student" // key
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

    columnHelper.accessor("student_name", {
      header: "Name",
      cell: (row) =>
        `${row.row.original.student_name} ${row.row.original.student_gender}`,
    }),

    columnHelper.accessor("student_active", {
      header: "Active",
      cell: (row) => {
        if (row.row.original.student_active === 1) {
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

    columnHelper.accessor("student_gender", {
      header: "Gender",
    }),

    columnHelper.accessor("student_grade_level", {
      header: "Grade Level",
    }),

    columnHelper.accessor("action", {
      header: "Action",
      cell: (row) => (
        <>
          {row.row.original.student_active === 1 ? (
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
    <>
      <div className="main__table">
        <div className="table__wrapper mb-[80px]">
          {isFetching || isLoading ? (
            <TableLoading count={20} cols={3} />
          ) : student?.data.length === 0 ? (
            <NoData />
          ) : (
            <Table columns={columns} data={student.data} hasFilter={true} />
          )}
        </div>
      </div>
    </>
  );
};

export default StudentList;
