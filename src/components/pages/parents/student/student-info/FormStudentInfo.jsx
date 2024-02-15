import { InputText } from "@/components/helpers/FormInputs.jsx";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner.jsx";
import { Form, Formik } from "formik";
import React from "react";
import { AiOutlineSave } from "react-icons/ai";
import { LiaTimesSolid } from "react-icons/lia";
import * as Yup from "yup";

const FormStudentInfo = () => {
  return (
    <div>
      <div className="clientinfo__block mt-3 p-4 bg-primary border border-line shadow-sm rounded-md max-w-[620px] w-full mb-5 relative">
        <h4 className="mb-5">Emergency Contact</h4>
        <Formik
        //   initialValues={initVal}
        //   validationSchema={yupSchema}
        //   onSubmit={async (values, { setSubmitting, resetForm }) => {
        //     mutation.mutate({ ...values, contact_user_id: id });
        //   }}
        >
          {(props) => {
            return (
              <Form>
                <div className="client__info__action flex gap-4  absolute top-4 right-5">
                  {props.dirty && (
                    <button
                      className="text-2xl tooltip"
                      data-tooltip="Save"
                      type="submit"
                      //   disabled={mutation.isLoading}
                    >
                      {mutation.isLoading ? (
                        <ButtonSpinner />
                      ) : (
                        <AiOutlineSave />
                      )}
                    </button>
                  )}

                  <button
                    className="text-2xl tooltip"
                    data-tooltip="Dismiss"
                    type="button"
                    // onClick={() => setShowContactForm(false)}
                  >
                    <LiaTimesSolid />
                  </button>
                </div>

                <h6 className="my-3 flex gap-2 items-center">Classification</h6>

                <div className="grid grid-cols-3 gap-4">
                  <div className="form__wrap">
                    <InputText
                      label="School year"
                      type="email"
                      name="contact_email"
                      //   disabled={mutation.isLoading}
                    />
                  </div>
                  <div className="form__wrap">
                    <InputText
                      label="Learning Type"
                      type="text"
                      name="contact_mobile"
                    />
                  </div>
                  <div className="form__wrap">
                    <InputText
                      label="Learning Reference No."
                      type="text"
                      name="contact_landline"
                      maxLength="11"
                      //   onKeyPress={handleNumOnly}
                      //   disabled={mutation.isLoading}
                    />
                  </div>
                  <div className="form__wrap">
                    <InputText
                      label="Grade Level."
                      type="text"
                      name="contact_landline"
                      maxLength="11"
                      //   onKeyPress={handleNumOnly}
                      //   disabled={mutation.isLoading}
                    />
                  </div>
                </div>

                <h6 className="my-3 flex gap-2 items-center">Profile</h6>
                <div className="grid grid-cols-2 gap-4">
                  <div className="form__wrap">
                    <InputText
                      label="Last Name (Suffix)"
                      type="text"
                      name="contact_landline"
                    />
                  </div>
                  <div className="form__wrap">
                    <InputText
                      label="First Name"
                      type="text"
                      name="contact_landline"
                    />
                  </div>

                  <div className="form__wrap">
                    <InputText
                      label="Middle Name"
                      type="text"
                      name="contact_landline"
                    />
                  </div>

                  <div className="form__wrap">
                    <InputText
                      label="Gender"
                      type="text"
                      name="contact_landline"
                    />
                  </div>

                  <div className="form__wrap">
                    <InputText
                      label="Birthday"
                      type="text"
                      name="contact_landline"
                    />
                  </div>

                  <div className="form__wrap">
                    <InputText
                      label="Birthplace"
                      type="text"
                      name="contact_landline"
                    />
                  </div>

                  <div className="form__wrap">
                    <InputText
                      label="Email"
                      type="text"
                      name="contact_landline"
                    />
                  </div>

                  <div className="form__wrap">
                    <InputText
                      label="Mobile"
                      type="text"
                      name="contact_landline"
                    />
                  </div>

                  <div className="form__wrap">
                    <InputText
                      label="Landline"
                      type="text"
                      name="contact_landline"
                    />
                  </div>
                </div>
                <h6 className="my-3 flex gap-2 items-center">Profile</h6>
                <div className="form__wrap">
                  <InputText
                    label="Select Parent Address"
                    type="text"
                    name="contact_landline"
                  />
                </div>

                <h6 className="my-3 flex gap-2 items-center">
                  Instituional Email
                </h6>
                <div className="form__wrap">
                  <InputText
                    label="Student Institutional Email"
                    type="text"
                    name="contact_landline"
                  />
                </div>

                <h6 className="my-3 flex gap-2 items-center">Profile</h6>

                <div className="grid grid-cols-2 gap-4">
                  <div className="form__wrap">
                    <InputText
                      label="Select Parent Address"
                      type="text"
                      name="contact_landline"
                    />
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default FormStudentInfo;
