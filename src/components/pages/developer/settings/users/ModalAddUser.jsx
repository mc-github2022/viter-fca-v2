import { InputText } from "@/components/helpers/FormInputs";
import ModalWrapper from "@/components/partials/modals/ModalWrapper";
import { setIsAdd } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { Formik } from "formik";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { Form } from "react-router-dom";

const ModalAddUser = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  return (
    <>
      <ModalWrapper>
        <div className="modal__header relative">
          <h3> Add User </h3>
          <button className="absolute -top-4 right-0" onClick={handleClose}>
            <FaTimes className="text-gray-700 text-base" />
          </button>
        </div>
        <div className="modal__body overflow-auto max-h-[50vh]">
          <div className="relative form__wrap">
            <p className="flex gap-1">
              <span className="text-primary">Role:</span>
              <span></span>
            </p>
          </div>

          <div className="relative form__wrap">
            {/* <InputText
              label="First name"
              type="text"
              name="user_system_fname"
            /> */}
            <input type="text" />
          </div>
          <div className="relative form__wrap">
            {/* <InputText label="Last name" name="user_system_lname" type="text" /> */}
          </div>
          <div className="relative form__wrap">
            {/* <InputText
              label="Email address"
              type="text"
              name="user_system_email"
            /> */}
            <input type="text" />
          </div>

          <div className="modal__action flex justify-end mt-6 gap-2">
            <button className="btn btn--primary" type="submit"></button>
            <button type="button" className="btn btn--cancel">
              Cancel
            </button>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalAddUser;
