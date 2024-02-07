import { InputText } from "@/components/helpers/FormInputs.jsx";
import { queryData } from "@/components/helpers/queryData.jsx";
import {
  setError,
  setIsAdd,
  setIsShowModal,
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

const ModalAddClient = ({ itemEdit, roles, id }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const handleClose = () => {
    dispatch(setIsShowModal(false));
    setTimeout(() => {
      dispatch(setIsAdd(false));
      dispatch(setIsShowModal(true));
    }, 200);
  };

  const roleId = roles?.data.filter((item) => item.role_is_client === 1);

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
      queryClient.invalidateQueries({ queryKey: ["clients"] });
      // show error box
      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage("Record successfully added."));
      }
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const initVal = {
    user_other_fname: itemEdit ? itemEdit.user_other_fname : "",
    user_other_lname: itemEdit ? itemEdit.user_other_lname : "",
    user_other_email: itemEdit ? itemEdit.user_other_email : "",
    user_other_email_old: itemEdit ? itemEdit.user_other_email : "",
  };

  const yupSchema = Yup.object({
    user_other_fname: Yup.string().required("Required"),
    user_other_lname: Yup.string().required("Required"),
    user_other_email: Yup.string().required("Required").email("Invalid email"),
  });

  return (
    <>
      <div className={`modal modal--side  ${store.isShowModal ? "show" : ""}`}>
        <div className="modal__backdrop" onClick={handleClose}></div>

        <div className="modal__main ">
          <div className="modal__header">
            <h3>Add Client</h3>
            <button onClick={handleClose}>
              <FaTimes />
            </button>
          </div>

          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              mutation.mutate({
                ...values,
                user_other_role_id: roleId[0].role_aid,
              });
            }}
          >
            {(props) => {
              return (
                <Form className="flex flex-col h-full max-h-[1200px] overflow-y-auto">
                  <div className="modal__body custom__scroll">
                    <div className="form__wrap">
                      <InputText
                        label="First Name"
                        type="text"
                        name="user_other_fname"
                      />
                    </div>

                    <div className="form__wrap">
                      <InputText
                        label="Last Name"
                        type="text"
                        name="user_other_lname"
                      />
                    </div>

                    <div className="form__wrap">
                      <InputText
                        label="Email"
                        type="email"
                        name="user_other_email"
                      />
                    </div>
                  </div>
                  <div className="modal__action">
                    <button className="btn btn--accent" type="submit">
                      {itemEdit ? "Update" : "Save"}
                    </button>
                    <button
                      className="btn btn--cancel"
                      type="button"
                      onClick={handleClose}
                    >
                      Discard
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ModalAddClient;
