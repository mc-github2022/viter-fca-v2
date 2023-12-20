import useSystemLogin from "@/components/custom-hooks/useSystemLogin.jsx";
import { InputText } from "@/components/helpers/FormInputs.jsx";
import { devNavUrl } from "@/components/helpers/functions-general";
import { checkRoleToRedirect } from "@/components/helpers/login-functions.jsx";
import { queryData } from "@/components/helpers/queryData.jsx";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import LogoGreen from "@/components/partials/svg/Logo.jsx";
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

const SystemLogin = () => {
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
        <div className="login w-full max-w-[380px] border border-gray-200 py-10 px-8  rounded-md shadow-sm">
          <div className=" mb-4">
            <div className="flex justify-center">
              <LogoGreen />
            </div>
            <h1 className="mt-8 font-normal mb-0 text-[27px]">
              Welcome Developer
            </h1>
            <p className="mb-8 ">Sign in to continue</p>
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
                  <div className="relative mb-4">
                    <InputText
                      label="Email"
                      type="text"
                      name="user_system_email"
                      disabled={mutation.isLoading}
                    />
                  </div>
                  <div className="relative mb-4">
                    <InputText
                      label="Password"
                      type={passwordShown ? "text" : "password"}
                      name="password"
                      disabled={
                        mutation.isLoading ||
                        props.values.user_system_email === ""
                      }
                    />
                    {props.values.password && (
                      <span
                        className="text-base absolute bottom-1/2 right-2 translate-y-1/2 cursor-pointer"
                        onClick={togglePassword}
                      >
                        {passwordShown ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    )}
                  </div>

                  <a
                    className="text-dark text-xs italic block text-right mb-6"
                    href={`${devNavUrl}/system/forgot-password`}
                  >
                    Forgot Password
                  </a>
                  <div className="flex items-center gap-1 pt-3">
                    <button
                      type="submit"
                      // disabled={mutation.isLoading || !props.dirty}
                      className="btn btn--accent w-full relative"
                    >
                      {mutation.isLoading ? <ButtonSpinner /> : "Login"}
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default SystemLogin;
