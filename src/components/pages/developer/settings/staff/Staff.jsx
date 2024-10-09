import ModalError from "@/components/partials/modals/ModalError";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import { setIsSettingAdd } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import StaffFormAddEdit from "./StaffFormAddEdit";
import StaffList from "./StaffList";

const Staff = ({ index }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsSettingAdd(true));
    setItemEdit(null);
  };

  if (index === 16) {
    return (
      <>
        <div className="">
          <div className="bg-primary">
            <h2 className="mb-3">Staff</h2>
            <p className="text-xs mb-5">
              Set list of staff that will be available to the current school
              year
            </p>
          </div>

          {!store.isSettingAdd && (
            <div className="custom__scroll">
              <button
                className="flex gap-1 items-center mt-2 text-xs hover:underline mb-5"
                onClick={handleAdd}
              >
                <AiOutlinePlus /> Add New
              </button>
              <StaffList setItemEdit={setItemEdit} />
            </div>
          )}

          {store.isSettingAdd && <StaffFormAddEdit itemEdit={itemEdit} />}

          {store.success && <ModalSuccess />}
          {store.error && <ModalError />}
        </div>
      </>
    );
  }
};

export default Staff;
