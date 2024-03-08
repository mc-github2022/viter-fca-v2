import {
  formatLandlineNumber,
  formatMobileNumber,
} from "@/components/helpers/functions-general.jsx";
import NoData from "@/components/partials/NoData.jsx";
import ServerError from "@/components/partials/ServerError.jsx";
import TableLoading from "@/components/partials/TableLoading.jsx";
import { setIsDelete } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { CiMobile3 } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LuDot } from "react-icons/lu";
import { PiPhoneThin, PiUser } from "react-icons/pi";
import ModalDeleteInfoCard from "./ModalDeleteInfoCard.jsx";

const CardClientContactInfo = ({
  contactInfo,
  setItemEdit,
  setShowContactForm,
  error,
  isLoading,
  isFetching,
}) => {
  const [id, setId] = React.useState(null);
  const [dataItem, setData] = React.useState(null);
  const [deleteContact, setDeleteContact] = React.useState(false);

  const handleShowContactForm = (item) => {
    setItemEdit(item);
    setShowContactForm(true);
  };

  const handleDeleteContactCard = (item) => {
    setId(item.emergency_contact_aid);
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
          className="btn btn--sm mt-3 hover:underline hover:!bg-[unset] tooltip"
          data-tooltip="New"
          onClick={handleAddContact}
        >
          <FaPlus /> Add
        </button>
      </div>

      <div className="max-w-[620px] w-full gap-4 mb-2">
        {isLoading ? (
          <TableLoading count={20} cols={3} />
        ) : !isLoading && contactInfo.data.length === 0 ? (
          <NoData />
        ) : error ? (
          <ServerError />
        ) : (
          contactInfo.data.map((item, key) => (
            <React.Fragment key={key}>
              <div className="card bg-primary border-b border-line rounded-sm relative mb-2 last:mb-0 ">
                <h5 className="capitalize">{item.emergency_contact_level}</h5>
                <p className="md:flex gap-2 text-xs items-center ">
                  <span className="capitalize text-xs  flex">
                    <PiUser className="text-base mr-1.5" />{" "}
                    {item.emergency_contact_name}
                  </span>
                </p>
                <p className="md:flex gap-2 text-xs items-center mb-2">
                  <span className="flex mb-2 md:mb-0">
                    <HiOutlineEnvelope className="text-base mr-1.5" />{" "}
                    {item.emergency_contact_email}
                  </span>
                  <LuDot className="text-xl hidden md:block" />
                  <span className="flex mb-2 md:mb-0">
                    <CiMobile3 className="text-base mr-1.5" />
                    {formatMobileNumber(item.emergency_contact_mobile)}
                  </span>
                  <LuDot className="text-xl hidden md:block" />{" "}
                  <span className="flex ">
                    <PiPhoneThin className="text-base mr-1.5" />
                    {formatLandlineNumber(item.emergency_contact_landline)}
                  </span>
                </p>
                <div className="card__action absolute bottom-5 right-0  flex gap-2 ">
                  <button
                    className=" tooltip"
                    data-tooltip="Edit"
                    onClick={() => handleShowContactForm(item)}
                  >
                    <FiEdit2 className="text-[17px]" />
                  </button>

                  <button
                    className=" tooltip"
                    data-tooltip="Delete"
                    onClick={() => handleDeleteContactCard(item)}
                  >
                    <FiTrash className="text-[17px]" />
                  </button>
                </div>
              </div>
            </React.Fragment>
          ))
        )}
      </div>

      {deleteContact && (
        <ModalDeleteInfoCard
          mysqlApiDelete={`/v2/dev-info-contact/${id}`}
          msg={"Are you sure you want to delete this record?"}
          item={dataItem.emergency_contact_name}
          queryKey={"contactInfo"}
          setDelete={setDeleteContact}
        />
      )}
    </div>
  );
};

export default CardClientContactInfo;
