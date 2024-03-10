import {
  devNavUrl,
  handleEscape,
} from "@/components/helpers/functions-general";
import { queryData } from "@/components/helpers/queryData";
import ModalWrapper from "@/components/partials/modals/ModalWrapper";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { MdPassword } from "react-icons/md";
import {
  setError,
  setIsAccountUpdated,
  setMessage,
  setSuccess,
} from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";

const ModalConfirmPasswordChange = ({ initVal, setChangePassword }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(`/v2/dev/profile/update-password`, "put", values),
    onSuccess: (data, values) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["account-password"] });
      // show success box
      if (data.success) {
        values.current_password = "";
        values.new_password = "";
        values.confirm_password = "";
        setChangePassword(false);
        dispatch(setSuccess(true));
        dispatch(
          setMessage(
            "You password has been successfully changed, you will automatically be logged out."
          )
        );
        dispatch(setIsAccountUpdated(true));
        localStorage.removeItem("fcatoken");
        window.location.replace(`${devNavUrl}/system/login`);
        return;
      }
      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        return;
      }
    },
  });

  const handleClose = () => {
    setChangePassword(false);
  };

  handleEscape(() => handleClose());

  const handleYes = () => {
    mutation.mutate({ ...initVal });
  };

  return (
    <ModalWrapper>
      <div className="modal__header flex items-center gap-3">
        <div
          className="flex justify-center items-center w-7 h-7 rounded-full bg-warning relative border-4 border-[#d78b8b]
  "
        >
          <MdPassword className="fill-white  relative z-10" />
        </div>

        <h3 className="text-[16px] mb-0">Confirm Change Password</h3>
      </div>
      <h3 className=" text-[14px] mb-0 font-normal">
        Are you sure you want to change your password?
      </h3>

      <div className="modal__action flex justify-end mt-2 gap-2">
        <button
          className="btn bg-warning text-white"
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
  );
};

export default ModalConfirmPasswordChange;
