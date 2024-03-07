import { InputSelect, InputText } from "@/components/helpers/FormInputs";
import {
  getUrlParam,
  handleNumOnly,
} from "@/components/helpers/functions-general.jsx";
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
  financierInfo,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const id = getUrlParam().get("cid");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        `/v2/dev-update-parents-financier/${
          id === null ? store.credentials?.data.parents_aid : id
        }`,
        "PUT",
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
    parents_aid: itemEdit ? itemEdit.parents_aid : "",
    parents_father_income: itemEdit ? itemEdit.parents_father_income : "",
    parents_mother_income: itemEdit ? itemEdit.parents_mother_income : "",
    financial_info_financier_income: itemEdit
      ? itemEdit.financial_info_financier_income
      : "",
    parents_financier_name: itemEdit ? itemEdit.parents_financier_name : "",

    parents_financier_income: itemEdit ? itemEdit.parents_financier_income : "",
    parents_financier_occupation: itemEdit
      ? itemEdit.parents_financier_occupation
      : "",
    parents_financier_relationship: itemEdit
      ? itemEdit.parents_financier_relationship
      : "",
  };

  const yupSchema = Yup.object({
    parents_financier_name: Yup.string().required("Required"),
    parents_financier_income: Yup.number().required("Required"),
    parents_financier_relationship: Yup.string().required("Required"),
    parents_financier_occupation: Yup.string().required("Required"),
  });

  return (
    <div className="clientinfo__block mt-3 p-4 bg-primary border border-line shadow-sm rounded-md max-w-[620px] w-full mb-5 relative">
      <h4 className="mb-5">Financial Information</h4>
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

              <div className="grid md:grid-cols-2 gap-4">
                <div className="form__wrap">
                  <InputText
                    label="Father's Income (Optional)"
                    type="text"
                    name="parents_father_income"
                    onKeyPress={handleNumOnly}
                    disabled={mutation.isLoading}
                  />
                </div>
                <div className="form__wrap">
                  <InputText
                    label="Mother's Income (Optional)"
                    type="text"
                    name="parents_mother_income"
                    onKeyPress={handleNumOnly}
                    disabled={mutation.isLoading}
                  />
                </div>
                <div className="form__wrap">
                  <InputText
                    label="Financer Name"
                    type="text"
                    name="parents_financier_name"
                    disabled={mutation.isLoading}
                  />
                </div>
                <div className="form__wrap">
                  <InputText
                    label="Financer Income"
                    type="text"
                    onKeyPress={handleNumOnly}
                    name="parents_financier_income"
                    disabled={mutation.isLoading}
                  />
                </div>
                <div className="form__wrap">
                  <InputText
                    label="Financier Relationship"
                    type="text"
                    name="parents_financier_relationship"
                    disabled={mutation.isLoading}
                  />
                </div>
                <div className="form__wrap">
                  <InputText
                    label="Financier Occupation"
                    type="text"
                    name="parents_financier_occupation"
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
