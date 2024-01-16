import React from "react";

const FormName = () => {
  return (
    <>
      <div className="form__block max-w-[350px] min-h-[460px]">
        <h6 className="mb-4">Name</h6>
        <div className="form__wrap">
          <label htmlFor="">Title</label>
          <input type="text" />
        </div>

        <div className="form__wrap">
          <label htmlFor="">First Name</label>
          <input type="text" />
        </div>

        <div className="form__wrap">
          <label htmlFor="">Last Name</label>
          <input type="text" />
        </div>

        <div className="form__wrap">
          <label htmlFor="">Middle Name</label>
          <input type="text" />
        </div>

        <div className="form__wrap">
          <label htmlFor="">Maiden Last Name</label>
          <input type="text" />
        </div>

        <ul className="flex gap-2 mt-6">
          <li>
            <button className="btn btn--accent">Save</button>
          </li>
          <li>
            <button className="btn btn--cancel" onClick={handleDismissParent}>
              Dismiss
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FormName;
