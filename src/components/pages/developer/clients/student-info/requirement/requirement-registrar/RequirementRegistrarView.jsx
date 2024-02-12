import React from "react";
import { FiEdit2 } from "react-icons/fi";

const RequirementRegistrarView = ({ registrar }) => {
  return (
    <div className="mode__view">
      <ul className="flex justify-end gap-4">
        <li>
          <button
            className="flex justify-center items-center gap-2  mb-2 text-xs tooltip"
            data-tooltip="Edit"
            // onClick={handleShowSelectRequirement}
          >
            <FiEdit2 />
          </button>
        </li>
      </ul>

      <div className="table__wrapper">
        <table>
          <thead>
            <tr>
              <th>Item</th>
            </tr>
          </thead>
          <tbody>
            {registrar?.data.map((item, key) => {
              return (
                <tr key={key}>
                  <td>{item.requirement_registrar_name}</td>
                </tr>
              );
            })}
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

export default RequirementRegistrarView;
