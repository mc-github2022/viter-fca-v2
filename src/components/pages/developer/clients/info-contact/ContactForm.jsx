import { InputSelect, InputText } from "@/components/helpers/FormInputs.jsx";
import { queryData } from "@/components/helpers/queryData.jsx";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const ContactForm = ({ itemEdit, setShowContact }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const getClientId = store.credentials.data?.user_system_aid;

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v2/dev-info-contact/${itemEdit.contact_aid}`
          : "/v2/dev-info-contact",
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["contactInfo"] });

      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        setShowContact(false);
        dispatch(setSuccess(true));
        dispatch(
          setMessage(`Record successfully ${itemEdit ? "updated" : "added"}.`)
        );
      }
    },
  });

  const handleClose = () => {
    setShowContact(false);
    // props.setItemEdit(null);
  };

  const initVal = {
    contact_aid: itemEdit ? itemEdit.contact_aid : "",
    contact_name: itemEdit ? itemEdit.contact_name : "",
    contact_email: itemEdit ? itemEdit.contact_email : "",
    contact_mobile: itemEdit ? itemEdit.contact_mobile : "",
    contact_landline: itemEdit ? itemEdit.contact_landline : "",
    contact_level: itemEdit ? itemEdit.contact_level : "",
    contact_name_old: itemEdit ? itemEdit.contact_name : "",
  };
  const yupSchema = Yup.object({
    contact_name: Yup.string().required("Required"),
    contact_email: Yup.string().required("Required"),
    contact_mobile: Yup.string().required("Required"),
    contact_level: Yup.string().required("Required"),
  });

  return (
    <>
      <Formik
        initialValues={initVal}
        validationSchema={yupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          mutation.mutate({
            ...values,
            contact_user_id: getClientId,
          });
        }}
      >
        {(props) => {
          return (
            <div className="my-5 bg-primary rounded-md max-w-[900px] border-line border shadow-sm relative p-4 md:pl-0">
              <div className="gap-8 md:flex">
                <aside className="md:max-w-[220px] w-full px-4">
                  <h4>Contact Information</h4>
                </aside>
                <div className="w-full">
                  <Form>
                    <div className={`form__contact block`}>
                      <div className="form__wrap">
                        <InputText
                          label="Fullname"
                          type="text"
                          name="contact_name"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="form__wrap">
                          <InputText
                            label="Email"
                            type="text"
                            name="contact_email"
                          />
                        </div>
                        <div className="form__wrap">
                          <InputText
                            label="Mobile"
                            type="text"
                            name="contact_mobile"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="form__wrap mb-0">
                          <InputText
                            label="Landline"
                            type="text"
                            name="contact_landline"
                          />
                        </div>
                        <div className="form__wrap mb-0">
                          <InputSelect
                            label="Priory Level"
                            type="text"
                            name="contact_level"
                            onChange={(e) => e}
                          >
                            <optgroup label="Select">
                              <option value="">--</option>
                              <option value="primary">Primary</option>
                              <option value="secondary">Secondary</option>
                              <option value="other">Other</option>
                            </optgroup>
                          </InputSelect>
                        </div>
                      </div>

                      <div className="flex w-full mt-5">
                        <div className="flex gap-4">
                          <button className="btn btn--accent" type="submit">
                            Submit
                          </button>
                        </div>
                        <button
                          className="btn btn--cancel  ml-auto"
                          onClick={handleClose}
                        >
                          Return
                        </button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
    </>
  );
};

export default ContactForm;
