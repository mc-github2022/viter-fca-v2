import { InputSelect, InputText } from "@/components/helpers/FormInputs";
import { queryData } from "@/components/helpers/queryData";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import {
  setError,
  setIsSettingAdd,
  setMessage,
  setSuccess,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const ParentRelationshipFormAddEdit = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const handleClose = () => {
    dispatch(setIsSettingAdd(false));
  };

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v2/dev-relationship/${itemEdit.relationship_aid}`
          : "/v2/dev-relationship",
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["relationship"] });

      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        dispatch(setIsSettingAdd(false));
        dispatch(setSuccess(true));
        dispatch(
          setMessage(`Record successfully ${itemEdit ? "updated" : "added"}.`)
        );
      }
    },
  });

  const initVal = {
    relationship_aid: itemEdit ? itemEdit.relationship_aid : "",
    relationship_name: itemEdit ? itemEdit.relationship_name : "",
    relationship_is_maiden: itemEdit ? itemEdit.relationship_is_maiden : "",
    relationship_name_old: itemEdit ? itemEdit.relationship_name : "",
  };

  const yupSchema = Yup.object({
    relationship_name: Yup.string().required("Required"),
    relationship_is_maiden: Yup.string().required("Required"),
  });
  return (
    <>
      <div className="settings__addEdit mb-8 max-w-[350px] w-full">
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
                <div className="form__wrap text-xs mb-3">
                  <InputText
                    label="Name"
                    type="text"
                    name="relationship_name"
                    disabled={mutation.isPending}
                  />
                </div>

                <div className="form__wrap text-xs mb-3">
                  <InputSelect
                    label="Select yes if biological mother"
                    name="relationship_is_maiden"
                    disabled={mutation.isPending}
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

                <div className={` settings__actions flex gap-2 mt-4`}>
                  <button className="btn btn--accent" type="submit">
                    {mutation.isPending ? (
                      <ButtonSpinner />
                    ) : itemEdit ? (
                      "Save"
                    ) : (
                      "Add"
                    )}
                  </button>
                  <button
                    className="btn btn--cancel"
                    type="button"
                    onClick={handleClose}
                    disabled={mutation.isPending}
                  >
                    Discard
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default ParentRelationshipFormAddEdit;
