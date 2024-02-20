import React from "react";

import { StoreContext } from "@/components/store/StoreContext";
import { MdOutlineError } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Modal from "../wrapper/Modal";
const ModalInvalidRequestError = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  let navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };
  return (
    <>
      <Modal>
        <div className="modal__header mb-4 ">
          <h3 className=" flex flex-col items-center justify-center gap-2">
            <MdOutlineError className="text-4xl text-warning" />
            <span className="text-xl"> Something Went Wrong</span>
          </h3>
        </div>
        <div className="modal__body__error text-center !pr-0">
          <p className="leading-loose">
            Please contact developer team for assistance.
          </p>
          <div className="modal__action flex items-center !justify-center gap-4 !pr-0 mt-4">
            <button
              className="btn bg-warning text-white "
              onClick={handleClose}
            >
              Go Back
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalInvalidRequestError;
