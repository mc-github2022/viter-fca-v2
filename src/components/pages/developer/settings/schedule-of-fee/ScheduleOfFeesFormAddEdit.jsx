import useQueryData from "@/components/custom-hooks/useQueryData";
import { InputSelect, InputText } from "@/components/helpers/FormInputs";
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
import {
  getTotalMonthlyFee,
  getTotalPayment,
  getUponEnrollment,
} from "./functions-schedule-of-fee";
import { numberWithCommas } from "@/components/helpers/functions-general";

const ScheduleOfFeesFormAddEdit = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [categoryName, setCategoryName] = React.useState(
    itemEdit ? itemEdit.tuition_category_name : ""
  );
  const [gradeName, setGradeName] = React.useState(
    itemEdit ? itemEdit.grade_level_name : ""
  );
  const [schemeName, setSchemeName] = React.useState(
    itemEdit ? itemEdit.scheme_name : ""
  );
  const queryClient = useQueryClient();

  const {
    isLoading,
    isFetching,
    error,
    data: category,
  } = useQueryData(
    "/v2/dev-tuition-fee/read-all-category", // endpoint
    "get", // method
    "read-all-category" // key
  );

  const {
    isLoading: loadingScheme,
    isFetching: fetchingScheme,
    error: errorScheme,
    data: scheme,
  } = useQueryData(
    "/v2/dev-tuition-fee/read-all-scheme", // endpoint
    "get", // method
    "read-all-scheme" // key
  );

  const {
    isLoading: loadingGrade,
    isFetching: fetchingGrade,
    error: errorGrade,
    data: grade,
  } = useQueryData(
    "/v2/dev-tuition-fee/read-all-grade", // endpoint
    "get", // method
    "read-all-grade" // key
  );

  const handleClose = () => {
    dispatch(setIsSettingAdd(false));
  };
  const handleCategory = (e) => {
    setCategoryName(e.target.options[e.target.selectedIndex].text);
  };
  const handleGrade = (e) => {
    setGradeName(e.target.options[e.target.selectedIndex].text);
  };
  const handleScheme = (e) => {
    setSchemeName(e.target.options[e.target.selectedIndex].text);
  };

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v2/dev-tuition-fee/${itemEdit.tuition_fee_aid}`
          : "/v2/dev-tuition-fee",
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["group-by-category-grade"] });

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
    tuition_fee_category_id: itemEdit ? itemEdit.tuition_fee_category_id : "",
    tuition_fee_grade_id: itemEdit ? itemEdit.tuition_fee_grade_id : "",
    tuition_fee_scheme_id: itemEdit ? itemEdit.tuition_fee_scheme_id : "",
    tuition_fee_miscellaneous: itemEdit
      ? itemEdit.tuition_fee_miscellaneous
      : "",
    tuition_fee_tuition: itemEdit ? itemEdit.tuition_fee_tuition : "",
    tuition_fee_books: itemEdit ? itemEdit.tuition_fee_books : "",
    tuition_fee_admission: itemEdit ? itemEdit.tuition_fee_admission : "",
    tuition_fee_monthly: itemEdit ? itemEdit.tuition_fee_monthly : "",
    tuition_fee_how_many_months: itemEdit
      ? itemEdit.tuition_fee_how_many_months
      : "",
  };

  const yupSchema = Yup.object({
    tuition_fee_category_id: Yup.string().required("Required"),
    tuition_fee_grade_id: Yup.string().required("Required"),
    tuition_fee_scheme_id: Yup.string().required("Required"),
    tuition_fee_miscellaneous: Yup.string().required("Required"),
    tuition_fee_tuition: Yup.string().required("Required"),
    tuition_fee_books: Yup.string().required("Required"),
    tuition_fee_admission: Yup.string().required("Required"),
  });

  return (
    <>
      <div className="settings__addEdit mb-8 max-w-[350px] w-full">
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            // console.log(values);
            const tuition_fee_upon_enrollment = getUponEnrollment(values);
            const tuition_fee_total_monthly = getTotalMonthlyFee(values);
            const tuition_name = `${categoryName} - ${gradeName} (${schemeName})`;
            const tuition_name_old = itemEdit
              ? `${itemEdit.tuition_category_name} - ${itemEdit.grade_level_name} (${itemEdit.scheme_name})`
              : "";

            mutation.mutate({
              ...values,
              tuition_fee_upon_enrollment,
              tuition_fee_total_monthly,
              tuition_name,
              tuition_name_old,
            });
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
                      name="tuition_fee_category_id"
                      disabled={mutation.isLoading}
                      onChange={(e) => handleCategory(e)}
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
                            <option key={key} value={item.tuition_category_aid}>
                              {`${item.tuition_category_name}`}
                            </option>
                          );
                        })
                      )}
                    </InputSelect>
                  </div>

                  <div className="form__wrap text-xs mb-3">
                    <InputSelect
                      label="Grade"
                      type="text"
                      name="tuition_fee_grade_id"
                      disabled={mutation.isLoading}
                      onChange={(e) => handleGrade(e)}
                    >
                      <option value="" hidden>
                        {(loadingGrade || fetchingGrade) && "Loading..."}
                      </option>

                      {(!loadingGrade || !fetchingGrade) &&
                      grade?.data.length === 0 ? (
                        <option>No Data</option>
                      ) : (
                        grade?.data.map((item, key) => {
                          return (
                            <option
                              key={key}
                              value={item.grade_level_aid}
                              id={item.grade_level_name}
                            >
                              {`${item.grade_level_name}`}
                            </option>
                          );
                        })
                      )}
                    </InputSelect>
                  </div>

                  <div className="form__wrap text-xs mb-3">
                    <InputSelect
                      label="Scheme"
                      type="text"
                      name="tuition_fee_scheme_id"
                      disabled={mutation.isLoading}
                      onChange={(e) => handleScheme(e)}
                    >
                      <option value="" hidden>
                        {(loadingScheme || fetchingScheme) && "Loading..."}
                      </option>

                      {(!loadingScheme || !fetchingScheme) &&
                      scheme?.data.length === 0 ? (
                        <option disabled>No Data</option>
                      ) : (
                        scheme?.data.map((item, key) => {
                          return (
                            <option
                              key={key}
                              value={item.scheme_aid}
                              id={item.scheme_name}
                            >
                              {`${item.scheme_name}`}
                            </option>
                          );
                        })
                      )}
                    </InputSelect>
                  </div>

                  <div className="form__wrap text-xs mb-3">
                    <InputText
                      label="Admission Fee"
                      type="text"
                      number="number"
                      name="tuition_fee_admission"
                      disabled={mutation.isLoading}
                    />
                  </div>

                  <div className="form__wrap text-xs mb-3">
                    <InputText
                      label="Misc Fee"
                      type="text"
                      number="number"
                      name="tuition_fee_miscellaneous"
                      disabled={mutation.isLoading}
                    />
                  </div>

                  <div className="form__wrap text-xs mb-3">
                    <InputText
                      label="Tuition Fee"
                      type="text"
                      number="number"
                      name="tuition_fee_tuition"
                      disabled={mutation.isLoading}
                    />
                  </div>

                  <div className="form__wrap text-xs mb-3">
                    <InputText
                      label="Books"
                      type="text"
                      number="number"
                      name="tuition_fee_books"
                      disabled={mutation.isLoading}
                    />
                  </div>
                  <p className="text-accent font-bold ">
                    Upon Enrollment:{" "}
                    {numberWithCommas(
                      Number(getUponEnrollment(props.values)).toFixed(2)
                    )}
                  </p>
                  <div className="form__wrap text-xs my-3">
                    <InputText
                      label="Monthly Fee"
                      type="text"
                      number="number"
                      name="tuition_fee_monthly"
                      disabled={mutation.isLoading}
                    />
                  </div>
                  <div className="form__wrap text-xs mb-3">
                    <InputText
                      label="How many months"
                      type="text"
                      number="number"
                      name="tuition_fee_how_many_months"
                      disabled={mutation.isLoading}
                    />
                  </div>
                  <p className="text-accent font-bold ">
                    Total Monthly Fee:{" "}
                    {numberWithCommas(
                      Number(getTotalMonthlyFee(props.values)).toFixed(2)
                    )}
                  </p>
                  <p className="text-accent font-bold ">
                    Total :{" "}
                    {numberWithCommas(
                      Number(getTotalPayment(props.values)).toFixed(2)
                    )}
                  </p>
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

export default ScheduleOfFeesFormAddEdit;
