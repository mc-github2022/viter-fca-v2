import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { InputText, InputTextArea } from "@/components/helpers/FormInputs";
import ModalWrapper from "@/components/partials/modals/ModalWrapper";
import {
  setIsAdd,
  setMessage,
  setSuccess,
  setValidate,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { queryData } from "../../../../helpers/queryData";
import * as Yup from "yup";
import React from "react";
import { FaTimes } from "react-icons/fa";

const ModalAddNotification = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v2/dev-department/${itemEdit.department_aid}`
          : "/v2/dev-department",
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["settings-department"] });
      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully ${itemEdit ? `updated` : `added`}.`));
      }
      // show error box
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const initVal = {
    department_aid: itemEdit ? itemEdit.department_aid : "",
    department_name: itemEdit ? itemEdit.department_name : "",
    department_description: itemEdit ? itemEdit.department_description : "",
  };

  const yupSchema = Yup.object({
    department_name: Yup.string().required("Required"),
    department_description: Yup.string().required("Required"),
  });

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  return (
    <>
      <ModalWrapper>
        <div className="modal__header relative">
          <h3> Add Department </h3>
          <button className="absolute -top-4 right-0" onClick={handleClose}>
            <FaTimes className="text-gray-700 text-base" />
          </button>
        </div>
        <div className="modal__body overflow-auto max-h-[50vh]">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              // mutate data
              mutation.mutate(values);
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="relative form__wrap">
                    <p className="flex gap-1">
                      <span className="text-primary">Role:</span>
                      <span></span>
                    </p>
                  </div>
                  <div className="relative form__wrap">
                    <InputText
                      label="Department Name"
                      type="text"
                      name="department_name"
                      disabled={mutation.isLoading}
                    />
                  </div>
                  <div className="relative form__wrap">
                    <InputTextArea
                      label="Description"
                      type="text"
                      name="department_description"
                      disabled={mutation.isLoading}
                    />
                  </div>
                  <div className="modal__action flex justify-end mt-6 gap-2 ">
                    <button
                      className="btn btn--primary"
                      type="submit"
                      disabled={mutation.isLoading || !props.dirty}
                    >
                      {mutation.isLoading ? (
                        <ButtonSpinner />
                      ) : itemEdit ? (
                        "Save"
                      ) : (
                        "Add"
                      )}
                    </button>
                    <button
                      type="button"
                      className="btn btn--cancel"
                      disabled={mutation.isLoading}
                      onClick={handleClose}
                    >
                      Cancel
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalAddNotification;
