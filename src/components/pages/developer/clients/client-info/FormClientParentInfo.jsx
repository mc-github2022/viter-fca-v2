import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import { InputSelect, InputText } from "@/components/helpers/FormInputs";
import {
  getUrlParam,
  handleNumOnly,
} from "@/components/helpers/functions-general.jsx";
import { queryData } from "@/components/helpers/queryData";
import ModalValidate from "@/components/partials/modals/ModalValidate.jsx";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import {
  setError,
  setIsAdd,
  setIsSettingAdd,
  setMessage,
  setSuccess,
  setValidate,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { AiOutlineSave } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi2";
import { LiaHardHatSolid, LiaTimesSolid } from "react-icons/lia";
import { MdOutlineContactEmergency } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";
import { TfiLocationPin } from "react-icons/tfi";
import * as Yup from "yup";

const FormClientParentInfo = ({
  itemEdit,
  setShowParentForm,
  setItemEdit,
  hasBiologicalFather,
  hasBiologicalMother,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [getRelationship, setGetRelationship] = React.useState("");

  const id = getUrlParam().get("cid");

  const queryClient = useQueryClient();

  const {
    isLoading,
    isFetching,
    error,
    data: relationship,
  } = useQueryData(
    "/v2/dev-relationship", // endpoint
    "get", // method
    "relationship" // key
  );

  const activeRelationship = relationship?.data.filter(
    (relationship) => relationship.relationship_is_maiden === 1
  );

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v2/dev-info-guardian/${itemEdit.guardian_aid}`
          : "/v2/dev-info-guardian",
        itemEdit ? "PUT" : "POST",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["guardianInfo"] });

      // show error box
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      } else {
        setItemEdit(null);
        setShowParentForm(false);
        dispatch(setSuccess(true));

        dispatch(
          setMessage(`Record successfully ${itemEdit ? "updated" : "added"}.`)
        );
      }
    },
  });

  const initVal = {
    guardian_aid: itemEdit ? itemEdit.guardian_aid : "",
    guardian_relationship_id: itemEdit ? itemEdit.guardian_relationship_id : "",
    guardian_is_reside: itemEdit ? itemEdit.guardian_is_reside : "",
    guardian_salutation: itemEdit ? itemEdit.guardian_salutation : "",
    guardian_fname: itemEdit ? itemEdit.guardian_fname : "",
    guardian_lname: itemEdit ? itemEdit.guardian_lname : "",
    guardian_mname: itemEdit ? itemEdit.guardian_mname : "",
    guardian_maiden_name: itemEdit ? itemEdit.guardian_maiden_name : "",
    guardian_email: itemEdit ? itemEdit.guardian_email : "",
    guardian_mobile: itemEdit ? itemEdit.guardian_mobile : "",
    guardian_landline: itemEdit ? itemEdit.guardian_landline : "",
    guardian_address: itemEdit ? itemEdit.guardian_address : "",
    guardian_province: itemEdit ? itemEdit.guardian_province : "",
    guardian_city: itemEdit ? itemEdit.guardian_city : "",
    guardian_zipcode: itemEdit ? itemEdit.guardian_zipcode : "",
    guardian_country: itemEdit ? itemEdit.guardian_country : "",
    guardian_religion: itemEdit ? itemEdit.guardian_religion : "",
    guardian_occupation: itemEdit ? itemEdit.guardian_occupation : "",

    guardian_fname_old: itemEdit ? itemEdit.guardian_fname : "",
    guardian_lname_old: itemEdit ? itemEdit.guardian_lname : "",
    guardian_relationship_id_old: itemEdit
      ? itemEdit.guardian_relationship_id
      : "",
  };

  const yupSchema = Yup.object({
    guardian_relationship_id: Yup.string().required("Required"),
    guardian_salutation: Yup.string().required("Required"),
    guardian_is_reside: Yup.string().required("Required"),
    guardian_fname: Yup.string().required("Required"),
    guardian_lname: Yup.string().required("Required"),
    guardian_email: Yup.string().required("Required").email("Invalid email"),
    guardian_mobile: Yup.string().required("Required"),
    guardian_address: Yup.string().required("Required"),
    guardian_province: Yup.string().required("Required"),
    guardian_city: Yup.string().required("Required"),
    guardian_zipcode: Yup.string().required("Required"),
    guardian_country: Yup.string().required("Required"),
    guardian_religion: Yup.string().required("Required"),
    guardian_occupation: Yup.string().required("Required"),
  });

  const handleChangeRelationship = (e) => {
    const selectedRelationship = e.target.options[e.target.selectedIndex].text;
    // if (hasBiologicalMother) {
    //   dispatch(setValidate(true));
    //   dispatch(setMessage("You already selected a biological Mother"));
    // } else if (hasBiologicalFather) {
    //   dispatch(setValidate(true));
    //   dispatch(setMessage("You already selected a biological Father"));
    // }

    setGetRelationship(selectedRelationship);
  };

  return (
    <div className="clientinfo__block mt-3 p-4 bg-primary border border-line shadow-sm rounded-md max-w-[620px] w-full mb-5 relative">
      <h4 className="mb-5">Parent Information</h4>

      <Formik
        initialValues={initVal}
        validationSchema={yupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          mutation.mutate({
            ...values,
            guardian_parent_id:
              //if id from url of developer is null then use parent login credentials id
              id === null ? store.credentials?.data.parents_aid : id,
          });
        }}
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
                    disabled={mutation.isLoading}
                  >
                    {mutation.isLoading ? <ButtonSpinner /> : <AiOutlineSave />}
                  </button>
                )}

                <button
                  className="text-2xl tooltip"
                  data-tooltip="Dismiss"
                  type="button"
                  onClick={() => setShowParentForm(false)}
                >
                  <LiaTimesSolid />
                </button>
              </div>

              <h6 className="my-3 flex gap-2 items-center">
                <HiOutlineUsers className="text-lg" />
                Relationship
              </h6>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="form__wrap">
                  <InputSelect
                    label="Parent/Guardian Relationship"
                    type="text"
                    name="guardian_relationship_id"
                    disabled={mutation.isLoading}
                  >
                    <option value="" hidden></option>

                    {isLoading || isFetching ? (
                      <option>Loading...</option>
                    ) : relationship?.data.length === 0 ? (
                      <option>No Data</option>
                    ) : (
                      relationship?.data.map((item, key) => {
                        return (
                          <option key={key} value={item.relationship_aid}>
                            {`${item.relationship_name}`}
                          </option>
                        );
                      })
                    )}
                  </InputSelect>
                </div>
                <div className="form__wrap">
                  <InputSelect
                    label="Resided with Child?"
                    type="text"
                    name="guardian_is_reside"
                    disabled={mutation.isLoading}
                    onChange={(e) => e}
                  >
                    <optgroup label="Select Option">
                      <option value="" hidden>
                        --
                      </option>
                      <option value="1">Yes</option>
                      <option value="0">No</option>
                    </optgroup>
                  </InputSelect>
                </div>
              </div>

              <h6 className="my-3 flex gap-2 items-center">
                <RiProfileLine className="text-lg" />
                Name
              </h6>

              <div className="grid md:grid-cols-[100px_1fr_1fr] gap-4">
                <div className="form__wrap">
                  <InputSelect
                    label="Title"
                    name="guardian_salutation"
                    disabled={mutation.isLoading}
                    onChange={(e) => e}
                  >
                    <optgroup label="Select Option">
                      <option value="" hidden>
                        --
                      </option>
                      <option value="mr">Mr.</option>
                      <option value="mrs">Mrs.</option>
                      <option value="ms">Ms.</option>
                      <option value="dr">Dr.</option>
                    </optgroup>
                  </InputSelect>
                </div>
                <div className="form__wrap">
                  <InputText
                    label="First Name"
                    type="text"
                    name="guardian_fname"
                    disabled={mutation.isLoading}
                  />
                </div>
                <div className="form__wrap">
                  <InputText
                    label="Last Name"
                    type="text"
                    name="guardian_lname"
                    disabled={mutation.isLoading}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="form__wrap">
                  <InputText
                    label="Middle Name"
                    type="text"
                    name="guardian_mname"
                    disabled={mutation.isLoading}
                  />
                </div>

                <div className="form__wrap">
                  <InputText
                    label="Maiden Name"
                    type="text"
                    name="guardian_maiden_name"
                  />
                </div>
              </div>

              <h6 className="my-3 flex gap-2 items-center">
                <MdOutlineContactEmergency className="text-lg" />
                Contact
              </h6>
              <div className="form__wrap">
                <InputText
                  label="Email"
                  type="email"
                  name="guardian_email"
                  disabled={mutation.isLoading}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="form__wrap">
                  <InputText
                    label="Mobile"
                    type="text"
                    name="guardian_mobile"
                    maxLength="11"
                    onKeyPress={handleNumOnly}
                    disabled={mutation.isLoading}
                  />
                </div>
                <div className="form__wrap">
                  <InputText
                    label="Landline"
                    type="text"
                    maxLength="7"
                    onKeyPress={handleNumOnly}
                    name="guardian_landline"
                    disabled={mutation.isLoading}
                  />
                </div>
              </div>

              <h6 className="my-3 flex gap-2 items-center">
                <TfiLocationPin className="text-lg" />
                Location
              </h6>
              <div className="form__wrap">
                <InputText
                  label="Address"
                  type="text"
                  name="guardian_address"
                  disabled={mutation.isLoading}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="form__wrap">
                  <InputText
                    label="City"
                    type="text"
                    name="guardian_city"
                    disabled={mutation.isLoading}
                  />
                </div>
                <div className="form__wrap">
                  <InputText
                    label="Province"
                    type="text"
                    name="guardian_province"
                    disabled={mutation.isLoading}
                  />
                </div>
                <div className="form__wrap">
                  <InputText
                    label="Zip Code"
                    type="text"
                    maxLength="4"
                    onKeyPress={handleNumOnly}
                    name="guardian_zipcode"
                    disabled={mutation.isLoading}
                  />
                </div>
                <div className="form__wrap">
                  <InputText
                    label="Country"
                    type="text"
                    name="guardian_country"
                    disabled={mutation.isLoading}
                  />
                </div>
              </div>

              <h6 className="my-3 flex gap-2 items-center">
                <LiaHardHatSolid className="text-lg" />
                Other
              </h6>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="form__wrap">
                  <InputText
                    label="Religion"
                    type="text"
                    name="guardian_religion"
                    disabled={mutation.isLoading}
                  />
                </div>
                <div className="form__wrap">
                  <InputText
                    label="Occupation"
                    type="text"
                    name="guardian_occupation"
                    disabled={mutation.isLoading}
                  />
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
      {store.validate && <ModalValidate />}
    </div>
  );
};

export default FormClientParentInfo;
