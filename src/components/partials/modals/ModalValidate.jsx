import { setValidate } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import Modal from "../wrapper/Modal";

const ModalValidate = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const handleClose = () => dispatch(setValidate(false));
  return (
    <>
      <Modal>
        <div className="modal__header mb-4 ">
          <h3 className=" flex flex-col items-center justify-center gap-2">
            <FaInfoCircle className="text-4xl text-warningDark" />
            <span className="text-xl">Oops! Something went wrong.</span>
          </h3>
        </div>
        <div className=" text-center">
          <p>{store.message}</p>
          <div className=" flex !justify-center  mt-8">
            <button
              className="btn bg-warningDark text-white"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalValidate;
