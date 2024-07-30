import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import ModalError from "@/components/partials/modals/ModalError";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import { setIsSettingAdd } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import UserSystemFormAddEdit from "./UserSystemFormAddEdit";
import UserSystemList from "./UserSystemList";
const UserSystem = ({ index }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsSettingAdd(true));
    setItemEdit(null);
  };

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

  if (index === 13) {
    return (
      <>
        <div className="">
          <div className="bg-primary">
            <h2 className="mb-3">User System</h2>
            <p className="text-xs mb-5">
              Set list of User Systems that will be available to the current
              school year
            </p>
          </div>

          {!store.isSettingAdd && <UserSystemList setItemEdit={setItemEdit} />}

          {store.isSettingAdd && (
            <div className="max-h-full h-[400px] xr:h-[570px] lg:max-h-[680px] w-full overflow-y-auto custom__scroll">
              <button
                className="flex gap-1 items-center mt-2 text-xs hover:underline mb-5"
                onClick={handleAdd}
              >
                <AiOutlinePlus /> Add New
              </button>
              <UserSystemFormAddEdit itemEdit={itemEdit} roles={roles} />
            </div>
          )}

          {store.success && <ModalSuccess />}
          {store.error && <ModalError />}
        </div>
      </>
    );
  }
};

export default UserSystem;
