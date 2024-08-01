import React from "react";

import { setIsSettingAdd } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { AiOutlinePlus } from "react-icons/ai";
import ListDiscountList from "./ListDiscountList";
import ListDiscountModalAddEdit from "./ListDiscountModalAddEdit";

const ListDiscount = () => {
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
          <div className="custom__scroll">
            <button
              className="flex gap-1 items-center mt-2 text-xs hover:underline mb-5"
              onClick={handleAdd}
            >
              <AiOutlinePlus /> Add New
            </button>
            <ListDiscountList setItemEdit={setItemEdit} />
          </div>
        </>
      )}
      {store.isSettingAdd && <ListDiscountModalAddEdit itemEdit={itemEdit} />}
    </>
  );
};

export default ListDiscount;
