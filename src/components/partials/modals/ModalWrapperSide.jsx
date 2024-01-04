import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { GiCoinsPile } from "react-icons/gi";

const ModalWrapperSide = ({ children, handleClose, className = "" }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  return (
    <>
      <div
        className={`fixed top-0 right-[0] bottom-0 left-0 flex h-[100vh] items-center justify-center z-50 modal__side ${
          store.isShowModal ? "show" : ""
        }`}
      >
        <div
          className={`backdrop absolute top-0 left-0 bg-black bg-opacity-30 w-screen h-full transition-all animate-fadeIn opacity-0`}
          onClick={handleClose}
        ></div>
        <div
          className={`modal__main absolute  h-full transition-all animate-slideRight opacity-0 bg-white border border-gray-200 top-0 right-0 py-8 pl-6 max-w-[360px] lg:max-w-[450px] w-full shadow-xl ${className} `}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default ModalWrapperSide;
