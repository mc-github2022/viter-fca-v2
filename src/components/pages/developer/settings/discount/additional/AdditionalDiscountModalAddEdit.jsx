import useQueryData from "@/components/custom-hooks/useQueryData";
import {
  InputSelect,
  InputText,
  InputTextArea,
} from "@/components/helpers/FormInputs";
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

const AdditionalDiscountModalAddEdit = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const handleClose = () => {
    dispatch(setIsSettingAdd(false));
  };

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v2/dev-settings-discount-additional/${itemEdit.discount_additional_aid}`
          : "/v2/dev-settings-discount-additional",
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["discountAdditional"] });

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
    discount_additional_name: itemEdit ? itemEdit.discount_additional_name : "",
    discount_additional_percent: itemEdit
      ? itemEdit.discount_additional_percent
      : "",
    discount_additional_amount: itemEdit
      ? itemEdit.discount_additional_amount
      : "",

    discount_additional_name_old: itemEdit
      ? itemEdit.discount_additional_name
      : "",
  };

  const yupSchema = Yup.object({
    discount_additional_name: Yup.string().required("Required"),
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
                    name="discount_additional_name"
                    disabled={mutation.isPending}
                  />
                </div>
                <div className="form__wrap text-xs mb-3">
                  <InputText
                    label="Percent (%)"
                    type="text"
                    number="number"
                    name="discount_additional_percent"
                    disabled={mutation.isPending}
                  />
                </div>
                <div className="form__wrap text-xs mb-3">
                  <InputText
                    label="Amount"
                    type="text"
                    number="number"
                    name="discount_additional_amount"
                    disabled={mutation.isPending}
                  />
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

export default AdditionalDiscountModalAddEdit;
