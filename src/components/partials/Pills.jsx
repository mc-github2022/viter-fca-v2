import React from "react";

const Pills = ({
  bg = "bg-success",
  color = "text-success",
  label = "label",
}) => {
  console.log(bg);
  return (
    <p className={`relative ${color}`}>
      <span
        className={`h-[7px] w-[7px] rounded-full bg-${bg} absolute ${bg} top-1 -left-4`}
      ></span>
      {label}
    </p>
  );
};

export default Pills;
