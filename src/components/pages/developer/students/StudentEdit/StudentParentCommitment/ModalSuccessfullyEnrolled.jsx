import { GetFocus } from "@/components/helpers/functions-general";
import Modal from "@/components/partials/wrapper/Modal";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { LiaInfoCircleSolid } from "react-icons/lia";

const ModalSuccessfullyEnrolled = ({ setIsEnrolled, msg }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const handleClose = () => setIsEnrolled(false);
  GetFocus("btnClose");
  return (
    <>
      <Modal>
        <div className="modal__header mb-4 ">
          <h3 className=" flex flex-col items-center justify-center gap-2">
            <FaInfoCircle className="text-4xl text-accent" />
            <span className="text-xl">Successfully Enrolled.</span>
          </h3>
          <p className="mt-3 ">
            <span className="font-bold">{msg}</span>
          </p>
        </div>
        <div className=" text-center">
          <p>{store.message}</p>
          <div className=" flex !justify-center  mt-8">
            <button
              className="btn bg-accent text-white"
              onClick={handleClose}
              id="btnClose"
            >
              Okay
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalSuccessfullyEnrolled;
