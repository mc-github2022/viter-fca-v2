import NoData from "@/components/partials/NoData.jsx";
import TableLoading from "@/components/partials/TableLoading.jsx";
import { LiaCheckSolid } from "react-icons/lia";

const RequirementFinance = () => {
  return (
    <div>
      <h3>Finance Requirement</h3>
      <p className="mb-5 text-xs">
        Please submit the listed documents below to the registrar’s office in
        order to proceed with the enrollment process.
      </p>

      <div className="mode__view">
        <div className="table__wrapper max-w-[600px]">
          <TableLoading />
          <NoData />

          <p className="list py-2 border-b border-line flex justify-between items-center">
            Tuition Fee Payment
            <LiaCheckSolid />
          </p>
        </div>
      </div>
    </div>
  );
};

export default RequirementFinance;
