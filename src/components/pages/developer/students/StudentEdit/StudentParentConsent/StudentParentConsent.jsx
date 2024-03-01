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

const StudentParentConsent = ({ showSideNav, dataItem, handleClose }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(`/v2/dev-students/update-parent-consent`, "put", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["all-students"] });
      queryClient.invalidateQueries({ queryKey: ["students"] });
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
    school_year_students_aid: dataItem?.school_year_students_aid,
    school_year_students_last_parent_consent_is_agree:
      dataItem?.current_students_last_parent_consent_is_agree === 0
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
                <div className="overflow-y-auto custom__scroll z-30 modal__article">
                  <div
                    className={` ${
                      showSideNav
                        ? "max-w-[calc(1065px-0px)]"
                        : "max-w-[calc(1065px-200px)]"
                    } absolute -bottom-1 right-0 flex items-center justify-end gap-x-2  bg-primary z-20 max-w-[calc(1065px-200px)] pr-7 py-8 w-full `}
                  >
                    <div className="flex items-center gap-2">
                      {/* {dataItem.current_students_last_parent_consent_is_agree ===
                        0 && ( */}
                      <button
                        className="btn btn--accent"
                        type="submit"
                        disabled={mutation.isPending || !props.dirty}
                      >
                        {mutation.isPending ? <ButtonSpinner /> : "Save"}
                      </button>
                      {/* )} */}
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
                  <div className="mb-14 text-xs">
                    <h3 className="mb-3">Parent Consent Form</h3>

                    <p>
                      I as the parent or legal guardian hereby acknowledge that
                      I have been informed of the details of the conduct of
                      Implementation of Limited Face-to-Face learning modality.
                      I understand that FRONTLINE CHRISTIAN ACADEMY INC shall
                      implement the minimum public health standards set by the
                      government to minimize risk of the spread of COVID 19, but
                      it cannot guarantee that my child will not become ill. I
                      acknowledge that my child/ren’s in persons attendance in
                      school will include associating with teachers, fellow
                      learners and school personnel, and other persons inside
                      and outside that may put my child at risk of COVID 19
                      transmission, notwithstanding the precautions undertaken
                      by the school. I acknowledge that my child/ren’s
                      participation in this activity is completely voluntary.
                      While there remains the risk of possible COVID 19
                      transmissions to my child/dren, and to the members of my
                      household, I freely assume the said risk and I permit my
                      child/dren to attend the school under this activity, the
                      Face-to-Face Summer Classes.
                    </p>

                    <p>
                      I am aware that the symptoms of COVID 19 include but are
                      not limited to, fever or chills, cough, shortness of
                      breath or difficulty of breathing, body and headache, loss
                      of taste and smell, sore throat, congestion, nausea,
                      vomiting and diarrhea. I confirm that my child/dren
                      currently has none of those symptoms, and is in good
                      health. I will not allow my child/dren to physically go to
                      school to attend classes if my child/dren or any members
                      of my household develops any said symptoms or any other
                      illness that may or may not be related to COVID 19. I will
                      also inform the school and not allow my child/dren to
                      attend Face-to-Face classes if my child/dren or any of my
                      household members tests positive for COVID 19. My
                      child/dren and I, with my household members, will follow
                      the required health and safety protocols and procedures
                      adopted by the school and our community. To the extent
                      allowed by law and rules, I hereby agree to waive, release
                      and discharge any and all claims, causes of action,
                      damages and rights against the school and its personnel as
                      well as officials and personnel of the Department of
                      Education relative to the conduct of the activity.
                    </p>

                    <div className="form__wrap flex items-center gap-2 ">
                      <InputCheckbox
                        label="I agree and undestand this code of conduct"
                        type="checkbox"
                        className="mb-0 !text-xs font-bold"
                        name="school_year_students_last_parent_consent_is_agree"
                        id="school_year_students_last_parent_consent_is_agree"
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

export default StudentParentConsent;
