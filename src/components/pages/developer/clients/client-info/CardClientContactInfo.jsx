import {
  formatLandlandNumber,
  formatMobileNumber,
} from "@/components/helpers/functions-general.jsx";
import NoData from "@/components/partials/NoData.jsx";
import { setIsDelete } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { CiMobile3 } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LuDot } from "react-icons/lu";
import { PiPhoneThin } from "react-icons/pi";
import ModalDeleteInfoCard from "./ModalDeleteInfoCard.jsx";
import TableLoading from "@/components/partials/TableLoading.jsx";
import ServerError from "@/components/partials/ServerError.jsx";

const CardClientContactInfo = ({
  contactInfo,
  setItemEdit,
  setShowContactForm,
}) => {
  const [cardId, setCardId] = React.useState(null);
  const [dataItem, setData] = React.useState(null);
  const [deleteContact, setDeleteContact] = React.useState(false);

  const handleShowContactForm = (item) => {
    setItemEdit(item);
    setShowContactForm(true);
  };

  const handleDeleteContactCard = (item) => {
    setCardId(item.contact_aid);
    setData(item);
    setDeleteContact(true);
  };

  const handleAddContact = () => {
    setShowContactForm(true);
    setItemEdit(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center max-w-[620px] w-full mb-3">
        <div>
          <h3 className="">Contacts</h3>
          <p className="text-xs opacity-75">
            List all emergency contact person for the student
          </p>
        </div>

        <button
          className="tooltip"
          data-tooltip="New"
          onClick={handleAddContact}
        >
          <FaPlus />
        </button>
      </div>

      <div className="max-w-[620px] w-full gap-4 mb-2">
        <div className="card bg-primary border-b border-line rounded-sm relative mb-2 last:mb-0 ">
          <TableLoading count={20} cols={3} />
          <NoData />
          <ServerError />
          <h5 className="">Mr. Beast</h5>
          <p>
            <span className="capitalize text-xs block mb-2">Primary</span>
          </p>
          <p className="md:flex gap-2 text-xs items-center mb-2">
            <span className="flex mb-2 md:mb-0">
              <HiOutlineEnvelope className="text-base mr-1.5" /> juan@gmail.com
            </span>
            <LuDot className="text-xl hidden md:block" />
            <span className="flex mb-2 md:mb-0">
              <CiMobile3 className="text-base mr-1.5" />
              09752155213
            </span>
            <LuDot className="text-xl hidden md:block" />{" "}
            <span className="flex ">
              <PiPhoneThin className="text-base mr-1.5" />
              +6321 123123
            </span>
          </p>
          <div className="card__action absolute bottom-5 right-0  flex gap-2 ">
            <button
              className=" tooltip"
              data-tooltip="Edit"
              // onClick={() => handleShowContactForm(item)}
            >
              <FiEdit2 />
            </button>

            <button
              className=" tooltip"
              data-tooltip="Delete"
              // onClick={() => handleDeleteContactCard(item)}
            >
              <FiTrash />
            </button>
          </div>
        </div>
      </div>

      {deleteContact && (
        <ModalDeleteInfoCard
          mysqlApiDelete={`/v2/dev-info-contact/${cardId}`}
          msg={"Are you sure you want to delete this record?"}
          item={dataItem.contact_name}
          queryKey={"contactInfo"}
          setDelete={setDeleteContact}
        />
      )}
    </div>
  );
};

export default CardClientContactInfo;
