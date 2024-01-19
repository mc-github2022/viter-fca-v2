import { StoreContext } from "@/components/store/StoreContext.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";

import { queryData } from "@/components/helpers/queryData.jsx";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "@/components/store/StoreAction.jsx";
import FormBasic from "./FormBasic.jsx";
import FormContact from "./FormContact.jsx";
import FormOther from "./FormOther.jsx";

const ParentInfoForm = ({ itemEdit, setShowParentForm }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();
  const [currentStep, setCurrentStep] = React.useState(0);
  const [formData, setFormData] = React.useState({
    parent_guardian_info_aid: itemEdit ? itemEdit.parent_guardian_info_aid : "",
    parent_guardian_info_user_id: itemEdit
      ? itemEdit.parent_guardian_info_user_id
      : "",

    parent_guardian_info_relationship_id: itemEdit
      ? itemEdit.parent_guardian_info_relationship_id
      : "",
    parent_guardian_info_salutation: itemEdit
      ? itemEdit.parent_guardian_info_salutation
      : "",
    parent_guardian_info_reside: itemEdit
      ? itemEdit.parent_guardian_info_reside
      : "",

    parent_guardian_info_fname: itemEdit
      ? itemEdit.parent_guardian_info_fname
      : "",

    parent_guardian_info_mname: itemEdit
      ? itemEdit.parent_guardian_info_mname
      : "",

    parent_guardian_info_maiden_name: itemEdit
      ? itemEdit.parent_guardian_info_maiden_name
      : "",

    parent_guardian_info_lname: itemEdit
      ? itemEdit.parent_guardian_info_lname
      : "",

    parent_guardian_info_email: itemEdit
      ? itemEdit.parent_guardian_info_email
      : "",

    parent_guardian_info_mobile: itemEdit
      ? itemEdit.parent_guardian_info_mobile
      : "",

    parent_guardian_info_landline: itemEdit
      ? itemEdit.parent_guardian_info_landline
      : "",

    parent_guardian_info_address: itemEdit
      ? itemEdit.parent_guardian_info_address
      : "",

    parent_guardian_info_province: itemEdit
      ? itemEdit.parent_guardian_info_province
      : "",

    parent_guardian_info_city: itemEdit
      ? itemEdit.parent_guardian_info_city
      : "",

    parent_guardian_info_zipcode: itemEdit
      ? itemEdit.parent_guardian_info_zipcode
      : "",

    parent_guardian_info_religion: itemEdit
      ? itemEdit.parent_guardian_info_religion
      : "",

    parent_guardian_info_occupation: itemEdit
      ? itemEdit.parent_guardian_info_occupation
      : "",
  });

  const mutation = useMutation({
    mutationFn: (newData) =>
      queryData(
        itemEdit
          ? `/v2/dev-info-parent/${itemEdit.parent_guardian_info_aid}`
          : "/v2/dev-info-parent",
        itemEdit ? "put" : "post",
        newData
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["parentinfo"] });

      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        setShowParentForm(false);
        dispatch(setSuccess(true));
        dispatch(
          setMessage(`Record successfully ${itemEdit ? "updated" : "added"}.`)
        );
      }
    },
  });

  const handleNextStep = (newData, isLastForm = false) => {
    setFormData((prev) => ({ ...prev, ...newData }));
    if (isLastForm) {
      mutation.mutate(newData);
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <FormBasic
      next={handleNextStep}
      formData={formData}
      setShowParentForm={setShowParentForm}
    />,
    <FormContact
      next={handleNextStep}
      prev={handlePrevStep}
      formData={formData}
      setShowParentForm={setShowParentForm}
    />,
    <FormOther
      next={handleNextStep}
      prev={handlePrevStep}
      formData={formData}
      setShowParentForm={setShowParentForm}
    />,
  ];

  return (
    <div>
      <div className="my-5 bg-primary rounded-md max-w-[900px] border-line border shadow-sm relative p-4 md:pl-0">
        <div className="gap-8 md:flex">
          <aside className="md:max-w-[220px] w-full px-4">
            <h4>Parent Information</h4>
            <ul>
              <li>
                <button onClick={() => setCurrentStep(0)}>Basic</button>
              </li>
              <li>
                <button onClick={() => setCurrentStep(1)}>Contact</button>
              </li>
              <li>
                <button onClick={() => setCurrentStep(2)}>Other</button>
              </li>
            </ul>
          </aside>
          <div className="w-full">{steps[currentStep]}</div>
        </div>
      </div>
    </div>
  );
};

export default ParentInfoForm;
