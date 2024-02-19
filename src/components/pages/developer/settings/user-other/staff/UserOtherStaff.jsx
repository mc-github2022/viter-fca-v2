import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import useQueryData from "@/components/custom-hooks/useQueryData";
import ModalError from "@/components/partials/modals/ModalError";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import { setIsSettingAdd } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import UserParentList from "./UserOtherStaffList";
import UserParentFormAddEdit from "./UserOtherStaffFormAddEdit";
import UserOtherParentList from "./UserOtherStaffList";
import UserOtherParentFormAddEdit from "./UserOtherStaffFormAddEdit";
const UserOtherStaff = ({ indexInner, index }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsSettingAdd(true));
    setItemEdit(null);
  };

  if (indexInner === 122 && index == 12) {
    return (
      <>
        <div className="">
          <div className="bg-primary">
            <h2 className="mb-3">Users Staff</h2>
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

          {store.isSettingAdd && (
            <UserOtherParentFormAddEdit itemEdit={itemEdit} />
          )}
          {!store.isSettingAdd && (
            <UserOtherParentList setItemEdit={setItemEdit} />
          )}
          {store.success && <ModalSuccess />}
          {store.error && <ModalError />}
        </div>
      </>
    );
  }
};

export default UserOtherStaff;
