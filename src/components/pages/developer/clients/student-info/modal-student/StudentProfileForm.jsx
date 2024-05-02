import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import {
  InputSelect,
  InputText,
  InputTextArea,
} from "@/components/helpers/FormInputs.jsx";
import {
  getUrlParam,
  handleNumOnly,
} from "@/components/helpers/functions-general.jsx";
import { queryData } from "@/components/helpers/queryData";
import ModalSuccess from "@/components/partials/modals/ModalSuccess.jsx";
import ModalValidate from "@/components/partials/modals/ModalValidate.jsx";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import {
  setIsAdd,
  setMessage,
  setSuccess,
  setValidate,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const StudentProfileForm = ({
  showSideNav,
  itemEdit,
  gradeLevel,
  schoolYear,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const cid = getUrlParam().get("cid");
  const queryClient = useQueryClient();

  const { error, data: parentGuardian } = useQueryData(
    "/v2/dev-students/parent-guardian", // endpoint
    "post", // method
    "parent-guardian", // key
    {
      students_parent_id:
        Object.keys(itemEdit).length > 0
          ? itemEdit.students_parent_id
          : store.credentials.data.role_is_parent === 1
          ? store.credentials.data.parents_aid
          : cid,
    },
    {
      students_parent_id:
        Object.keys(itemEdit).length > 0
          ? itemEdit.students_parent_id
          : store.credentials.data.role_is_parent === 1
          ? store.credentials.data.parents_aid
          : cid,
    }
  );

  // console.log(parentGuardian);
  // console.log({
  //   students_parent_id:
  //     Object.keys(itemEdit).length > 0
  //       ? itemEdit.students_parent_id
  //       : store.credentials.data.role_is_parent === 1
  //       ? store.credentials.data.parents_aid
  //       : cid,
  // });

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        Object.keys(itemEdit).length > 0
          ? `/v2/dev-students/${itemEdit.students_aid}/${itemEdit.school_year_aid}`
          : // ? `/v2/dev-client-student/${itemEdit.students_aid}`
            `/v2/dev-client-student`,
        Object.keys(itemEdit).length > 0 ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch

      // show error box
      if (data.success) {
        if (Object.keys(itemEdit).length === 0) {
          dispatch(setIsAdd(false));
        }
        queryClient.invalidateQueries({ queryKey: ["mystudent"] });
        queryClient.invalidateQueries({
          queryKey: ["read-student-by-current-sy-id-parent"],
        });
        // dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage("Record successfully updated."));
      }
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const syid = schoolYear?.data.find((item) => item.school_year_aid);

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  const initVal =
    Object.keys(itemEdit).length > 0
      ? {
          ...itemEdit,
          students_lrn_old: itemEdit ? itemEdit.students_lrn : "",
        }
      : {
          students_parent_id:
            Object.keys(itemEdit).length > 0
              ? itemEdit.students_parent_id
              : store.credentials.data.role_is_parent === 1
              ? store.credentials.data.parents_aid
              : cid,
          students_lrn: "",
          students_fname: "",
          students_lname: "",
          students_mname: "",
          students_gender: "",
          students_birth_place: "",
          students_birth_date: "",
          students_email: "",
          students_mobile: "",
          students_landline: "",
          students_address_id: "",
          students_medical_remarks: "",
          students_institutional_email: "",
          students_family_doctor: "",
          students_family_doctor_contact: "",
          students_family_circumstances: "",
          students_created: "",
          students_datetime: "",
          current_students_sy_id: syid.school_year_aid,
          current_students_last_learning_type: "",
          current_students_last_school_attended: "",
          current_students_last_gpa: "",
          current_students_last_grade_level_id: "",
          current_students_grade_level_id: "",
          current_students_last_school_address: "",
          current_students_last_remarks: "",
        };

  const yupSchema = Yup.object({
    students_fname: Yup.string().required("Required"),
    students_lname: Yup.string().required("Required"),
    students_gender: Yup.string().required("Required"),
    current_students_grade_level_id: Yup.string().required("Required"),
    // students_birth_place: Yup.string().required("Required"),
    students_birth_date: Yup.string().required("Required"),
    students_address_id: Yup.string().required("Required"),
    current_students_last_learning_type: Yup.string().required("Required"),
    // current_students_last_school_attended: Yup.string().required("Required"),
    // current_students_last_gpa: Yup.string().required("Required"),
    // current_students_last_grade_level_id: Yup.string().required("Required"),
    // current_students_last_school_address: Yup.string().required("Required"),
  });

  return (
    <>
      <Formik
        initialValues={initVal}
        validationSchema={yupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          mutation.mutate({ ...values, ...store.credentials.data });
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
                        ? "!max-w-[calc(1065px-0px)]"
                        : "!max-w-[calc(1065px-200px)]"
                    } absolute -bottom-1 right-0 flex items-center justify-end gap-x-2  bg-primary z-20 max-w-[calc(1065px-200px)] pr-7 py-8 w-full `}
                  >
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
                  <div className="mb-[50px]">
                    <h3 className="mb-3">Profile</h3>
                    <h6 className="mb-2 uppercase">Classification</h6>
                    <div className="grid md:grid-cols-[120px_1fr_1fr_1fr] gap-x-3">
                      <div className="form__wrap">
                        <InputText
                          label="School Year"
                          type="text"
                          name="school_year"
                          value={
                            Object.keys(itemEdit).length > 0
                              ? itemEdit.school_year
                              : `${syid.start_year}-${syid.end_year}`
                          }
                          disabled
                        />
                      </div>

                      <div className="form__wrap">
                        <InputSelect
                          label="Learning Type"
                          name="current_students_last_learning_type"
                          disabled={mutation.isPending}
                        >
                          <option value="" hidden></option>
                          <option value="onsite">Face-to-Face</option>
                          <option value="online">Online</option>
                        </InputSelect>
                      </div>

                      <div className="form__wrap">
                        <InputText
                          label="Learning Reference No."
                          type="text"
                          name="students_lrn"
                          disabled={mutation.isPending}
                        />
                      </div>

                      <div className="form__wrap">
                        <InputSelect
                          label="Grade Level"
                          name="current_students_grade_level_id"
                          disabled={mutation.isPending}
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
                    </div>

                    <h6 className="mb-2 uppercase">Profile</h6>
                    <div className="grid md:grid-cols-3 gap-x-3">
                      <div className="form__wrap">
                        <InputText
                          label="Last Name (Suffix)"
                          type="text"
                          name="students_lname"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="First Name"
                          type="text"
                          name="students_fname"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Middle Name "
                          type="text"
                          name="students_mname"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputSelect
                          label="Gender"
                          name="students_gender"
                          disabled={mutation.isPending}
                        >
                          <option value="" hidden></option>
                          <option value="m">Male</option>
                          <option value="f">Female</option>
                        </InputSelect>
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Birth Date "
                          type="date"
                          name="students_birth_date"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Birth Place"
                          type="text"
                          name="students_birth_place"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Email"
                          type="text"
                          name="students_email"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Mobile"
                          type="text"
                          name="students_mobile"
                          maxLength="11"
                          onKeyPress={handleNumOnly}
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Landline "
                          type="text"
                          name="students_landline"
                          maxLength="11"
                          onKeyPress={handleNumOnly}
                          disabled={mutation.isPending}
                        />
                      </div>
                    </div>

                    <h6 className="mb-2 uppercase">Address</h6>
                    <div className="grid grid-cols-1 gap-x-3">
                      <div className="form__wrap">
                        <InputSelect
                          label="Current Adress"
                          name="students_address_id"
                          disabled={mutation.isPending}
                        >
                          <option value="" hidden></option>
                          {parentGuardian?.count > 0 ? (
                            parentGuardian?.data.map((item, key) => {
                              return (
                                <option value={item.guardian_aid} key={key}>
                                  {item.guardian_address}{" "}
                                  {item.guardian_province}{" "}
                                  {item.guardian_province} {item.guardian_city}{" "}
                                  {item.guardian_zipcode}{" "}
                                  {item.guardian_country}
                                </option>
                              );
                            })
                          ) : (
                            <option value="" disabled>
                              Pleace specify guardian information address
                            </option>
                          )}
                        </InputSelect>
                      </div>
                    </div>

                    <h6 className="mb-2 uppercase">Last School</h6>
                    <div className="grid md:grid-cols-[400px_1fr_1fr] gap-x-3">
                      <div className="form__wrap">
                        <InputText
                          label="Last School Name"
                          type="text"
                          name="current_students_last_school_attended"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="GPA Last School Year"
                          type="text"
                          name="current_students_last_gpa"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputSelect
                          label="Last Grade Level"
                          name="current_students_last_grade_level_id"
                          // disabled
                        >
                          <option value="" hidden></option>
                          <option value="0">Not Applicable</option>
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
                    </div>

                    <div className="grid grid-cols-1 gap-x-3">
                      <div className="form__wrap">
                        <InputText
                          label="Last School Address"
                          type="text"
                          name="current_students_last_school_address"
                          disabled={mutation.isPending}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-x-3">
                      <div className="form__wrap">
                        <InputTextArea
                          label="Was the student ever submitted to any form of disciplinary action? If so, why?"
                          type="text"
                          name="current_students_last_remarks"
                          disabled={mutation.isPending}
                        />
                      </div>
                    </div>

                    <h6 className="mb-2 uppercase">Medical Information</h6>
                    <div className="grid md:grid-cols-2 gap-x-3">
                      <div className="form__wrap">
                        <InputText
                          label="Pediatrician/Family Doctor "
                          type="text"
                          name="students_family_doctor"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Contact Name "
                          type="text"
                          name="students_family_doctor_contact"
                          disabled={mutation.isPending}
                        />
                      </div>
                    </div>
                    <div className="form__wrap">
                      <InputTextArea
                        label="Are there any serious medical conditions about which you wish the school to be aware? Please indicate below:"
                        type="text"
                        name="students_medical_remarks"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="form__wrap mb-14">
                      <InputTextArea
                        label="Are there any family circumstances about which you wish the school to be aware? Please indicate below:"
                        type="text"
                        name="students_family_circumstances"
                        disabled={mutation.isPending}
                      />
                    </div>
                  </div>
                </div>
              </Form>
            </>
          );
        }}
      </Formik>

      {/* {store.success && <ModalSuccess />} */}
      {store.validate && <ModalValidate />}
    </>
  );
};

export default StudentProfileForm;
