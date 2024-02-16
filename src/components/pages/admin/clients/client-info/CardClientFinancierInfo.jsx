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
import TableLoading from "@/components/partials/TableLoading.jsx";
import ServerError from "@/components/partials/ServerError.jsx";

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
      <div className="flex justify-between items-center max-w-[620px] w-full mb-5 relative">
        <div>
          <h3 className="">Financer</h3>
          <p className="text-xs opacity-75">
            Setup student financier information
          </p>
        </div>

        <button
          className="tooltip"
          data-tooltip="New"
          onClick={handleAddFinancier}
        >
          <FaPlus />
        </button>
      </div>

      <div className="max-w-[620px] w-full gap-4 mb-2">
        <TableLoading count={20} cols={3} />
        <NoData />
        <ServerError />
        <div className="card bg-primary rounded-sm ">
          <h5 className="mb-1">Mr Beast</h5>
          <p className="md:flex gap-2 text-xs items-center ">
            <span className="flex gap-2 mb-2 md:mb-0">
              <LiaHardHatSolid className="text-base" /> Vlogger
            </span>
            <LuDot className="text-xl hidden md:block" />{" "}
            <span className="flex gap-2 mb-2 md:mb-0">
              <SlPeople className="text-base" />
              Brother
            </span>
            <LuDot className="text-xl hidden md:block" />{" "}
            <span className="flex gap-2 mb-2 md:mb-0">
              <PiCoinsLight className="text-base" />
              100,000
            </span>
          </p>
          <div className="card__action absolute bottom-5 right-5  flex gap-2 ">
            <button
              className=" tooltip"
              data-tooltip="Edit"
              // onClick={() => handleShowFinancierForm(item)}
            >
              <FiEdit2 />
            </button>

            <button
              className=" tooltip"
              data-tooltip="Delete"
              // onClick={() => handleDeleteFinancierCard(item)}
            >
              <FiTrash />
            </button>
          </div>
        </div>
      </div>

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