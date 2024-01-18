import { InputText } from "@/components/helpers/FormInputs.jsx";
import { queryData } from "@/components/helpers/queryData.jsx";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner.jsx";
import {
  setError,
  setMessage,
  setSuccess,
} from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const FormContact = ({
  handleDismissContact,
  itemEdit,
  setFormIndexParent,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        `/v2/dev-info-parent-contact-update/${
          store.lastIdInserted !== null
            ? store.lastIdInserted
            : itemEdit.parent_guardian_info_aid
        }`,
        "put",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["parent"] });
      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        setFormIndexParent(3);
        dispatch(setSuccess(true));
        dispatch(setMessage(`Record successfully updated`));
      }
    },
  });

  const initVal = {
    parent_guardian_info_aid: itemEdit ? itemEdit.parent_guardian_info_aid : "",
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
  };

  const yupSchema = Yup.object({});

  return (
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
            <div className="form__block max-w-[650px] min-h-[460px]">
              <h6 className="mb-4">Contact</h6>
              <div className="grid grid-cols-2 gap-x-5">
                <div className="form__wrap">
                  <InputText
                    type="text"
                    label="Email"
                    name="parent_guardian_info_email"
                  />
                </div>

                <div className="form__wrap">
                  <InputText
                    type="text"
                    label="Mobile"
                    name="parent_guardian_info_mobile"
                  />
                </div>

                <div className="form__wrap">
                  <InputText
                    type="text"
                    label="Landline"
                    name="parent_guardian_info_landline"
                  />
                </div>

                <div className="form__wrap">
                  <InputText
                    type="text"
                    label="Address"
                    name="parent_guardian_info_address"
                  />
                </div>

                <div className="form__wrap">
                  <InputText
                    type="text"
                    label="Province"
                    name="parent_guardian_info_province"
                  />
                </div>

                <div className="form__wrap">
                  <InputText
                    type="text"
                    label="City"
                    name="parent_guardian_info_city"
                  />
                </div>

                <div className="form__wrap">
                  <InputText
                    type="text"
                    label="Zipcode"
                    name="parent_guardian_info_zipcode"
                  />
                </div>
              </div>

              <ul className="flex gap-2 mt-6">
                <li>
                  <button className="btn btn--accent" type="submit">
                    {mutation.loading ? <ButtonSpinner /> : "Save"}
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn--cancel"
                    onClick={handleDismissContact}
                    disabled={mutation.isLoading}
                  >
                    Dismiss
                  </button>
                </li>
              </ul>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormContact;
