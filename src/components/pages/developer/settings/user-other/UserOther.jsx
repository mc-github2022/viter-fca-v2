import React from "react";

import { AiOutlinePlus } from "react-icons/ai";

import useQueryData from "@/components/custom-hooks/useQueryData";
import ModalError from "@/components/partials/modals/ModalError";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import { setIsSettingAdd } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import UserOtherFormAddEdit from "./UserOtherFormAddEdit";
import UserOtherList from "./UserOtherList";
const UserOther = ({ index }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsSettingAdd(true));
    setItemEdit(null);
  };

  if (index === 12) {
    return (
      <>
        <div className="">
          <div className="bg-primary">
            <h2 className="mb-3">Users</h2>
            <p className="text-xs mb-5">
              Set list of users that will be available to the current school
              year
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

          {store.isSettingAdd && <UserOtherFormAddEdit itemEdit={itemEdit} />}
          {!store.isSettingAdd && <UserOtherList setItemEdit={setItemEdit} />}
          {store.success && <ModalSuccess />}
          {store.error && <ModalError />}
        </div>
      </>
    );
  }
};

export default UserOther;
