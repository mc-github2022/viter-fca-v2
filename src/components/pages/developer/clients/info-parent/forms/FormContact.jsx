import { InputText } from "@/components/helpers/FormInputs.jsx";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
const FormContact = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  const handleClose = () => props.setShowParentForm(false);

  const validationSchemaContact = Yup.object({
    parent_guardian_info_email: Yup.string().required("Required"),
    parent_guardian_info_mobile: Yup.string().required("Required"),
  });
  return (
    <Formik
      initialValues={props.formData}
      onSubmit={handleSubmit}
      validationSchema={validationSchemaContact}
    >
      {() => {
        return (
          <Form>
            <div className={`form__contact block`}>
              <div className="grid grid-cols-3 gap-2">
                <div className="form__wrap">
                  <InputText
                    label="Email "
                    type="text"
                    name="parent_guardian_info_email"
                  />
                </div>
                <div className="form__wrap">
                  <InputText
                    label="Mobile "
                    type="text"
                    name="parent_guardian_info_mobile"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-3">
                <button className="btn btn--accent" type="submit">
                  Next
                </button>
                <button className="btn btn--cancel" onClick={props.prev}>
                  Back
                </button>
                <button className="btn btn--cancel" onClick={handleClose}>
                  Dismiss
                </button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormContact;
