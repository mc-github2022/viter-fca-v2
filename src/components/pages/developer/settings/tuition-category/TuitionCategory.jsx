import React from "react";

import { AiOutlinePlus } from "react-icons/ai";

import ModalError from "@/components/partials/modals/ModalError";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import { setIsSettingAdd } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import TuitionCategoryAddEdit from "./TuitionCategoryAddEdit";
import TuitionCategoryList from "./TuitionCategoryList";
const TuitionCategory = ({ index }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsSettingAdd(true));
    setItemEdit(null);
  };

  if (index === 9) {
    return (
      <>
        <div className="">
          <div className="bg-primary">
            <h2 className="mb-3">Tuition Category</h2>
            <p className="text-xs mb-5">
              Set list of Tuition Category that will be available to the current
              school year
            </p>
          </div>

          {!store.isSettingAdd && (
            <button
              className="flex gap-1 items-center mt-2 text-xs hover:underline mb-5"
              onClick={handleAdd}
            >
              <AiOutlinePlus /> Add New
            </button>
          )}

          {store.isSettingAdd && <TuitionCategoryAddEdit itemEdit={itemEdit} />}
          {!store.isSettingAdd && (
            <TuitionCategoryList setItemEdit={setItemEdit} />
          )}
          {store.success && <ModalSuccess />}
          {store.error && <ModalError />}
        </div>
      </>
    );
  }
};

export default TuitionCategory;
