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

const StudentParentCommitment = ({ showSideNav, setIsViewInfo }) => {
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
                    <h3 className="mb-2">Parent Commitment Form</h3>
                    <p className="mb-4">
                      As a partner of the school in the education of my child, I
                      commit myself to the following matters:
                    </p>

                    <ol className="list-inside list-[upper-roman]">
                      <li>
                        <span className="font-bold">Academic Matters</span>
                        <ol className=" list-inside list-[upper-roman] pl-4 my-3">
                          <li>
                            I will read, understand and abide by the rules and
                            regulations stipulated in the FCA Student Handbook.
                          </li>
                          <li>
                            I will be actively involved in educating my children
                          </li>
                          <li>
                            I will provide a conducive learning environment for
                            my child at home and do my best to keep the learning
                            space free from distractions and disturbances.
                          </li>
                        </ol>
                      </li>
                      <li>
                        <span className="font-bold">Communication</span>
                        <ol className=" list-inside list-[upper-roman] pl-4 my-3">
                          <li>
                            I will keep an open and honest path of communication
                            with the school and my child’s teachers regarding
                            the education of my child.
                          </li>
                          <li>
                            I pledge to communicate any concerns I may have
                            about my child's schooling to the right people,
                            including my child's class adviser and the school
                            management. I also commit to collaborating with the
                            school to ensure the best education for my child,
                            and to refrain from speaking ill of or discrediting
                            the school to others. I acknowledge that
                            consistently discrediting the school to others
                            indicates a lack of confidence in its ability to
                            provide quality education for my child. If this is
                            the case, I may opt to voluntarily withdraw my child
                            from FCA in accordance with the school's student
                            withdrawal policies. Further, the school management
                            may revoke my enrollment privileges, subject to
                            management’s evaluation.
                          </li>
                          <li>
                            I commit to attending the Parenting Peer Groups
                            facilitated by FCA, either in-person or virtually
                          </li>

                          <li>
                            I commit to attending the Parent-Teacher Conferences
                            either in-person or virtually.
                          </li>

                          <li>
                            I commit to attending the Quarterly Parent-Teacher
                            Assemblies, either in-person or virtually.
                          </li>
                        </ol>
                      </li>
                      <li>
                        <span className="font-bold">Disclosure</span>
                        <ol className=" list-inside list-[upper-roman] pl-4 my-3">
                          <li>
                            I have given FCA full disclosure of my child’s
                            former and current school liabilities, as well as
                            each child’s learning and development needs,
                            physical and learning disability/ies (if any) which
                            FCA may use as a basis for recommending
                            supplementary services, if needed.
                          </li>
                        </ol>
                      </li>

                      <li>
                        <span className="font-bold">Picture Authorization</span>
                        <ol className=" list-inside list-[upper-roman] pl-4 my-3">
                          <li>
                            FCA may use my child/ren’s photos captured in its
                            various events, as well as their school activities
                            and produced work, for marketing purposes. I
                            recognize that the pictures/images may be used
                            beyond the time that my child is a student of FCA.
                          </li>
                        </ol>
                      </li>

                      <li>
                        <span className="font-bold">Data Privacy</span>
                        <ol className=" list-inside list-[upper-roman] pl-4 my-3">
                          <li>
                            The protection of your information and privacy is
                            essential to us as an educational provider. We
                            comply with all applicable data protection laws
                            under the DATA PRIVACY ACT OF 2012. You authorize
                            and consent to the use and transfer of said
                            information for valid and legitimate purposes.
                          </li>

                          <li>
                            I understand that all shared passwords and access to
                            resources, links, emails, files and other resources,
                            both paid and unpaid, will be for my child/ren and
                            will not be shared with others.
                          </li>
                        </ol>
                      </li>

                      <li>
                        <span className="font-bold">Financial Obligations</span>
                        <ol className=" list-inside list-[upper-roman] pl-4 my-3">
                          <li>
                            By enrolling my child in FCA school, I, as the
                            parent or legal guardian, agree to fulfill the
                            financial obligations associated with my child's
                            education. In the event of non-payment of school
                            fees within the specified timeframe, penalties
                            and/or additional fees may be added, and FCA
                            reserves the right to suspend or revoke the
                            privilege of my child to enroll in the succeeding
                            year, until the outstanding fees are settled. This
                            action may include withholding academic records,
                            examination results, and participation in school
                            activities. My commitment to timely fee payments is
                            crucial to maintaining my child's uninterrupted
                            enrollment and participation in FCA's educational
                            programs.
                          </li>
                        </ol>
                      </li>
                    </ol>

                    <div className="form__wrap flex items-center gap-2 ">
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

export default StudentParentCommitment;
