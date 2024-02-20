import { InputSelect, InputText } from "@/components/helpers/FormInputs";
import {
  getUrlParam,
  handleNumOnly,
} from "@/components/helpers/functions-general.jsx";
import { queryData } from "@/components/helpers/queryData";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import {
  setMessage,
  setSuccess,
  setValidate,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { AiOutlineSave } from "react-icons/ai";
import { LiaTimesSolid } from "react-icons/lia";
import { MdOutlineContactEmergency } from "react-icons/md";
import * as Yup from "yup";

const FormClientContactInfo = ({
  itemEdit,
  setShowContactForm,
  setItemEdit,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const id = getUrlParam().get("cid");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v2/dev-info-contact/${itemEdit.emergency_contact_aid}`
          : "/v2/dev-info-contact",
        itemEdit ? "PUT" : "POST",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["contactInfo"] });

      // show error box
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      } else {
        setItemEdit(null);
        setShowContactForm(false);
        dispatch(setSuccess(true));

        dispatch(
          setMessage(`Record successfully ${itemEdit ? "updated" : "added"}.`)
        );
      }
    },
  });

  const initVal = {
    emergency_contact_aid: itemEdit ? itemEdit.emergency_contact_aid : "",
    emergency_contact_name: itemEdit ? itemEdit.emergency_contact_name : "",
    emergency_contact_email: itemEdit ? itemEdit.emergency_contact_email : "",
    emergency_contact_mobile: itemEdit ? itemEdit.emergency_contact_mobile : "",
    emergency_contact_landline: itemEdit
      ? itemEdit.emergency_contact_landline
      : "",
    emergency_contact_level: itemEdit ? itemEdit.emergency_contact_level : "",
    emergency_contact_name_old: itemEdit ? itemEdit.emergency_contact_name : "",
  };

  const yupSchema = Yup.object({
    emergency_contact_name: Yup.string().required("Required"),
    emergency_contact_email: Yup.string()
      .required("Required")
      .email("Invalid Email"),
    emergency_contact_mobile: Yup.string().required("Required"),
    emergency_contact_level: Yup.string().required("Required"),
  });

  return (
    <div className="clientinfo__block mt-3 p-4 bg-primary border border-line shadow-sm rounded-md max-w-[620px] w-full mb-5 relative">
      <h4 className="mb-5">Emergency Contact</h4>
      <Formik
        initialValues={initVal}
        validationSchema={yupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          mutation.mutate({ ...values, emergency_contact_parent_id: id });
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
                  onClick={() => setShowContactForm(false)}
                >
                  <LiaTimesSolid />
                </button>
              </div>

              <h6 className="my-3 flex gap-2 items-center">
                <MdOutlineContactEmergency className="text-lg" />
                Contact
              </h6>
              <div className="form__wrap">
                <InputText
                  label="Full Name"
                  type="text"
                  name="emergency_contact_name"
                  disabled={mutation.isLoading}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="form__wrap">
                  <InputText
                    label="Email"
                    type="email"
                    name="emergency_contact_email"
                    disabled={mutation.isLoading}
                  />
                </div>
                <div className="form__wrap">
                  <InputText
                    label="Mobile"
                    type="text"
                    name="emergency_contact_mobile"
                    maxLength="11"
                    onKeyPress={handleNumOnly}
                    disabled={mutation.isLoading}
                  />
                </div>
                <div className="form__wrap">
                  <InputText
                    label="Landline"
                    type="text"
                    name="emergency_contact_landline"
                    maxLength="7"
                    onKeyPress={handleNumOnly}
                    disabled={mutation.isLoading}
                  />
                </div>

                <div className="form__wrap">
                  <InputSelect
                    label="Prioriry Level"
                    type="text"
                    name="emergency_contact_level"
                    disabled={mutation.isLoading}
                    onChange={(e) => e}
                  >
                    <optgroup label="Select Option">
                      <option value="" hidden>
                        --
                      </option>
                      <option value="primary">Primary</option>
                      <option value="secondary">Secondary</option>
                      <option value="other">Other</option>
                    </optgroup>
                  </InputSelect>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormClientContactInfo;
