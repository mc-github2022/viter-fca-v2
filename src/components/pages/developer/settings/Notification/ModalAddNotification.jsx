import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import {
  InputSelect,
  InputText,
  InputTextArea,
} from "@/components/helpers/FormInputs";
import ModalWrapper from "@/components/partials/modals/ModalWrapper";
import {
  setIsAdd,
  setMessage,
  setSuccess,
  setValidate,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { queryData } from "../../../../helpers/queryData";
import * as Yup from "yup";
import React from "react";
import { FaTimes } from "react-icons/fa";

const ModalAddNotification = ({ itemEdit, department }) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const [departmentId, setDepartmentId] = React.useState(null);

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
      queryClient.invalidateQueries({ queryKey: ["settings-notification"] });
      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully ${itemEdit ? `updated` : `added`}.`));
      }
      // show error box
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const initVal = {
    notification_aid: itemEdit ? itemEdit.notification_aid : "",
    notification_name: itemEdit ? itemEdit.notification_name : "",
    notification_email: itemEdit ? itemEdit.notification_email : "",
    notification_department_id: itemEdit
      ? itemEdit.notification_department_id
      : "",
  };

  const yupSchema = Yup.object({
    notification_name: Yup.string().required("Required"),
    notification_email: Yup.string().required("Required"),
    notification_department_id: Yup.string().required("Required"),
  });

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  const handleChangeSelectDepartment = (e) => {
    setDepartmentId(e.target.options[e.target.selectedIndex].value);
  };

  return (
    <>
      <ModalWrapper>
        <div className="modal__header relative">
          <h3> Add Notifications </h3>
          <button className="absolute -top-4 right-0" onClick={handleClose}>
            <FaTimes className="text-gray-700 text-base" />
          </button>
        </div>
        <div className="modal__body overflow-auto max-h-[50vh]">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              // mutate data
              mutation.mutate(values);
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="relative form__wrap">
                    <p className="flex gap-1">
                      <span className="text-primary">Role:</span>
                      <span></span>
                    </p>
                  </div>
                  <div className="relative form__wrap">
                    <InputText
                      label="Full Name"
                      type="text"
                      name="notification_name"
                      disabled={mutation.isLoading}
                    />
                  </div>
                  <div className="relative form__wrap">
                    <InputSelect
                      label="Department"
                      name="notification_department_id"
                      disabled={itemEdit || mutation.isLoading ? true : false}
                      onChange={(e) => handleChangeSelectDepartment(e)}
                    >
                      <optgroup label="Service Type">
                        <option value="" hidden></option>
                        {department.data.length > 0 ? (
                          department.data.map((item, key) => (
                            <option
                              key={key}
                              value={item.department_aid}
                              title={item.department_name}
                              data-price={item.department_description}
                            >
                              {item.department_name}
                            </option>
                          ))
                        ) : (
                          <option value="">No data</option>
                        )}
                      </optgroup>
                    </InputSelect>
                  </div>
                  <div className="relative form__wrap">
                    <InputText
                      label="Email"
                      type="text"
                      name="notification_email"
                      disabled={mutation.isLoading}
                    />
                  </div>
                  <div className="modal__action flex justify-end mt-6 gap-2 ">
                    <button
                      className="btn btn--primary"
                      type="submit"
                      disabled={mutation.isLoading || !props.dirty}
                    >
                      {mutation.isLoading ? (
                        <ButtonSpinner />
                      ) : itemEdit ? (
                        "Save"
                      ) : (
                        "Add"
                      )}
                    </button>
                    <button
                      type="button"
                      className="btn btn--cancel"
                      disabled={mutation.isLoading}
                      onClick={handleClose}
                    >
                      Cancel
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalAddNotification;
