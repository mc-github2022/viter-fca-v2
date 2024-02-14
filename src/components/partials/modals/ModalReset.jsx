import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";

import {
  setMessage,
  setSuccess,
  setValidate,
} from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { MdPassword } from "react-icons/md";
import { handleEscape } from "../../helpers/functions-general";
import { queryData } from "../../helpers/queryData";
import ButtonSpinner from "../spinners/ButtonSpinner";
import ModalWrapper from "./ModalWrapper";

const ModalReset = ({ setReset, mysqlApiReset, msg, item, queryKey }) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData(mysqlApiReset, "put", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      setReset(false);

      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      } else {
        dispatch(setSuccess(true));
        dispatch(
          setMessage("Please check your email to continue resetting password.")
        );
      }
    },
  });

  const handleYes = async () => {
    // mutate data
    mutation.mutate({
      item: item,
    });
  };

  const handleClose = () => {
    setReset(false);
  };

  handleEscape(() => handleClose());

  return (
    <>
      <ModalWrapper>
        <div className="modal__header flex items-center gap-3">
          <div
            className="flex justify-center items-center w-6 h-6 rounded-full bg-[rgba(175,24,24,.9)] relative isolate after:[''] after:absolute after:-top-[4px] after:-left-[4px] after:bg-[rgba(175,24,24,0.5)] after:w-8 after:h-8 z-0 after:rounded-full
          "
          >
            <MdPassword className="fill-white text-base relative z-10" />
          </div>

          <h3 className="text-[16px] mb-0">Reset Password</h3>
        </div>
        <h3 className=" text-[14px] mb-0 font-normal">{msg}</h3>
        <p className="mt-3 ">
          <span className="font-bold">"{item}"</span>
        </p>

        <div className="modal__action flex justify-end mt-2 gap-2">
          <button
            className="btn btn--alert"
            disabled={mutation.isPending}
            onClick={handleYes}
            type="submit"
          >
            {mutation.isPending ? <ButtonSpinner /> : "Reset"}
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

export default ModalReset;
