import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import React from "react";
import SelectRegistrarRequirementList from "./SelectRegistrarRequirementList.jsx";
import TableRegistrarRequirement from "./TableRegistrarRequirement.jsx";

const RequirementRegistrar = ({ itemEdit }) => {
  const [showRequirement, setShowRequirement] = React.useState(false);

  const {
    isLoading,
    isFetching,
    error,
    data: registrar,
  } = useQueryData(
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

      {!showRequirement && (
        <TableRegistrarRequirement
          requirement={{ showRequirement, setShowRequirement }}
          itemEdit={itemEdit}
        />
      )}

      {showRequirement && (
        <SelectRegistrarRequirementList
          requirement={{ showRequirement, setShowRequirement }}
          registrar={registrar}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default RequirementRegistrar;
