import React from "react";

import { AiOutlinePlus } from "react-icons/ai";

import useQueryData from "@/components/custom-hooks/useQueryData";
import ModalError from "@/components/partials/modals/ModalError";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import { setIsSettingAdd } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import GradeLevelFormAddEdit from "./GradeLevelFormAddEdit";
import GradeLevelList from "./GradeLevelList";
const GradeLevel = ({ index }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsSettingAdd(true));
    setItemEdit(null);
  };

  if (index === 4) {
    return (
      <>
        <div className="bg-primary">
          <h2 className="mb-3">Grade Level</h2>
          <p className="text-xs mb-5">
            Set list of Grade Levels that will be available to the current
            school year
          </p>
        </div>

        {store.isSettingAdd && <GradeLevelFormAddEdit itemEdit={itemEdit} />}

        {!store.isSettingAdd && (
          <div className="custom__scroll">
            <button
              className="flex gap-1 items-center mt-2 text-xs hover:underline mb-5"
              onClick={handleAdd}
            >
              <AiOutlinePlus /> Add New
            </button>

            <GradeLevelList setItemEdit={setItemEdit} />
          </div>
        )}
        {store.success && <ModalSuccess />}
        {store.error && <ModalError />}
      </>
    );
  }
};

export default GradeLevel;
