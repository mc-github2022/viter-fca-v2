import { InputText } from "@/components/helpers/FormInputs";
import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import Navigation from "@/components/partials/Navigation-old.jsx";
import ModalError from "@/components/partials/modals/ModalError";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import { setError, setMessage } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { Form, Formik } from "formik";
import React from "react";
import { FaAngleLeft, FaBars, FaEye, FaEyeSlash } from "react-icons/fa";
import { TfiLock } from "react-icons/tfi";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import ModalConfirmPasswordChange from "./ModalConfirmPasswordChange";

const Profile = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [show, setShow] = React.useState(false);
  const [initialValues, setInitialValues] = React.useState(null);
  const [showCurrentPassword, setShowCurrentPassword] = React.useState(false);
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [changePassword, setChangePassword] = React.useState(false);

  const handleShowSubMenu = () => {
    setShow(!show);
  };

  const userName =
    store.credentials.data.role_is_developer === 1
      ? `${store.credentials.data.user_system_fname} ${store.credentials.data.user_system_lname}`
      : `${store.credentials.data.user_other_fname} ${store.credentials.data.user_other_lname}`;

  const userEmail =
    store.credentials.data.role_is_developer === 1
      ? store.credentials.data.user_system_email
      : store.credentials.data.user_other_email;

  const userId =
    store.credentials.data.role_is_developer === 1
      ? store.credentials.data.user_system_aid
      : store.credentials.data.user_other_aid;

  const initVal = {
    user_id: userId,
    current_password: "",
    new_password: "",
    confirm_password: "",
  };

  const yupSchema = Yup.object({
    current_password: Yup.string().required("Required"),
    new_password: Yup.string()
      .required("Required")
      .min(8, "Password must be at least 8 characters.")
      .matches(/[a-z]/, "At least one lowercase letter.")
      .matches(/[A-Z]/, "At least one uppercase letter.")
      .matches("(?=.*[!@#$%^&*-])", "Atleast 1 special character.")
      .matches("(?=.*[0-9])", "Atleast 1 number."),
    confirm_password: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("new_password"), null], "Passwords does not match."),
  });

  const handleShowCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };
  const handleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handleChangePassword = (props) => {
    if (
      props.values.current_password !== "" &&
      props.values.new_password !== "" &&
      props.values.confirm_password !== "" &&
      props.values.new_password === props.values.confirm_password
    ) {
      setChangePassword(true);
      setInitialValues(props.values);
      return;
    } else {
      dispatch(setError(true));
      dispatch(setMessage("All fields required."));
      return;
    }
  };

  return (
    <>
      <Header />
      <section className="main__wrap flex relative ">
        <Navigation menu="student" />

        <main
          className={`main__content mt-[35px] ${
            store.isMenuExpand ? "expand" : ""
          }`}
        >
          <div className="main__header flex justify-between items-start lg:items-center">
            <div>
              <h1 className="text-clampH1 mb-0">User Account</h1>
              <p className="mb-4 text-xs hidden lg:block">
                Manage your information and account security
              </p>
            </div>
          </div>

          <div className="mt-5 bg-primary rounded-md max-w-[430px]  shadow-sm relative pb-4">
            <header className=" py-2 pr-4 flex justify-end">
              <button className="text-lg md:hidden" onClick={handleShowSubMenu}>
                <FaBars />
              </button>
            </header>

            <div className=" pl-0  md:flex md:gap-5">
              <div className="w-full">
                <div className="profile__block min-h-[300px] w-full ">
                  <h6 className="mb-5">Change Password</h6>

                  <Formik
                    initialValues={initVal}
                    validationSchema={yupSchema}
                    onSubmit={async (
                      values,
                      { setSubmitting, resetForm }
                    ) => {}}
                  >
                    {(props) => {
                      return (
                        <Form>
                          <div className="form__wrap">
                            <InputText
                              type={showCurrentPassword ? "text" : "password"}
                              name="current_password"
                              className="account_password"
                              placeholder="Current password"
                            />
                            {props.values.current_password && (
                              <button
                                type="button"
                                className="absolute top-1/2 -translate-y-1/2 text-base text-gray-400 right-3"
                                onClick={handleShowCurrentPassword}
                              >
                                {showCurrentPassword ? (
                                  <FaEyeSlash />
                                ) : (
                                  <FaEye />
                                )}
                              </button>
                            )}
                          </div>

                          <div className="form__wrap">
                            <InputText
                              type={showNewPassword ? "text" : "password"}
                              name="new_password"
                              className="account_password"
                              placeholder="New password"
                            />

                            {props.values.new_password && (
                              <button
                                type="button"
                                className="absolute top-1/2 -translate-y-1/2 text-base text-gray-400 right-3"
                                onClick={handleShowNewPassword}
                              >
                                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                              </button>
                            )}
                          </div>

                          <div className="form__wrap">
                            <InputText
                              type={showConfirmPassword ? "text" : "password"}
                              name="confirm_password"
                              className="account_password"
                              placeholder="Confirm New password"
                            />
                            {props.values.confirm_password && (
                              <button
                                type="button"
                                className="absolute top-1/2 -translate-y-1/2 text-base text-gray-400 right-3"
                                onClick={handleShowConfirmPassword}
                              >
                                {showConfirmPassword ? (
                                  <FaEyeSlash />
                                ) : (
                                  <FaEye />
                                )}
                              </button>
                            )}
                          </div>

                          <div className="flex  gap-3 mt-8">
                            <button
                              className="btn btn--accent"
                              type="button"
                              onClick={() => handleChangePassword(props)}
                              disabled={
                                props.values.current_password === "" ||
                                props.values.new_password === "" ||
                                props.values.confirm_password === "" ||
                                props.values.new_password !==
                                  props.values.confirm_password
                              }
                            >
                              Update
                            </button>
                          </div>
                        </Form>
                      );
                    }}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </section>

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}

      {changePassword && (
        <ModalConfirmPasswordChange
          initVal={initialValues}
          setChangePassword={setChangePassword}
        />
      )}
    </>
  );
};

export default Profile;
