import {
  formatLandlineNumber,
  formatMobileNumber,
  getUrlParam,
} from "@/components/helpers/functions-general.jsx";
import NoData from "@/components/partials/NoData.jsx";
import ServerError from "@/components/partials/ServerError";
import TableLoading from "@/components/partials/TableLoading";
import ModalDelete from "@/components/partials/modals/ModalDelete.jsx";
import ModalError from "@/components/partials/modals/ModalError.jsx";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import ModalValidate from "@/components/partials/modals/ModalValidate.jsx";
import { setIsDelete } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { CiMobile3 } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LuDot } from "react-icons/lu";
import { PiMapPinLight, PiPhoneThin, PiUser } from "react-icons/pi";

const CardClientParentInfo = ({
  setItemEdit,
  setShowParentForm,
  guardianInfo,
  isLoading,
  error,
  setHideForm,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [guardianId, setGuardianId] = React.useState(null);
  const [dataItem, setData] = React.useState(null);

  const handleShowGuardianForm = (item) => {
    setItemEdit(item);
    setShowParentForm(true);
    setHideForm(true);
  };

  const handleDeleteGuardianCard = (item) => {
    dispatch(setIsDelete(true));
    setGuardianId(item.guardian_aid);
    setData(item);
  };

  const handleAddGuardianInfo = () => {
    setShowParentForm(true);
    setItemEdit(null);
    setHideForm(true);
  };

  return (
    <>
      <div className="max-w-[620px] w-full mb-3 ">
        <h3 className="">Guardian List</h3>
        <p className="text-xs opacity-75">
          List all parent and guardian information for the student
        </p>
        <button
          className="btn btn--sm mt-3 hover:underline hover:!bg-[unset] tooltip text-[14px]"
          data-tooltip="New"
          onClick={handleAddGuardianInfo}
        >
          <FaPlus /> Add
        </button>
      </div>

      <div className="max-w-[620px] w-full gap-4 mb-2">
        {isLoading ? (
          <TableLoading count={20} cols={3} />
        ) : !isLoading && guardianInfo.data.length === 0 ? (
          <NoData />
        ) : error ? (
          <ServerError />
        ) : (
          guardianInfo.data.map((item, key) => (
            <React.Fragment key={key}>
              <div className="card bg-primary border-b border-line rounded-sm mb-2 last:mb-0 relative grid grid-cols-[1fr,5rem] items-center">
                {/* list */}
                <ul>
                  <li className="flex gap-3 items-center mb-3 capitalize font-bold">
                    {item.relationship_name}
                  </li>
                  <li className=" flex gap-2 text-xs mb-2">
                    <PiUser className="text-base mr-1" />
                    <span className="capitalize ">
                      {item.guardian_salutation}.
                    </span>
                    {item.guardian_fname} {item.guardian_lname}
                  </li>

                  <li className=" flex gap-2 text-xs mb-2">
                    <PiMapPinLight className="text-base" />
                    {`${item.guardian_address}, ${item.guardian_city}, ${item.guardian_province}, ${item.guardian_country}`}
                  </li>

                  <li className="text-xs gap-2 items-center mb-2">
                    <span className="flex gap-2 mb-2 ">
                      <HiOutlineEnvelope className="text-base" />
                      {item.guardian_email}
                    </span>
                    {/* <LuDot className="text-xl hidden md:block" />{" "} */}
                    <span className="flex gap-2 mb-2 ">
                      <CiMobile3 className="text-base" />
                      {formatMobileNumber(item.guardian_mobile)}
                    </span>
                    {item.guardian_landline && (
                      <>
                        <LuDot className="text-xl hidden md:block" />{" "}
                        <span className="flex  mb-2 md:mb-0">
                          <PiPhoneThin className="text-base" />

                          {formatLandlineNumber(item.guardian_landline)}
                        </span>
                      </>
                    )}
                  </li>
                </ul>
                <div className="card__action bottom-5 right-0 justify-end flex gap-2 ">
                  <button
                    className=" tooltip"
                    data-tooltip="Edit"
                    onClick={() => handleShowGuardianForm(item)}
                  >
                    <FiEdit2 className="text-[17px]" />
                  </button>
                  {(store.credentials.data.role_is_developer === 1 ||
                    store.credentials.data.role_is_admin === 1) && (
                    <button
                      className=" tooltip"
                      data-tooltip="Delete"
                      onClick={() => handleDeleteGuardianCard(item)}
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

      {store.isDelete && (
        <ModalDelete
          mysqlApiDelete={`/v2/dev-info-guardian/${guardianId}`}
          msg={"Are you sure you want to delete this record?"}
          item={`${dataItem.guardian_fname} ${dataItem.guardian_lname}`}
          queryKey={"guardianInfo"}
        />
      )}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default CardClientParentInfo;
