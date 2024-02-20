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
import ModalConfirm from "@/components/partials/modals/ModalConfirm.jsx";
import ModalDelete from "@/components/partials/modals/ModalDelete.jsx";
import React from "react";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { MdOutlineRestore } from "react-icons/md";
import ModalInvalidRequestError from "@/components/partials/modals/ModalInvalidRequestError";
const ScheduleOfFeeSchemeList = ({ val, fetching }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [dataItem, setData] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [isArchive, setIsArchive] = React.useState(1);

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

  const handleEdit = (item) => {
    dispatch(setIsSettingAdd(true));
    setItemEdit(item);
  };

  const handleArchive = (item) => {
    dispatch(setSettingIsConfirm(true));
    setId(item.tuition_fee_aid);
    setData(item);
    setIsArchive(0);
    console.log(isArchive);
  };

  const handleRestore = (item) => {
    dispatch(setSettingIsConfirm(true));
    setId(item.tuition_fee_aid);
    setData(item);
    setIsArchive(1);
    console.log(isArchive);
  };

  const handleDelete = (item) => {
    dispatch(setSettingIsDelete(true));
    setId(item.tuition_fee_aid);
    setData(item);
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
        scheme?.data.map((item, key) => (
          <>
            <ul
              className="grid grid-cols-[4rem,6rem,7rem,7rem,7rem,8rem,1fr] items-center w-full text-right"
              key={key}
            >
              <li>{item.scheme_name}</li>
              <li>5,733.00</li>
              <li>1,500.00</li>
              <li>18,900.00</li>
              <li>11,716.95</li>
              <li>37,849.95</li>
              <ul className="datalist__action flex items-center justify-end gap-1 pr-3 ">
                {item.tuition_category_active === 1 ? (
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
                    <li>
                      <button
                        className="tooltip"
                        data-tooltip="Archive"
                        onClick={() => handleArchive(item)}
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
            </ul>
          </>
        ))
      )}

      {store.isSettingConfirm && (
        <ModalConfirm
          mysqlApiArchive={`/v2/dev-scheme/active/${id}`}
          msg={`Are you sure you want to ${
            isArchive ? "restore" : "archive"
          } this record?`}
          item={`${dataItem.tuition_category_name} - ${dataItem.grade_level_name}`}
          queryKey={"scheme"}
          isArchive={isArchive}
        />
      )}

      {store.isSettingDelete && (
        <ModalDelete
          mysqlApiDelete={`/v2/dev-scheme/${id}`}
          msg={"Are you sure you want to delete this record?"}
          item={`${dataItem.tuition_category_name} - ${dataItem.grade_level_name}`}
          queryKey={"scheme"}
        />
      )}
    </>
  );
};

export default ScheduleOfFeeSchemeList;
