import React from "react";

import { AiOutlinePlus } from "react-icons/ai";

import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import ModalError from "@/components/partials/modals/ModalError";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import { setIsAdd } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import RequirementRegistrarFormAddEdit from "./TuitionCategoryAddEdit";
import RequirementRegistrarList from "./TuitionCategoryList";
import RequirementItFormAddEdit from "./TuitionCategoryAddEdit";
import RequirementItList from "./TuitionCategoryList";
import TuitionCategoryAddEdit from "./TuitionCategoryAddEdit";
import TuitionCategoryList from "./TuitionCategoryList";
const TuitionCategory = ({ index }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
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

          {!store.isAdd && (
            <button
              className="flex gap-1 items-center mt-2 text-xs hover:underline mb-5"
              onClick={handleAdd}
            >
              <AiOutlinePlus /> Add New
            </button>
          )}

          {store.isAdd && <TuitionCategoryAddEdit itemEdit={itemEdit} />}
          {!store.isAdd && <TuitionCategoryList setItemEdit={setItemEdit} />}
          {store.success && <ModalSuccess />}
          {store.error && <ModalError />}
        </div>
      </>
    );
  }
};

export default TuitionCategory;
