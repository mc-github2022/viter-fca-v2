import useSystemLogin from "@/components/custom-hooks/useSystemLogin.jsx";
import { InputText } from "@/components/helpers/FormInputs.jsx";
import {
  devNavUrl,
  setStorageRoute,
} from "@/components/helpers/functions-general";
import { checkRoleToRedirect } from "@/components/helpers/login-functions.jsx";
import { queryData } from "@/components/helpers/queryData.jsx";
import ModalError from "@/components/partials/modals/ModalError.jsx";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import TableSpinner from "@/components/partials/spinners/TableSpinner.jsx";
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

const SystemLogin = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [passwordShown, setPasswordShown] = React.useState(false);
  const navigate = useNavigate();
  const { loginLoading } = useSystemLogin(navigate);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(`/v2/dev-user-system/login`, "post", values),
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

          setStorageRoute(data.data[1], true);
          dispatch(setCredentials(data.data[0]));
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

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      {loginLoading ? (
        <TableSpinner />
      ) : (
        // <div className="h-screen w-full grid place-items-center">
        <div className="h-screen w-full relative">
          <div className="login w-full max-w-[380px] border border-gray-200 py-10 px-8  rounded-md shadow-sm absolute top-28 left-[50%] translate-x-[-50%] bg-primary">
            <div className=" mb-4">
              <div className="flex justify-center">
                <LogoGreen />
              </div>
              <h1 className="mt-8 font-normal mb-1 text-[27px]">
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
                    <div className="form__wrap">
                      <InputText
                        label="Email"
                        type="text"
                        name="user_system_email"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="form__wrap">
                      <InputText
                        label="Password"
                        type={passwordShown ? "text" : "password"}
                        name="password"
                        disabled={
                          mutation.isPending ||
                          props.values.user_system_email === ""
                        }
                      />
                      {props.values.password && (
                        <span
                          className="text-base absolute top-7 right-2  cursor-pointer"
                          onClick={togglePassword}
                        >
                          {passwordShown ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      )}
                    </div>

                    <a
                      className="text-dark text-xs italic block text-right mb-6 hover:underline"
                      href={`${devNavUrl}/system/forgot-password`}
                    >
                      Forgot Password
                    </a>
                    <div className="flex items-center gap-1 pt-3">
                      <button
                        type="submit"
                        disabled={mutation.isPending || !props.dirty}
                        className="btn btn--accent w-full relative"
                      >
                        {mutation.isPending ? (
                          <ButtonSpinner color="fill-white" />
                        ) : (
                          "Login"
                        )}
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      )}

      {store.error && <ModalError />}
    </>
  );
};

export default SystemLogin;
