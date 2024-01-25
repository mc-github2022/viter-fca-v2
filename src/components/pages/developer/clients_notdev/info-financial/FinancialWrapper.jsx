import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import ModalValidate from "@/components/partials/modals/ModalValidate.jsx";
import {
  setError,
  setMessage,
  setValidate,
} from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import FinancialForm from "./FinancialForm.jsx";
import FinancialTable from "./FinancialTable.jsx";

const FinancialWrapper = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const [showFinancial, setShowFinancial] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [hasFinancier, setHasFinancier] = React.useState(false);
  const credentialUserId = store.credentials.data.user_system_aid;

  const {
    isLoading,
    isFetching,
    error,
    data: financialInfo,
  } = useQueryData(
    `/v2/dev-read-info-financial/${credentialUserId}`, // endpoint
    "get", // method
    "financialInfo" // key
  );

  const handleAdd = () => {
    if (!isLoading && financialInfo?.data.length > 0) {
      dispatch(
        setMessage(
          "You cannot add more than one financier. Please delete the existing financier first."
        )
      );
      dispatch(setValidate(true));
    } else {
      setShowFinancial(true);
      setItemEdit(null);
    }
  };

  return (
    <>
      <button
        className={`${hasFinancier ? "pointer-events-none" : ""} text-xs`}
        onClick={() => handleAdd()}
      >
        Add Finance Information
      </button>

      {!showFinancial && (
        <FinancialTable
          setShowFinancial={setShowFinancial}
          setItemEdit={setItemEdit}
          isLoading={isLoading}
          financialInfo={financialInfo}
          error={error}
        />
      )}
      {showFinancial && (
        <FinancialForm
          setShowFinancial={setShowFinancial}
          itemEdit={itemEdit}
        />
      )}

      {store.validate && <ModalValidate />}
    </>
  );
};

export default FinancialWrapper;
