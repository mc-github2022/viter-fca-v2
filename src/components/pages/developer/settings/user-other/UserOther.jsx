import React from "react";

import { AiOutlinePlus } from "react-icons/ai";

import ModalError from "@/components/partials/modals/ModalError";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import { setIsAdd } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import UserOtherFormAddEdit from "./UserOtherFormAddEdit";
import UserOtherList from "./UserOtherList";
import useQueryData from "@/components/custom-hooks/useQueryData";
const UserOther = ({ index }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const {
    isLoading,
    isFetching,
    error,
    data: roles,
  } = useQueryData(
    "/v2/dev-roles", // endpoint
    "get", // method
    "roles" // key
  );

  const handleAdd = () => {
    dispatch(setIsAdd(true));
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

          {!store.isAdd && (
            <button
              className="flex gap-1 items-center mt-2 text-xs hover:underline mb-5"
              onClick={handleAdd}
            >
              <AiOutlinePlus /> Add New
            </button>
          )}

          {store.isAdd && (
            <UserOtherFormAddEdit itemEdit={itemEdit} roles={roles} />
          )}
          {!store.isAdd && <UserOtherList setItemEdit={setItemEdit} />}
          {store.success && <ModalSuccess />}
          {store.error && <ModalError />}
        </div>
      </>
    );
  }
};

export default UserOther;
