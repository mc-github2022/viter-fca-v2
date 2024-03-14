import {
  InputSelect,
  InputText,
  InputTextArea,
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

const EmailTemplatesFormAddEdit = ({ itemEdit, department }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const handleClose = () => {
    dispatch(setIsSettingAdd(false));
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
        dispatch(setIsSettingAdd(false));
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
    notification_email: Yup.string().required("Required"),
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
                    label="Template Name"
                    type="text"
                    name="notification_name"
                    disabled={mutation.isPending}
                  />
                </div>
                <div className="form__wrap text-xs mb-3">
                  <InputTextArea
                    label="Content"
                    type="text"
                    name="notification_email"
                    className="h-[20rem]"
                    disabled={mutation.isPending}
                  />
                </div>
                <div className="form__wrap text-xs mb-3">
                  <InputSelect
                    label="Receiver"
                    name="notification_department_id"
                    disabled={mutation.isPending}
                    onChange={(e) => e}
                  >
                    <optgroup label="Select Receiver">
                      <option value="">Client</option>
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
                <div className="form__wrap text-xs mb-3">
                  <InputText
                    label="CC Email (one)"
                    type="text"
                    name="notification_name"
                    disabled={mutation.isPending}
                  />
                </div>
                <div className="form__wrap text-xs mb-3">
                  <InputText
                    label="CC Email (two)"
                    type="text"
                    name="notification_name"
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

export default EmailTemplatesFormAddEdit;
