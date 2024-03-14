import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { InputText, InputTextArea } from "../../../../helpers/FormInputs";
import { queryData } from "../../../../helpers/queryData";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import {
  setIsAdd,
  setMessage,
  setQuickEditID,
  setSuccess,
  setValidate,
} from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";

const QuickEditDepartment = ({ endpoint, dataItem, setData, queryKey, id }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData(endpoint, "put", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: [queryKey],
      });
      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully updated`));
        dispatch(setQuickEditID(0));
      }
      // show error box
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const initVal = {
    department_name: dataItem.department_name,
    department_description: dataItem.department_description,
    department_name_old: dataItem.department_name,
  };

  const yupSchema = Yup.object({
    department_name: Yup.string().required("Required"),
    department_description: Yup.string().required("Required"),
  });

  const closeQuickEdit = () => {
    dispatch(setQuickEditID(0));
    setData(null);
  };

  return (
    <>
      <div
        className={
          store.quickEditID === id
            ? "p-2 h-30 overflow-hidden w-full bg-gray-100"
            : "h-0 overflow-hidden"
        }
      >
        <h4 className="mb-2 text-xs text-gray-500">EDIT</h4>
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
                <div className="form__wrap flex flex-col">
                  <InputText
                    label="Name"
                    type="text"
                    name="department_name"
                    className="w-44 h-7"
                    disabled={mutation.isPending}
                  />
                </div>
                <div className="relative form__wrap">
                  <InputTextArea
                    label="Description"
                    type="text"
                    name="department_description"
                    disabled={mutation.isPending}
                  />
                </div>
                <div className="modal__action flex justify-start mt-4 gap-2">
                  <button
                    className="btn btn--primary btn--sm"
                    type="submit"
                    disabled={mutation.isPending || !props.dirty}
                  >
                    {mutation.isPending && <ButtonSpinner />}
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn--cancel btn--sm"
                    onClick={() => closeQuickEdit()}
                  >
                    Cancel
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

export default QuickEditDepartment;
