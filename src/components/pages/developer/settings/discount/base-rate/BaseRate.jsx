import React from "react";

import { setIsSettingAdd } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import BaseRateList from "./BaseRateList";
import { AiOutlinePlus } from "react-icons/ai";
import BaseRateModalAddEdit from "./BaseRateModalAddEdit";

const BaseRate = () => {
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
          <BaseRateList setItemEdit={setItemEdit} />
        </>
      )}
      {store.isSettingAdd && <BaseRateModalAddEdit itemEdit={itemEdit} />}
    </>
  );
};

export default BaseRate;
