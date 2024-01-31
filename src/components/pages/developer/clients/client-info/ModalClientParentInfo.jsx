import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import { InputSelect, InputText } from "@/components/helpers/FormInputs";
import { getUrlParam } from "@/components/helpers/functions-general.jsx";
import { queryData } from "@/components/helpers/queryData";
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

const ModalClientParentInfo = ({
  itemEdit,
  setShowParentForm,
  setItemEdit,
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

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v2/dev-info-parent/${itemEdit.parent_guardian_info_aid}`
          : "/v2/dev-info-parent",
        itemEdit ? "PUT" : "POST",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["parentInfo"] });

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
    parent_guardian_info_aid: itemEdit ? itemEdit.parent_guardian_info_aid : "",
    parent_guardian_info_relationship_id: itemEdit
      ? itemEdit.parent_guardian_info_relationship_id
      : "",
    parent_guardian_info_reside: itemEdit
      ? itemEdit.parent_guardian_info_reside
      : "",
    parent_guardian_info_salutation: itemEdit
      ? itemEdit.parent_guardian_info_salutation
      : "",
    parent_guardian_info_fname: itemEdit
      ? itemEdit.parent_guardian_info_fname
      : "",
    parent_guardian_info_lname: itemEdit
      ? itemEdit.parent_guardian_info_lname
      : "",
    parent_guardian_info_mname: itemEdit
      ? itemEdit.parent_guardian_info_mname
      : "",
    parent_guardian_info_maiden_name: itemEdit
      ? itemEdit.parent_guardian_info_maiden_name
      : "",
    parent_guardian_info_email: itemEdit
      ? itemEdit.parent_guardian_info_email
      : "",
    parent_guardian_info_mobile: itemEdit
      ? itemEdit.parent_guardian_info_mobile
      : "",
    parent_guardian_info_landline: itemEdit
      ? itemEdit.parent_guardian_info_landline
      : "",
    parent_guardian_info_address: itemEdit
      ? itemEdit.parent_guardian_info_address
      : "",
    parent_guardian_info_province: itemEdit
      ? itemEdit.parent_guardian_info_province
      : "",
    parent_guardian_info_city: itemEdit
      ? itemEdit.parent_guardian_info_city
      : "",
    parent_guardian_info_zipcode: itemEdit
      ? itemEdit.parent_guardian_info_zipcode
      : "",
    parent_guardian_info_religion: itemEdit
      ? itemEdit.parent_guardian_info_religion
      : "",
    parent_guardian_info_occupation: itemEdit
      ? itemEdit.parent_guardian_info_occupation
      : "",

    parent_guardian_info_fname_old: itemEdit
      ? itemEdit.parent_guardian_info_fname
      : "",
    parent_guardian_info_lname_old: itemEdit
      ? itemEdit.parent_guardian_info_lname
      : "",
  };

  const yupSchema = Yup.object({
    parent_guardian_info_relationship_id: Yup.string().required("Required"),
    parent_guardian_info_salutation: Yup.string().required("Required"),
    parent_guardian_info_reside: Yup.string().required("Required"),
    parent_guardian_info_fname: Yup.string().required("Required"),
    parent_guardian_info_lname: Yup.string().required("Required"),
    parent_guardian_info_maiden_name:
      getRelationship === "Biological Mother"
        ? Yup.string().required("Required")
        : null,
    parent_guardian_info_email: Yup.string()
      .required("Required")
      .email("Invalid email"),
    parent_guardian_info_mobile: Yup.string().required("Required"),
    parent_guardian_info_address: Yup.string().required("Required"),
    parent_guardian_info_province: Yup.string().required("Required"),
    parent_guardian_info_city: Yup.string().required("Required"),
    parent_guardian_info_zipcode: Yup.string().required("Required"),
    parent_guardian_info_religion: Yup.string().required("Required"),
    parent_guardian_info_occupation: Yup.string().required("Required"),
  });

  const handleChangeRelationship = (e) => {
    const selectedRelationship = e.target.options[e.target.selectedIndex].text;
    setGetRelationship(selectedRelationship);
  };

  return (
    <div className="clientinfo__block mt-3 p-4 bg-primary border border-line shadow-sm rounded-sm max-w-[620px] w-full mb-5 relative">
      <h4>Parent Information</h4>

      <Formik
        initialValues={initVal}
        validationSchema={yupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          console.log(values);
          mutation.mutate({ ...values, parent_guardian_info_user_id: id });
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

              <div className="grid grid-cols-2 gap-4">
                <div className="form__wrap">
                  <InputSelect
                    label="Client Relationship"
                    type="text"
                    name="parent_guardian_info_relationship_id"
                    disabled={mutation.isLoading}
                    onChange={(e) => handleChangeRelationship(e)}
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
                    name="parent_guardian_info_reside"
                    disabled={mutation.isLoading}
                    onChange={(e) => e}
                  >
                    <optgroup label="Select Option">
                      <option value="" hidden>
                        --
                      </option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </optgroup>
                  </InputSelect>
                </div>
              </div>

              <h6 className="my-3 flex gap-2 items-center">
                <RiProfileLine className="text-lg" />
                Name
              </h6>

              <div className="grid grid-cols-[100px_1fr_1fr] gap-4">
                <div className="form__wrap">
                  <InputSelect
                    label="Title"
                    name="parent_guardian_info_salutation"
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
                    name="parent_guardian_info_fname"
                    disabled={mutation.isLoading}
                  />
                </div>
                <div className="form__wrap">
                  <InputText
                    label="Last Name"
                    type="text"
                    name="parent_guardian_info_lname"
                    disabled={mutation.isLoading}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="form__wrap">
                  <InputText
                    label="Middle Name"
                    type="text"
                    name="parent_guardian_info_mname"
                    disabled={mutation.isLoading}
                  />
                </div>

                <div className="form__wrap">
                  <InputText
                    label="Maiden Name"
                    type="text"
                    name="parent_guardian_info_maiden_name"
                    disabled={
                      getRelationship === "Biological Mother" ? false : true
                    }
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
                  name="parent_guardian_info_email"
                  disabled={mutation.isLoading}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="form__wrap">
                  <InputText
                    label="Mobile"
                    type="text"
                    name="parent_guardian_info_mobile"
                    disabled={mutation.isLoading}
                  />
                </div>
                <div className="form__wrap">
                  <InputText
                    label="Landline"
                    type="text"
                    name="parent_guardian_info_landline"
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
                  name="parent_guardian_info_address"
                  disabled={mutation.isLoading}
                />
              </div>
              <div className="grid grid-cols-[1fr_1fr_100px] gap-4">
                <div className="form__wrap">
                  <InputText
                    label="City"
                    type="text"
                    name="parent_guardian_info_city"
                    disabled={mutation.isLoading}
                  />
                </div>
                <div className="form__wrap">
                  <InputText
                    label="Province"
                    type="text"
                    name="parent_guardian_info_province"
                    disabled={mutation.isLoading}
                  />
                </div>
                <div className="form__wrap">
                  <InputText
                    label="Zip Code"
                    type="text"
                    name="parent_guardian_info_zipcode"
                    disabled={mutation.isLoading}
                  />
                </div>
              </div>

              <h6 className="my-3 flex gap-2 items-center">
                <LiaHardHatSolid className="text-lg" />
                Other
              </h6>

              <div className="grid grid-cols-2 gap-4">
                <div className="form__wrap">
                  <InputText
                    label="Religion"
                    type="text"
                    name="parent_guardian_info_religion"
                    disabled={mutation.isLoading}
                  />
                </div>
                <div className="form__wrap">
                  <InputText
                    label="Occupation"
                    type="text"
                    name="parent_guardian_info_occupation"
                    disabled={mutation.isLoading}
                  />
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ModalClientParentInfo;
