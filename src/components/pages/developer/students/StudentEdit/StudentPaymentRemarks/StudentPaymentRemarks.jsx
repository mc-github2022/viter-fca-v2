import {
  InputCheckbox,
  InputText,
  InputTextArea,
} from "@/components/helpers/FormInputs.jsx";
import { queryData } from "@/components/helpers/queryData";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import {
  setMessage,
  setSuccess,
  setValidate,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const StudentPaymentRemarks = ({ showSideNav, dataItem, handleClose }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        `/v2/dev-students-payment-scheme/payment-remarks/${dataItem?.current_students_aid}`,
        "put",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["all-students"] });
      queryClient.invalidateQueries({ queryKey: ["students"] });
      queryClient.invalidateQueries({
        queryKey: ["read-student-by-current-sy-id"],
      });

      // show error box
      if (data.success) {
        // setIsViewInfo(false);
        dispatch(setSuccess(true));
        dispatch(setMessage("Record successfully updated."));
      }
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const initVal = {
    students_aid: dataItem.students_aid,
    current_students_sy_id: dataItem.current_students_sy_id,
    current_students_assessment_remarks:
      dataItem.current_students_assessment_remarks,
  };

  const yupSchema = Yup.object({});

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
            <>
              <Form>
                <div className="overflow-y-auto custom__scroll  z-30 modal__article">
                  <div
                    className={` ${
                      showSideNav
                        ? "max-w-[calc(1065px-0px)]"
                        : "max-w-[calc(1065px-200px)]"
                    } absolute -bottom-1 right-0 flex items-center justify-end gap-x-2  bg-primary z-20 max-w-[calc(1065px-200px)] pr-7 py-8 w-full `}
                  >
                    <div className="flex items-center gap-2">
                      {(store.credentials.data.role_is_parent !== 1 ||
                        dataItem.current_students_last_parent_declaration_is_agree ===
                          0) && (
                        <button
                          className="btn btn--accent"
                          type="submit"
                          disabled={mutation.isPending || !props.dirty}
                        >
                          {mutation.isPending ? <ButtonSpinner /> : "Save"}
                        </button>
                      )}
                      <button
                        className="btn btn--cancel"
                        type="button"
                        onClick={handleClose}
                        disabled={mutation.isPending}
                      >
                        Discard
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-x-3">
                    <div className="form__wrap">
                      <InputTextArea
                        label="Payment Remarks"
                        type="text"
                        name="current_students_assessment_remarks"
                        disabled={mutation.isPending}
                      />
                    </div>
                  </div>
                </div>
              </Form>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default StudentPaymentRemarks;
