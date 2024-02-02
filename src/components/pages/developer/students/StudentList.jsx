import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import { devNavUrl } from "@/components/helpers/functions-general.jsx";
import NoData from "@/components/partials/NoData.jsx";
import Pills from "@/components/partials/Pills.jsx";
import Table from "@/components/partials/Table.jsx";
import TableLoading from "@/components/partials/TableLoading.jsx";
import ModalConfirm from "@/components/partials/modals/ModalConfirm";
import ModalDelete from "@/components/partials/modals/ModalDelete";
import { setIsConfirm, setIsDelete } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { useQueryClient } from "@tanstack/react-query";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";
import { BsArchive } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { MdOutlineRestore } from "react-icons/md";
import { Link } from "react-router-dom";
import ModalEditStudent from "./StudentEdit/ModalEditStudent.jsx";

const StudentList = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isArchive, setIsArchive] = React.useState(1);
  const queryClient = useQueryClient();
  const [dataItem, setData] = React.useState(null);
  const [id, setId] = React.useState(null);

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

  const handleArchive = (item) => {
    dispatch(setIsConfirm(true));
    setId(item.student_info_aid);
    setData(item);
    setIsArchive(0);
  };

  const handleRestore = (item) => {
    dispatch(setIsConfirm(true));
    setId(item.student_info_aid);
    setData(item);
    setIsArchive(1);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.student_info_aid);
    setData(item);
  };

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
        `${row.row.original.student_info_fname} ${row.row.original.student_info_mname} ${row.row.original.student_info_lname}`,
    }),

    columnHelper.accessor("student_active", {
      header: "Status",
      cell: (row) => {
        if (row.row.original.student_info_is_archive == 1) {
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

    columnHelper.accessor("student_info_gender", {
      header: "Gender",
    }),

    columnHelper.accessor("student_info_grade_id", {
      header: "Grade Level",
    }),

    columnHelper.accessor("action", {
      header: "Action",
      cell: (row) => (
        <>
          {row.row.original.student_info_is_archive == 1 ? (
            <div className="flex gap-2 justify-end pr-4">
              <Link
                to={`${devNavUrl}/system/students/information?cid=${row.row.original.student_info_user_id}&sid=${row.row.original.student_info_aid}`}
                className="tooltip text-base"
                data-tooltip="View"
              >
                <CiViewList />
              </Link>

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
            <div className="flex gap-2 justify-end pr-4">
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

      {/* <ModalEditStudent /> */}

      {store.isConfirm && (
        <ModalConfirm
          mysqlApiArchive={`/v2/student/active/${id}`}
          msg={`Are you sure you want to ${
            isArchive ? "restore" : "archive"
          } this record?`}
          item={dataItem.student_info_fname}
          queryKey={"student"}
          isArchive={isArchive}
        />
      )}

      {store.isDelete && (
        <ModalDelete
          mysqlApiDelete={`/v2/student/${id}`}
          msg={"Are you sure you want to delete this record?"}
          item={dataItem.student_info_fname}
          queryKey={"student"}
        />
      )}
    </>
  );
};

export default StudentList;
