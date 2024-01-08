import {
  setIsAdd,
  setIsConfirm,
  setIsShowModal,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import React from "react";
import { FaTimes } from "react-icons/fa";

const ModalAddDepartment = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleClose = () => {
    dispatch(setIsShowModal(false));
    setTimeout(() => {
      dispatch(setIsAdd(false));
      dispatch(setIsShowModal(true));
    }, 200);
  };

  return (
    <>
      <div className={`modal modal--side  ${store.isShowModal ? "show" : ""}`}>
        <div className="modal__backdrop" onClick={handleClose}></div>
        <div className="modal__main">
          <div className="modal__header">
            <h3>Add Department</h3>
            <button onClick={handleClose}>
              <FaTimes />
            </button>
          </div>
          <div className="modal__body custom__scroll">
            <div className="form__wrap">
              <label htmlFor="">Department</label>
              <input type="text" />
            </div>

            <div className="form__wrap">
              <label htmlFor="">Name</label>
              <input type="text" />
            </div>
          </div>
          <div className="modal__action">
            <button className="btn btn--accent">Save</button>
            <button className="btn btn--cancel" onClick={handleClose}>
              Discard
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAddDepartment;
