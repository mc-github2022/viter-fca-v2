import React from "react";

import { AiOutlinePlus } from "react-icons/ai";

import ModalError from "@/components/partials/modals/ModalError";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import { setIsAdd } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import RequirementFinanceFormAddEdit from "./RequirementFinanceFormAddEdit";
import RequirementFinanceList from "./RequirementFinanceList";
import useQueryData from "@/components/custom-hooks/useQueryData";
const RequirementFinance = ({ index }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

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

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  if (index === 7) {
    return (
      <>
        <div className="">
          <div className="bg-primary">
            <h2 className="mb-3">Requirement Finance</h2>
            <p className="text-xs mb-5">
              Set list of Requirement Finance that will be available to the
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
            <RequirementFinanceFormAddEdit
              itemEdit={itemEdit}
              department={department}
            />
          )}
          {!store.isAdd && <RequirementFinanceList setItemEdit={setItemEdit} />}
          {store.success && <ModalSuccess />}
          {store.error && <ModalError />}
        </div>
      </>
    );
  }
};

export default RequirementFinance;
