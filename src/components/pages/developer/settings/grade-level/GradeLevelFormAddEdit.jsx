import {
  InputCheckbox,
  InputSelect,
  InputText,
} from "@/components/helpers/FormInputs";
import { queryData } from "@/components/helpers/queryData";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import {
  setError,
  setIsAdd,
  setIsSettingAdd,
  setMessage,
  setSuccess,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const GradeLevelFormAddEdit = ({
  itemEdit,
  isLoading,
  isFetching,
  gradelevel,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const handleClose = () => {
    dispatch(setIsSettingAdd(false));
  };

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v2/dev-grade-level/${itemEdit.grade_level_aid}`
          : "/v2/dev-grade-level",
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["grade-level"] });
      console.log(data);
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
    grade_level_aid: itemEdit ? itemEdit.grade_level_aid : "",
    grade_level_name: itemEdit ? itemEdit.grade_level_name : "",
    grade_level_order: itemEdit ? itemEdit.grade_level_order : "",
    grade_level_is_pre_school: itemEdit
      ? itemEdit.grade_level_is_pre_school === 1
        ? true
        : false
      : false,
    grade_level_name_old: itemEdit ? itemEdit.grade_level_name : "",
    grade_level_order_old: itemEdit ? itemEdit.grade_level_order : "",
  };

  const yupSchema = Yup.object({
    grade_level_name: Yup.string().required("Required"),
    grade_level_is_pre_school: Yup.string().required("Required"),
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
                    label="Grade Level Order"
                    type="number"
                    name="grade_level_order"
                    disabled={mutation.isPending}
                  />
                </div>

                <div className="form__wrap text-xs mb-3">
                  <InputText
                    label="Name"
                    type="text"
                    name="grade_level_name"
                    disabled={mutation.isPending}
                  />
                </div>

                <div className="form__wrap text-xs mb-3">
                  <InputCheckbox
                    label="Mark check if Pre-School"
                    type="checkbox"
                    name="grade_level_is_pre_school"
                    id="grade_level_is_pre_school"
                    disabled={mutation.isPending}
                  />
                </div>

                <div className={` settings__actions flex gap-2 mt-4`}>
                  <button
                    className="btn btn--accent"
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

export default GradeLevelFormAddEdit;
