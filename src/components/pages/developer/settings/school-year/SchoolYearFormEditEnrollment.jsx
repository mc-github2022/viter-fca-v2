import { InputText } from "@/components/helpers/FormInputs";
import { queryData } from "@/components/helpers/queryData";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import {
  setError,
  setMessage,
  setSuccess,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const SchoolYearFormEditEnrollment = ({ itemEdit, setIsEditEnrollment }) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const handleClose = () => {
    setIsEditEnrollment(false);
  };

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        `/v2/dev-school-year/enrollment/${itemEdit.school_year_aid}`,
        "put",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["school-year"] });
      queryClient.invalidateQueries({ queryKey: ["header-school-year"] });
      queryClient.invalidateQueries({ queryKey: ["nav-school-year"] });

      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        setIsEditEnrollment(false);
        dispatch(setSuccess(true));
        dispatch(setMessage(`Record successfully updated.`));
      }
    },
  });

  const initVal = {
    school_year_aid: itemEdit ? itemEdit.school_year_aid : "",
    school_year_enrollment_start_date: itemEdit
      ? itemEdit.school_year_enrollment_start_date
      : "",
    school_year_enrollment_end_date: itemEdit
      ? itemEdit.school_year_enrollment_end_date
      : "",
    school_year_enrollment_start_date_old: itemEdit
      ? itemEdit.school_year_enrollment_start_date
      : "",
  };

  const yupSchema = Yup.object({
    school_year_enrollment_start_date: Yup.string().required("Required"),
    school_year_enrollment_end_date: Yup.string().required("Required"),
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
                    label="Enrollment Start Date"
                    type="date"
                    name="school_year_enrollment_start_date"
                    disabled={mutation.isPending}
                  />
                </div>

                <div className="form__wrap text-xs mb-3">
                  <InputText
                    label="Enrollment End Date"
                    type="date"
                    name="school_year_enrollment_end_date"
                    disabled={mutation.isPending}
                  />
                </div>

                <div className={`settings__actions flex gap-2 mt-4`}>
                  <button
                    className="btn btn--accent "
                    type="submit"
                    disabled={mutation.isPending || !props.dirty}
                  >
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

export default SchoolYearFormEditEnrollment;
