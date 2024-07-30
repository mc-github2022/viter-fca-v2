import React from "react";

import { AiOutlinePlus } from "react-icons/ai";

import ModalError from "@/components/partials/modals/ModalError";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import { setIsSettingAdd } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import DepartmentFormAddEdit from "./DepartmentFormAddEdit";
import DepartmentList from "./DepartmentList";
const Department = ({ index, isGreaterThanEndYear }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsSettingAdd(true));
    setItemEdit(null);
  };

  if (index === 1) {
    return (
      <>
        <div className="">
          <div className="bg-primary">
            <h2 className="mb-3">Department</h2>
            <p className="text-xs mb-5">
              Set list of departments that will be available to the current
              school year
            </p>
          </div>

          {store.isSettingAdd && <DepartmentFormAddEdit itemEdit={itemEdit} />}
          {!store.isSettingAdd && (
            <div className="max-h-full h-[400px] xr:h-[570px] lg:max-h-[680px] w-full overflow-auto custom__scroll">
              <button
                className="flex gap-1 items-center mt-2 text-xs hover:underline mb-5"
                onClick={handleAdd}
              >
                <AiOutlinePlus /> Add New
              </button>
              <DepartmentList setItemEdit={setItemEdit} />
            </div>
          )}
          {store.success && <ModalSuccess />}
          {store.error && <ModalError />}
        </div>
      </>
    );
  }
};

export default Department;
