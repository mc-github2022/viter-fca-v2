import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import { data } from "autoprefixer";
import React from "react";
import SelectRegistrarRequirementList from "./SelectRegistrarRequirementList.jsx";
import TableRegistrarRequirement from "./TableRegistrarRequirement.jsx";

const RequirementFinance = ({ itemEdit }) => {
  const [showRequirement, setShowRequirement] = React.useState(false);
  const [parseData, setParseData] = React.useState([]);

  const {
    isLoading,
    error,
    data: dataRegistrar,
  } = useQueryData(
    `/v2/req-registrar/${itemEdit.student_info_aid}`, // endpoint
    "get", // method
    "dataRegistrar" // key
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
    </div>
  );
};

export default RequirementFinance;
