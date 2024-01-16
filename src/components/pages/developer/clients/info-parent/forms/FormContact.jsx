import React from "react";

const FormContact = () => {
  return (
    <div>
      <div className="form__block max-w-[350px] min-h-[460px]">
        <h6 className="mb-4">Contact</h6>
        <div className="form__wrap">
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>

        <div className="form__wrap">
          <label htmlFor="">Mobile</label>
          <input type="text" />
        </div>

        <div className="form__wrap">
          <label htmlFor="">Landline (Optional)</label>
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
    </div>
  );
};

export default FormContact;
