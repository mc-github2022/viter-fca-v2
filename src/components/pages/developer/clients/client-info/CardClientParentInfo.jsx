import useQueryData from "@/components/custom-hooks/useQueryData";
import {
  formatLandlandNumber,
  formatMobileNumber,
  getUrlParam,
} from "@/components/helpers/functions-general.jsx";
import NoData from "@/components/partials/NoData.jsx";
import ModalDelete from "@/components/partials/modals/ModalDelete.jsx";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import { setIsDelete } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { CiMobile3 } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LuDot } from "react-icons/lu";
import { PiMapPinLight, PiPhoneThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const CardClientParentInfo = ({
  setItemEdit,
  setShowParentForm,
  parentInfo,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [cardId, setCardId] = React.useState(null);
  const [dataItem, setData] = React.useState(null);

  const id = getUrlParam().get("cid");
  const navigate = useNavigate();

  const handleShowParentForm = (item) => {
    setItemEdit(item);
    setShowParentForm(true);
  };

  const handleDeleteParentCard = (item) => {
    dispatch(setIsDelete(true));
    setCardId(item.parent_guardian_info_aid);
    setData(item);
  };

  const handleAddParentInfo = () => {
    setShowParentForm(true);
    setItemEdit(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center max-w-[620px] w-full mb-3 ">
        <div>
          <h3 className="">Parent - Guardian</h3>
          <p className="text-xs opacity-75">
            List all parent and guardian information for the student
          </p>
        </div>
        <button
          className="tooltip"
          data-tooltip="New"
          onClick={handleAddParentInfo}
        >
          <FaPlus />
        </button>
      </div>

      {parentInfo?.data.length === 0 ? (
        <NoData />
      ) : (
        <>
          {parentInfo?.data.map((item, key) => (
            <div className="max-w-[620px] w-full gap-4 mb-2" key={key}>
              <div className="card bg-primary border-b border-line rounded-sm mb-2 last:mb-0 relative">
                <div className="flex gap-3 items-center mb-3">
                  <ul>
                    <li className="font-bold capitalize">
                      <span className="pr-2">
                        {item.parent_guardian_info_salutation}.
                      </span>
                      {item.parent_guardian_info_fname}{" "}
                      {item.parent_guardian_info_lname}
                    </li>
                    <li className="text-xs">{item.relationship_name}</li>
                  </ul>

                  <div className="card__action absolute bottom-5 right-0  flex gap-2 ">
                    <button
                      className=" tooltip"
                      data-tooltip="Edit"
                      onClick={() => handleShowParentForm(item)}
                    >
                      <FiEdit2 />
                    </button>

                    <button
                      className=" tooltip"
                      data-tooltip="Delete"
                      onClick={() => handleDeleteParentCard(item)}
                    >
                      <FiTrash />
                    </button>
                  </div>
                </div>

                <p className=" flex gap-2 text-xs mb-2">
                  <PiMapPinLight className="text-base" />
                  {item.parent_guardian_info_address},{" "}
                  {item.parent_guardian_info_province}{" "}
                  {item.parent_guardian_info_city}{" "}
                  {item.parent_guardian_info_zipcode}
                </p>

                <p className="text-xs  md:flex gap-2 items-center mb-2">
                  <span className="flex  mb-2 md:mb-0">
                    <HiOutlineEnvelope className="text-base mr-1.5" />
                    {item.parent_guardian_info_email}{" "}
                  </span>
                  <LuDot className="text-xl hidden md:block" />{" "}
                  <span className="flex  mb-2 md:mb-0">
                    <CiMobile3 className="text-base mr-1.5" />{" "}
                    {formatMobileNumber(item.parent_guardian_info_mobile)}
                  </span>
                  {item.parent_guardian_info_landline && (
                    <>
                      <LuDot className="text-xl hidden md:block" />{" "}
                      <span className="flex  mb-2 md:mb-0">
                        <PiPhoneThin className="text-base mr-1.5" />
                        {formatLandlandNumber(
                          item.parent_guardian_info_landline
                        )}
                      </span>
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </>
      )}

      {store.isDelete && (
        <ModalDelete
          mysqlApiDelete={`/v2/dev-info-parent/${cardId}`}
          msg={"Are you sure you want to delete this record?"}
          item={`${dataItem.parent_guardian_info_fname} ${dataItem.parent_guardian_info_lname}`}
          queryKey={"parentInfo"}
        />
      )}
      {store.success && <ModalSuccess />}
    </div>
  );
};

export default CardClientParentInfo;
