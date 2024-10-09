import useQueryData from "@/components/custom-hooks/useQueryData";
import { handleEscape } from "@/components/helpers/functions-general.jsx";
import { queryData } from "@/components/helpers/queryData.jsx";
import ModalWrapper from "@/components/partials/modals/ModalWrapper";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import {
  setIsConfirm,
  setMessage,
  setSettingIsConfirm,
  setSuccess,
  setValidate,
} from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { LiaInfoCircleSolid } from "react-icons/lia";
import { getPrimaryDiscount } from "../../../assessment/modal/functions-assessment";
import { getGetAdditionalDiscount } from "../../../assessment/modal/functions-assessment-new";
const ModalRevertOrSavePayment = ({
  mysqlApiRevertOrSavePayment,
  msg,
  item,
  isSavePaymentScheme,
  setIsViewInfo,
  dataItem = null,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const {
    isLoading: isLoadingPrimaryDiscount,
    isFetching: isFetchingPrimaryDiscount,
    data: primaryDiscount,
  } = useQueryData(
    "/v2/dev-assessment/read-primary-discount", // endpoint
    "get", // method
    "primary-discount" // key
  );

  const { data: additionalDiscount } = useQueryData(
    "/v2/dev-assessment/read-additional-discount", // endpoint
    "get", // method
    "addtional-discount" // key
  );

  console.log(
    getPrimaryDiscount(
      primaryDiscount,
      dataItem.current_students_primary_discount_id
    )
  );

  console.log(
    getGetAdditionalDiscount(
      additionalDiscount,
      dataItem.current_students_additional_discount_id
    )
  );

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(mysqlApiRevertOrSavePayment, "put", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["all-students"] });
      queryClient.invalidateQueries({ queryKey: ["students"] });
      queryClient.invalidateQueries({ queryKey: ["mystudent"] });
      queryClient.invalidateQueries({
        queryKey: ["read-student-by-current-sy-id"],
      });

      if (store.isSettingConfirm === true) {
        dispatch(setSettingIsConfirm(false));
      } else {
        dispatch(setIsConfirm(false));
      }

      if (data.success) {
        // setIsViewInfo(false);
        dispatch(setSuccess(true));
        dispatch(
          setMessage(
            `Record Successfully ${isSavePaymentScheme ? "Save" : "Revert"}.`
          )
        );
      }
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const handleYes = async () => {
    // mutate data
    mutation.mutate({
      ...item,
      primary:
        getPrimaryDiscount(
          primaryDiscount,
          dataItem.current_students_primary_discount_id
        ).length > 0
          ? `${
              getPrimaryDiscount(
                primaryDiscount,
                dataItem.current_students_primary_discount_id
              )[0]["discount_category_name"]
            } (${
              getPrimaryDiscount(
                primaryDiscount,
                dataItem.current_students_primary_discount_id
              )[0]["discount_type"]
            })`
          : "",
      additional:
        getGetAdditionalDiscount(
          additionalDiscount,
          dataItem.current_students_additional_discount_id
        ).length > 0
          ? getGetAdditionalDiscount(
              additionalDiscount,
              dataItem.current_students_additional_discount_id
            )[0]["discount_additional_name"]
          : "",
    });
  };

  const handleClose = () => {
    if (store.isSettingConfirm) {
      dispatch(setSettingIsConfirm(false));
    } else {
      dispatch(setIsConfirm(false));
    }
  };

  handleEscape(() => handleClose());

  return (
    <>
      <ModalWrapper>
        <div className="modal__header flex items-center gap-2">
          <LiaInfoCircleSolid className="fill-accent text-3xl" />
          <h3 className="text-[16px] mb-0">
            {isSavePaymentScheme ? "Save" : "Revert Payment"}
          </h3>
        </div>
        <h3 className=" text-[14px] mb-0 font-normal">{msg}</h3>
        {/* <p className="mt-3 ">
          <span className="font-bold">
            " {item.tuitionName}{" "}
            {!isSavePaymentScheme && `(${item.scheme_name})`} "
          </span>
        </p> */}

        <div className="modal__action flex justify-end mt-2 gap-2">
          <button
            className="btn btn--accent"
            disabled={mutation.isPending}
            onClick={handleYes}
            type="submit"
          >
            {mutation.isPending ? <ButtonSpinner /> : "Confirm"}
          </button>
          <button
            className="btn btn--cancel"
            disabled={mutation.isPending}
            onClick={handleClose}
            type="button"
          >
            Cancel
          </button>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalRevertOrSavePayment;
