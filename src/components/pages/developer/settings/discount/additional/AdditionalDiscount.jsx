import React from "react";

import { setIsSettingAdd } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { AiOutlinePlus } from "react-icons/ai";
import AdditionalDiscountList from "./AdditionalDiscountList";
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
        <>
          <button
            className="flex gap-1 items-center mt-2 text-xs hover:underline mb-5"
            onClick={handleAdd}
          >
            <AiOutlinePlus /> Add New
          </button>
          <div className="h-[400px] xr:h-[570px] lg:max-h-[680px] loptop:max-h-[350px] w-full overflow-auto custom__scroll ">
            <AdditionalDiscountList setItemEdit={setItemEdit} />
          </div>
        </>
      )}
      {store.isSettingAdd && (
        <AdditionalDiscountModalAddEdit itemEdit={itemEdit} />
      )}
    </>
  );
};

export default AdditionalDiscount;
