import React from "react";

import { AiOutlinePlus } from "react-icons/ai";

import { setIsAdd } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import DepartmentFormAddEdit from "./DepartmentFormAddEdit";
import DepartmentList from "./DepartmentList";
const Department = ({ index }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const handleAdd = () => {
    dispatch(setIsAdd(true));
  };

  if (index === 1) {
    return (
      <>
        <div className="border-l border-line pl-4">
          <div className="bg-primary">
            <h2 className="mb-3">Department</h2>
            <p className="text-xs mb-5">
              Set list of departments that will be available to the current
              school year
            </p>
          </div>

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
        </div>
      </>
    );
  }
};

export default Department;
