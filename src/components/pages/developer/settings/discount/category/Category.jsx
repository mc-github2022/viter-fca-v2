import React from "react";

import { setIsSettingAdd } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import CategoryList from "./CategoryList";
import { AiOutlinePlus } from "react-icons/ai";
import CategoryModalAddEdit from "./CategoryModalAddEdit";

const Category = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsSettingAdd(true));
    setItemEdit(null);
  };
  return (
    <>
      {!store.isSettingAdd && (
        <>
          <button
            className="flex gap-1 items-center mt-2 text-xs hover:underline mb-5"
            onClick={handleAdd}
          >
            <AiOutlinePlus /> Add New
          </button>
          <div className="h-[400px] xr:h-[570px] lg:max-h-[680px] loptop:max-h-[350px] w-full xr:overflow-auto overflow-hidden custom__scroll ">
            <CategoryList setItemEdit={setItemEdit} />
          </div>
        </>
      )}
      {store.isSettingAdd && <CategoryModalAddEdit itemEdit={itemEdit} />}
    </>
  );
};

export default Category;
