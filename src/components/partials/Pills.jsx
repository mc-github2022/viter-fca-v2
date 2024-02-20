import React from "react";

const Pills = ({
  bg = "bg-success",
  color = "text-success",
  label = "label",
}) => {
  return <span className={`relative mb-0 ${color}`}>{label}</span>;
};

export default Pills;
