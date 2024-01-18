import { InputText } from "@/components/helpers/FormInputs.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { BsConeStriped } from "react-icons/bs";
import * as Yup from "yup";

const ParentInfoForm = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();
  const [index, setIndex] = React.useState(1);
  const [isBasicComplete, setIsBasicComplete] = React.useState(false);
  const [isContactComplete, setIsContactComplete] = React.useState(false);

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v2/dev-info-parent/${itemEdit.grade_level_aid}`
          : "/v2/dev-info-parent",
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

  const handleGotoContact = (props) => {
    if (Object.keys(props.errors).length === 0 && props.dirty) {
      setIndex(2);
      setIsBasicComplete(true);
    } else {
      setIndex(1);
      setIsBasicComplete(false);
    }
  };

  const handleGotoOther = (props) => {
    if (Object.keys(props.errors).length === 0 && props.dirty) {
      setIndex(2);
      setIsContactComplete(true);
    } else {
      setIndex(1);
      setIsContactComplete(false);
    }
  };

  const initVal = {
    parent_guardian_info_relationship_id: "",
    parent_guardian_info_reside: "",
    parent_guardian_info_email: "",
    parent_guardian_info_mobile: "",
  };
  const yupSchema = Yup.object({
    parent_guardian_info_relationship_id: Yup.string().required("Required"),
    parent_guardian_info_reside: Yup.string().required("Required"),

    parent_guardian_info_email: isBasicComplete
      ? Yup.string().required("Required")
      : null,
    parent_guardian_info_mobile: isBasicComplete
      ? Yup.string().required("Required")
      : null,

    other1: isContactComplete ? Yup.string().required("Required") : null,
    other2: isContactComplete ? Yup.string().required("Required") : null,
  });

  return (
    <div>
      <div className="my-5 bg-primary rounded-md max-w-[900px] border-line border shadow-sm relative p-4 md:pl-0">
        <div className="gap-8 md:flex">
          <aside className="md:max-w-[220px] w-full px-4">
            <h4>Parent Information</h4>
            <ul>
              <li>
                <button onClick={() => setIndex(1)}>Basic</button>
              </li>
              <li>
                <button onClick={() => setIndex(2)}>Contact</button>
              </li>
              <li>
                <button>Other</button>
              </li>
            </ul>
          </aside>
          <div className="w-full">
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                mutation.mutate(values);
              }}
            >
              {(props) => {
                return (
                  <Form>
                    {index === 1 && (
                      <div className="form__basic">
                        <div className="grid grid-cols-3 gap-2">
                          <div className="form__wrap">
                            <InputText
                              label="Relationship to Student"
                              type="text"
                              name="parent_guardian_info_relationship_id"
                            />
                          </div>

                          <div className="form__wrap">
                            <InputText
                              label="Resided with child"
                              type="text"
                              name="parent_guardian_info_reside"
                            />
                          </div>
                        </div>

                        <div className="flex gap-4 mt-3">
                          <button
                            className="btn btn--accent"
                            onClick={() => handleGotoContact(props)}
                          >
                            validate basic
                          </button>
                          <button className="btn btn--cancel">Dismiss</button>
                        </div>
                      </div>
                    )}

                    {index === 1 && (
                      <div className="form__contact">
                        <div className="grid grid-cols-3 gap-2">
                          <div className="form__wrap">
                            <InputText
                              label="Email "
                              type="text"
                              name="parent_guardian_info_email"
                            />
                          </div>

                          <div className="form__wrap">
                            <InputText
                              label="Mobile "
                              type="text"
                              name="parent_guardian_info_mobile"
                            />
                          </div>
                        </div>

                        <div className="flex gap-4 mt-3">
                          <button
                            className="btn btn--accent"
                            onClick={() => handleGotoOther(props)}
                          >
                            Next
                          </button>
                          <button className="btn btn--cancel">Dismiss</button>
                        </div>
                      </div>
                    )}

                    {index === 1 && (
                      <div className="form__contact">
                        <div className="grid grid-cols-3 gap-2">
                          <div className="form__wrap">
                            <InputText
                              label="other "
                              type="text"
                              name="other1"
                            />
                          </div>

                          <div className="form__wrap">
                            <InputText
                              label="Mobile "
                              type="text"
                              name="other2"
                            />
                          </div>
                        </div>

                        <div className="flex gap-4 mt-3">
                          <button className="btn btn--accent">Next</button>
                          <button className="btn btn--cancel">Dismiss</button>
                        </div>
                      </div>
                    )}
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentInfoForm;
