import React from "react";

import { AiOutlinePlus } from "react-icons/ai";

import ModalError from "@/components/partials/modals/ModalError";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import { setIsAdd } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import ParentRelationshipFormAddEdit from "./ParentRelationshipFormAddEdit";
import ParentRelationshipList from "./ParentRelationshipList";
const ParentRelationship = ({ index }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  if (index === 3) {
    return (
      <>
        <div className="">
          <div className="bg-primary">
            <h2 className="mb-3">Parent Relationship</h2>
            <p className="text-xs mb-5">
              Set list of Parent Relationships that will be available to the
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

          {store.isAdd && <ParentRelationshipFormAddEdit itemEdit={itemEdit} />}
          {!store.isAdd && <ParentRelationshipList setItemEdit={setItemEdit} />}
          {store.success && <ModalSuccess />}
          {store.error && <ModalError />}
        </div>
      </>
    );
  }
};

export default ParentRelationship;