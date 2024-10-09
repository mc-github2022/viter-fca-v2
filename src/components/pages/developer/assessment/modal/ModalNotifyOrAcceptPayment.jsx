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
import {
  getAdditonalDiscount,
  getGetAdditionalDiscount,
  getPrimaryDiscount,
} from "./functions-assessment";
const ModalNotifyOrAcceptPayment = ({
  mysqlApiNotifyOrAcceptPayment,
  msg,
  item,
  queryKey,
  isNotify,
  setShowAssessment,
  discount = null,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  console.log(item);

  console.log(discount);

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(mysqlApiNotifyOrAcceptPayment, "put", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [queryKey] });

      if (setSettingIsConfirm(true)) {
        dispatch(setSettingIsConfirm(false));
      } else {
        dispatch(setIsConfirm(false));
      }

      if (data.success) {
        setShowAssessment(false);
        dispatch(setSuccess(true));
        dispatch(
          setMessage(
            `${
              isNotify
                ? "Successfully Notify Parent"
                : "Payment Successfully Accept"
            }.`
          )
        );
      }
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  console.log(
    getPrimaryDiscount(discount.primaryDiscount, item.primaryDiscountId)
  );

  console.log(
    getGetAdditionalDiscount(
      discount.additionalDiscount,
      item.additionalDiscountId
    )
  );

  const handleYes = async (val) => {
    // mutate data
    mutation.mutate({
      ...item,
      isNotifyParent: val,
      is_notify: isNotify ? 1 : 0,
      is_accept_payment: isNotify ? 0 : 1,
      primary:
        getPrimaryDiscount(discount.primaryDiscount, item.primaryDiscountId)
          .length > 0
          ? `${
              getPrimaryDiscount(
                discount.primaryDiscount,
                item.primaryDiscountId
              )[0]["discount_category_name"]
            } (${
              getPrimaryDiscount(
                discount.primaryDiscount,
                item.primaryDiscountId
              )[0]["discount_type"]
            })`
          : "",
      additional:
        getGetAdditionalDiscount(
          discount.additionalDiscount,
          item.additionalDiscountId
        ).length > 0
          ? getGetAdditionalDiscount(
              discount.additionalDiscount,
              item.additionalDiscountId
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
            {isNotify ? "Email Parent" : "Accept Payment"}
          </h3>
        </div>
        <h3 className=" text-[14px] mb-0 font-normal">{msg}</h3>
        <p className="mt-3 ">
          <span className="font-bold">
            " {item.tuitionName} {!isNotify && `(${item.scheme_name})`} "
          </span>
        </p>

        <div className="modal__action flex justify-end mt-2 gap-2">
          <button
            className="btn btn--accent w-[6rem]"
            disabled={mutation.isPending}
            onClick={() => handleYes(true)}
            type="submit"
          >
            {mutation.isPending ? <ButtonSpinner /> : "Send email"}
          </button>
          <button
            className="btn btn--accent w-[6rem]"
            disabled={mutation.isPending}
            onClick={() => handleYes(false)}
            type="submit"
          >
            {mutation.isPending ? <ButtonSpinner /> : "Save only"}
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

export default ModalNotifyOrAcceptPayment;
