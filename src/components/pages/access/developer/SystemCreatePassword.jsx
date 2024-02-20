import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import { InputText } from "@/components/helpers/FormInputs.jsx";
import { devNavUrl, getUrlParam } from "@/components/helpers/functions-general";
import { queryData } from "@/components/helpers/queryData.jsx";
import PageNotFound from "@/components/partials/PageNotFound.jsx";
import ModalError from "@/components/partials/modals/ModalError.jsx";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import FetchingSpinner from "@/components/partials/spinners/FetchingSpinner.jsx";
import LogoGreen from "@/components/partials/svg/LogoGreen.jsx";
import { setMessage, setValidate } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs/index.js";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import * as Yup from "yup";

const SystemCreatePassword = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const paramKey = getUrlParam().get("key");
  const [lowerValidated, setLowerValidated] = React.useState(false);
  const [upperValidated, setUpperValidated] = React.useState(false);
  const [numberValidated, setNumberValidated] = React.useState(false);
  const [specialValidated, setSpecialValidated] = React.useState(false);
  const [lengthValidated, setLengthValidated] = React.useState(false);
  const [validateComplete, setValidateComplete] = React.useState(false);

  const queryClient = useQueryClient();

  const { isPending, data: key } = useQueryData(
    `/v2/dev-user-system/key/${paramKey}`, // endpoint
    "get", // method
    "system" // key
  );

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData("/v2/dev-user-system/password", "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["system"] });

      // show error box
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      } else {
        setIsSuccess(true);
      }
    },
  });

  const yupSchema = Yup.object({
    new_password: Yup.string()
      .required("Required")
      .min(8, "Password must be at least 8 characters.")
      .matches(/[a-z]/, "At least one lowercase letter.")
      .matches(/[A-Z]/, "At least one uppercase letter.")
      .matches("(?=.*[!@#$%^&*`{;:',<.>/?}_-])", "Atleast 1 special character.")
      .matches("(?=.*[0-9])", "Atleast 1 number."),
    confirm_password: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("new_password"), null], "Passwords does not match."),
  });
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const initVal = {
    new_password: "",
    confirm_password: "",
    key: paramKey,
  };

  const handleChange = (value) => {
    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&*`{;:',<.>/?}_-])");
    const length = new RegExp("(?=.{8,})");

    if (lower.test(value)) {
      setLowerValidated(true);
    } else {
      setLowerValidated(false);
    }
    if (upper.test(value)) {
      setUpperValidated(true);
    } else {
      setUpperValidated(false);
    }
    if (number.test(value)) {
      setNumberValidated(true);
    } else {
      setNumberValidated(false);
    }
    if (special.test(value)) {
      setSpecialValidated(true);
    } else {
      setSpecialValidated(false);
    }
    if (length.test(value)) {
      setLengthValidated(true);
    } else {
      setLengthValidated(false);
    }

    if (
      lowerValidated &&
      upperValidated &&
      numberValidated &&
      specialValidated &&
      lengthValidated
    ) {
      setValidateComplete(true);
    }
  };

  return (
    <>
      {isSuccess ? (
        <>
          <div className="h-screen w-full relative">
            <div className="login w-full max-w-[380px] border border-gray-200 py-10 px-8 moveTop rounded-md shadow-sm absolute left-[50%] translate-x-[-50%] bg-primary">
              <div className=" mb-4">
                <div className="flex justify-center">
                  <LogoGreen />
                </div>
                <AiFillCheckCircle className="text-5xl fill-accent mx-auto mt-10 mb-2" />
                <h2 className="mb-4 mt-2 text-lg text-center">Success</h2>
                <p className="text-sm mb-6">
                  Your new password is set and ready to use. Click the button
                  below to continue login
                </p>

                <a
                  className="btn btn--accent text-xs block text-center mt-6"
                  href={`${devNavUrl}/system/login`}
                >
                  Back to Login
                </a>
              </div>
            </div>
          </div>
        </>
      ) : key?.count === 0 || paramKey === null || paramKey === "" ? (
        <>
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-white z-50">
            <PageNotFound />
          </div>
        </>
      ) : (
        <>
          {isPending && (
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-white z-50">
              <FetchingSpinner />
            </div>
          )}
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
                  // mutate data
                  mutation.mutate(values);
                }}
              >
                {(props) => {
                  return (
                    <Form>
                      <div className="form__wrap">
                        <InputText
                          label="Password"
                          type={showPassword ? "text" : "password"}
                          name="new_password"
                          onKeyUp={(e) => handleChange(e.target.value)}
                          disabled={mutation.isPending}
                        />
                        {props.values.new_password && (
                          <span
                            className="text-base absolute bottom-1/2 top-7 right-3 cursor-pointer"
                            onClick={handlePassword}
                          >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </span>
                        )}
                      </div>

                      <div className="form__wrap">
                        <InputText
                          label="Confirm Password"
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirm_password"
                          disabled={mutation.isPending}
                        />
                        {props.values.confirm_password && (
                          <span
                            className="text-base absolute bottom-5 right-3 top-7 cursor-pointer"
                            onClick={handleConfirmPassword}
                          >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                          </span>
                        )}
                      </div>

                      <div className="p-3 rounded-sm bg-gray-50 mb-6 border border-solid border-gray-200">
                        <h5 className="text-[12px] text-body mb-2">
                          Password Requirement
                        </h5>
                        <ul className="text-sm">
                          <li className="text-body  text-[12px] flex gap-2 items-center mb-1">
                            <BsCheckCircleFill
                              className={`${
                                lengthValidated ? "fill-success" : "opacity-50"
                              }`}
                            />
                            Must have 8 characters
                          </li>
                          <li className="text-body text-[12px] flex gap-2 items-center mb-1">
                            <BsCheckCircleFill
                              className={`${
                                upperValidated ? "fill-success" : "opacity-50"
                              }`}
                            />
                            At least 1 uppercase
                          </li>
                          <li className="text-body text-[12px] flex gap-2 items-center mb-1">
                            <BsCheckCircleFill
                              className={`${
                                lowerValidated ? "fill-success" : "opacity-50"
                              }`}
                            />
                            At least 1 lowercase
                          </li>
                          <li className="text-body text-[12px] flex gap-2 items-center mb-1">
                            <BsCheckCircleFill
                              className={`${
                                numberValidated ? "fill-success" : "opacity-50"
                              }`}
                            />
                            At least 1 number
                          </li>
                          <li className="text-body text-[12px] flex gap-2 items-center mb-1">
                            <BsCheckCircleFill
                              className={`${
                                specialValidated ? "fill-success" : "opacity-50"
                              }`}
                            />
                            At least 1 symbol
                          </li>
                        </ul>
                      </div>

                      <div className="flex items-center gap-1 pt-3">
                        <button
                          type="submit"
                          disabled={mutation.isPending || !validateComplete}
                          className="btn btn--accent w-full relative"
                        >
                          {mutation.isPending ? (
                            <ButtonSpinner />
                          ) : (
                            "Set Password"
                          )}
                        </button>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </>
      )}

      {store.validate && <ModalError />}
    </>
  );
};

export default SystemCreatePassword;
