import React from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FaRegQuestionCircle } from "react-icons/fa";

import {
  setIsShowModal,
  setMessage,
  setSuccess,
  setValidate,
} from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";

import { queryData } from "@/components/helpers/queryData.jsx";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import Modal from "@/components/partials/wrapper/Modal";

const ModalTemporaryEnroll = ({ setShowAssessment, item }) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  console.log(item);

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(`/v2/dev-assessment/temporary-enroll`, "put", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["assessment"] });
      setShowAssessment(false);

      if (data.success) {
        dispatch(setSuccess(true));
        dispatch(setMessage("Accepted succesfully."));
      }
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const handleClose = () => {
    dispatch(setIsShowModal(false));
    setTimeout(() => {
      setShowAssessment(false);
      dispatch(setIsShowModal(true));
    }, 200);
  };

  const handleYes = async () => {
    // mutate data
    mutation.mutate({
      ...item,
      is_accept_payment: 1,
    });
  };

  // handleEscape(() => handleClose());

  return (
    <>
      <Modal width="max-w-[480px]">
        <div className="modal__header mb-4 ">
          <h3 className="text-warning flex  items-end  gap-2">
            <FaRegQuestionCircle className="text-3xl" />
            <span className="text-lg">Confirm</span>
          </h3>
        </div>
        <div className="modal__body ">
          <p>
            Are you sure you want to accept this student for{" "}
            <span className="font-bold text-[#1c84b9]">
              Temporary Enrollment
            </span>{" "}
            ?
          </p>

          <p className="mt-3 ">
            <span className="font-bold">
              "{item.students_fname} {item.students_lname}"
            </span>
          </p>

          <div className="modal__action flex justify-end gap-4 mt-8">
            <button
              className="btn btn--warning"
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
        </div>
      </Modal>
    </>
  );
};

export default ModalTemporaryEnroll;
