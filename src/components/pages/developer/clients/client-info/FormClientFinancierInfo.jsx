import { InputSelect, InputText } from "@/components/helpers/FormInputs";
import { getUrlParam } from "@/components/helpers/functions-general.jsx";
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

const FormClientFinancierInfo = ({
  itemEdit,
  setShowFinancierForm,
  setItemEdit,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const id = getUrlParam().get("cid");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v2/dev-info-financial/${itemEdit.financial_info_aid}`
          : "/v2/dev-info-financial",
        itemEdit ? "PUT" : "POST",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["financierInfo"] });

      // show error box
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      } else {
        setItemEdit(null);
        setShowFinancierForm(false);
        dispatch(setSuccess(true));

        dispatch(
          setMessage(`Record successfully ${itemEdit ? "updated" : "added"}.`)
        );
      }
    },
  });

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
    financial_info_financier_full_name_old: itemEdit
      ? itemEdit.financial_info_financier_full_name
      : "",
  };

  const yupSchema = Yup.object({});

  return (
    <div className="clientinfo__block mt-3 p-4 bg-primary border border-line shadow-sm rounded-md max-w-[620px] w-full mb-5 relative">
      <h4 className="mb-5">Financier Information</h4>
      <Formik
        initialValues={initVal}
        validationSchema={yupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          mutation.mutate({ ...values, financial_info_user_id: id });
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
                  onClick={() => setShowFinancierForm(false)}
                >
                  <LiaTimesSolid />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="form__wrap">
                  <InputText
                    label="Father's Income"
                    type="text"
                    name="financial_info_father_income"
                    disabled={mutation.isLoading}
                  />
                </div>
                <div className="form__wrap">
                  <InputText
                    label="Mother's Income"
                    type="text"
                    name="financial_info_mother_income"
                    disabled={mutation.isLoading}
                  />
                </div>
                <div className="form__wrap">
                  <InputText
                    label="Financier"
                    type="text"
                    name="financial_info_financier_full_name"
                    disabled={mutation.isLoading}
                  />
                </div>
                <div className="form__wrap">
                  <InputText
                    label="Financier's Income"
                    type="text"
                    name="financial_info_financier_income"
                    disabled={mutation.isLoading}
                  />
                </div>
                <div className="form__wrap">
                  <InputText
                    label="Relationship"
                    type="text"
                    name="financial_info_financier_relationship"
                    disabled={mutation.isLoading}
                  />
                </div>
                <div className="form__wrap">
                  <InputText
                    label="Occupation"
                    type="text"
                    name="financial_info_financier_occupation"
                    disabled={mutation.isLoading}
                  />
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormClientFinancierInfo;