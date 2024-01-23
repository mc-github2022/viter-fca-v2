import { InputText } from "@/components/helpers/FormInputs.jsx";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
const FormOther = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };

  const handleClose = () => {
    props.setShowParentForm(false);
  };

  const validationSchemaOther = Yup.object({
    parent_guardian_info_religion: Yup.string().required("required"),
    parent_guardian_info_occupation: Yup.string().required("required"),
  });
  return (
    <Formik
      initialValues={props.formData}
      onSubmit={handleSubmit}
      validationSchema={validationSchemaOther}
    >
      {({ values }) => {
        return (
          <Form>
            <div className={`form__contact block`}>
              <div className="grid grid-cols-2 gap-2">
                <div className="form__wrap">
                  <InputText
                    label="Religion "
                    type="text"
                    name="parent_guardian_info_religion"
                  />
                </div>
                <div className="form__wrap">
                  <InputText
                    label="Occupation "
                    type="text"
                    name="parent_guardian_info_occupation"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-3">
                <div className="flex w-full mt-5">
                  <div className="flex gap-4">
                    <button className="btn btn--cancel" onClick={props.prev}>
                      Back
                    </button>
                    <button className="btn btn--accent" type="submit">
                      Submit
                    </button>
                  </div>
                  <button className="btn  ml-auto" onClick={handleClose}>
                    Return
                  </button>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormOther;
