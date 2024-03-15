import useQueryData from "@/components/custom-hooks/useQueryData";
import { InputText } from "@/components/helpers/FormInputs";
import { queryData } from "@/components/helpers/queryData";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import FetchingSpinner from "@/components/partials/spinners/FetchingSpinner";
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

const StaffFormAddEdit = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const {
    isLoading,
    isFetching,
    data: staffWithUserAccount,
  } = useQueryData(
    "/v2/dev-parents/parent-user-other", // endpoint
    "post", // method
    "dev-parents-parent-user-other", // key
    { email: itemEdit ? itemEdit.settings_staff_email : "" },
    { email: itemEdit ? itemEdit.settings_staff_email : "" }
  );

  console.log(staffWithUserAccount);

  const handleClose = () => {
    dispatch(setIsSettingAdd(false));
  };

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v2/dev-staff/${itemEdit.settings_staff_aid}`
          : "/v2/dev-staff",
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["user"] });

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
    settings_staff_aid: itemEdit ? itemEdit.settings_staff_aid : "",
    settings_staff_fname: itemEdit ? itemEdit.settings_staff_fname : "",
    settings_staff_lname: itemEdit ? itemEdit.settings_staff_lname : "",
    settings_staff_email: itemEdit ? itemEdit.settings_staff_email : "",
    settings_staff_email_old: itemEdit ? itemEdit.settings_staff_email : "",
  };

  const yupSchema = Yup.object({
    settings_staff_fname: Yup.string().required("Required"),
    settings_staff_lname: Yup.string().required("Required"),
    settings_staff_email: Yup.string()
      .required("Required")
      .email("Invalid Email"),
  });

  return (
    <>
      <div className="settings__addEdit mb-8 max-w-[350px] w-full relative">
        {itemEdit && (isLoading || isFetching) && <FetchingSpinner />}

        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            mutation.mutate(values);
          }}
        >
          {(props) => {
            if (itemEdit && staffWithUserAccount?.count > 0) {
              props.values.settings_staff_email = itemEdit.settings_staff_email;
            }
            return (
              <Form>
                <div className="form__wrap text-xs mb-3">
                  <InputText
                    label="First Name"
                    type="text"
                    name="settings_staff_fname"
                    disabled={mutation.isPending}
                  />
                </div>

                <div className="form__wrap text-xs mb-3">
                  <InputText
                    label="Last Name"
                    type="text"
                    name="settings_staff_lname"
                    disabled={mutation.isPending}
                  />
                </div>

                <div className="form__wrap text-xs mb-3">
                  <InputText
                    label="Email"
                    type="email"
                    name="settings_staff_email"
                    disabled={
                      mutation.isPending ||
                      (staffWithUserAccount?.count > 0 && itemEdit)
                    }
                  />

                  {staffWithUserAccount?.count > 0 && (
                    <span className="text-xs leading-normal p-2 bg-[#fffde7] block mt-2">
                      <span className="text-accent font-bold">NOTE:</span> Email
                      editing is unavailable. This staff has a user account
                      already.
                    </span>
                  )}
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

export default StaffFormAddEdit;
