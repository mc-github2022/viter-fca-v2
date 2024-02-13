import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { PiMegaphoneLight } from "react-icons/pi";
import RequirementRegistrarEdit from "./RequirementRegistrarEdit.jsx";
import RequirementRegistrarView from "./RequirementRegistrarView.jsx";

const RequirementRegistrar = ({ itemEdit }) => {
  const [isEdit, setIsEdit] = React.useState(false);

  const { isLoading: error, data: registrar } = useQueryData(
    `/v2/dev-requirement-registrar`, // endpoint
    "get", // method
    "registrar" // key
  );

  return (
    <div>
      <h3>Registrar Requirement</h3>
      <p className="mb-5 text-xs">
        Please submit the listed documents below to the registrar’s office in
        order to proceed with the enrollment process. Once you submitted the
        listed documents, you will receive through email the tuition fee and
        payment details.
      </p>

      <button className="flex justify-end w-full">New</button>

      {!isEdit && (
        <RequirementRegistrarView registrar={registrar} setIsEdit={setIsEdit} />
      )}
      {isEdit && (
        <RequirementRegistrarEdit registrar={registrar} setIsEdit={setIsEdit} />
      )}
    </div>
  );
};

export default RequirementRegistrar;
