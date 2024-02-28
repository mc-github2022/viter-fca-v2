import useQueryData from "@/components/custom-hooks/useQueryData";
import TableLoading from "@/components/partials/TableLoading";
import TableSpinner from "@/components/partials/spinners/TableSpinner";
import {
  setError,
  setIsSettingAdd,
  setMessage,
  setSettingIsConfirm,
  setSettingIsDelete,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { BsArchive, BsCalendar2Date } from "react-icons/bs";

import { formatDate } from "@/components/helpers/functions-general";
import NoData from "@/components/partials/NoData.jsx";
import Pills from "@/components/partials/Pills";
import ModalConfirm from "@/components/partials/modals/ModalConfirm.jsx";
import ModalDelete from "@/components/partials/modals/ModalDelete.jsx";
import ModalInvalidRequestError from "@/components/partials/modals/ModalInvalidRequestError";
import React from "react";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { IoMdDoneAll } from "react-icons/io";
import { MdDone, MdDoneAll, MdOutlineRestore } from "react-icons/md";

const SchoolYearList = ({
  setItemEdit,
  setIsEditEnrollment,
  isLoading,
  isFetching,
  error,
  schoolYear,
  getOngoingSchoolYear,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [dataItem, setData] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [isArchive, setIsArchive] = React.useState(1);

  const getOngoingEnrollment =
    schoolYear?.count > 0 &&
    schoolYear?.data.filter(
      (item) => item.school_year_is_enrollment_open === 1
    );

  const handleEdit = (item) => {
    dispatch(setIsSettingAdd(true));
    setItemEdit(item);
  };

  const handleEditEnrollment = (item) => {
    setIsEditEnrollment(true);
    setItemEdit(item);
  };

  const handleArchive = (item) => {
    if (getOngoingEnrollment?.length > 0) {
      dispatch(setError(true));
      dispatch(setMessage("There is still an on-going enrollment."));
      return;
    }
    dispatch(setSettingIsConfirm(true));
    setId(item.school_year_aid);
    setData(item);
    setIsArchive(0);
  };

  const handleRestore = (item) => {
    if (getOngoingSchoolYear?.length > 0) {
      dispatch(setError(true));
      dispatch(setMessage("There is already an on-going SY."));
      return;
    }
    dispatch(setSettingIsConfirm(true));
    setId(item.school_year_aid);
    setData(item);
    setIsArchive(1);
  };

  const handleDelete = (item) => {
    dispatch(setSettingIsDelete(true));
    setId(item.school_year_aid);
    setData(item);
  };

  return (
    <>
      <h5 className="text-sm">List</h5>

      <div className="datalist max-w-[650px] w-full overflow-x-hidden overflow-y-auto max-h-[450px] lg:max-h-[580px] custom__scroll  poco:max-h-[640px] lg:poco:max-h-[400px]">
        {isFetching && !isLoading && <TableSpinner />}

        {!isLoading && !schoolYear.success && error ? (
          <ModalInvalidRequestError />
        ) : isLoading ? (
          <TableLoading count={20} cols={3} />
        ) : schoolYear?.count === 0 ? (
          <NoData />
        ) : (
          !isLoading &&
          schoolYear.success &&
          schoolYear?.data.map((item, key) => (
            <div
              className={
                "relative datalist__item text-xs  flex justify-between lg:items-center border-b border-line py-2 first:pt-5 lg:flex-row last:border-none"
              }
              key={key}
            >
              <div>
                <p className="mb-1 flex items-center">
                  <span className="font-bold block w-[8rem]">S.Y Status:</span>{" "}
                  <Pills
                    bg="bg-gray-200"
                    label={
                      item.school_year_is_active === 1 ? "On-going" : "Finished"
                    }
                    color={
                      item.school_year_is_active === 1
                        ? "text-green-500"
                        : "text-blue-500"
                    }
                  />
                </p>
                <p className="mb-1 flex items-center">
                  <span className="font-bold block w-[8rem]">S.Y:</span>{" "}
                  {item.start_year} - {item.end_year}
                </p>
                <p className="mb-1 flex items-center">
                  <span className="font-bold block w-[8rem]"> Date:</span>{" "}
                  {formatDate(item.school_year_start_date)} -{" "}
                  {formatDate(item.school_year_end_date)}
                </p>
                {/* <p className="mb-1 flex items-center">
                  <span className="font-bold block w-[8rem]">Enrollment:</span>{" "}
                  {item.school_year_enrollment_start_date === ""
                    ? "Not set"
                    : formatDate(item.school_year_enrollment_start_date)}{" "}
                  -{" "}
                  {item.school_year_enrollment_end_date === ""
                    ? "Not set"
                    : formatDate(item.school_year_enrollment_end_date)}
                </p> */}
                <p className="mb-1 flex items-center">
                  <span className="font-bold block w-[8rem]">
                    Enrollment Status:
                  </span>{" "}
                  <Pills
                    bg="bg-gray-200"
                    label={
                      item.school_year_is_enrollment_open === 1
                        ? "Open"
                        : "Closed"
                    }
                    color={
                      item.school_year_is_enrollment_open === 1
                        ? "text-green-500"
                        : "text-gray-500"
                    }
                  />
                </p>
              </div>

              <ul className="datalist__action flex items-center gap-1 pr-3 ">
                {item.school_year_is_active === 1 ? (
                  <>
                    <li className=" ">
                      <button
                        className="tooltip"
                        data-tooltip="Edit"
                        onClick={() => handleEdit(item)}
                      >
                        <FiEdit2 />
                      </button>
                    </li>

                    {/* <li className=" ">
                      <button
                        className="tooltip"
                        data-tooltip="Enrollment"
                        onClick={() => handleEditEnrollment(item)}
                      >
                        <BsCalendar2Date />
                      </button>
                    </li> */}

                    <li>
                      <button
                        className="tooltip"
                        data-tooltip="Finish"
                        onClick={() => handleArchive(item)}
                      >
                        <IoMdDoneAll />
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className=" ">
                      <button
                        className="tooltip"
                        data-tooltip="Restore"
                        onClick={() => handleRestore(item)}
                      >
                        <MdOutlineRestore className="text-base" />
                      </button>
                    </li>
                    <li>
                      <button
                        className="tooltip"
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
        <ModalConfirm
          mysqlApiArchive={`/v2/dev-school-year/active/${id}`}
          msg={`Are you sure you want to ${
            isArchive ? "restore" : "finish"
          } this record?`}
          item={`S.Y ${dataItem.start_year} ${dataItem.end_year}`}
          queryKey={"school-year"}
          isArchive={isArchive}
        />
      )}

      {store.isSettingDelete && (
        <ModalDelete
          mysqlApiDelete={`/v2/dev-school-year/${id}`}
          msg={"Are you sure you want to delete this record?"}
          item={`S.Y ${dataItem.start_year} ${dataItem.end_year}`}
          queryKey={"school-year"}
        />
      )}
    </>
  );
};

export default SchoolYearList;
