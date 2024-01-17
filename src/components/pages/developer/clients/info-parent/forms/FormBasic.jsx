import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import { InputSelect, InputText } from "@/components/helpers/FormInputs";
import { queryData } from "@/components/helpers/queryData.jsx";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import {
  setError,
  setLastIdInserted,
  setMessage,
  setSuccess,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const FormBasic = ({ handleDismissParent, itemEdit, setFormIndexParent }) => {
  const { store, dispatch } = React.useContext(StoreContext);
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
          ? `/v2/dev-info-parent-basic-update/${itemEdit.parent_guardian_info_aid}`
          : "/v2/dev-info-parent",
        itemEdit ? "put" : "post",
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
        dispatch(setLastIdInserted(data.last_id));
        setFormIndexParent(2);
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
  };

  const yupSchema = Yup.object({});

  return (
    <>
      <Formik
        initialValues={initVal}
        validationSchema={yupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          mutation.mutate({
            ...values,
            parent_guardian_info_user_id:
              store.credentials.data.user_system_aid,
          });
        }}
      >
        {(props) => {
          return (
            <Form>
              <div className="form__block max-w-[650px] min-h-[460px]">
                <h6 className="mb-4">Basic Information</h6>

                <div className="grid grid-cols-2 gap-x-5">
                  <div className="form__wrap">
                    <InputSelect
                      label="Relationship"
                      name="parent_guardian_info_relationship_id"
                      disabled={mutation.isLoading}
                      onChange={(e) => e}
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

                  <div className="form__wrap">
                    <InputText
                      label="Title"
                      name="parent_guardian_info_salutation"
                    />
                  </div>
                  <div className="form__wrap">
                    <InputText
                      label="First Name"
                      name="parent_guardian_info_fname"
                    />
                  </div>
                  <div className="form__wrap">
                    <InputText
                      label="First Name"
                      name="parent_guardian_info_lname"
                    />
                  </div>
                  <div className="form__wrap">
                    <InputText
                      label="Middle Name"
                      name="parent_guardian_info_mname"
                    />
                  </div>

                  <div className="form__wrap">
                    <InputText
                      label="Maiden Last Name"
                      name="parent_guardian_info_maiden_name"
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

export default FormBasic;
