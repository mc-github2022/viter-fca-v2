import { InputText } from "@/components/helpers/FormInputs.jsx";
import { handleNumOnly } from "@/components/helpers/functions-general.jsx";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
const FormContact = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  const handleClose = () => {
    props.setShowParentForm(false);
    props.setItemEdit(null);
  };

  const validationSchemaContact = Yup.object({
    parent_guardian_info_email: Yup.string()
      .required("Required")
      .email("Invalid Email"),
    parent_guardian_info_mobile: Yup.string().required("Required"),
    parent_guardian_info_address: Yup.string().required("Required"),
    parent_guardian_info_province: Yup.string().required("Required"),
    parent_guardian_info_city: Yup.string().required("Required"),
    parent_guardian_info_zipcode: Yup.string().required("Required"),
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
              <h6 className=" mb-4 pb-2">Contact Details</h6>
              <div className="grid grid-cols-3 gap-2">
                <div className="form__wrap mb-0">
                  <InputText
                    label="Email "
                    type="text"
                    name="parent_guardian_info_email"
                  />
                </div>
                <div className="form__wrap mb-0">
                  <InputText
                    label="Mobile "
                    type="text"
                    maxLength="11"
                    onKeyPress={handleNumOnly}
                    name="parent_guardian_info_mobile"
                  />
                </div>

                <div className="form__wrap mb-0">
                  <InputText
                    label="Landline"
                    type="text"
                    name="parent_guardian_info_landline"
                  />
                </div>
              </div>

              <h6 className=" mt-5 mb-4 pb-2">Address Details</h6>
              <div className="grid grid-cols-1 gap-2 mb-3">
                <div className="form__wrap mb-0">
                  <InputText
                    label="Address"
                    type="text"
                    name="parent_guardian_info_address"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="form__wrap mb-0">
                  <InputText
                    label="City"
                    type="text"
                    name="parent_guardian_info_city"
                  />
                </div>
                <div className="form__wrap mb-0">
                  <InputText
                    label="Province"
                    type="text"
                    name="parent_guardian_info_province"
                  />
                </div>

                <div className="form__wrap mb-0">
                  <InputText
                    label="Zipcode"
                    type="text"
                    name="parent_guardian_info_zipcode"
                  />
                </div>
              </div>

              <div className="flex mt-5">
                <div className="flex gap-4">
                  <button className="btn btn--cancel" onClick={props.prev}>
                    Back
                  </button>
                  <button className="btn btn--accent" type="submit">
                    Next
                  </button>
                </div>
                <button className="btn  ml-auto" onClick={handleClose}>
                  Return
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
