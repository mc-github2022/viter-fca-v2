import useQueryData from "@/components/custom-hooks/useQueryData";
import { InputText } from "@/components/helpers/FormInputs";
import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import ModalError from "@/components/partials/modals/ModalError";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import { setError, setMessage } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { Form, Formik } from "formik";
import React from "react";
import { FaBars, FaEye, FaEyeSlash } from "react-icons/fa";
import { TfiLock } from "react-icons/tfi";
import * as Yup from "yup";
import Navigation from "../Navigation";
import ModalConfirmPasswordChange from "./ModalConfirmPasswordChange";

const Profile = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [show, setShow] = React.useState(false);
  const [initialValues, setInitialValues] = React.useState(null);
  const [showCurrentPassword, setShowCurrentPassword] = React.useState(false);
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [changePassword, setChangePassword] = React.useState(false);

  const {
    isLoading,
    error,
    data: schoolYear,
  } = useQueryData(
    "/v2/dev-school-year", // endpoint
    "get", // method
    "school-year" // key
  );

  const isOngoing =
    schoolYear?.count > 0 && schoolYear?.data[0].school_year_is_enrollment_open;

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
      <Header isLoading={isLoading} schoolYear={schoolYear} />
      <section className="main__wrap flex flex-col relative h-[calc(100vh-40px)] ">
        <div className={`grow ${store.isMenuExpand ? "" : "expand"}`}>
          <Navigation
            menu="student"
            isLoading={isLoading}
            error={error}
            schoolYear={schoolYear}
          />

          <main
            className={`main__content pl-0 md:pr-[13.5px] relative  ${
              store.isMenuExpand ? "expand" : ""
            } ${isOngoing === 1 ? "customHeightOngoing" : "customHeight"}`}
          >
            <div className="main__header pt-[10px] flex justify-between items-start lg:items-center">
              <div className="mt-[55px] flex items-start justify-between w-full">
                <div>
                  <h1 className="text-clampH1 mb-0">User Account</h1>
                  <p className="mb-4 text-xs hidden lg:block">
                    Manage your information and account security
                  </p>
                </div>
              </div>
            </div>

            {/* <header className=" py-2 pr-4 flex justify-end">
              <button className="text-lg md:hidden" onClick={handleShowSubMenu}>
                <FaBars />
              </button>
            </header> */}

            <div className="mb-8 pb-5">
              <h6 className="mb-5 text-sm">Profile</h6>
              <p className="grid grid-cols-[80px,200px]">
                <span className="font-bold mr-2 block">First Name:</span>
                {store.credentials.data.user_other_fname}
              </p>
              <p className="grid grid-cols-[80px,200px]">
                <span className="font-bold mr-2">Last Name:</span>
                {store.credentials.data.user_other_lname}
              </p>
              <p className="grid grid-cols-[80px,200px]">
                <span className="font-bold mr-2">Email:</span>
                {store.credentials.data.user_other_email}
              </p>
            </div>

            <div className=" pl-0  md:flex md:gap-5">
              <div className="w-full">
                <div className="profile__block min-h-[300px] w-1/3 ">
                  <h6 className="mb-5 text-sm">Change Password</h6>

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
                              label="Current password"
                            />
                            {props.values.current_password && (
                              <button
                                type="button"
                                className="absolute top-7 text-base text-gray-400 right-3"
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
                              label="New password"
                            />

                            {props.values.new_password && (
                              <button
                                type="button"
                                className="absolute top-7 text-base text-gray-400 right-3"
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
                              label="Confirm New password"
                            />
                            {props.values.confirm_password && (
                              <button
                                type="button"
                                className="absolute top-7 text-base text-gray-400 right-3"
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
          </main>
          <Footer />
        </div>
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
