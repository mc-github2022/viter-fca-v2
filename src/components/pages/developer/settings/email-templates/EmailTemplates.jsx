import React from "react";

import { AiOutlinePlus } from "react-icons/ai";

import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import ModalError from "@/components/partials/modals/ModalError";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import { setIsSettingAdd } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import EmailTemplatesList from "./EmailTemplatesList";
import EmailTemplatesFormAddEdit from "./modals/EmailTemplatesFormAddEdit";
import EmailTemplatesPreview from "./modals/EmailTemplatesPreview";
const EmailTemplates = ({ index }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const [itemEdit, setItemEdit] = React.useState(null);
  const [addIndex, setAddIndex] = React.useState(null);
  const [previewData, setPreviewData] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsSettingAdd(true));
    setItemEdit(null);
    setAddIndex(1);
  };

  const { data: department } = useQueryData(
    "/v2/dev-department", // endpoint
    "get", // method
    "department" // key
  );

  if (index === 19) {
    return (
      <>
        <div className="">
          <div className="bg-primary">
            <h2 className="mb-3">Email Templates</h2>
            <p className="text-xs mb-5">
              Set list of email templatess that will be available to the current
              school year
            </p>
          </div>

          {!store.isSettingAdd && (
            <button
              className="flex gap-1 items-center mt-2 text-xs hover:underline mb-5"
              onClick={handleAdd}
            >
              <AiOutlinePlus /> Add New
            </button>
          )}

          {store.isSettingAdd && addIndex === 1 && (
            <EmailTemplatesFormAddEdit
              itemEdit={itemEdit}
              department={department}
              setAddIndex={setAddIndex}
              setPreviewData={setPreviewData}
            />
          )}

          {store.isSettingAdd && addIndex === 2 && (
            <EmailTemplatesPreview
              previewData={previewData}
              setAddIndex={setAddIndex}
              setItemEdit={setItemEdit}
            />
          )}

          {!store.isSettingAdd && (
            <EmailTemplatesList
              setItemEdit={setItemEdit}
              setAddIndex={setAddIndex}
            />
          )}
          {store.success && <ModalSuccess />}
          {store.error && <ModalError />}
        </div>
      </>
    );
  }
};

export default EmailTemplates;
