import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";

const ModalWrapper = ({ children, width = "max-w-[380px]", handleClose }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  return (
    <>
      <div
        className={`fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-[999999] modal__center ${
          store.isShowModal ? "show" : ""
        }`}
      >
        <div
          className={`backdrop bg-dark/30 w-screen h-screen transition-all animate-fadeIn opacity-0 `}
          onClick={handleClose}
        ></div>
        <div
          className={`modal__main absolute mx-1.5 transition-all animate-slideUp translate-y-[20px] opacity-0  bg-white border border-gray-200 rounded-md py-8 px-5 ${width} w-full shadow-xl`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default ModalWrapper;
