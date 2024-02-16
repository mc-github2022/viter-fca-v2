import React from "react";

const Pills = ({
  bg = "bg-success",
  color = "text-success",
  label = "label",
}) => {
  return <p className={`relative mb-0 ${color}`}>{label}</p>;
};

export default Pills;
