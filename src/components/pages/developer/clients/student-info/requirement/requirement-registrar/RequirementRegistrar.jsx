import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { PiMegaphoneLight } from "react-icons/pi";
import RequirementRegistrarEdit from "./RequirementRegistrarEdit.jsx";
import RequirementRegistrarView from "./RequirementRegistrarView.jsx";

const RequirementRegistrar = ({
  itemEdit,
  registrarRequirements,
  isLoading,
}) => {
  const [isEdit, setIsEdit] = React.useState(false);

  return (
    <div>
      <h3>Registrar Requirement</h3>
      <p className="mb-5 text-xs">
        Please submit the listed documents below to the registrar’s office in
        order to proceed with the enrollment process. Once you submitted the
        listed documents, you will receive through email the tuition fee and
        payment details.
      </p>

      {!isEdit && (
        <RequirementRegistrarView
          isLoading={isLoading}
          registrarRequirements={registrarRequirements}
          setIsEdit={setIsEdit}
        />
      )}
      {isEdit && (
        <RequirementRegistrarEdit
          isLoading={isLoading}
          registrarRequirements={registrarRequirements}
          setIsEdit={setIsEdit}
        />
      )}
    </div>
  );
};

export default RequirementRegistrar;
