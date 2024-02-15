import { InputText } from "@/components/helpers/FormInputs";
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

const UserSystemFormAddEdit = ({ itemEdit, roles }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const handleClose = () => {
    dispatch(setIsSettingAdd(false));
  };

  const getDeveloperRole = roles?.data.filter(
    (item) => item.role_is_developer === 1 && item.role_is_active === 1
  );

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v2/dev-user-system/${itemEdit.user_system_aid}`
          : "/v2/dev-user-system",
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
    user_system_aid: itemEdit ? itemEdit.user_system_aid : "",
    user_system_fname: itemEdit ? itemEdit.user_system_fname : "",
    user_system_lname: itemEdit ? itemEdit.user_system_lname : "",
    user_system_email: itemEdit ? itemEdit.user_system_email : "",
    user_system_email_old: itemEdit ? itemEdit.user_system_email : "",
  };

  const yupSchema = Yup.object({
    user_system_fname: Yup.string().required("Required"),
    user_system_lname: Yup.string().required("Required"),
    user_system_email: Yup.string().required("Required").email("Invalid Email"),
  });

  return (
    <>
      <div className="settings__addEdit mb-8 max-w-[350px] w-full">
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            mutation.mutate({
              ...values,
              user_system_role_id: getDeveloperRole[0].role_aid,
            });
          }}
        >
          {(props) => {
            return (
              <Form>
                <div className="form__wrap text-xs mb-3">
                  <InputText
                    label="First Name"
                    type="text"
                    name="user_system_fname"
                    disabled={mutation.isPending}
                  />
                </div>

                <div className="form__wrap text-xs mb-3">
                  <InputText
                    label="Last Name"
                    type="text"
                    name="user_system_lname"
                    disabled={mutation.isPending}
                  />
                </div>

                <div className="form__wrap text-xs mb-3">
                  <InputText
                    label="Email"
                    type="email"
                    name="user_system_email"
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

export default UserSystemFormAddEdit;
