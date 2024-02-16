import useQueryData from "@/components/custom-hooks/useQueryData";
import {
  formatLandlandNumber,
  formatMobileNumber,
  getUrlParam,
} from "@/components/helpers/functions-general.jsx";
import NoData from "@/components/partials/NoData.jsx";
import ServerError from "@/components/partials/ServerError";
import TableLoading from "@/components/partials/TableLoading";
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

      <div className="max-w-[620px] w-full gap-4 mb-2">
        <div className="card bg-primary border-b border-line rounded-sm mb-2 last:mb-0 relative">
          <TableLoading count={20} cols={3} />
          <NoData />
          <ServerError />

          <div className="flex gap-3 items-center mb-3">
            <ul>
              <li className="font-bold capitalize">
                <span className="pr-2">Mr.</span>
                Juan Dele Cruz
              </li>
              <li className="text-xs">Bilogical Mother</li>
            </ul>

            <div className="card__action absolute bottom-5 right-0  flex gap-2 ">
              <button
                className=" tooltip"
                data-tooltip="Edit"
                // onClick={() => handleShowParentForm(item)}
              >
                <FiEdit2 />
              </button>

              <button
                className=" tooltip"
                data-tooltip="Delete"
                // onClick={() => handleDeleteParentCard(item)}
              >
                <FiTrash />
              </button>
            </div>
          </div>

          <p className=" flex gap-2 text-xs mb-2">
            <PiMapPinLight className="text-base" />
            San Pablo City Laguna
          </p>

          <p className="text-xs  md:flex gap-2 items-center mb-2">
            <span className="flex  mb-2 md:mb-0">
              <HiOutlineEnvelope className="text-base mr-1.5" />
              juan@gmail.com
            </span>
            <LuDot className="text-xl hidden md:block" />{" "}
            <span className="flex  mb-2 md:mb-0">
              <CiMobile3 className="text-base mr-1.5" /> +639 75 2155213
            </span>
            <LuDot className="text-xl hidden md:block" />{" "}
            <span className="flex  mb-2 md:mb-0">
              <PiPhoneThin className="text-base mr-1.5" />
              567 1332
            </span>
          </p>
        </div>
      </div>

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
