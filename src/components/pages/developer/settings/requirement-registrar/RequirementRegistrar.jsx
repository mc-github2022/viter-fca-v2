import React from "react";

import { AiOutlinePlus } from "react-icons/ai";

import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import ModalError from "@/components/partials/modals/ModalError";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import { setIsAdd } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import RequirementRegistrarFormAddEdit from "./RequirementRegistrarFormAddEdit";
import RequirementRegistrarList from "./RequirementRegistrarList";
const RequirementRegistrar = ({ index }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
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

  if (index === 6) {
    return (
      <>
        <div className="">
          <div className="bg-primary">
            <h2 className="mb-3">Requirement Registrar</h2>
            <p className="text-xs mb-5">
              Set list of Requirement Registrars that will be available to the
              current school year
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
            <RequirementRegistrarFormAddEdit
              itemEdit={itemEdit}
              department={department}
            />
          )}
          {!store.isAdd && (
            <RequirementRegistrarList setItemEdit={setItemEdit} />
          )}
          {store.success && <ModalSuccess />}
          {store.error && <ModalError />}
        </div>
      </>
    );
  }
};

export default RequirementRegistrar;
