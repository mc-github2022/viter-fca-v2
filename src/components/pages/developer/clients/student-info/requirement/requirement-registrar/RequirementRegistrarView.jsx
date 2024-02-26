import NoData from "@/components/partials/NoData.jsx";
import TableLoading from "@/components/partials/TableLoading.jsx";
import TableSpinner from "@/components/partials/spinners/TableSpinner.jsx";
import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";

const RequirementRegistrarView = ({
  registrarRequirements,
  setIsEdit,
  isLoading,
  studentRequirement,
}) => {
  const handleEdit = () => {
    setIsEdit(true);
  };

  const getSubmittedRequirements = (requirementsId) => {
    // return studentRequirement?.count > 0
    //   ? studentRequirement?.data.map((item, key) => {
    //       if (
    //         Number(item.students_requirements_id) === Number(requirementsId)
    //       ) {
    //         return <FaCheck className="fill-accent" key={key} />;
    //       } else {
    //         return <FaTimes className="fill-alert" key={key} />;
    //       }
    //     })
    //   : "";
    // registrarRequirements?.data.filter((regItem) => {
    // return  studentRequirement?.data.find((reqItem) => {
    //   return
    //   })
    // })
  };

  // console.log(studentRequirement);

  return (
    <div className="mode__view">
      <div className="max-w-[600px] flex justify-between mb-2">
        <h5>Summitted Requirements</h5>
        <ul className="flex justify-end gap-4">
          <li>
            <button
              className="flex justify-center items-center gap-2  mb-2  tooltip "
              data-tooltip="Edit"
              onClick={handleEdit}
            >
              <FiEdit2 />
            </button>
          </li>
        </ul>
      </div>

      <div className="table__wrapper max-w-[600px]">
        {isLoading ? (
          <TableLoading />
        ) : registrarRequirements?.count > 0 ? (
          registrarRequirements?.data.map((registarItem, key) => {
            return (
              <div
                key={key}
                className="list flex justify-between items-center py-2 border-b border-line"
              >
                <p className="text-xs">
                  {registarItem.requirement_registrar_name}
                </p>{" "}
                {/* {getSubmittedRequirements(item.requirement_registrar_aid)}{" "} */}
                {/* {studentRequirement?.data.map((reqITem, reqKey) => {
                  if (
                    Number(registarItem.requirement_registrar_aid) ===
                    Number(reqITem.students_requirements_id)
                  ) {
                    return <FaCheck className="fill-accent" key={reqKey} />;
                  } else {
                    return <FaTimes className="fill-alert" key={reqKey} />;
                  }
                })} */}
              </div>
            );
          })
        ) : (
          <NoData />
        )}
      </div>

      {/* <div className="remarks max-w-[500px] mt-10">
        <h6>Remarks:</h6>
        <p className="text-xs">
          {studentRequirement?.count > 0
            ? studentRequirement?.data[0].students_requirements_remarks
            : "None"}
        </p>
      </div> */}
    </div>
  );
};

export default RequirementRegistrarView;
