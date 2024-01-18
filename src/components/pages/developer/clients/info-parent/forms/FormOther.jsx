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

const FormOther = ({
  handleDismissFinancial,
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

  const initVal = {};
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
            <div className="form__block max-w-[350px] min-h-[460px]">
              <h6 className="mb-4">Other</h6>
              <div className="form__wrap">
                <InputText
                  type="text"
                  label="Father Monthly Income"
                  name="parent_guardian_info_city"
                />
              </div>

              <div className="form__wrap">
                <InputText
                  type="text"
                  label="Mother Monthly Income"
                  name="parent_guardian_info_city"
                />
              </div>

              <div className="form__wrap">
                <InputText
                  type="text"
                  label="Full Name"
                  name="parent_guardian_info_city"
                />
              </div>

              <div className="form__wrap">
                <InputText
                  type="text"
                  label="Relationship"
                  name="parent_guardian_info_city"
                />
              </div>

              <div className="form__wrap">
                <InputText
                  type="text"
                  label="Occupation"
                  name="parent_guardian_info_city"
                />
              </div>

              <div className="form__wrap">
                <InputText
                  type="text"
                  label="Monthly Income"
                  name="parent_guardian_info_city"
                />
              </div>

              <ul className="flex gap-2 mt-6">
                <li>
                  <button className="btn btn--accent">Save</button>
                </li>
                <li>
                  <button
                    className="btn btn--cancel"
                    onClick={handleDismissFinancial}
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

export default FormOther;
