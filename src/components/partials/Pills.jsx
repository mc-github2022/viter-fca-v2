import React from "react";

const Pills = ({
  bg = "bg-success",
  color = "text-success",
  label = "label",
}) => {
  console.log(bg);
  return (
    <span
      className={`text-center py-[5px] leading-none px-2 ${color} after:${bg} after:block rounded-2xl min-w-[60px] inline-block relative after:content-[''] after:absolute after:w-[8px] after:h-[8px] after:rounded-full  after:-left-2 after:top-2`}
    >
      {label}
    </span>
  );
};

export default Pills;
