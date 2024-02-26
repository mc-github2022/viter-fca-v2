import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";

const Modal = ({ children, width = "max-w-[420px]" }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  return (
    <>
      <div
        className={`modal modal--basic fixed top-0 left-0 w-full z-[99] ${
          store.isShowModal ? "show" : ""
        }`}
      >
        <div className="backdrop bg-gray-200 bg-opacity-80 h-screen "></div>
        <div
          className={`modal__main absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border  border-gray-300 rounded-md py-8 px-5 ${width} w-full`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
