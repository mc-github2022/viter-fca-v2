import React from "react";
import { FiEdit2, FiTrash } from "react-icons/fi";
const DepartmentList = () => {
  return (
    <>
      <h5 className="text-sm">List</h5>

      <div className="datalist mt-2 mb-5 max-w-[650px] w-full">
        <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
          <p>Registrar</p>
          <ul className="datalist__action flex items-center">
            <li className=" ">
              <button className="tooltip" data-tooltip="Edit">
                <FiEdit2 />
              </button>
            </li>

            <li>
              <button className="tooltip" data-tooltip="Delete">
                <FiTrash />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DepartmentList;
