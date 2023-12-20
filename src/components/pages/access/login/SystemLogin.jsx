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
      <div className="h-screen w-full flex justify-center items-center">
        <div className="login w-full max-w-[380px] border border-gray-200 py-8 px-4 rounded-md shadow-sm">
          <div className="flex flex-col items-center mb-4">
            <LogoGreen />
            <h2 className="mb-0 mt-10 text-lg">System Login</h2>
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
                  <div className="relative mb-6">
                    <InputText
                      label="Email"
                      type="text"
                      name="user_system_email"
                      disabled={mutation.isLoading}
                    />
                  </div>
                  <div className="relative mb-6">
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
                  <div className="flex items-center gap-1 pt-3">
                    <button
                      type="submit"
                      disabled={mutation.isLoading || !props.dirty}
                      className="btn-modal-submit relative"
                    >
                      {mutation.isLoading ? <ButtonSpinner /> : "Login"}
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
          <a
            className="text-dark text-xs block text-center mt-6"
            href={`${devNavUrl}/system/forgot-password`}
          >
            Forgot Password
          </a>
        </div>
      </div>
    </>
  );
};

export default SystemLogin;
