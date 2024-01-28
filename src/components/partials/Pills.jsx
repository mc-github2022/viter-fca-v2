import React from "react";

const Pills = ({
  bg = "bg-success",
  color = "text-success",
  label = "label",
}) => {
  return (
    <p className={`relative ml-4 ${color}`}>
      <span
        className={`h-[7px] w-[7px] rounded-full bg-${bg} absolute ${bg} top-1 -left-4`}
      ></span>
      {label}
    </p>
  );
};

export default Pills;
