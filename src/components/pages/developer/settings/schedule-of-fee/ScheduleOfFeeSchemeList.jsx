import useQueryData from "@/components/custom-hooks/useQueryData";
import TableLoading from "@/components/partials/TableLoading";
import TableSpinner from "@/components/partials/spinners/TableSpinner";
import {
  setIsSettingAdd,
  setSettingIsConfirm,
  setSettingIsDelete,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { BsArchive } from "react-icons/bs";

import NoData from "@/components/partials/NoData.jsx";
import ModalInvalidRequestError from "@/components/partials/modals/ModalInvalidRequestError";
import React from "react";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { MdOutlineRestore } from "react-icons/md";
import {
  numberWithCommas,
  pesoSign,
} from "@/components/helpers/functions-general";
const ScheduleOfFeeSchemeList = ({
  setItemEdit,
  val,
  fetching,
  setData,
  setId,
  setIsArchive,
}) => {
  const { dispatch } = React.useContext(StoreContext);

  const {
    isLoading,
    isFetching,
    error,
    data: scheme,
  } = useQueryData(
    "/v2/dev-tuition-fee/read-by-category-grade", // endpoint
    "post", // method
    "read-by-category-grade", // key
    {
      category_id: val.tuition_fee_category_id,
      grade_id: val.tuition_fee_grade_id,
    },
    fetching,
    val.tuition_fee_aid
  );

  const handleEdit = (sItem) => {
    dispatch(setIsSettingAdd(true));
    setItemEdit(sItem);
  };

  const handleArchive = (sItem) => {
    setData(sItem);
    dispatch(setSettingIsConfirm(true));
    setId(sItem.tuition_fee_aid);
    setIsArchive(0);
  };

  const handleRestore = (sItem) => {
    dispatch(setSettingIsConfirm(true));
    setId(sItem.tuition_fee_aid);
    setData(sItem);
    setIsArchive(1);
  };

  const handleDelete = (sItem) => {
    dispatch(setSettingIsDelete(true));
    setId(sItem.tuition_fee_aid);
    setData(sItem);
  };

  return (
    <>
      {isFetching && !isLoading && <TableSpinner />}

      {!isLoading && scheme.success === false ? (
        <ModalInvalidRequestError />
      ) : isLoading ? (
        <TableLoading count={20} cols={3} />
      ) : scheme?.data.length === 0 ? (
        <NoData />
      ) : (
        !isLoading &&
        scheme.success === true &&
        scheme?.data.map((sItem, key) => (
          <div
            className={`${
              sItem.tuition_fee_active ? "opacity-100" : "opacity-40"
            } w-full mr-1`}
            key={key}
          >
            <ul className="grid grid-cols-[4rem,7rem,7rem,7rem,7rem,8rem,1fr] items-center w-full text-right">
              <li>{sItem.scheme_name}</li>
              <li>
                {pesoSign}
                {numberWithCommas(
                  Number(sItem.tuition_fee_admission).toFixed(2)
                )}
              </li>
              <li>
                {pesoSign}
                {numberWithCommas(
                  Number(sItem.tuition_fee_miscellaneous).toFixed(2)
                )}
              </li>
              <li>
                {pesoSign}
                {numberWithCommas(Number(sItem.tuition_fee_tuition).toFixed(2))}
              </li>
              <li>
                {pesoSign}
                {numberWithCommas(Number(sItem.tuition_fee_books).toFixed(2))}
              </li>
              <li className="text-accent font-bold">
                {pesoSign}
                {numberWithCommas(
                  Number(sItem.tuition_fee_upon_enrollment).toFixed(2)
                )}
              </li>
              <ul className="datalist__action flex items-center justify-end gap-1 pr-3 ">
                {sItem.tuition_fee_active === 1 ? (
                  <>
                    <li className=" ">
                      <button
                        className="tooltip"
                        data-tooltip="Edit"
                        onClick={() => handleEdit(sItem)}
                      >
                        <FiEdit2 />
                      </button>
                    </li>
                    <li>
                      <button
                        className="tooltip"
                        data-tooltip="Archive"
                        onClick={() => handleArchive(sItem)}
                      >
                        <BsArchive />
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className=" ">
                      <button
                        className="tooltip"
                        data-tooltip="Restore"
                        onClick={() => handleRestore(sItem)}
                      >
                        <MdOutlineRestore className="text-base" />
                      </button>
                    </li>
                    <li>
                      <button
                        className="tooltip"
                        data-tooltip="Delete"
                        onClick={() => handleDelete(sItem)}
                      >
                        <FiTrash />
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </ul>
          </div>
        ))
      )}
    </>
  );
};

export default ScheduleOfFeeSchemeList;
