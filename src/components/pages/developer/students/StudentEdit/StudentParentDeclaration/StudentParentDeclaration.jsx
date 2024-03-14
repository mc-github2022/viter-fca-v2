import {
  InputCheckbox,
  InputText,
  InputTextArea,
} from "@/components/helpers/FormInputs.jsx";
import { queryData } from "@/components/helpers/queryData";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import {
  setMessage,
  setSuccess,
  setValidate,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const StudentParentDeclaration = ({ showSideNav, dataItem, handleClose }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(`/v2/dev-students/update-parent-declare`, "put", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["all-students"] });
      queryClient.invalidateQueries({ queryKey: ["students"] });
      queryClient.invalidateQueries({ queryKey: ["mystudent"] });
      queryClient.invalidateQueries({
        queryKey: ["read-student-by-current-sy-id"],
      });

      // show error box
      if (data.success) {
        // setIsViewInfo(false);
        dispatch(setSuccess(true));
        dispatch(setMessage("Record successfully updated."));
      }
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const initVal = {
    students_aid: dataItem.students_aid,
    current_students_sy_id: dataItem.current_students_sy_id,
    current_students_last_parent_declaration_is_agree:
      dataItem.current_students_last_parent_declaration_is_agree === 0
        ? false
        : true,
  };

  const yupSchema = Yup.object({});

  return (
    <>
      <Formik
        initialValues={initVal}
        validationSchema={yupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          mutation.mutate(values);
        }}
      >
        {(props) => {
          return (
            <>
              <Form>
                <div className="overflow-y-auto custom__scroll  z-30 modal__article">
                  <div
                    className={` ${
                      showSideNav
                        ? "max-w-[calc(1065px-0px)]"
                        : "max-w-[calc(1065px-200px)]"
                    } absolute -bottom-1 right-0 flex items-center justify-end gap-x-2  bg-primary z-20 max-w-[calc(1065px-200px)] pr-7 py-8 w-full `}
                  >
                    <div className="flex items-center gap-2">
                      {(store.credentials.data.role_is_parent !== 1 ||
                        dataItem.current_students_last_parent_declaration_is_agree ===
                          0) && (
                        <button
                          className="btn btn--accent"
                          type="submit"
                          disabled={mutation.isPending || !props.dirty}
                        >
                          {mutation.isPending ? <ButtonSpinner /> : "Save"}
                        </button>
                      )}
                      <button
                        className="btn btn--cancel"
                        type="button"
                        onClick={handleClose}
                        disabled={mutation.isPending}
                      >
                        Discard
                      </button>
                    </div>
                  </div>
                  <div className="mb-24 text-xs">
                    <h3 className="mb-3">Parent/Guardian Declaration</h3>

                    <p className="mb-4">I hereby declare that:</p>

                    <ol className=" list-inside list-[upper-roman] pl-4 my-3">
                      <li>
                        I have given all necessary and relevant information
                        regarding my child to the school management, and filled
                        out the appropriate forms with valid, true, accurate
                        information, especially with regards to my child's
                        health and dietary management concerns.
                      </li>
                      <li>
                        I understand that the school will do its best to keep my
                        child safe while on the school premises, and will not
                        allow my child to be released to any unauthorized
                        person(s).
                      </li>
                      <li>
                        I understand that when my child is released safely from
                        school, the school no longer holds any civil or legal
                        responsibility for my child, and shall remain free from
                        any and all claims/charges of liability.
                      </li>
                      <li>
                        I understand that my child, if four (4) years old and
                        above, is included in the school's Group Accident
                        Insurance Plan, with accidental medical reimbursement up
                        to a certain amount. I agree to cover the costs of any
                        medical eventualities that exceed the limited of this
                        coverage.
                      </li>

                      <li>
                        I hereby agree to waive any responsibility on the part
                        of Frontline Christian Academy, its trustees, officers,
                        faculty, staff, and any agents of any kind thereof in
                        relation to any loss, damage, death, injury, or accident
                        that may happen to my child/children, unless such loss,
                        damage, injury, accident, or death resulted from the
                        fault or gross negligence of Frontline Christian
                        Academy. I render Frontline Christian Academy and all of
                        the afore-mentioned free and harmless from any
                        liability, suit, or claim filed due to any untoward
                        incident that may occur that is beyond the control of
                        the persons in charge.
                      </li>

                      <li>
                        I understand in the event of any medical emergency, in
                        which after several attempts to contact the legal
                        gaurdians have been unsuccessful, I/we confer upon the
                        school administration and the attending physicians
                        involved the authority to make medical decisions in
                        my/our stead regardless of the results or consequences
                        of any such decisions and attendant actions taken.
                      </li>

                      <li>
                        I will respect and uphold the values, vision, and
                        mission of FCA to the best of my ability.
                      </li>

                      <li>
                        I will encourage and support my child / children in
                        upholding the FCA student code of conduct and the
                        Student Handbook.
                      </li>

                      <li>
                        I will pay the agreed-upon school fees on or before
                        declared due dates. I understand that failing to do so
                        will result in a penalty of 2% per day on the entire
                        overdue amount, beginning on the day of the due date and
                        ending on the last day of exams.
                      </li>

                      <li>
                        I will strive my best to foster and maintain a conducive
                        learning environment in the home, and provide any
                        assistance that my child needs for his/her school work.
                      </li>

                      <li>
                        I will do my best to maintain open, honest, appropriate
                        and professional communication with the school, and
                        direct questions and concerns towards the appropriate
                        parties concerned.
                      </li>
                    </ol>

                    <div className="form__wrap flex items-center gap-2 ">
                      <InputCheckbox
                        label="I agree and undestand this code of conduct"
                        type="checkbox"
                        className="mb-0 !text-xs font-bold"
                        name="current_students_last_parent_declaration_is_agree"
                        id="current_students_last_parent_declaration_is_agree"
                        disabled={
                          mutation.isPending ||
                          (store.credentials.data.role_is_parent === 1 &&
                            dataItem.current_students_last_parent_declaration_is_agree ===
                              1)
                        }
                      />
                    </div>
                  </div>
                </div>
              </Form>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default StudentParentDeclaration;
