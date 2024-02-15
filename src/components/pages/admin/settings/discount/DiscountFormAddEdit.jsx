import { InputText, InputTextArea } from "@/components/helpers/FormInputs";
import { queryData } from "@/components/helpers/queryData";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const DiscountFormAddEdit = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v2/dev-settings-discount/${itemEdit.discount_aid}`
          : "/v2/dev-settings-discount",
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["discount"] });

      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(
          setMessage(`Record successfully ${itemEdit ? "updated" : "added"}.`)
        );
      }
    },
  });

  const initVal = {
    discount_type: itemEdit ? itemEdit.discount_type : "",
    discount_tuition_fee: itemEdit ? itemEdit.discount_tuition_fee : "",
    discount_entrance_fee: itemEdit ? itemEdit.discount_entrance_fee : "",
    discount_category: itemEdit ? itemEdit.discount_category : "",
    discount_qualifications: itemEdit ? itemEdit.discount_qualifications : "",
    discount_duration: itemEdit ? itemEdit.discount_duration : "",
    discount_maintaining_grade: itemEdit
      ? itemEdit.discount_maintaining_grade
      : "",
    discount_requirement: itemEdit ? itemEdit.discount_requirement : "",
    role_name_old: itemEdit ? itemEdit.role_name : "",
  };

  const yupSchema = Yup.object({
    discount_type: Yup.string().required("Required"),
    discount_tuition_fee: Yup.string().required("Required"),
    discount_entrance_fee: Yup.string().required("Required"),
    discount_category: Yup.string().required("Required"),
    discount_qualifications: Yup.string().required("Required"),
    discount_duration: Yup.string().required("Required"),
    discount_maintaining_grade: Yup.string().required("Required"),
    discount_requirement: Yup.string().required("Required"),
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
                {/* {!itemEdit && (
                  <div className="form__wrap text-xs mb-3">
                    <InputText
                      label="Discount Type"
                      name="discount_type"
                      disabled={mutation.isLoading}
                    />
                  </div>
                )} */}

                <div className="form__wrap text-xs mb-3">
                  <InputText
                    label="Discount Type"
                    name="discount_type"
                    disabled={mutation.isLoading}
                  />
                </div>

                <div className="form__wrap text-xs mb-3">
                  <InputText
                    label="Tuition Fee"
                    name="discount_tuition_fee"
                    disabled={mutation.isLoading}
                  />
                </div>

                <div className="form__wrap text-xs mb-3">
                  <InputText
                    label="Entrance Fee"
                    name="discount_entrance_fee"
                    disabled={mutation.isLoading}
                  />
                </div>

                <div className="form__wrap text-xs mb-3">
                  <InputText
                    label="Category"
                    name="discount_category"
                    disabled={mutation.isLoading}
                  />
                </div>

                <div className="form__wrap text-xs mb-3">
                  <InputText
                    label="Qualifications"
                    name="discount_qualifications"
                    disabled={mutation.isLoading}
                  />
                </div>

                <div className="form__wrap text-xs mb-3">
                  <InputTextArea
                    label="Duration"
                    name="discount_duration"
                    disabled={mutation.isLoading}
                  />
                </div>

                <div className="form__wrap text-xs mb-3">
                  <InputText
                    label="Maintaining Grade"
                    name="discount_maintaining_grade"
                    disabled={mutation.isLoading}
                  />
                </div>

                <div className="form__wrap text-xs mb-3">
                  <InputTextArea
                    label="Requirement"
                    name="discount_requirement"
                    disabled={mutation.isLoading}
                  />
                </div>

                <div className={` settings__actions flex gap-2 mt-4`}>
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
                    type="button"
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

export default DiscountFormAddEdit;
