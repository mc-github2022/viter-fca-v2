import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import ModalValidate from "@/components/partials/modals/ModalValidate.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import TableParentInfo from "./TableParentInfo.jsx";
import ParentInfoForm from "./forms/ParentInfoForm.jsx";

const ParentWrapper = ({ listRelationship }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const [showParent, setShowParent] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(null);

  const credentialUserId = store.credentials.data.user_system_aid;

  const {
    isLoading,
    isFetching,
    error,
    data: parentinfo,
  } = useQueryData(
    `/v2/dev-read-info-parent/${credentialUserId}`, // endpoint
    "get", // method
    "parentinfo" // key
  );

  const handleAdd = () => {
    setShowParent(true);
    setItemEdit(null);
  };

  return (
    <>
      <button
        className={`${false ? "pointer-events-none" : ""} text-xs`}
        onClick={() => handleAdd()}
      >
        Add Parent/Guardian
      </button>

      {!showParent && (
        <TableParentInfo
          setShowParent={setShowParent}
          setItemEdit={setItemEdit}
          parentinfo={parentinfo}
          isLoading={isLoading}
          error={error}
        />
      )}
      {showParent && (
        <ParentInfoForm
          setItemEdit={setItemEdit}
          itemEdit={itemEdit}
          setShowParent={setShowParent}
          listRelationship={listRelationship}
        />
      )}

      {store.validate && <ModalValidate />}
    </>
  );
};

export default ParentWrapper;
