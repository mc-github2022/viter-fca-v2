import { InputText } from "@/components/helpers/FormInputs.jsx";
import { setIsAdd } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
const FormBasic = (props) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleClose = () => props.setShowParentForm(false);

  const handleSubmit = (values) => {
    props.next(values);
  };

  const validationSchemaBasic = Yup.object({
    parent_guardian_info_relationship_id: Yup.string().required("Required"),
    parent_guardian_info_reside: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={props.formData}
      onSubmit={handleSubmit}
      validationSchema={validationSchemaBasic}
    >
      {() => {
        return (
          <Form>
            <div className={`form__basic block"`}>
              <div className="grid grid-cols-3 gap-2">
                <div className="form__wrap">
                  <InputText
                    label="Relationship to Student"
                    type="text"
                    name="parent_guardian_info_relationship_id"
                  />
                </div>

                <div className="form__wrap">
                  <InputText
                    label="Resided with child"
                    type="text"
                    name="parent_guardian_info_reside"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-3 w-full">
                <button className="btn btn--accent" type="submit">
                  Next
                </button>
                <button
                  className="btn btn--cancel ml-auto"
                  onClick={handleClose}
                >
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

export default FormBasic;
