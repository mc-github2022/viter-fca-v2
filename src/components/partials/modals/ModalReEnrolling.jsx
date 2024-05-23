import { handleEscape } from "@/components/helpers/functions-general.jsx";
import { queryData } from "@/components/helpers/queryData.jsx";
import {
  setError,
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
import ButtonSpinner from "../spinners/ButtonSpinner.jsx";
import ModalWrapper from "./ModalWrapper.jsx";

const ModalReEnrolling = ({
  mysqlApiEnroll,
  msg,
  item,
  queryKey,
  setIsEnroll,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData(mysqlApiEnroll, "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      queryClient.invalidateQueries({ queryKey: ["mystudent"] });
      queryClient.invalidateQueries({ queryKey: ["all-students"] });

      if (data.success) {
        if (store.isSettingConfirm) {
          dispatch(setSettingIsConfirm(false));
        } else {
          dispatch(setIsConfirm(false));
        }
        setIsEnroll(false);
        dispatch(setSuccess(true));
        dispatch(setMessage("Successfully enrolled."));
      }
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const handleYes = async () => {
    // mutate data
    mutation.mutate({
      ...item,
      ...store.credentials.data,
    });
  };

  const handleClose = () => {
    setIsEnroll(false);
  };

  handleEscape(() => handleClose());

  return (
    <>
      <ModalWrapper>
        <div className="modal__header flex items-center gap-2">
          <LiaInfoCircleSolid className="fill-accent text-3xl" />
          <h3 className="text-[16px] mb-0">Enroll Student</h3>
        </div>
        <h3 className=" text-[14px] mb-0 font-normal">{msg}</h3>
        <p className="mt-3 ">
          <span className="font-bold">
            "{item.students_fname} {item.students_lname}"
          </span>
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

export default ModalReEnrolling;
