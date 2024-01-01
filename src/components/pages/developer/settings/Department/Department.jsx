import React from "react";

import { AiOutlinePlus } from "react-icons/ai";

import DepartmentFormAddEdit from "./DepartmentFormAddEdit";
import { StoreContext } from "@/components/store/StoreContext";
import { setIsAdd } from "@/components/store/StoreAction";
import DepartmentList from "./DepartmentList";
const Department = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const handleAdd = () => {
    dispatch(setIsAdd(true));
  };
  return (
    <>
      <h2 className="mb-3">Department</h2>
      <p className="text-xs mb-5">
        Set list of departments that will be available to the current school
        year
      </p>

      {!store.isAdd && (
        <button
          className="flex gap-1 items-center mt-2 text-xs text-accent hover:underline mb-5"
          onClick={handleAdd}
        >
          <AiOutlinePlus /> Add New Department
        </button>
      )}

      {store.isAdd && <DepartmentFormAddEdit />}
      {!store.isAdd && <DepartmentList />}
    </>
  );
};

export default Department;
