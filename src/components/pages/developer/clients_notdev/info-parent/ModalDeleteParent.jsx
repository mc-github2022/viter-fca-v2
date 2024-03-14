import React from "react";

import { queryData } from "@/components/helpers/queryData.jsx";
import ModalWrapper from "@/components/partials/modals/ModalWrapper.jsx";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner.jsx";
import {
  setIsDelete,
  setMessage,
  setSuccess,
  setValidate,
} from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BsFillTrashFill } from "react-icons/bs";

const ModalDeleteParent = ({
  mysqlApiDelete,
  msg,
  item,
  queryKey,
  setDeleteParent,
}) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) => queryData(mysqlApiDelete, "DELETE", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      setDeleteParent(false);

      if (data.success) {
        dispatch(setSuccess(true));
        dispatch(setMessage("Deleted succesfully."));
      }
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const handleClose = () => {
    setDeleteParent(false);
  };

  const handleYes = async () => {
    mutation.mutate({
      item: item,
    });
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

          <h3 className="text-[16px] mb-0">Delete Record</h3>
        </div>
        <h3 className=" text-[14px] mb-0 font-normal">{msg}</h3>
        <p className="mt-3 ">
          <span className="font-bold">"{item}"</span>
        </p>

        <div className="modal__action flex justify-end mt-2  !pr-0">
          <button
            className="btn btn--cancel "
            disabled={mutation.isPending}
            onClick={handleYes}
            type="submit"
          >
            {mutation.isPending ? <ButtonSpinner /> : "Confirm"}
          </button>
          <button
            className="btn btn--alert text-white"
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

export default ModalDeleteParent;
