import { setIsAdd } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import React from "react";

const DepartmentFormAddEdit = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const handleClose = () => {
    dispatch(setIsAdd(false));
  };
  return (
    <div>
      <div className="settings__addEdit mb-8 max-w-[350px] w-full">
        <form action="">
          <div className="form__group text-xs mb-3">
            <label htmlFor="">Title</label>
            <input type="text" />
          </div>

          <div className="form__group text-xs mb-3 ">
            <label htmlFor="">Description</label>
            <textarea type="text" />
          </div>

          <div className="settings__actions flex gap-2">
            <button className="btn btn--accent"> Save</button>
            <button
              className="btn btn--cancel"
              type="cancel"
              onClick={handleClose}
            >
              Discard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DepartmentFormAddEdit;
