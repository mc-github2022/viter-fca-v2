import React from "react";

const ModalWrapper = ({ children, width = "max-w-[420px]" }) => {
  return (
    <>
      <div className="bg-dark/50 fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-50">
        <div
          className={`modal__main absolute mx-1.5 bg-white border border-gray-200 rounded-md py-8 px-5 ${width} w-full shadow-xl`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default ModalWrapper;
