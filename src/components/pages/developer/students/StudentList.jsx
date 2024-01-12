import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import NoData from "@/components/partials/NoData.jsx";
import Pills from "@/components/partials/Pills.jsx";
import SearchBar from "@/components/partials/SearchBar";
import Table from "@/components/partials/Table.jsx";
import TableLoading from "@/components/partials/TableLoading.jsx";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";
import { BsArchive, BsThreeDotsVertical } from "react-icons/bs";
import { FaEdit, FaHistory, FaTrash } from "react-icons/fa";
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
    }),

    columnHelper.accessor("student_name", {
      header: "Title",
    }),

    columnHelper.accessor("student_active", {
      header: "active",
    }),

    columnHelper.accessor("student_gender", {
      header: "gender",
    }),

    columnHelper.accessor("student_grade_level", {
      header: "grade",
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
      {/* <SearchBar /> */}

      <div className="main__table">
        <div className="table__wrapper mb-[80px]">
          {isFetching || isLoading ? (
            <TableLoading count={20} cols={3} />
          ) : student?.data.length === 0 ? (
            <NoData />
          ) : (
            <Table columns={columns} data={student.data} />
          )}
        </div>
      </div>
    </>
  );
};

export default StudentList;
