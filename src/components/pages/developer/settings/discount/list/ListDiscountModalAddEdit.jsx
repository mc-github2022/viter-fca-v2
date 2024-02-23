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

const ListDiscountModalAddEdit = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();
  const {
    isLoading,
    isFetching,
    error,
    data: category,
  } = useQueryData(
    "/v2/dev-settings-discount/read-all-category", // endpoint
    "get", // method
    "read-all-category" // key
  );

  const handleClose = () => {
    dispatch(setIsSettingAdd(false));
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
        dispatch(setIsSettingAdd(false));
        dispatch(setSuccess(true));
        dispatch(
          setMessage(`Record successfully ${itemEdit ? "updated" : "added"}.`)
        );
      }
    },
  });

  const initVal = {
    discount_category_id: itemEdit ? itemEdit.discount_category_id : "",
    discount_type: itemEdit ? itemEdit.discount_type : "",
    discount_entrance_fee: itemEdit ? itemEdit.discount_entrance_fee : "",
    discount_tuition_fee: itemEdit ? itemEdit.discount_tuition_fee : "",
    discount_qualification: itemEdit ? itemEdit.discount_qualification : "",
    discount_duration: itemEdit ? itemEdit.discount_duration : "",
    discount_maintaining_grade: itemEdit
      ? itemEdit.discount_maintaining_grade
      : "",
    discount_requirement: itemEdit ? itemEdit.discount_requirement : "",
  };

  const yupSchema = Yup.object({
    discount_category_id: Yup.string().required("Required"),
    discount_type: Yup.string().required("Required"),
    discount_tuition_fee: Yup.string().required("Required"),
    discount_qualification: Yup.string().required("Required"),
    discount_duration: Yup.string().required("Required"),
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
              <Form className="flex flex-col h-full max-h-[calc(70vh-90px)] overflow-y-auto">
                <div className="modal__body custom__scroll">
                  <div className="form__wrap text-xs mb-3">
                    <InputSelect
                      label="Category"
                      type="text"
                      name="discount_category_id"
                      disabled={mutation.isLoading}
                      onChange={(e) => e}
                    >
                      <option value="" hidden>
                        {(isLoading || isFetching) && "Loading..."}
                      </option>

                      {(!isLoading || !isFetching) &&
                      category?.data.length === 0 ? (
                        <option>No Data</option>
                      ) : (
                        category?.data.map((item, key) => {
                          return (
                            <option
                              key={key}
                              value={item.discount_category_aid}
                            >
                              {`${item.discount_category_name}`}
                            </option>
                          );
                        })
                      )}
                    </InputSelect>
                  </div>
                  <div className="form__wrap text-xs mb-3">
                    <InputText
                      label="Type"
                      type="text"
                      name="discount_type"
                      disabled={mutation.isLoading}
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="form__wrap text-xs mb-3">
                        <InputText
                          label="Entrance Fee (%)"
                          type="text"
                          number="number"
                          name="discount_entrance_fee"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap text-xs mb-3">
                        <InputText
                          label="Tuition Fee (%)"
                          type="text"
                          number="number"
                          name="discount_tuition_fee"
                          disabled={mutation.isLoading}
                        />
                      </div>
                    </div>
                    <div className="form__wrap text-xs mb-3">
                      <InputText
                        label="Maintaining Grade (GA)"
                        type="text"
                        number="number"
                        name="discount_maintaining_grade"
                        disabled={mutation.isLoading}
                      />
                    </div>
                  </div>

                  <div className="form__wrap text-xs mb-3">
                    <InputTextArea
                      label="Qualification"
                      type="text"
                      name="discount_qualification"
                      disabled={mutation.isLoading}
                    />
                  </div>

                  <div className="form__wrap text-xs mb-3">
                    <InputTextArea
                      label="Duration"
                      type="text"
                      name="discount_duration"
                      disabled={mutation.isLoading}
                    />
                  </div>

                  <div className="form__wrap text-xs mb-3">
                    <InputTextArea
                      label="Requirement"
                      type="text"
                      name="discount_requirement"
                      disabled={mutation.isLoading}
                    />
                  </div>
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

export default ListDiscountModalAddEdit;
