import React from "react";
import { FiEdit, FiEdit2, FiPlus } from "react-icons/fi";

const TableRegistrarRequirement = ({ requirement, setShowRemarks }) => {
  const { showRequirement, setShowRequirement } = requirement;

  const handleShowSelectRequirement = () =>
    setShowRequirement(!showRequirement);

  return (
    <div>
      <ul className="flex justify-end gap-4">
        <li>
          <button
            className="flex items-center gap-2 pr-2 mb-2 text-xs"
            onClick={handleShowSelectRequirement}
          >
            <FiEdit2 />
            Edit
          </button>
        </li>
      </ul>
      <div className="table__wrapper">
        <table>
          <thead>
            <tr>
              <th className="w-[30px]">#</th>
              <th>Item</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-[30px]">1</td>
              <td>
                Certificate of Clearance (Financial and Property Responsibility){" "}
              </td>
            </tr>
          </tbody>
        </table>
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

export default TableRegistrarRequirement;
