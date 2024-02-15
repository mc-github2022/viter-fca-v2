import React from "react";

import { AiOutlinePlus } from "react-icons/ai";

import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import ModalError from "@/components/partials/modals/ModalError";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import { setIsSettingAdd } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import RequirementRegistrarFormAddEdit from "./RequirementItFormAddEdit";
import RequirementRegistrarList from "./RequirementItList";
import RequirementItFormAddEdit from "./RequirementItFormAddEdit";
import RequirementItList from "./RequirementItList";
const RequirementIt = ({ index }) => {
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
    data: department,
  } = useQueryData(
    "/v2/dev-department", // endpoint
    "get", // method
    "department" // key
  );

  if (index === 8) {
    return (
      <>
        <div className="">
          <div className="bg-primary">
            <h2 className="mb-3">Requirement IT</h2>
            <p className="text-xs mb-5">
              Set list of Requirement IT that will be available to the current
              school year
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
            <RequirementItFormAddEdit
              itemEdit={itemEdit}
              department={department}
            />
          )}
          {!store.isSettingAdd && (
            <RequirementItList setItemEdit={setItemEdit} />
          )}
          {store.success && <ModalSuccess />}
          {store.error && <ModalError />}
        </div>
      </>
    );
  }
};

export default RequirementIt;
