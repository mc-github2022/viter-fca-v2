import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import {
  InputSelect,
  InputText,
  InputTextArea,
} from "@/components/helpers/FormInputs.jsx";
import {
  getUrlParam,
  handleNumOnly,
} from "@/components/helpers/functions-general";
import { queryData } from "@/components/helpers/queryData.jsx";
import ModalError from "@/components/partials/modals/ModalError";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import ModalValidate from "@/components/partials/modals/ModalValidate";
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
import * as Yup from "yup";

const StudentProfileForm = ({ showSideNav, itemEdit, cid }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const {
    isLoading: gradeLoading,
    isFetching: gradeFetching,
    error: gradeError,
    data: gradelevel,
  } = useQueryData(
    "/v2/dev-grade-level", // endpoint
    "get", // method
    "gradelevel" // key
  );

  const {
    isLoading: learningLoading,
    isFetching: learningFetching,
    error: learningError,
    data: learningtype,
  } = useQueryData(
    "/v2/dev-learning-type", // endpoint
    "get", // method
    "learningtype" // key
  );

  const {
    isLoading: addressLoading,
    isFetching: addressFetching,
    error: addressError,
    data: address,
  } = useQueryData(
    `/v2/dev-read-info-parent/${cid}`, // endpoint
    "get", // method
    "address" // key
  );

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v2/student/${itemEdit.student_info_aid}` : "/v2/student",
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["mystudent"] });
      // show error box
      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(
          setMessage(`Record successfully ${itemEdit ? "updated" : "added"}.`)
        );
      }
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  const initVal = {
    student_info_aid: itemEdit ? itemEdit.student_info_aid : "",
    student_info_user_id: itemEdit ? itemEdit.student_info_user_id : "",
    student_info_learning_type: itemEdit
      ? itemEdit.student_info_learning_type
      : "",
    student_info_reference_no: itemEdit
      ? itemEdit.student_info_reference_no
      : "",
    student_info_grade_id: itemEdit ? itemEdit.student_info_grade_id : "",
    student_info_lname: itemEdit ? itemEdit.student_info_fname : "",
    student_info_fname: itemEdit ? itemEdit.student_info_fname : "",
    student_info_mname: itemEdit ? itemEdit.student_info_mname : "",
    student_info_gender: itemEdit ? itemEdit.student_info_gender : "",
    student_info_bday: itemEdit ? itemEdit.student_info_bday : "",
    student_info_birth_place: itemEdit ? itemEdit.student_info_birth_place : "",
    student_info_institutional_email: itemEdit
      ? itemEdit.student_info_institutional_email
      : "",
    student_info_mobile: itemEdit ? itemEdit.student_info_mobile : "",
    student_info_landline: itemEdit ? itemEdit.student_info_landline : "",
    student_info_last_school: itemEdit ? itemEdit.student_info_last_school : "",
    student_info_school_address: itemEdit
      ? itemEdit.student_info_school_address
      : "",
    student_info_last_gpa: itemEdit ? itemEdit.student_info_last_gpa : "",
    student_info_last_grade: itemEdit ? itemEdit.student_info_last_grade : "",
    student_info_adress_id: itemEdit ? itemEdit.student_info_adress_id : "",
    student_info_school_other: itemEdit
      ? itemEdit.student_info_school_other
      : "",
    student_info_medical_doctor: itemEdit
      ? itemEdit.student_info_medical_doctor
      : "",
    student_info_medical_contact: itemEdit
      ? itemEdit.student_info_medical_contact
      : "",
    student_info_medical_notes: itemEdit
      ? itemEdit.student_info_medical_notes
      : "",
    student_info_family_circumstances: itemEdit
      ? itemEdit.student_info_family_circumstances
      : "",

    student_info_fname_old: itemEdit ? itemEdit.student_info_fname : "",
    student_info_lname_old: itemEdit ? itemEdit.student_info_lname : "",
  };

  const yupSchema = Yup.object({
    student_info_learning_type: Yup.string().required("Required"),
    student_info_grade_id: Yup.string().required("Required"),
    student_info_lname: Yup.string().required("Required"),
    student_info_fname: Yup.string().required("Required"),
    student_info_mname: Yup.string().required("Required"),
    student_info_gender: Yup.string().required("Required"),
    student_info_bday: Yup.string().required("Required"),
    student_info_birth_place: Yup.string().required("Required"),
    student_info_institutional_email: Yup.string()
      .required("Required")
      .email("Invalid email"),
    student_info_mobile: Yup.string().required("Required"),
    student_info_adress_id: Yup.string().required("Required"),
    student_info_last_school: Yup.string().required("Required"),
    student_info_last_gpa: Yup.string().required("Required"),
    student_info_last_grade: Yup.string().required("Required"),
    student_info_school_address: Yup.string().required("Required"),
    student_info_school_other: Yup.string().required("Required"),
    student_info_medical_notes: Yup.string().required("Required"),
    student_info_family_circumstances: Yup.string().required("Required"),
  });

  return (
    <>
      <Formik
        initialValues={initVal}
        validationSchema={yupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          mutation.mutate({ ...values, student_info_user_id: cid });
        }}
      >
        {(props) => {
          return (
            <>
              <Form>
                <div className="overflow-y-auto  custom__scroll  z-30 ">
                  <div
                    className={` ${
                      showSideNav
                        ? "max-w-[calc(1065px-0px)]"
                        : "max-w-[calc(1065px-200px)]"
                    } ${
                      props.dirty ? "bottom-0 right-0" : "-bottom-12 right-0"
                    }   absolute  flex items-center justify-end gap-x-3 transition-all bg-primary border-t border-line z-20 p-2 w-full shadow-[0_0_30px_-15px_rgba(0,0,0,0.3)]`}
                  >
                    <button className="btn btn--accent" type="submit">
                      {mutation.isPending ? <ButtonSpinner /> : "Save"}
                    </button>
                    <button className="btn btn--cancel" onClick={handleClose}>
                      Dismiss
                    </button>{" "}
                  </div>

                  <h3 className="mb-3">Student Profile</h3>
                  <h5 className="mb-2">Classification</h5>
                  <div className="grid grid-cols-[120px_1fr_1fr_1fr] gap-x-3">
                    <div className="form__wrap">
                      <InputText
                        label="School Year"
                        type="text"
                        name="department_name"
                        // disabled={mutation.isLoading}
                      />
                    </div>

                    <div className="form__wrap">
                      <InputSelect
                        label="Learning Type"
                        type="text"
                        name="student_info_learning_type"
                        //disabled={mutation.isLoading}
                        onChange={(e) => e}
                      >
                        <option value="" hidden></option>

                        {learningLoading || learningFetching ? (
                          <option>Loading...</option>
                        ) : learningtype?.data.length === 0 ? (
                          <option>No Data</option>
                        ) : (
                          learningtype?.data.map((item, key) => {
                            return (
                              <option key={key} value={item.learning_type_aid}>
                                {`${item.learning_type_name}`}
                              </option>
                            );
                          })
                        )}
                      </InputSelect>
                    </div>

                    <div className="form__wrap">
                      <InputText
                        label="Learning Reference No."
                        type="text"
                        name="student_info_reference_no"
                        onKeyPress={handleNumOnly}
                        disabled={mutation.isLoading}
                      />
                    </div>

                    <div className="form__wrap">
                      <InputSelect
                        label="Grade Level"
                        type="text"
                        name="student_info_grade_id"
                        disabled={mutation.isLoading}
                        onChange={(e) => e}
                      >
                        <option value="" hidden></option>

                        {gradeLoading || gradeFetching ? (
                          <option>Loading...</option>
                        ) : gradelevel?.data.length === 0 ? (
                          <option>No Data</option>
                        ) : (
                          gradelevel?.data.map((item, key) => {
                            return (
                              <option key={key} value={item.grade_level_aid}>
                                {`${item.grade_level_name}`}
                              </option>
                            );
                          })
                        )}
                      </InputSelect>
                    </div>
                  </div>

                  <h5 className="mb-2">Profile</h5>
                  <div className="grid grid-cols-3 gap-x-3">
                    <div className="form__wrap">
                      <InputText
                        label="Last Name (Suffix)"
                        type="text"
                        name="student_info_lname"
                        disabled={mutation.isLoading}
                      />
                    </div>

                    <div className="form__wrap">
                      <InputText
                        label="First Name"
                        type="text"
                        name="student_info_fname"
                        disabled={mutation.isLoading}
                      />
                    </div>

                    <div className="form__wrap">
                      <InputText
                        label="Middle Name"
                        type="text"
                        name="student_info_mname"
                        disabled={mutation.isLoading}
                      />
                    </div>

                    <div className="form__wrap">
                      <InputText
                        label="Gender"
                        type="text"
                        name="student_info_gender"
                        disabled={mutation.isLoading}
                      />
                    </div>

                    <div className="form__wrap">
                      <InputText
                        label="Birthday"
                        type="text"
                        name="student_info_bday"
                        disabled={mutation.isLoading}
                      />
                    </div>

                    <div className="form__wrap">
                      <InputText
                        label="Birth Place"
                        type="text"
                        name="student_info_birth_place"
                        disabled={mutation.isLoading}
                      />
                    </div>
                    <div className="form__wrap">
                      <InputText
                        label="Email"
                        type="text"
                        name="student_info_institutional_email"
                        disabled={mutation.isLoading}
                      />
                    </div>
                    <div className="form__wrap">
                      <InputText
                        label="Mobile"
                        type="text"
                        name="student_info_mobile"
                        onKeyPress={handleNumOnly}
                        disabled={mutation.isLoading}
                      />
                    </div>
                    <div className="form__wrap">
                      <InputText
                        label="Landline (Optional)"
                        type="text"
                        name="student_info_landline"
                        onKeyPress={handleNumOnly}
                        disabled={mutation.isLoading}
                      />
                    </div>
                  </div>

                  <h5 className="mb-2">Address</h5>
                  <div className="grid grid-cols-1 gap-x-3">
                    <div className="form__wrap">
                      <InputSelect
                        label="Current Address"
                        type="text"
                        name="student_info_adress_id"
                        disabled={mutation.isLoading}
                        onChange={(e) => e}
                      >
                        <option value="" hidden></option>

                        {addressLoading || addressFetching ? (
                          <option>Loading...</option>
                        ) : address?.data.length === 0 ? (
                          <option>No Data</option>
                        ) : (
                          address?.data.map((item, key) => {
                            return (
                              <option
                                key={key}
                                value={item.parent_guardian_info_aid}
                              >
                                {`${item.parent_guardian_info_fname} ${item.parent_guardian_info_lname} - ${item.parent_guardian_info_address} ${item.parent_guardian_info_city} ${item.parent_guardian_info_province}, ${item.parent_guardian_info_zipcode}`}
                              </option>
                            );
                          })
                        )}
                      </InputSelect>
                    </div>
                  </div>

                  <h5 className="mb-2">Last School </h5>
                  <div className="grid grid-cols-[400px_1fr_1fr] gap-x-3">
                    <div className="form__wrap">
                      <InputText
                        label="Last School Name"
                        type="text"
                        name="student_info_last_school"
                        disabled={mutation.isLoading}
                      />
                    </div>
                    <div className="form__wrap">
                      <InputText
                        label="GPA Last School Year"
                        type="text"
                        name="student_info_last_gpa"
                        onKeyPress={handleNumOnly}
                        disabled={mutation.isLoading}
                      />
                    </div>
                    <div className="form__wrap">
                      <InputText
                        label=" Level Last School Year"
                        type="text"
                        name="student_info_last_grade"
                        disabled={mutation.isLoading}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-x-3">
                    <div className="form__wrap">
                      <InputText
                        label="School Address"
                        type="text"
                        name="student_info_school_address"
                        disabled={mutation.isLoading}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-x-3">
                    <div className="form__wrap">
                      <InputTextArea
                        label="Was the student ever submitted to any form of disciplinary action? If so, why?"
                        type="text"
                        name="student_info_school_other"
                        disabled={mutation.isLoading}
                      />
                    </div>
                  </div>

                  <h5 className="mb-2">Medical Information</h5>
                  <div className="grid grid-cols-2 gap-x-3">
                    <div className="form__wrap">
                      <InputText
                        label="Pediatrician/Family Doctor: (optional)"
                        type="text"
                        name="student_info_medical_doctor"
                        disabled={mutation.isLoading}
                      />
                    </div>
                    <div className="form__wrap">
                      <InputText
                        label="Contact Name: (optional)"
                        type="text"
                        name="student_info_medical_contact"
                        disabled={mutation.isLoading}
                      />
                    </div>
                  </div>
                  <div className="form__wrap">
                    <InputTextArea
                      label="Are there any serious medical conditions about which you wish the school to be aware? Please indicate below:"
                      type="text"
                      name="student_info_medical_notes"
                      disabled={mutation.isLoading}
                    />
                  </div>

                  <div className="form__wrap mb-14">
                    <InputTextArea
                      label="Are there any family circumstances about which you wish the school to be aware? Please indicate below:"
                      type="text"
                      name="student_info_family_circumstances"
                      disabled={mutation.isLoading}
                    />
                  </div>
                </div>
                {store.success && <ModalSuccess />}
                {store.error && <ModalError />}
                {store.validate && <ModalValidate />}
              </Form>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default StudentProfileForm;
