import {
  devNavUrl,
  handleEscape,
} from "@/components/helpers/functions-general.jsx";
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

const ModalSuspend = ({ mysqlApiArchive, msg, item, queryKey, isArchive }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  console.log(item, store.credentials.data.user_other_email);
  console.log(store.credentials.data.role_is_admin === 1);

  const mutation = useMutation({
    mutationFn: (values) => queryData(mysqlApiArchive, "put", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [queryKey] });

      if (setSettingIsConfirm(true)) {
        dispatch(setSettingIsConfirm(false));
      } else {
        dispatch(setIsConfirm(false));
      }

      if (data.success) {
        if (store.isSettingConfirm) {
          dispatch(setSettingIsConfirm(false));
        } else {
          dispatch(setIsConfirm(false));
        }
        dispatch(setSuccess(true));
        dispatch(
          setMessage(
            `Record successfully ${isArchive ? "Restored" : "Suspend"}.`
          )
        );

        setTimeout(() => {
          if (
            item === store.credentials.data.user_other_email &&
            store.credentials.data.role_is_admin === 1
          ) {
            localStorage.removeItem("fcatoken");
            window.location.replace(`${devNavUrl}/login`);
            return;
          }
        }, 1000);
      }
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
        return;
      }
    },
  });

  const handleYes = async () => {
    // mutate data
    mutation.mutate({
      isActive: isArchive,
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
            {isArchive ? "Restore" : "Archive"} Record
          </h3>
        </div>
        <h3 className=" text-[14px] mb-0 font-normal">
          {item === store.credentials.data.user_other_email &&
          store.credentials.data.role_is_admin === 1
            ? "Suspending your own account will make you unable to login and use the system. You will also be automatically logged out. Do you still want to proceed?"
            : msg}
        </h3>
        <p className="mt-3 ">
          <span className="font-bold">"{item}"</span>
        </p>

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

export default ModalSuspend;
