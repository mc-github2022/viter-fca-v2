import {
  numberWithCommas,
  pesoSign,
} from "@/components/helpers/functions-general.jsx";
import NoData from "@/components/partials/NoData.jsx";
import ModalInvalidRequestError from "@/components/partials/modals/ModalInvalidRequestError.jsx";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { LiaHardHatSolid } from "react-icons/lia";
import { LuDot } from "react-icons/lu";
import { PiCoinsLight } from "react-icons/pi";
import { SlPeople } from "react-icons/sl";
import ModalDeleteInfoCard from "./ModalDeleteInfoCard.jsx";

const CardClientFinancierInfo = ({
  financierInfo,
  setItemEdit,
  setShowFinancierForm,
}) => {
  const [cardId, setCardId] = React.useState(null);
  const [dataItem, setData] = React.useState(null);
  const [deleteFinancier, setDeleteFinancier] = React.useState(false);

  const handleShowFinancierForm = (item) => {
    setItemEdit(item);
    setShowFinancierForm(true);
  };

  const handleDeleteFinancierCard = (item) => {
    setCardId(item.financial_info_aid);
    setData(item);
    setDeleteFinancier(true);
  };

  const handleAddFinancier = () => {
    setShowFinancierForm(true);
    setItemEdit(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center max-w-[620px] w-full mb-5">
        <div>
          <h3 className="">Financer</h3>
          <p className="text-xs opacity-75">
            Setup student financier information
          </p>
        </div>
        {financierInfo.success === false && financierInfo.count === 0 ? (
          <ModalInvalidRequestError />
        ) : (
          financierInfo?.data.length === 0 && (
            <button
              className="tooltip"
              data-tooltip="New"
              onClick={handleAddFinancier}
            >
              <FaPlus />
            </button>
          )
        )}
      </div>
      {financierInfo.success === false && financierInfo.count === 0 ? (
        <ModalInvalidRequestError />
      ) : financierInfo?.data.length === 0 ? (
        <NoData />
      ) : (
        financierInfo?.data.map((item, key) => (
          <div className="max-w-[620px] w-full gap-4 mb-5" key={key}>
            <div className="card bg-primary border border-line p-4 rounded-sm relative">
              <h5 className="mb-1">
                {item.financial_info_financier_full_name}
              </h5>
              <p className="flex gap-2 text-xs items-center">
                <LiaHardHatSolid className="text-base" />{" "}
                {item.financial_info_financier_occupation}{" "}
                <LuDot className="text-xl" />
                <SlPeople className="text-base" />
                {item.financial_info_financier_relationship}
                <LuDot className="text-xl" />
                <PiCoinsLight className="text-base" />
                {numberWithCommas(
                  Number(item.financial_info_financier_income).toFixed(2)
                )}
              </p>
              <div className="card__action absolute -bottom-[2rem] left-[50%] -translate-x-[50%] md:-bottom-[unset] md:-translate-x-[unset] md:left-[unset]  md:top-5 md:right-0 flex gap-2">
                <button
                  className=" tooltip"
                  data-tooltip="Edit"
                  onClick={() => handleShowFinancierForm(item)}
                >
                  <FiEdit2 />
                </button>

                <button
                  className=" tooltip"
                  data-tooltip="Delete"
                  onClick={() => handleDeleteFinancierCard(item)}
                >
                  <FiTrash />
                </button>
              </div>
            </div>
          </div>
        ))
      )}

      {deleteFinancier && (
        <ModalDeleteInfoCard
          mysqlApiDelete={`/v2/dev-info-financial/${cardId}`}
          msg={"Are you sure you want to delete this record?"}
          item={dataItem.financial_info_financier_full_name}
          queryKey={"financierInfo"}
          setDelete={setDeleteFinancier}
        />
      )}
    </div>
  );
};

export default CardClientFinancierInfo;
