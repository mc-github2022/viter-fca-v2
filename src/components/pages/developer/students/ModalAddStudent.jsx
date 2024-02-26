import { InputSelect, InputText } from "@/components/helpers/FormInputs.jsx";
import { queryData } from "@/components/helpers/queryData.jsx";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
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

const ModalAddStudent = ({ schoolYear, gradeLevel }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const handleClose = () => {
    dispatch(setIsShowModal(false));
    setTimeout(() => {
      dispatch(setIsAdd(false));
      dispatch(setIsShowModal(true));
    }, 200);
  };

  const syId = schoolYear?.data.find((item) => item.school_year_aid);

  const mutation = useMutation({
    mutationFn: (values) => queryData("/v2/dev-students", "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["students"] });
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
    students_lrn: "",
    students_fname: "",
    students_lname: "",
    students_mname: "",
    students_gender: "",
    students_birth_date: "",
    students_email: "",
    students_mobile: "",
    students_landline: "",
    school_year_students_last_learning_type: "",
    school_year_students_sy_id: syId.school_year_aid,
    school_year_students_last_grade_level_id: "",
  };

  const yupSchema = Yup.object({
    students_fname: Yup.string().required("Required"),
    students_lname: Yup.string().required("Required"),
    students_gender: Yup.string().required("Required"),
    students_email: Yup.string().email("Invalid email"),
    school_year_students_last_learning_type: Yup.string().required("Required"),
    school_year_students_last_grade_level_id: Yup.string().required("Required"),
  });

  return (
    <>
      <div className={`modal modal--side  ${store.isShowModal ? "show" : ""}`}>
        <div className="modal__backdrop" onClick={handleClose}></div>

        <div className="modal__main ">
          <div className="modal__header">
            <h3>Add Student</h3>
            <button onClick={handleClose}>
              <FaTimes />
            </button>
          </div>

          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              // console.log(values);
              mutation.mutate(values);
            }}
          >
            {(props) => {
              return (
                <Form className="flex flex-col h-full max-h-[1200px] overflow-y-auto">
                  <div className="modal__body custom__scroll">
                    <div className="form__wrap">
                      <InputText
                        disabled={mutation.isPending}
                        label="LRN (Optional)"
                        type="text"
                        name="students_lrn"
                      />
                    </div>

                    <div className="form__wrap">
                      <InputSelect
                        disabled={mutation.isPending}
                        label="Grade Level"
                        name="school_year_students_last_grade_level_id"
                      >
                        <option value="" hidden></option>
                        {gradeLevel?.count > 0 ? (
                          gradeLevel?.data.map((item, key) => {
                            return (
                              <option value={item.grade_level_aid} key={key}>
                                {item.grade_level_name}
                              </option>
                            );
                          })
                        ) : (
                          <option value="" disabled>
                            No data
                          </option>
                        )}
                      </InputSelect>
                    </div>

                    <div className="form__wrap">
                      <InputSelect
                        disabled={mutation.isPending}
                        label="Learning Type"
                        name="school_year_students_last_learning_type"
                      >
                        <option value="" hidden></option>
                        <option value="onsite">Face-to-Face</option>
                        <option value="online">Online</option>
                      </InputSelect>
                    </div>

                    <div className="form__wrap">
                      <InputText
                        disabled={mutation.isPending}
                        label="First Name"
                        type="text"
                        name="students_fname"
                      />
                    </div>

                    <div className="form__wrap">
                      <InputText
                        disabled={mutation.isPending}
                        label="Middle Name (Optional)"
                        type="text"
                        name="students_mname"
                      />
                    </div>

                    <div className="form__wrap">
                      <InputText
                        disabled={mutation.isPending}
                        label="Last Name"
                        type="text"
                        name="students_lname"
                      />
                    </div>

                    <div className="form__wrap">
                      <InputSelect
                        disabled={mutation.isPending}
                        label="Gender"
                        name="students_gender"
                      >
                        <option value="" hidden></option>
                        <option value="m">Male</option>
                        <option value="f">Female</option>
                      </InputSelect>
                    </div>

                    <div className="form__wrap">
                      <InputText
                        disabled={mutation.isPending}
                        label="Birth Date (Optional)"
                        type="date"
                        name="students_birth_date"
                      />
                    </div>

                    <div className="form__wrap">
                      <InputText
                        disabled={mutation.isPending}
                        label="Email (Optional)"
                        type="email"
                        name="students_email"
                      />
                    </div>

                    <div className="form__wrap">
                      <InputText
                        disabled={mutation.isPending}
                        label="Mobile (Optional)"
                        type="text"
                        name="students_mobile"
                      />
                    </div>

                    <div className="form__wrap">
                      <InputText
                        disabled={mutation.isPending}
                        label="Landline (Optional)"
                        type="text"
                        name="students_landline"
                      />
                    </div>
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

export default ModalAddStudent;
