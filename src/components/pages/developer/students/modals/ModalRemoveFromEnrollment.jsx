import React from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { queryData } from "@/components/helpers/queryData";
import ModalWrapper from "@/components/partials/modals/ModalWrapper";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import {
  setIsDelete,
  setMessage,
  setSettingIsDelete,
  setSuccess,
  setValidate,
} from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { BsFillTrashFill } from "react-icons/bs";

const ModalRemoveFromEnrollment = ({ mysqlApiDelete, msg, item, queryKey }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData(mysqlApiDelete, "put", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [queryKey] });

      if (data.success) {
        if (store.isSettingDelete) {
          dispatch(setSettingIsDelete(false));
        } else {
          dispatch(setIsDelete(false));
        }
        dispatch(setSuccess(true));
        dispatch(setMessage("Remove succesfully."));
      }
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const handleClose = () => {
    if (store.isSettingDelete) {
      dispatch(setSettingIsDelete(false));
    } else {
      dispatch(setIsDelete(false));
    }
  };

  const handleYes = async () => {
    mutation.mutate({});
  };

  return (
    <>
      <ModalWrapper>
        <div className="modal__header flex items-center gap-3">
          <div
            className="flex justify-center items-center w-6 h-6 rounded-full bg-[rgba(175,24,24,.9)] relative isolate after:[''] after:absolute after:-top-[4px] after:-left-[4px] after:bg-[rgba(175,24,24,0.5)] after:w-8 after:h-8 z-0 after:rounded-full
          "
          >
            <BsFillTrashFill className="fill-white text-base relative z-10" />
          </div>

          <h3 className="text-[16px] mb-0">Remove Record</h3>
        </div>
        <h3 className=" text-[14px] mb-0 font-normal">{msg}</h3>
        <p className="mt-3 ">
          <span className="font-bold">"{item}"</span>
        </p>

        <div className="modal__action flex justify-end mt-2  !pr-0">
          <button
            className="btn btn--alert text-white "
            disabled={mutation.isPending}
            onClick={handleYes}
            type="submit"
          >
            {mutation.isPending ? <ButtonSpinner /> : "Confirm"}
          </button>
          <button
            className="btn btn--cancel "
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

export default ModalRemoveFromEnrollment;
