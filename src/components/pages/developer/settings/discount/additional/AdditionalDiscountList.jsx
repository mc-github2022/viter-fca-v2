import React from "react";

import useQueryData from "@/components/custom-hooks/useQueryData";
import {
  numberWithCommas,
  pesoSign,
} from "@/components/helpers/functions-general";
import NoData from "@/components/partials/NoData";
import TableLoading from "@/components/partials/TableLoading";
import ModalConfirm from "@/components/partials/modals/ModalConfirm";
import ModalDelete from "@/components/partials/modals/ModalDelete";
import ModalInvalidRequestError from "@/components/partials/modals/ModalInvalidRequestError";
import TableSpinner from "@/components/partials/spinners/TableSpinner";
import {
  setIsSettingAdd,
  setSettingIsConfirm,
  setSettingIsDelete,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { BsArchive } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { MdOutlineRestore } from "react-icons/md";

const AdditionalDiscountList = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [dataItem, setData] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [isArchive, setIsArchive] = React.useState(1);

  const {
    isLoading,
    isFetching,
    error,
    data: discount,
  } = useQueryData(
    "/v2/dev-settings-discount-additional", // endpoint
    "get", // method
    "discountAdditional" // key
  );

  const handleEdit = (item) => {
    dispatch(setIsSettingAdd(true));
    setItemEdit(item);
  };

  const handleArchive = (item) => {
    dispatch(setSettingIsConfirm(true));
    setId(item.discount_additional_aid);
    setData(item);
    setIsArchive(0);
  };

  const handleRestore = (item) => {
    dispatch(setSettingIsConfirm(true));
    setId(item.discount_additional_aid);
    setData(item);
    setIsArchive(1);
  };

  const handleDelete = (item) => {
    dispatch(setSettingIsDelete(true));
    setId(item.discount_additional_aid);
    setData(item);
  };
  return (
    <>
      <h5 className="text-sm">Additional List</h5>

      <div className="datalist h-[500px] custom__scroll  relative">
        {isFetching && !isLoading && <TableSpinner />}

        {!isLoading && discount.success === false ? (
          <ModalInvalidRequestError />
        ) : isLoading ? (
          <TableLoading count={20} cols={3} />
        ) : discount?.data.length === 0 ? (
          <NoData />
        ) : (
          !isLoading &&
          discount.success === true &&
          discount?.data.map((item, key) => (
            <div
              className={`datalist__item max-w-[650px] text-xs flex justify-between lg:items-center border-b border-line py-2 first:pt-5 lg:flex-row last:border-none ${
                item.discount_additional_is_active
                  ? "opacity-100"
                  : "opacity-40"
              }`}
              key={key}
            >
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr,1fr,4rem] items-center">
                <p className="mb-0 font-bold">
                  {item.discount_additional_name}
                </p>
                <p className="mb-0 text-right capitalize">
                  {item.discount_additional_is_early_bird === 1
                    ? "early bird"
                    : ""}
                </p>
                <p className="mb-0 text-right capitalize">
                  {item.settings_base_rate_name}
                </p>
                <p className="mb-0 text-right">
                  {Number(item.discount_additional_percent)}%
                </p>
                <p className="mb-0 text-right mr-5">
                  {pesoSign}
                  {numberWithCommas(
                    Number(item.discount_additional_amount).toFixed(2)
                  )}
                </p>
                <ul className="datalist__action flex items-center gap-1 pr-3 ">
                  {item.discount_additional_is_active === 1 ? (
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
              </div>
            </div>
          ))
        )}
      </div>

      {store.isSettingConfirm && (
        <ModalConfirm
          mysqlApiArchive={`/v2/dev-settings-discount-additional/active/${id}`}
          msg={`Are you sure you want to ${
            isArchive ? "restore" : "archive"
          } this record?`}
          item={dataItem.discount_additional_name}
          queryKey={"discountAdditional"}
          isArchive={isArchive}
        />
      )}

      {store.isSettingDelete && (
        <ModalDelete
          mysqlApiDelete={`/v2/dev-settings-discount-additional/${id}`}
          msg={"Are you sure you want to delete this record?"}
          item={dataItem.discount_additional_name}
          queryKey={"discountAdditional"}
        />
      )}
    </>
  );
};

export default AdditionalDiscountList;
