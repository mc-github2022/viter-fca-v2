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
  const { store, dispatch } = React.useContext(StoreContext);
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
      <div className="max-w-[620px] w-full mb-3">
        <h3 className="">Contacts</h3>
        <p className="text-xs opacity-75">
          List all emergency contact person for the student
        </p>

        <button
          className="btn btn--sm mt-3 hover:underline hover:!bg-[unset] tooltip text-[14px]"
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
              <div className="card bg-primary border-b border-line rounded-sm relative mb-2 last:mb-0 grid grid-cols-[1fr,5rem] items-center">
                <ul>
                  <li className="flex gap-3 items-center mb-3 capitalize font-bold">
                    {item.emergency_contact_level === "1"
                      ? "Primary"
                      : item.emergency_contact_level === "2"
                      ? "Secondary"
                      : "Other"}
                  </li>
                  <li className="md:flex gap-2 text-xs items-center mb-2 capitalize flex">
                    <PiUser className="text-base " />
                    {item.emergency_contact_name}
                  </li>
                  <li className="md:flex gap-2 text-xs items-center mb-2">
                    <HiOutlineEnvelope className="text-base " />{" "}
                    {item.emergency_contact_email}
                  </li>
                  <li className="md:flex gap-2 text-xs items-center mb-2">
                    <CiMobile3 className="text-base " />
                    {formatMobileNumber(item.emergency_contact_mobile)}
                  </li>
                  <li className="md:flex gap-2 text-xs items-center mb-2">
                    <PiPhoneThin className="text-base " />
                    {formatLandlineNumber(item.emergency_contact_landline)}
                  </li>
                </ul>
                <div className="card__action bottom-5 right-0 justify-end flex gap-2 ">
                  <button
                    className=" tooltip"
                    data-tooltip="Edit"
                    onClick={() => handleShowContactForm(item)}
                  >
                    <FiEdit2 className="text-[17px]" />
                  </button>

                  {(store.credentials.data.role_is_developer === 1 ||
                    store.credentials.data.role_is_admin === 1) && (
                    <button
                      className=" tooltip"
                      data-tooltip="Delete"
                      onClick={() => handleDeleteContactCard(item)}
                    >
                      <FiTrash className="text-[17px]" />
                    </button>
                  )}
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
