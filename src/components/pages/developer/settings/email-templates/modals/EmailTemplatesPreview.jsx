import { StoreContext } from "@/components/store/StoreContext";
import React from "react";
import { FaTimes } from "react-icons/fa";

const EmailTemplatesPreview = ({ previewData, setAddIndex, setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [html] = React.useState(
    previewData ? previewData?.email_template_content : ""
  );
  const handleClose = () => {
    setAddIndex(1);
    setItemEdit(previewData);
  };
  return (
    <>
      <div className="settings__addEdit mb-8  w-full">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="mb-0">
            {previewData ? previewData?.email_template_subject : ""}
          </h3>
          <button
            className="text-[12px] underline mr-5 flex items-center"
            onClick={handleClose}
          >
            <FaTimes className="text-gray-700 text-base" />
            Close
          </button>
        </div>
        <pre>
          <div
            className="modal__body !max-h-[80vh] overflow-auto "
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </pre>
      </div>
    </>
  );
};

export default EmailTemplatesPreview;
