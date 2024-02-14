import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import NoData from "@/components/partials/NoData.jsx";
import TableLoading from "@/components/partials/TableLoading.jsx";
import React from "react";
import { LiaCheckSolid } from "react-icons/lia";

const RequirementRegistrar = () => {
  return (
    <div>
      <h3>Registrar Requirement</h3>
      <p className="mb-5 text-xs">
        Please submit the listed documents below to the registrar’s office in
        order to proceed with the enrollment process.
      </p>

      <div className="mode__view">
        <div className="table__wrapper max-w-[600px]">
          <TableLoading />
          <NoData />

          <p className="list py-2 border-b border-line flex justify-between items-center">
            Certificate of Clearance (Financial and Property Responsibility)
            <LiaCheckSolid />
          </p>
          <p className="list py-2 border-b border-line flex justify-between items-center">
            Form 137/SF10 <LiaCheckSolid />
          </p>
          <p className="list py-2 border-b border-line flex justify-between items-center">
            Good Moral Certificate <LiaCheckSolid />
          </p>
          <p className="list py-2 border-b border-line flex justify-between items-center opacity-40">
            LCR / Local Civil Registry Birth Certificate (Temporary Enrollment
            Only) OR
          </p>
          <p className="list py-2 border-b border-line flex justify-between items-center ">
            Passport - Photocopy made at FCA (Temporary Enrollment Only)
            <LiaCheckSolid />
          </p>
          <p className="list py-2 border-b border-line flex justify-between items-center">
            PSA / Philippine Statistics Authority Original Bir <LiaCheckSolid />
          </p>
        </div>
      </div>
    </div>
  );
};

export default RequirementRegistrar;
