import ModalWrapper from "@/components/partials/modals/ModalWrapper.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { FiList } from "react-icons/fi";

const ModalSummaryParent = ({ setShowSummary, dataItem }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleClose = () => {
    setShowSummary(false);
  };
  return (
    <>
      <div
        className={`modal modal--settings ${store.isShowModal ? "show" : ""} `}
      >
        <div className="modal__backdrop bg-black/30"></div>
        <div className="modal__main  w-full h-screen flex justify-center items-center p-3 lg:p-5 ">
          <div className="relative w-full bg-white max-w-[720px] h-[calc(100vh-80px)] lg:h-[calc(100vh-280px)] custom__scroll overflow-y-hidden">
            <div className="modal__header flex items-center gap-3 p-4 !mb-0">
              <div
                className="flex justify-center items-center w-6 h-6 rounded-full bg-[rgba(18,57,9,.6)] relative isolate after:[''] after:absolute after:-top-[4px] after:-left-[4px] after:bg-[rgba(18,57,9,0.4)] after:w-8 after:h-8 z-0 after:rounded-full
      "
              >
                <FiList className="fill-white text-base relative z-10" />
              </div>

              <h3 className="text-[16px] mb-0">Parent Information Summary</h3>
            </div>

            <div className="h-[calc(100vh-420px)] overflow-y-auto custom__scroll p-4">
              <div className="mb-5">
                <h5 className="mb-3 pb-1 border-b border-line">Relationship</h5>
                <div className="grid grid-cols-2  gap-2">
                  <ul className="text-xs grid grid-cols-[min(130px)_1fr] gap-2 mb-1">
                    <li>Relationship with the Student :</li>
                    <li>{dataItem.relationship_name}</li>
                  </ul>
                  <ul className="text-xs grid grid-cols-[min(130px)_1fr] gap-2 mb-1">
                    <li>Reside with this individual:</li>
                    <li className="capitalize">
                      {dataItem.parent_guardian_info_reside}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-5">
                <h5 className="mb-3 pb-1 border-b border-line">Name</h5>
                <ul className="text-xs grid grid-cols-[min(130px)_1fr] gap-2 mb-1">
                  <li>Title:</li>
                  <li className="capitalize">
                    {dataItem.parent_guardian_info_salutation}
                  </li>
                </ul>
                <div className="grid grid-cols-2 gap-x-5 ">
                  <ul className="text-xs grid grid-cols-[min(130px)_1fr] gap-2 mb-1">
                    <li>First Name:</li>
                    <li>{dataItem.parent_guardian_info_fname}</li>
                  </ul>
                  <ul className="text-xs grid grid-cols-[min(130px)_1fr] gap-2 mb-1">
                    <li>Last Name:</li>
                    <li>{dataItem.parent_guardian_info_lname}</li>
                  </ul>

                  <ul className="text-xs grid grid-cols-[min(130px)_1fr] gap-2 mb-1">
                    <li>Middle Name:</li>
                    <li>{dataItem.parent_guardian_info_mname}</li>
                  </ul>

                  <ul className="text-xs grid grid-cols-[min(130px)_1fr] gap-2 mb-1">
                    <li>Maiden Last Name:</li>
                    <li>
                      {dataItem.parent_guardian_info_maiden_name
                        ? dataItem.parent_guardian_info_maiden_name
                        : "N/A"}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-5">
                <h5 className="mb-3 pb-1 border-b border-line">Contact</h5>
                <div className="grid grid-cols-2 gap-x-5 ">
                  <ul className="text-xs grid grid-cols-[min(130px)_1fr] gap-2 mb-1">
                    <li>Email:</li>
                    <li>{dataItem.parent_guardian_info_email}</li>
                  </ul>
                  <ul className="text-xs grid grid-cols-[min(130px)_1fr] gap-2 mb-1">
                    <li>Mobile:</li>
                    <li>{dataItem.parent_guardian_info_mobile}</li>
                  </ul>

                  <ul className="text-xs grid grid-cols-[min(130px)_1fr] gap-2 mb-1">
                    <li>Landline:</li>
                    <li>{dataItem.parent_guardian_info_landline}</li>
                  </ul>
                </div>
              </div>

              <div className="mb-5">
                <h5 className="mb-3 pb-1 border-b border-line">Address</h5>
                <ul className="text-xs grid grid-cols-[min(130px)_1fr] gap-2 mb-1">
                  <li>Address:</li>
                  <li>{dataItem.parent_guardian_info_address}</li>
                </ul>
                <div className="grid grid-cols-2 gap-x-5">
                  <ul className="text-xs grid grid-cols-[min(130px)_1fr] gap-2 mb-1">
                    <li>City:</li>
                    <li>{dataItem.parent_guardian_info_city}</li>
                  </ul>

                  <ul className="text-xs grid grid-cols-[min(130px)_1fr] gap-2 mb-1">
                    <li>Province:</li>
                    <li>{dataItem.parent_guardian_info_province}</li>
                  </ul>

                  <ul className="text-xs grid grid-cols-[min(130px)_1fr] gap-2 mb-1">
                    <li>Zipcode:</li>
                    <li>{dataItem.parent_guardian_info_zipcode}</li>
                  </ul>
                </div>
              </div>

              <div className="">
                <h5 className="mb-3 pb-1 border-b border-line">
                  Other Information
                </h5>
                <div className="grid grid-cols-2 gap-x-5 mb-8">
                  <ul className="text-xs grid grid-cols-[min(130px)_1fr] gap-2 mb-1">
                    <li>Religion:</li>
                    <li>{dataItem.parent_guardian_info_religion}</li>
                  </ul>
                  <ul className="text-xs grid grid-cols-[min(130px)_1fr] gap-2 mb-1">
                    <li>Occupation:</li>
                    <li>{dataItem.parent_guardian_info_occupation}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex mt-2 p-4 !pr-0">
              <button
                className="btn btn--accent text-white"
                type="button"
                onClick={handleClose}
              >
                Close Summary
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSummaryParent;
