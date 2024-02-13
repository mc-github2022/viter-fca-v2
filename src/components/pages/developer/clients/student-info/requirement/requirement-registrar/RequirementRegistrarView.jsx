import NoData from "@/components/partials/NoData.jsx";
import TableLoading from "@/components/partials/TableLoading.jsx";
import TableSpinner from "@/components/partials/spinners/TableSpinner.jsx";
import React from "react";
import { FiEdit2 } from "react-icons/fi";

const RequirementRegistrarView = ({ registrar, setIsEdit }) => {
  const handleEdit = () => {
    setIsEdit(true);
  };

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
        <TableLoading />
        <NoData />
        {registrar?.data.map((item, key) => {
          return (
            <div
              key={key}
              className="list  flex justify-between items-center py-2 border-b border-line"
            >
              <p className="text-xs">{item.requirement_registrar_name}</p>
            </div>
          );
        })}
      </div>

      <div className="remarks max-w-[500px] mt-10">
        <h6>Note:</h6>
        <p className="text-xs">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
          doloremque quas reiciendis consequuntur numquam distinctio nemo atque
          deleniti qui eligendi?
        </p>
      </div>
    </div>
  );
};

export default RequirementRegistrarView;
