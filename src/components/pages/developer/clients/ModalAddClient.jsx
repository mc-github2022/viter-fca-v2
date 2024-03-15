import useQueryData from "@/components/custom-hooks/useQueryData";
import { InputText } from "@/components/helpers/FormInputs.jsx";
import { queryData } from "@/components/helpers/queryData.jsx";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import FetchingSpinner from "@/components/partials/spinners/FetchingSpinner";
import TableSpinner from "@/components/partials/spinners/TableSpinner";
import {
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

const ModalAddClient = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const {
    isLoading,
    isFetching,
    data: parentWithUserAccount,
  } = useQueryData(
    "/v2/dev-parents/parent-user-other", // endpoint
    "post", // method
    "dev-parents-parent-user-other", // key
    { email: itemEdit ? itemEdit.parents_email : "" },
    { email: itemEdit ? itemEdit.parents_email : "" }
  );

  const handleClose = () => {
    dispatch(setIsShowModal(false));
    setTimeout(() => {
      dispatch(setIsAdd(false));
      dispatch(setIsShowModal(true));
    }, 200);
  };

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v2/dev-parents/${itemEdit.parents_aid}`
          : "/v2/dev-parents",
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["parents"] });
      // show error box
      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(
          setMessage(
            itemEdit
              ? "Record successfully updated."
              : "Record successfully added."
          )
        );
      }
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const initVal = {
    parents_fname: itemEdit ? itemEdit.parents_fname : "",
    parents_lname: itemEdit ? itemEdit.parents_lname : "",
    parents_email: itemEdit ? itemEdit.parents_email : "",
    parents_email_old: itemEdit ? itemEdit.parents_email : "",
  };

  const yupSchema = Yup.object({
    parents_fname: Yup.string().required("Required"),
    parents_lname: Yup.string().required("Required"),
    parents_email: Yup.string().required("Required").email("Invalid email"),
  });

  return (
    <>
      <div className={`modal modal--side  ${store.isShowModal ? "show" : ""}`}>
        <div className="modal__backdrop" onClick={handleClose}></div>

        <div className="modal__main ">
          <div className="modal__header">
            <h3>{itemEdit ? "Update" : "Add"} Parent</h3>
            <button onClick={handleClose}>
              <FaTimes />
            </button>
          </div>

          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              mutation.mutate(values);
            }}
          >
            {(props) => {
              if (itemEdit && parentWithUserAccount?.count > 0) {
                props.values.parents_email = itemEdit.parents_email;
              }
              return (
                <Form className="flex flex-col h-full max-h-[1200px] overflow-y-auto">
                  <div className="modal__body custom__scroll">
                    {itemEdit && (isLoading || isFetching) && (
                      <FetchingSpinner />
                    )}
                    <div className="form__wrap">
                      <InputText
                        label="First Name"
                        type="text"
                        name="parents_fname"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="form__wrap">
                      <InputText
                        label="Last Name"
                        type="text"
                        name="parents_lname"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="form__wrap mb-[5rem]">
                      <InputText
                        label="Email"
                        type="email"
                        name="parents_email"
                        disabled={
                          mutation.isPending ||
                          (parentWithUserAccount?.count > 0 && itemEdit)
                        }
                      />
                    </div>
                    {parentWithUserAccount?.count > 0 && (
                      <span className="text-xs leading-normal p-2 bg-[#fffde7] block">
                        <span className="text-accent font-bold">NOTE:</span>{" "}
                        Email editing is unavailable. This parent has a user
                        account already.
                      </span>
                    )}
                  </div>
                  <div className="modal__action ">
                    <button
                      className="btn btn--accent"
                      type="submit"
                      disabled={mutation.isPending || !props.dirty}
                    >
                      {mutation.isPending ? <ButtonSpinner /> : "Save"}
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
      </div>
    </>
  );
};

export default ModalAddClient;
