import { InputSelect, InputText } from "@/components/helpers/FormInputs.jsx";
import { queryData } from "@/components/helpers/queryData.jsx";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const FinancialForm = ({ itemEdit, setShowFinancial }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const getClientId = store.credentials.data?.user_system_aid;

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v2/dev-info-financial/${itemEdit.financial_info_aid}`
          : "/v2/dev-info-financial",
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["financialInfo"] });

      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        setShowFinancial(false);
        dispatch(setSuccess(true));
        dispatch(
          setMessage(`Record successfully ${itemEdit ? "updated" : "added"}.`)
        );
      }
    },
  });

  const handleClose = () => {
    setShowFinancial(false);
    // props.setItemEdit(null);
  };

  const initVal = {
    financial_info_aid: itemEdit ? itemEdit.financial_info_aid : "",
    financial_info_father_income: itemEdit
      ? itemEdit.financial_info_father_income
      : "",
    financial_info_mother_income: itemEdit
      ? itemEdit.financial_info_mother_income
      : "",
    financial_info_financier_income: itemEdit
      ? itemEdit.financial_info_financier_income
      : "",
    financial_info_financier_full_name: itemEdit
      ? itemEdit.financial_info_financier_full_name
      : "",
    financial_info_financier_relationship: itemEdit
      ? itemEdit.financial_info_financier_relationship
      : "",
    financial_info_financier_occupation: itemEdit
      ? itemEdit.financial_info_financier_occupation
      : "",
  };
  const yupSchema = Yup.object({
    financial_info_financier_income: Yup.string().required("Required"),
    financial_info_financier_full_name: Yup.string().required("Required"),
    financial_info_financier_relationship: Yup.string().required("Required"),
    financial_info_financier_occupation: Yup.string().required("Required"),
  });

  return (
    <>
      <Formik
        initialValues={initVal}
        validationSchema={yupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          mutation.mutate({
            ...values,
            financial_info_user_id: getClientId,
          });
        }}
      >
        {(props) => {
          return (
            <div className="my-5 bg-primary rounded-md max-w-[900px] border-line border shadow-sm relative p-4 md:pl-0">
              <div className="gap-8 md:flex">
                <aside className="md:max-w-[220px] w-full px-4">
                  <h4>Financier Information</h4>
                </aside>
                <div className="w-full">
                  <Form>
                    <div className={`form__contact block`}>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="form__wrap">
                          <InputText
                            label="Father"
                            type="text"
                            name="financial_info_father_income"
                          />
                        </div>
                        <div className="form__wrap">
                          <InputText
                            label="Mother"
                            type="text"
                            name="financial_info_mother_income"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="form__wrap mb-0">
                          <InputText
                            label="Fullname"
                            type="text"
                            name="financial_info_financier_full_name"
                          />
                        </div>
                        <div className="form__wrap mb-0">
                          <InputText
                            label="Relationship"
                            type="text"
                            name="financial_info_financier_relationship"
                          />
                        </div>

                        <div className="form__wrap mb-0">
                          <InputText
                            label="Occupation"
                            type="text"
                            name="financial_info_financier_occupation"
                          />
                        </div>

                        <div className="form__wrap mb-0">
                          <InputText
                            label="Financier Income"
                            type="text"
                            name="financial_info_financier_income"
                          />
                        </div>
                      </div>

                      <div className="flex w-full mt-5">
                        <div className="flex gap-4">
                          <button className="btn btn--accent" type="submit">
                            Submit
                          </button>
                        </div>
                        <button
                          className="btn btn--cancel  ml-auto"
                          onClick={handleClose}
                        >
                          Return
                        </button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
    </>
  );
};

export default FinancialForm;
