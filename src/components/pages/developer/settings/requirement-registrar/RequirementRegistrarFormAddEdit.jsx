import {
  InputCheckbox,
  InputSelect,
  InputText,
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

const RequirementRegistrarFormAddEdit = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const handleClose = () => {
    dispatch(setIsSettingAdd(false));
  };

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v2/dev-requirement-registrar/${itemEdit.requirement_registrar_aid}`
          : "/v2/dev-requirement-registrar",
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["registrar"] });

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
    requirement_registar_aid: itemEdit ? itemEdit.requirement_registar_aid : "",
    requirement_registrar_name: itemEdit
      ? itemEdit.requirement_registrar_name
      : "",
    // requirement_registrar_department_id: itemEdit
    //   ? itemEdit.requirement_registrar_department_id
    //   : "",
    requirement_registrar_is_for_pre_school: itemEdit
      ? itemEdit.requirement_registrar_is_for_pre_school === 1
        ? true
        : false
      : false,
    requirement_registrar_name_old: itemEdit
      ? itemEdit.requirement_registrar_name
      : "",
  };

  const yupSchema = Yup.object({
    requirement_registrar_name: Yup.string().required("Required"),
  });
  return (
    <>
      <div className="settings__addEdit mb-8 max-w-[350px] w-full">
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            console.log(values);
            mutation.mutate(values);
          }}
        >
          {(props) => {
            return (
              <Form>
                <div className="form__wrap text-xs mb-3">
                  <InputText
                    label="Title"
                    type="text"
                    name="requirement_registrar_name"
                    disabled={mutation.isPending}
                  />
                </div>

                {/* <div className="form__wrap text-xs mb-3">
                  <InputSelect
                    label="Department"
                    name="requirement_registrar_department_id"
                    disabled={mutation.isPending}
                    onChange={(e) => e}
                  >
                    <optgroup label="Select Department">
                      <option value="" hidden></option>
                      {getActiveDepartment?.length > 0 ? (
                        getActiveDepartment?.map((item, key) => {
                          return (
                            <option key={key} value={item.department_aid}>
                              {item.department_name}
                            </option>
                          );
                        })
                      ) : (
                        <option value="" disabled>
                          No data
                        </option>
                      )}
                    </optgroup>
                  </InputSelect>
                </div> */}

                <div className="form__wrap text-xs mb-3">
                  <InputCheckbox
                    label="Mark check if for Pre-School"
                    type="checkbox"
                    name="requirement_registrar_is_for_pre_school"
                    id="requirement_registrar_is_for_pre_school"
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

export default RequirementRegistrarFormAddEdit;
