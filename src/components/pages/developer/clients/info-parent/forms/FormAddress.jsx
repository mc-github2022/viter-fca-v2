import React from "react";

const FormAddress = () => {
  return (
    <>
      <div className="form__block max-w-[350px] min-h-[460px]">
        <h6 className="mb-4">Address</h6>
        <div className="form__wrap">
          <label htmlFor="">Address</label>
          <textarea className="h-[50px]"></textarea>
        </div>

        <div className="form__wrap">
          <label htmlFor="">City</label>
          <input type="text" />
        </div>

        <div className="form__wrap">
          <label htmlFor="">Provice</label>
          <input type="text" />
        </div>

        <div className="form__wrap">
          <label htmlFor="">Zipcode</label>
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

export default FormAddress;
