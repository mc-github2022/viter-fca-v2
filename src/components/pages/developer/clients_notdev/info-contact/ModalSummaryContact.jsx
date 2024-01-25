import ModalWrapper from "@/components/partials/modals/ModalWrapper.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { FiList } from "react-icons/fi";

const ModalSummaryContact = ({ setShowSummary, dataItem }) => {
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
          <div className="relative w-full bg-white max-w-[420px] h-[calc(100vh-560px)] lg:h-[calc(100vh-550px)] custom__scroll overflow-y-hidden">
            <div className="modal__header flex items-center gap-3 p-4 !mb-0">
              <div
                className="flex justify-center items-center w-6 h-6 rounded-full bg-[rgba(18,57,9,.6)] relative isolate after:[''] after:absolute after:-top-[4px] after:-left-[4px] after:bg-[rgba(18,57,9,0.4)] after:w-8 after:h-8 z-0 after:rounded-full
      "
              >
                <FiList className="fill-white text-base relative z-10" />
              </div>

              <h3 className="text-[16px] mb-0">Contact Information Summary</h3>
            </div>

            <div className="h-[calc(100vh-700px)] overflow-y-auto custom__scroll p-4">
              <div className="mb-5">
                <h5 className="mb-3 pb-1 border-b border-line">
                  Emergency Contact
                </h5>
                <div className="grid grid-cols-1  gap-2">
                  <ul className="text-xs grid grid-cols-[min(130px)_1fr] gap-2 mb-1">
                    <li>Fullname :</li>
                    <li>{dataItem.contact_name}</li>
                  </ul>
                  <ul className="text-xs grid grid-cols-[min(130px)_1fr] gap-2 mb-1">
                    <li>Email:</li>
                    <li>{dataItem.contact_email}</li>
                  </ul>

                  <ul className="text-xs grid grid-cols-[min(130px)_1fr] gap-2 mb-1">
                    <li>Mobile Number:</li>
                    <li>{dataItem.contact_mobile}</li>
                  </ul>

                  <ul className="text-xs grid grid-cols-[min(130px)_1fr] gap-2 mb-1">
                    <li>Landline:</li>
                    <li>{dataItem.contact_landline}</li>
                  </ul>

                  <ul className="text-xs grid grid-cols-[min(130px)_1fr] gap-2 mb-1">
                    <li>Priority:</li>
                    <li className="capitalize">{dataItem.contact_level}</li>
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

export default ModalSummaryContact;
