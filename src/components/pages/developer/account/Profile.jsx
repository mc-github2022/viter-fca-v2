import { InputText } from "@/components/helpers/FormInputs";
import { queryData } from "@/components/helpers/queryData";
import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import Navigation from "@/components/partials/Navigation.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { FaAngleLeft, FaBars } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { TfiLock } from "react-icons/tfi";
import { Field, Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "@/components/store/StoreAction";
import useQueryData from "@/components/custom-hooks/useQueryData";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import ModalError from "@/components/partials/modals/ModalError";

const Profile = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [index, setIndex] = React.useState(1);
  const [show, setShow] = React.useState(false);
  const queryClient = useQueryClient();

  const credentials = () => {
    if (store.credentials.data) {
      return {
        userID: store.credentials.data.user_system_aid,
        firstname: store.credentials.data.user_system_fname,
        lastname: store.credentials.data.user_system_lname,
        email: store.credentials.data.user_system_email,
        role: store.credentials.data.role_name,
      };
    }
  };

  const handleShowSubMenu = () => {
    setShow(!show);
  };

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(`/v2/dev-profile/${credentials().userID}`, "put", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [""] });
      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        dispatch(setSuccess(true));
        dispatch(setMessage(`Record successfully updated`));
        setInterval(function () {
          location.reload();
        }, 1000);
      }
    },
  });

  const initVal = {
    user_system_fname: credentials().firstname,
    user_system_lname: credentials().lastname,
    user_system_email: credentials().email,
    // grade_level_name_old: itemEdit ? itemEdit.grade_level_name : "",
  };

  const yupSchema = Yup.object({
    user_system_fname: Yup.string().required("Required"),
    user_system_lname: Yup.string().required("Required"),
    user_system_email: Yup.string().required("Required"),
  });

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
              <Link to="/" className="flex gap-1 items-center lg:hidden">
                <FaAngleLeft /> Back
              </Link>

              <h1 className="text-clampH1 mb-0">User Account</h1>
              <p className="mb-4 text-xs hidden lg:block">
                Manage your information and account security
              </p>
            </div>
          </div>

          <div className="mt-5 bg-primary rounded-md max-w-[600px] border-line border shadow-sm relative pb-4">
            <header className=" py-2 pr-4 flex justify-end">
              <button className="text-lg md:hidden" onClick={handleShowSubMenu}>
                <FaBars />
              </button>
            </header>

            <div className=" pl-0  md:flex md:gap-5">
              <aside
                className={`mb-5 max-w-[150px] w-full subnav absolute md:static top-8 right-4 bg-primary z-40 shadow-sm border border-line md:shadow-none md:border-none ${
                  show ? "block" : "hidden"
                } md:block `}
              >
                <ul>
                  <li className="text-center">
                    <button
                      onClick={() => setIndex(2)}
                      className="text-sm w-full p-2"
                    >
                      <TfiLock className="md:text-lg" />
                      Password
                    </button>
                  </li>
                </ul>
              </aside>

              <div className="px-4 w-full">
                <div className="profile__block min-h-[300px] w-full ">
                  <h6 className="mb-5">Update password</h6>

                  <div className="form__wrap">
                    <label htmlFor="">Old Password</label>
                    <input type="text" />
                  </div>

                  <div className="form__wrap">
                    <label htmlFor="">New Password</label>
                    <input type="text" />
                  </div>

                  <div className="form__wrap">
                    <label htmlFor="">Confirm Password</label>
                    <input type="text" />
                  </div>

                  <div className="flex  gap-3 mt-8">
                    <button className="btn btn--accent">Update</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {store.success && <ModalSuccess />}
        {store.error && <ModalError />}
        <Footer />
      </section>
    </>
  );
};

export default Profile;
