import React from "react";
import RequirementRegistrarEdit from "./RequirementRegistrarEdit.jsx";

const RequirementRegistrar = ({
  itemEdit,
  registrarRequirements,
  isLoading,
  studentRequirement,
  schoolYear,
  reqLoading,
  reqFetching,
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

      <RequirementRegistrarEdit
        isLoading={isLoading}
        registrarRequirements={registrarRequirements}
        setIsEdit={setIsEdit}
        studentRequirement={studentRequirement}
        itemEdit={itemEdit}
        schoolYear={schoolYear}
        reqLoading={reqLoading}
        reqFetching={reqFetching}
      />
    </div>
  );
};

export default RequirementRegistrar;
