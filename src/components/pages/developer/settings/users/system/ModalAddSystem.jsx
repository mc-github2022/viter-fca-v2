import { InputText } from "@/components/helpers/FormInputs.jsx";
import { handleEscape } from "@/components/helpers/functions-general.jsx";
import { queryData } from "@/components/helpers/queryData.jsx";
import ModalWrapper from "@/components/partials/modals/ModalWrapper.jsx";
import ModalWrapperSide from "@/components/partials/modals/ModalWrapperSide.jsx";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner.jsx";
import {
  setIsAdd,
  setMessage,
  setSuccess,
  setValidate,
} from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FaTimes } from "react-icons/fa";
import * as Yup from "yup";

const ModalAddSystem = ({ itemEdit, roles }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [show, setShow] = React.useState("show");
  const [emailMessage, setEmailMessage] = React.useState("");
  const queryClient = useQueryClient();

  const getDeveloperRole = roles?.data.filter(
    (item) => item.role_is_developer === 1 && item.role_is_active === 1
  );

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v1/user-system/${itemEdit.user_system_aid}`
          : "/v1/user-system",
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["system"] });

      // show error box
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      } else {
        dispatch(setSuccess(true));
        dispatch(
          setMessage(
            `Successfuly `
            // ${
            //   itemEdit
            //     ? `updated. ${emailMessage} ${
            //         store.credentials.data.user_system_email ===
            //         itemEdit.user_system_email
            //           ? "You will be automatically logged out."
            //           : ""
            //       }`
            //     : "added, please check your email for verification."
            // }`
          )
        );
        // if (
        //   itemEdit &&
        //   store.credentials.data.user_system_email ===
        //     itemEdit.user_system_email
        // ) {
        //   dispatch(setIsAccountUpdated(true));
        // }
        dispatch(setIsAdd(false));
      }
    },
  });

  const initVal = {
    user_system_aid: itemEdit ? itemEdit.user_system_aid : "",
    user_system_fname: itemEdit ? itemEdit.user_system_fname : "",
    user_system_lname: itemEdit ? itemEdit.user_system_lname : "",
    user_system_email: itemEdit ? itemEdit.user_system_email : "",
    user_system_role_id: getDeveloperRole[0].role_aid,
    user_system_email_old: itemEdit ? itemEdit.user_system_email : "",
  };

  const yupSchema = Yup.object({
    user_system_fname: Yup.string().required("Required"),
    user_system_lname: Yup.string().required("Required"),
    user_system_email: Yup.string().required("Required").email("Invalid email"),
  });

  const handleClose = () => {
    dispatch(setIsShowModal(false));
    setTimeout(() => {
      dispatch(setIsAdd(false));
      dispatch(setIsShowModal(true));
    }, 300);
  };

  handleEscape(() => handleClose());

  return (
    <>
      <ModalWrapperSide handleClose={handleClose}>
        <div className="modal__header relative">
          <h3> {itemEdit ? "Update" : "Add"} User </h3>
          <button className="absolute -top-4 right-0 " onClick={handleClose}>
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
              if (
                itemEdit &&
                itemEdit.user_system_email !== values.user_system_email
              ) {
                setEmailMessage("Please check your email for verification.");
              }
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="relative form__wrap">
                    <p className="flex gap-1">
                      <span>Role:</span>
                      <span>{getDeveloperRole[0].role_name}</span>
                    </p>
                  </div>

                  <div className="relative form__wrap">
                    <InputText
                      label="First name"
                      type="text"
                      name="user_system_fname"
                      disabled={mutation.isLoading}
                    />
                  </div>
                  <div className="relative form__wrap">
                    <InputText
                      label="Last name"
                      name="user_system_lname"
                      type="text"
                      disabled={mutation.isLoading}
                    />
                  </div>
                  <div className="relative form__wrap">
                    <InputText
                      label="Email address"
                      type="text"
                      name="user_system_email"
                      disabled={mutation.isLoading}
                    />
                  </div>

                  <div className="modal__action flex justify-end mt-6 gap-2">
                    <button
                      className="btn btn--accent"
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
      </ModalWrapperSide>
    </>
  );
};

export default ModalAddSystem;
