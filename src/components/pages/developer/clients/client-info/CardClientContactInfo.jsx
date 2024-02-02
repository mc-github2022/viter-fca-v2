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
        <h3 className="">Contacts</h3>
        <button
          className="tooltip"
          data-tooltip="New"
          onClick={handleAddContact}
        >
          <FaPlus />
        </button>
      </div>

      {contactInfo?.data.length === 0 ? (
        <NoData />
      ) : (
        contactInfo?.data.map((item, key) => (
          <div className="max-w-[620px] w-full gap-4 mb-5" key={key}>
            <div className="card bg-primary border border-line p-4 rounded-sm  relative">
              <h5 className="mb-1">
                {item.contact_name} -{" "}
                <span className="capitalize">{item.contact_level}</span>
              </h5>
              <p className="flex gap-2 text-xs items-center">
                <HiOutlineEnvelope className="text-base" /> {item.contact_email}{" "}
                <LuDot className="text-xl" />
                <CiMobile3 className="text-base" />
                {formatMobileNumber(item.contact_mobile)}
                {item.contact_landline && (
                  <>
                    <LuDot className="text-xl" />
                    <PiPhoneThin className="text-base" />
                    {formatLandlandNumber(item.contact_landline)}
                  </>
                )}
              </p>
              <div className="card__action absolute top-5 right-5 flex gap-2">
                <button
                  className=" tooltip"
                  data-tooltip="Edit"
                  onClick={() => handleShowContactForm(item)}
                >
                  <FiEdit2 />
                </button>

                <button
                  className=" tooltip"
                  data-tooltip="Delete"
                  onClick={() => handleDeleteContactCard(item)}
                >
                  <FiTrash />
                </button>
              </div>
            </div>
          </div>
        ))
      )}

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
