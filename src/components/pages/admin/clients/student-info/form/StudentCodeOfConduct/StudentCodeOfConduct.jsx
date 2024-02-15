import {
  InputCheckbox,
  InputText,
  InputTextArea,
} from "@/components/helpers/FormInputs.jsx";
import { setIsAdd } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const StudentCodeOfConduct = ({ showSideNav }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const queryClient = useQueryClient();
  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  const initVal = {};

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
                    } absolute -bottom-1 right-0 flex items-center justify-end gap-x-2  bg-primary border-t border-line z-20 max-w-[calc(1065px-200px)] p-2 w-full shadow-[0_0_30px_-15px_rgba(0,0,0,0.3)]`}
                  >
                    <div className="flex items-center gap-3">
                      <button className="btn btn--accent">Save</button>
                      <button className="btn btn--cancel" onClick={handleClose}>
                        Dismiss
                      </button>{" "}
                    </div>
                  </div>
                  <div className="mb-14 text-xs">
                    <h3 className="mb-2">Code of Conduct</h3>
                    <p>
                      Frontline Christian Academy (FCA) strives to set a
                      standard of conduct that will provide a healthy academic
                      environment, and to teach children to live an upright,
                      godly life (Psalm 37:37) by stewarding their relationship
                      with God, others, themselves and creation. Each student is
                      responsible for working towards developing the following
                      characteristics:
                    </p>

                    <ul className="list-disc list-inside pl-4">
                      <li>Cooperation with others</li>
                      <li>Cheerful obedience to all in authority</li>
                      <li>Truthful and honest accountability for behavior</li>
                      <li>
                        Promptness in attendance and completing assignments
                      </li>
                      <li>Diligent and active pursuit of lifelong learning</li>
                      <li>
                        Courtesy and respect for others, such as being quiet in
                        class, raising hand to speak, not interrupting others,
                        not running in the building, and eating with proper
                        manners
                      </li>
                      <li>
                        Cleanliness in person and property: cleanliness in
                        dress, personal hygiene, neat desk, picking up trash,
                        etc.
                      </li>
                      <li>Respect for property: school, classmates and own.</li>
                      <li>
                        Respect for both self and others as individuals
                        possessing inherent dignity as being created in the
                        likeness of our Creator
                      </li>
                      <li>
                        Morally good conduct in respect to recreation, social
                        relationships and language. (Students must refrain from
                        swearing, use of any type of tobacco, drinking alcoholic
                        beverages if under legal drinking age, sexual activity,
                        pornography, use of illegal drugs, and any abuse of
                        medicinal drugs.
                      </li>
                    </ul>
                    <p>
                      For references, see Romans 13:1, I Peter 2:13-22; Matthew
                      25:45-46; Proverbs 12:22; Ephesians 4:32; Galatians
                      5:13-14; 1 Cor. 6:19, 20; 14:33.
                    </p>

                    <h4 className="mb-2 text-sm">Disciplinary Consequences</h4>
                    <p>
                      When a student’s behavior is unsatisfactory, the school
                      will employ appropriate actions to support the student so
                      that appropriate behaviour can be achieved.. The following
                      steps will be used:
                    </p>
                    <ol className="list-decimal list-inside mb-4 pl-4">
                      <li>
                        Verbal warnings to remind student of acceptable
                        behavior.
                      </li>
                      <li>
                        Behaviour modifications to prevent further incidents,
                      </li>
                      <li>
                        Communication with the parent(s) via text message, phone
                        call, or a note in the student’s communication notebook.
                        (Notes must be signed by the parents and returned to the
                        staff member initiating the correspondence the previous
                        day.)
                      </li>
                      <li>
                        Other supports to be put in place as required and
                        available, such as mentoring, student peer support
                        groups, ongoing communication with parent(s),
                        counselling, use of conflict resolution models, etc.
                      </li>
                      <li>
                        For serious incidents or ongoing patterns of
                        unacceptable behaviour or attitudes, a meeting in the
                        guidance office between the student and all parties
                        involved, which could include guidance counselor,
                        witness(es), parent(s)/guardian(s), adviser(s),
                        principal and executive director. Minutes of the meeting
                        will be taken at every meeting and signed.
                      </li>
                      <li>
                        Disciplinary action decided upon by the school guidance
                        counselor and the parent(s)/guardian(s). This will be
                        written in a Disciplinary Action Form.
                      </li>
                      <li>
                        Suspension: students on suspension may turn in all
                        missed work before returning to class; however, all
                        graded work on the days of suspension will be recorded
                        zeros. Missed tests will receive a zero.
                      </li>
                      <li>
                        Probation: students on written probation will have
                        regular reviews of their progress by the Board of
                        Directors.
                      </li>
                      <li>Expulsion by the Board of Directors.</li>
                    </ol>
                    <p>
                      For Remediation and Support, please refer to the Student
                      Handbook.
                    </p>
                    <p>
                      The FCA Student Code of Conduct applies to ALL students
                      from Nursery and up. Students who wish to enroll in the
                      secondary levels (grade 7 and up) must read, agree to
                      comply, and sign as proof of their agreement. Parents of
                      students in Nursery through Grade 6 are to review this
                      Code of Conduct with their children in a meaningful and
                      age appropriate way. Students in Grades 7 and up will be
                      required to provide a signature showing commitment to the
                      above.
                    </p>

                    <div className="form__wrap flex items-center mt-3 gap-2 ">
                      <InputCheckbox
                        label="I agree and undestand this code of conduct"
                        type="checkbox"
                        className="mb-0 !text-xs font-bold"
                        name="department_name"
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

export default StudentCodeOfConduct;
