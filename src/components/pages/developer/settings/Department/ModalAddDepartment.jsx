import { InputText } from "@/components/helpers/FormInputs";
import ModalWrapper from "@/components/partials/modals/ModalWrapper";
import { setIsAdd } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { Formik } from "formik";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { Form } from "react-router-dom";

const ModalAddDepartment = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const initVal = {
    user_system_aid: itemEdit ? itemEdit.user_system_aid : "",
    user_system_fname: itemEdit ? itemEdit.user_system_fname : "",
    user_system_lname: itemEdit ? itemEdit.user_system_lname : "",
    user_system_email: itemEdit ? itemEdit.user_system_email : "",
    user_system_role_id: getDeveloperRole[0].role_aid,
    user_system_email_old: itemEdit ? itemEdit.user_system_email : "",
  };

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
              if (
                itemEdit &&
                itemEdit.user_system_email !== values.user_system_email
              ) {
                setEmailMessage("Please check your email for verification.");
              }
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
                      label="First name"
                      type="text"
                      name="department_name"
                    />
                  </div>
                  <div className="relative form__wrap">
                    <InputTextArea
                      label="Address"
                      type="text"
                      name="department_description"
                      disabled={mutation.isLoading}
                    />
                  </div>
                  <div className="modal__action flex justify-end mt-6 gap-2">
                    <button className="btn btn--primary" type="submit"></button>
                    <button type="button" className="btn btn--cancel">
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

export default ModalAddDepartment;
