import React from "react";

import { StoreContext } from "@/components/store/StoreContext";
import ListDiscountList from "./ListDiscountList";
import { AiOutlinePlus } from "react-icons/ai";
import { setIsSettingAdd } from "@/components/store/StoreAction";
import ListDiscountModalAddEdit from "./ListDiscountModalAddEdit";

const ListDiscount = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsSettingAdd(true));
    setItemEdit(null);
  };

  if (store.indexItem === 2) {
    return (
      <>
        <button
          className="flex gap-1 items-center mt-2 text-xs hover:underline mb-5"
          onClick={handleAdd}
        >
          <AiOutlinePlus /> Add New
        </button>
        {!store.isSettingAdd && <ListDiscountList setItemEdit={setItemEdit} />}
        {store.isSettingAdd && <ListDiscountModalAddEdit itemEdit={itemEdit} />}
      </>
    );
  }
};

export default ListDiscount;
