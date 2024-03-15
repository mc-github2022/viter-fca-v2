import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import { InputText } from "@/components/helpers/FormInputs.jsx";
import {
  devBaseUrl,
  devNavUrl,
} from "@/components/helpers/functions-general.jsx";
import { queryData } from "@/components/helpers/queryData.jsx";
import ModalError from "@/components/partials/modals/ModalError.jsx";
import ModalValidate from "@/components/partials/modals/ModalValidate.jsx";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner.jsx";
import LogoGreen from "@/components/partials/svg/LogoGreen.jsx";
import {
  setError,
  setMessage,
  setValidate,
} from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const OtherCreateAccount = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const queryClient = useQueryClient();

  const {
    isLoading,
    isFetching,
    error,
    data: roles,
  } = useQueryData(
    "/v2/dev-roles", // endpoint
    "get", // method
    "roles" // key
  );

  const roleId = roles?.data.filter((item) => item.role_is_parent === 1);

  const initVal = {
    user_other_fname: "",
    user_other_lname: "",
    user_other_email: "",
  };
  const yupSchema = Yup.object({
    user_other_fname: Yup.string().required("Required"),
    user_other_lname: Yup.string().required("Required"),
    user_other_email: Yup.string().required("Required").email("Invalid email"),
  });

  const mutation = useMutation({
    mutationFn: (values) => queryData("/v2/user-other", "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["other"] });
      // show error box
      if (data.success) {
        setIsSuccess(true);
      }
      if (!data.success) {
        dispatch(setError(true));
        dispatch(
          setMessage(
            "Invalid account. For more information, please contact us through this email info@fca.edu.ph or visit us on our website at fca.edu.ph"
          )
        );
      }
    },
  });

  return (
    <>
      {isSuccess ? (
        <div className="h-screen w-full relative">
          <div className="login w-full max-w-[380px] border border-gray-200 py-10 px-8 moveTop rounded-md shadow-sm absolute left-[50%] translate-x-[-50%] bg-primary">
            <div className=" mb-4">
              <div className="flex justify-center">
                <LogoGreen />
              </div>
              <AiFillCheckCircle className="text-5xl fill-accent mx-auto mt-10 mb-2" />
              <h2 className="mb-4 mt-2 text-lg text-center">Success</h2>
              <p className="text-sm mb-6">
                We have sent you an email with instructions on how to create
                your password. Please check your email and follow the steps to
                continue.
              </p>

              <a
                className="btn btn--accent text-xs block text-center mt-6"
                href={`${devNavUrl}/login`}
              >
                Back to Login
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen w-full relative">
          <div className="login w-full max-w-[380px] border border-gray-200 py-10 px-8 moveTop rounded-md shadow-sm absolute left-[50%] translate-x-[-50%] bg-primary">
            <div className=" mb-4">
              <div className="flex justify-center">
                <LogoGreen />
              </div>
              <h1 className="mt-8 font-normal mb-1 text-[27px]">
                Create Password
              </h1>
            </div>
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                mutation.mutate({
                  ...values,
                  user_other_role_id: roleId[0].role_aid,
                });
              }}
            >
              {(props) => {
                return (
                  <Form>
                    <div className="form__wrap">
                      <InputText
                        label="First Name"
                        type="text"
                        name="user_other_fname"
                      />
                    </div>

                    <div className="form__wrap">
                      <InputText
                        label="Last Name"
                        type="text"
                        name="user_other_lname"
                      />
                    </div>

                    <div className="form__wrap">
                      <InputText
                        label="Email"
                        type="email"
                        name="user_other_email"
                      />
                    </div>

                    <div className="flex items-center gap-1 pt-3">
                      <button
                        type="submit"
                        disabled={mutation.isPending || !props.dirty}
                        className="btn btn--accent w-full relative"
                      >
                        {mutation.isPending ? (
                          <ButtonSpinner />
                        ) : (
                          "Create Account"
                        )}
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>

            <Link
              to={`${devNavUrl}/login`}
              className="block text-center mt-5 text-xs hover:underline"
            >
              Back to Login
            </Link>
          </div>
        </div>
      )}
      {store.error && <ModalError />}
    </>
  );
};

export default OtherCreateAccount;
