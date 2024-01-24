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

const UserOtherFormAddEdit = ({ itemEdit, roles }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  const getActiveRoles = roles?.data.filter(
    (item) => item.role_is_active === 1
  );

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v2/user-other/${itemEdit.user_other_aid}`
          : "/v2/user-other",
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
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(
          setMessage(`Record successfully ${itemEdit ? "updated" : "added"}.`)
        );
      }
    },
  });

  const initVal = {
    user_other_aid: itemEdit ? itemEdit.user_other_aid : "",
    user_other_fname: itemEdit ? itemEdit.user_other_fname : "",
    user_other_lname: itemEdit ? itemEdit.user_other_lname : "",
    user_other_email: itemEdit ? itemEdit.user_other_email : "",
    user_other_role_id: itemEdit ? itemEdit.user_other_role_id : "",
    user_other_email_old: itemEdit ? itemEdit.user_other_email : "",
  };

  const yupSchema = Yup.object({
    user_other_fname: Yup.string().required("Required"),
    user_other_lname: Yup.string().required("Required"),
    user_other_role_id: Yup.string().required("Required"),
    user_other_email: Yup.string().required("Required").email("Invalid Email"),
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
                    label="First Name"
                    type="text"
                    name="user_other_fname"
                    disabled={mutation.isLoading}
                  />
                </div>

                <div className="form__wrap text-xs mb-3">
                  <InputText
                    label="Last Name"
                    type="text"
                    name="user_other_lname"
                    disabled={mutation.isLoading}
                  />
                </div>

                <div className="form__wrap text-xs mb-3">
                  <InputText
                    label="Email"
                    type="email"
                    name="user_other_email"
                    disabled={mutation.isLoading}
                  />
                </div>

                <div className="form__wrap text-xs mb-3">
                  <InputSelect
                    label="Roles"
                    name="user_other_role_id"
                    disabled={mutation.isLoading}
                    onChange={(e) => e}
                  >
                    <optgroup label="Select Roles">
                      <option value="" hidden></option>
                      {getActiveRoles?.length > 0 ? (
                        getActiveRoles?.map((item, key) => {
                          return (
                            <option key={key} value={item.role_aid}>
                              {item.role_name}
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

                <div className={`settings__actions flex gap-2 mt-4`}>
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

export default UserOtherFormAddEdit;
