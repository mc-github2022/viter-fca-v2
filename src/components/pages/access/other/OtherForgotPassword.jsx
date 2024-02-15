import useQueryData from "@/components/custom-hooks/useQueryData";
import useSystemLogin from "@/components/custom-hooks/useSystemLogin.jsx";
import { InputText } from "@/components/helpers/FormInputs.jsx";
import { devNavUrl } from "@/components/helpers/functions-general";
import { checkRoleToRedirect } from "@/components/helpers/login-functions.jsx";
import { queryData } from "@/components/helpers/queryData.jsx";
import ModalError from "@/components/partials/modals/ModalError.jsx";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import LogoGreen from "@/components/partials/svg/LogoGreen.jsx";
import {
  setCredentials,
  setError,
  setIsLogin,
  setMessage,
  setValidate,
} from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { MdMarkEmailRead } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const OtherForgotPassword = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const navigate = useNavigate();
  const { loginLoading } = useSystemLogin(navigate);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData(`/v2/user-other/reset`, "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["other"] });
      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        setIsSuccess(true);
      }
    },
  });

  const initVal = {
    item: "",
  };

  const yupSchema = Yup.object({
    item: Yup.string().required("Required").email("Invalid email."),
  });

  const { data: maintenanceMode } = useQueryData(
    "/v2/dev-system-mode/maintenance-mode", // endpoint
    "get", // method
    "maintenance-mode" // key
  );

  if (maintenanceMode?.count > 0) {
    return <PageNotFound />;
  } else {
    return (
      <>
        <div className="h-screen w-full relative">
          <div className="login w-full max-w-[380px] border border-gray-200 py-10 px-8 moveTop rounded-md shadow-sm absolute left-[50%] translate-x-[-50%] bg-primary">
            {isSuccess ? (
              <>
                <MdMarkEmailRead className="text-5xl fill-accent mx-auto mt-10 mb-2" />
                <h2 className="mb-4 mt-2 text-lg text-center">
                  Instruction Sent!
                </h2>
                <p className="text-sm mb-6">
                  We have successfully sent an instruction to reset your
                  password. If you haven't received any email, please also check
                  your spam/junk folder.
                </p>

                <a
                  className="btn btn--accent text-xs block text-center mt-6"
                  href={`${devNavUrl}/login`}
                >
                  Back to Login
                </a>
              </>
            ) : (
              <>
                <div className=" mb-4">
                  <div className="flex justify-center">
                    <LogoGreen />
                  </div>
                  <h1 className="mt-8 font-normal mb-1 text-[27px]">
                    Reset Password
                  </h1>
                  <p className="mb-8 ">Please enter your registered email</p>
                </div>

                <Formik
                  initialValues={initVal}
                  validationSchema={yupSchema}
                  onSubmit={async (values, { setSubmitting, resetForm }) => {
                    // mutate data
                    mutation.mutate(values);
                    console.log(mutation);
                  }}
                >
                  {(props) => {
                    return (
                      <Form>
                        <div className="form__wrap">
                          <InputText
                            label="Registered Email"
                            type="text"
                            name="item"
                            disabled={mutation.isPending}
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
                              "Reset Password"
                            )}
                          </button>
                        </div>

                        <a
                          className="text-dark text-xs hover:underline text-center block  mt-6"
                          href={`${devNavUrl}/login`}
                        >
                          Go back to login
                        </a>
                      </Form>
                    );
                  }}
                </Formik>
              </>
            )}
          </div>
        </div>
        {store.error && <ModalError />}
      </>
    );
  }
};

export default OtherForgotPassword;
