import { InputText, InputTextArea } from "@/components/helpers/FormInputs.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const StudentProfileForm = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const queryClient = useQueryClient();

  const initVal = {};

  const yupSchema = Yup.object({});

  return (
    <div className="">
      <Formik
        initialValues={initVal}
        validationSchema={yupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          mutation.mutate(values);
        }}
      >
        {(props) => {
          return (
            <Form>
              <div className="overflow-y-auto custom__scroll ">
                <h5 className="mb-2">Classification</h5>
                <div className="grid grid-cols-[120px_1fr_1fr_1fr] gap-x-3">
                  <div className="form__wrap">
                    <InputText
                      label="School Year"
                      type="text"
                      name="department_name"
                      // disabled={mutation.isLoading}
                    />
                  </div>

                  <div className="form__wrap">
                    <InputText
                      label="Learning Type"
                      type="text"
                      name="department_name"
                      // disabled={mutation.isLoading}
                    />
                  </div>

                  <div className="form__wrap">
                    <InputText
                      label="Learning Reference No."
                      type="text"
                      name="department_name"
                      // disabled={mutation.isLoading}
                    />
                  </div>

                  <div className="form__wrap">
                    <InputText
                      label="Grade Level"
                      type="text"
                      name="department_name"
                      // disabled={mutation.isLoading}
                    />
                  </div>
                </div>

                <h5 className="mb-2">Profile</h5>
                <div className="grid grid-cols-3 gap-x-3">
                  <div className="form__wrap">
                    <InputText
                      label="Last Name (Suffix)"
                      type="text"
                      name="department_name"
                      // disabled={mutation.isLoading}
                    />
                  </div>

                  <div className="form__wrap">
                    <InputText
                      label="First Name"
                      type="text"
                      name="department_name"
                      // disabled={mutation.isLoading}
                    />
                  </div>

                  <div className="form__wrap">
                    <InputText
                      label="Middle Name"
                      type="text"
                      name="department_name"
                      // disabled={mutation.isLoading}
                    />
                  </div>

                  <div className="form__wrap">
                    <InputText
                      label="Gender"
                      type="text"
                      name="department_name"
                      // disabled={mutation.isLoading}
                    />
                  </div>

                  <div className="form__wrap">
                    <InputText
                      label="Birthday"
                      type="text"
                      name="department_name"
                      // disabled={mutation.isLoading}
                    />
                  </div>

                  <div className="form__wrap">
                    <InputText
                      label="Birth Place"
                      type="text"
                      name="department_name"
                      // disabled={mutation.isLoading}
                    />
                  </div>
                  <div className="form__wrap">
                    <InputText
                      label="Email"
                      type="text"
                      name="department_name"
                      // disabled={mutation.isLoading}
                    />
                  </div>
                  <div className="form__wrap">
                    <InputText
                      label="Mobile"
                      type="text"
                      name="department_name"
                      // disabled={mutation.isLoading}
                    />
                  </div>
                  <div className="form__wrap">
                    <InputText
                      label="Landline (Optional)"
                      type="text"
                      name="department_name"
                      // disabled={mutation.isLoading}
                    />
                  </div>
                </div>

                <h5 className="mb-2">Address</h5>
                <div className="grid grid-cols-1 gap-x-3">
                  <div className="form__wrap">
                    <InputText
                      label="Select Parent Address"
                      type="text"
                      name="department_name"
                      // disabled={mutation.isLoading}
                    />
                  </div>
                </div>

                <h5 className="mb-2">Last School </h5>
                <div className="grid grid-cols-[400px_1fr_1fr] gap-x-3">
                  <div className="form__wrap">
                    <InputText
                      label="Last School Name"
                      type="text"
                      name="department_name"
                      // disabled={mutation.isLoading}
                    />
                  </div>
                  <div className="form__wrap">
                    <InputText
                      label="GPA Last School Year"
                      type="text"
                      name="department_name"
                      // disabled={mutation.isLoading}
                    />
                  </div>
                  <div className="form__wrap">
                    <InputText
                      label="Grade Level Last School Year"
                      type="text"
                      name="department_name"
                      // disabled={mutation.isLoading}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-x-3">
                  <div className="form__wrap">
                    <InputText
                      label="Select Parent Address"
                      type="text"
                      name="department_name"
                      // disabled={mutation.isLoading}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-x-3">
                  <div className="form__wrap">
                    <InputTextArea
                      label="Was the student ever submitted to any form of disciplinary action? If so, why?"
                      type="text"
                      name="department_name"
                      // disabled={mutation.isLoading}
                    />
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default StudentProfileForm;
