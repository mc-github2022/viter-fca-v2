import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Form, Formik } from "formik";
import { InputText, InputTextArea } from "@/components/helpers/FormInputs";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import * as Yup from "yup";
import { queryData } from "@/components/helpers/queryData";

const DepartmentFormAddEdit = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v2/dev-department/${itemEdit.department_aid}`
          : "/v2/dev-department",
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["department"] });

      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        dispatch(setIsAdd(itemEdit ? false : true));
        dispatch(setSuccess(true));
        dispatch(
          setMessage(`Record successfully ${itemEdit ? "updated" : "added"}.`)
        );
      }
    },
  });

  const initVal = {
    department_aid: itemEdit ? itemEdit.department_aid : "",
    department_name: itemEdit ? itemEdit.department_name : "",
    department_description: itemEdit ? itemEdit.department_description : "",
    department_name_old: itemEdit ? itemEdit.department_name : "",
  };

  const yupSchema = Yup.object({
    department_name: Yup.string().required("Required"),
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
                    name="department_name"
                    disabled={mutation.isLoading}
                  />
                </div>

                <div className="form__wrap text-xs mb-3 ">
                  <InputTextArea
                    label="Name"
                    name="department_description"
                    disabled={mutation.isLoading}
                  />
                </div>

                <div
                  className={`${
                    mutation.isLoading || !props.dirty ? "hidden" : ""
                  } settings__actions flex gap-2`}
                >
                  <button className="btn btn--accent" type="submit">
                    {mutation.isLoading ? (
                      <ButtonSpinner />
                    ) : itemEdit ? (
                      "Save"
                    ) : (
                      "Add"
                    )}
                  </button>
                  <button
                    className="btn btn--cancel"
                    type="cancel"
                    onClick={handleClose}
                    disabled={mutation.isLoading}
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

export default DepartmentFormAddEdit;
