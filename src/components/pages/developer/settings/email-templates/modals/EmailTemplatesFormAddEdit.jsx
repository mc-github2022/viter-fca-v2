import {
  InputSelect,
  InputText,
  InputTextArea,
} from "@/components/helpers/FormInputs";
import { queryData } from "@/components/helpers/queryData";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import {
  setError,
  setIsSettingAdd,
  setMessage,
  setSuccess,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const EmailTemplatesFormAddEdit = ({
  itemEdit,
  department,
  setAddIndex,
  setPreviewData,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const handleClose = () => {
    dispatch(setIsSettingAdd(false));
    setAddIndex(null);
  };

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v2/dev-email-template/${itemEdit.email_template_aid}`
          : "/v2/dev-email-template",
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["notification"] });

      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        dispatch(setIsSettingAdd(false));
        dispatch(setSuccess(true));
        dispatch(
          setMessage(`Record successfully ${itemEdit ? "updated" : "added"}.`)
        );
      }
    },
  });

  const handlePreview = (propsValues) => {
    setAddIndex(2);
    setPreviewData(propsValues);
  };

  const getActiveDepartment = department?.data.filter(
    (item) => item.department_active === 1
  );

  const initVal = {
    email_template_name: itemEdit ? itemEdit.email_template_name : "",
    email_template_content: itemEdit ? itemEdit.email_template_content : "",
    email_template_receiver: itemEdit
      ? itemEdit.email_template_receiver
      : "client",
    email_template_category: itemEdit ? itemEdit.email_template_category : "",
    email_template_cc_email: itemEdit ? itemEdit.email_template_cc_email : "",
    email_template_cc_email_two: itemEdit
      ? itemEdit.email_template_cc_email_two
      : "",
    email_template_name_old: itemEdit ? itemEdit.email_template_name : "",
  };

  const yupSchema = Yup.object({
    email_template_name: Yup.string().required("Required"),
    email_template_content: Yup.string().required("Required"),
    email_template_category: Yup.string().required("Required"),
  });
  return (
    <>
      <div className="settings__addEdit mb-8 max-w-[650px] w-full">
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            mutation.mutate(values);
          }}
        >
          {(props) => {
            return (
              <Form className="flex flex-col h-full max-h-[calc(70vh-90px)] overflow-y-auto">
                <div className="modal__body custom__scroll">
                  <div className="form__wrap text-xs mb-3 max-w-[20rem]">
                    <InputText
                      label="Template Name"
                      type="text"
                      name="email_template_name"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div>
                    <label className="flex justify-between text-[12px]">
                      Content
                      <span
                        className="underline cursor-pointer mr-2"
                        onClick={(e) => handlePreview(props.values)}
                      >
                        Preview
                      </span>
                    </label>

                    <div className="form__wrap text-xs mb-3">
                      <InputTextArea
                        type="text"
                        name="email_template_content"
                        className="h-[26rem] w-[34rem]"
                        disabled={mutation.isPending}
                      />
                    </div>
                  </div>
                  <div className="form__wrap text-xs mb-3 max-w-[20rem]">
                    <InputSelect
                      label="Receiver"
                      name="email_template_receiver"
                      disabled={mutation.isPending}
                      onChange={(e) => e}
                    >
                      <optgroup label="Select Receiver">
                        <option value="client">Client</option>
                        {getActiveDepartment?.length > 0 ? (
                          getActiveDepartment?.map((item, key) => {
                            return (
                              <option key={key} value={item.department_aid}>
                                {item.department_name}
                              </option>
                            );
                          })
                        ) : (
                          <option value="" disabled>
                            No data
                          </option>
                        )}
                      </optgroup>
                    </InputSelect>
                  </div>
                  <div className="form__wrap text-xs mb-3 max-w-[20rem]">
                    <InputSelect
                      label="Category"
                      name="email_template_category"
                      disabled={mutation.isPending}
                      onChange={(e) => e}
                    >
                      <optgroup label="Select Category">
                        <option value="" hidden></option>
                        <option value="assessment">Assessment</option>
                        <option value="registerar">Registerar</option>
                      </optgroup>
                    </InputSelect>
                  </div>
                  <div className="form__wrap text-xs mb-3 max-w-[20rem]">
                    <InputText
                      label="CC Email (one)"
                      type="text"
                      name="email_template_cc_email"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="form__wrap text-xs mb-3 max-w-[20rem]">
                    <InputText
                      label="CC Email (two)"
                      type="text"
                      name="email_template_cc_email_two"
                      disabled={mutation.isPending}
                    />
                  </div>
                </div>
                <div className="settings__actions flex gap-2 mt-4">
                  <button
                    className="btn btn--accent"
                    type="submit"
                    disabled={mutation.isPending || !props.dirty}
                  >
                    {mutation.isPending ? (
                      <ButtonSpinner />
                    ) : itemEdit ? (
                      "Save"
                    ) : (
                      "Add"
                    )}
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
    </>
  );
};

export default EmailTemplatesFormAddEdit;
