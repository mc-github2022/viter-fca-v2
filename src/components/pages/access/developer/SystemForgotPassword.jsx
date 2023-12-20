import useSystemLogin from "@/components/custom-hooks/useSystemLogin.jsx";
import { InputText } from "@/components/helpers/FormInputs.jsx";
import { devNavUrl } from "@/components/helpers/functions-general";
import { checkRoleToRedirect } from "@/components/helpers/login-functions.jsx";
import { queryData } from "@/components/helpers/queryData.jsx";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import LogoGreen from "@/components/partials/svg/LogoGreen.jsx";
import {
  setCredentials,
  setError,
  setIsLogin,
  setMessage,
} from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const SystemForgotPassword = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [passwordShown, setPasswordShown] = React.useState(false);
  const navigate = useNavigate();
  const { loginLoading } = useSystemLogin(navigate);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData(`/v1/user-system/login`, "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["system"] });
      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        if (store.isLogin) {
          delete data.data[0].user_system_password;
          delete data.data[0].role_description;
          delete data.data[0].role_created;
          delete data.data[0].role_datetime;

          dispatch(setCredentials(data.data[0]));
          setStorageRoute(data.data[1]);
          dispatch(setIsLogin(false));
          checkRoleToRedirect(navigate, data.data[0]);
        }
      }
    },
  });

  const initVal = {
    user_system_email: "",
    password: "",
  };

  const yupSchema = Yup.object({
    user_system_email: Yup.string().required("Required").email("Invalid email"),
    password: Yup.string().required("Required"),
  });

  return (
    <>
      <div className="h-screen w-full grid place-items-center">
        <div className="login w-full max-w-[380px] border border-gray-200 py-10 px-8  rounded-md shadow-sm mx-4 -translate-y-14">
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
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="form__wrap">
                    <InputText
                      label="Registered Email"
                      type="text"
                      name="user_system_email"
                      disabled={mutation.isLoading}
                    />
                  </div>

                  <div className="flex items-center gap-1 pt-3">
                    <button
                      type="submit"
                      // disabled={mutation.isLoading || !props.dirty}
                      className="btn btn--accent w-full relative"
                    >
                      {mutation.isLoading ? (
                        <ButtonSpinner />
                      ) : (
                        "Reset Password"
                      )}
                    </button>
                  </div>

                  <a
                    className="text-dark text-sm text-center block  mt-6"
                    href={`${devNavUrl}/system/login`}
                  >
                    Go back to login
                  </a>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default SystemForgotPassword;
