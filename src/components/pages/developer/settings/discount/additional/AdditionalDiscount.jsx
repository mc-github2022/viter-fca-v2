import React from "react";

import { StoreContext } from "@/components/store/StoreContext";
import AdditionalDiscountList from "./AdditionalDiscountList";
import { AiOutlinePlus } from "react-icons/ai";
import { setIsSettingAdd } from "@/components/store/StoreAction";
import AdditionalDiscountModalAddEdit from "./AdditionalDiscountModalAddEdit";

const AdditionalDiscount = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsSettingAdd(true));
    setItemEdit(null);
  };

  return (
    <>
      {!store.isSettingAdd && (
        <div className="max-w-[800px]">
          <button
            className="flex gap-1 items-center mt-2 text-xs hover:underline mb-5"
            onClick={handleAdd}
          >
            <AiOutlinePlus /> Add New
          </button>
          <AdditionalDiscountList setItemEdit={setItemEdit} />
        </div>
      )}
      {store.isSettingAdd && (
        <AdditionalDiscountModalAddEdit itemEdit={itemEdit} />
      )}
    </>
  );
};

export default AdditionalDiscount;
