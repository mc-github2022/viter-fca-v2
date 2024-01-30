import React from "react";
import Spinner from "./Spinner";

const ButtonSpinner = ({ color }) => {
  return (
    <>
      <div className="flex justify-center items-center flex-col text-center rounded-full">
        <Spinner diameter="w-[14px]" color={color} />
      </div>
    </>
  );
};

export default ButtonSpinner;
