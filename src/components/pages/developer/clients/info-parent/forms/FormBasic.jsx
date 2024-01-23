import { InputSelect, InputText } from "@/components/helpers/FormInputs.jsx";
import { setIsAdd } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
const FormBasic = (props) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [getRelationship, setGetRelationship] = React.useState("");
  const handleSubmit = (values) => {
    props.next(values);
  };
  const handleClose = () => {
    props.setShowParentForm(false);
    props.setItemEdit(null);
  };

  const handleChangeRelationship = (e) => {
    const selectedRelationship = e.target.options[e.target.selectedIndex].text;
    setGetRelationship(selectedRelationship);
  };

  const validationSchemaBasic = Yup.object({
    parent_guardian_info_relationship_id: Yup.string().required("Required"),
    parent_guardian_info_reside: Yup.string().required("Required"),
    parent_guardian_info_fname: Yup.string().required("Required"),
    parent_guardian_info_lname: Yup.string().required("Required"),
    parent_guardian_info_salutation: Yup.string().required("Required"),
    parent_guardian_info_maiden_name:
      getRelationship === "Biological Mother"
        ? Yup.string().required("Required")
        : null,
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
              <h6 className="mb-4 pb-2">Client Relationship</h6>
              <div className="grid grid-cols-2 gap-2">
                <div className="form__wrap mb-0">
                  <InputSelect
                    label="What's your relationship with the student"
                    name="parent_guardian_info_relationship_id"
                    onChange={(e) => handleChangeRelationship(e)}
                  >
                    <optgroup label="Role">
                      <option value="" hidden></option>
                      {props.listRelationship !== undefined ? (
                        props.listRelationship.map((item, key) => {
                          return (
                            <option key={key} value={item.relationship_aid}>
                              {item.relationship_name}
                            </option>
                          );
                        })
                      ) : (
                        <option value="" disabled>
                          No Data
                        </option>
                      )}
                    </optgroup>
                  </InputSelect>
                </div>

                <div className="form__wrap mb-0">
                  <InputSelect
                    label="Are you living with the child?"
                    type="text"
                    name="parent_guardian_info_reside"
                    onChange={(e) => e}
                  >
                    <optgroup label="Select">
                      <option value="">--</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </optgroup>
                  </InputSelect>
                </div>
              </div>

              <h6 className=" mt-5 mb-4 pb-2">Basic Parent Details</h6>
              <div className="grid grid-cols-[100px_1fr_1fr] gap-2 mb-3">
                <div className="form__wrap mb-0">
                  <InputSelect
                    label="Title"
                    type="text"
                    name="parent_guardian_info_salutation"
                    onChange={(e) => e}
                  >
                    <optgroup label="Select">
                      <option value="">--</option>
                      <option value="ms">Ms</option>
                      <option value="mr">Mr</option>
                      <option value="mrs">Mrs</option>
                      <option value="dr">Dr</option>
                    </optgroup>
                  </InputSelect>
                </div>

                <div className="form__wrap mb-0">
                  <InputText
                    label="First Name"
                    type="text"
                    name="parent_guardian_info_fname"
                  />
                </div>

                <div className="form__wrap mb-0">
                  <InputText
                    label="Last Name"
                    type="text"
                    name="parent_guardian_info_lname"
                  />
                </div>
              </div>

              <div className="grid grid-cols-[1fr_2fr] gap-2">
                <div className="form__wrap mb-0">
                  <InputText
                    label="Middle Name"
                    type="text"
                    name="parent_guardian_info_mname"
                  />
                </div>

                <div className="form__wrap mb-0">
                  <InputText
                    label="Maiden Last Name (for biological mother only)"
                    type="text"
                    name="parent_guardian_info_maiden_name"
                    disabled={
                      getRelationship === "Biological Mother" ? false : true
                    }
                  />
                </div>
              </div>
              <div className="flex gap-4 mt-5 w-full">
                <button className="btn btn--accent" type="submit">
                  Next
                </button>
                <button
                  className="btn btn--cancel ml-auto"
                  onClick={handleClose}
                >
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

export default FormBasic;
