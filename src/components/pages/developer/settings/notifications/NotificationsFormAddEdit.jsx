import { InputSelect, InputText } from "@/components/helpers/FormInputs";
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

const NotificationsFormAddEdit = ({ itemEdit, department }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v2/dev-notification/${itemEdit.notification_aid}`
          : "/v2/dev-notification",
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["notification"] });

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

  const getActiveDepartment = department?.data.filter(
    (item) => item.department_active === 1
  );

  const initVal = {
    notification_aid: itemEdit ? itemEdit.notification_aid : "",
    notification_name: itemEdit ? itemEdit.notification_name : "",
    notification_email: itemEdit ? itemEdit.notification_email : "",
    notification_department_id: itemEdit
      ? itemEdit.notification_department_id
      : "",
    notification_name_old: itemEdit ? itemEdit.notification_name : "",
  };

  const yupSchema = Yup.object({
    notification_name: Yup.string().required("Required"),
    notification_email: Yup.string()
      .required("Required")
      .email("Invalid Email"),
    notification_department_id: Yup.string().required("Required"),
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
                    label="Fullname"
                    type="text"
                    name="notification_name"
                    disabled={mutation.isLoading}
                  />
                </div>

                <div className="form__wrap text-xs mb-3">
                  <InputText
                    label="Email"
                    type="email"
                    name="notification_email"
                    disabled={mutation.isLoading}
                  />
                </div>

                <div className="form__wrap text-xs mb-3">
                  <InputSelect
                    label="Department"
                    name="notification_department_id"
                    disabled={mutation.isLoading}
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
                </div>

                <div className={` settings__actions flex gap-2`}>
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
                    type="cancel"
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

export default NotificationsFormAddEdit;
