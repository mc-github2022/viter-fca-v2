import { InputText } from "@/components/helpers/FormInputs";
import {
  setError,
  setIsAdd,
  setIsConfirm,
  setIsShowModal,
  setMessage,
  setSuccess,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FaTimes } from "react-icons/fa";
import * as Yup from "yup";

const ModalAddClient = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

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
          ? `/v2/dev-grade-level/${itemEdit.grade_level_aid}`
          : "/v2/dev-grade-level",
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["grade-level"] });
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

  const initVal = {};

  const yupSchema = Yup.object({});

  return (
    <>
      <div className={`modal modal--side  ${store.isShowModal ? "show" : ""}`}>
        <div className="modal__backdrop" onClick={handleClose}></div>

        <div className="modal__main ">
          <div className="modal__header">
            <h3>Add Department</h3>
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
              return (
                <Form className="flex flex-col h-full max-h-[1200px] overflow-y-auto">
                  <div className="modal__body custom__scroll">
                    <div className="form__wrap">
                      <label htmlFor="">Department</label>
                      <input type="text" />
                    </div>

                    <div className="form__wrap">
                      <label htmlFor="">Name</label>
                      <input type="text" />
                    </div>

                    <div className="form__wrap">
                      <label htmlFor="">Department</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="modal__action">
                    <button className="btn btn--accent">Save</button>
                    <button className="btn btn--cancel" onClick={handleClose}>
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
