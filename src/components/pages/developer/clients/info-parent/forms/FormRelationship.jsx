import { InputSelect, InputText } from "@/components/helpers/FormInputs";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";

const FormRelationship = ({ handleDismissParent }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(`/v2/dev-grade-level/${grade_level_aid}`, "put", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["grade-level"] });

      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Record successfully updated.`));
      }
    },
  });

  const initVal = {
    parent_guardian_info_relationship_id: "",
    parent_guardian_info_reside: "",
  };

  const yupSchema = Yup.object({});

  console.log(store.credentials);

  return (
    <>
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
                <h6 className="mb-4">Relationship</h6>
                <div className="form__wrap">
                  <InputText
                    label="relationship id"
                    type="text"
                    name="parent_guardian_info_relationship_id"
                    disabled={mutation.isLoading}
                  />
                </div>

                <div className="form__wrap text-xs mb-3">
                  <InputSelect
                    label="Select yes if pre school"
                    name="parent_guardian_info_reside"
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

                <ul className="flex gap-2 mt-6">
                  <li>
                    <button className="btn btn--accent" type="submit">
                      <ButtonSpinner /> Save
                    </button>
                  </li>
                  <li>
                    <button
                      className="btn btn--cancel"
                      onClick={handleDismissParent}
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
    </>
  );
};

export default FormRelationship;
