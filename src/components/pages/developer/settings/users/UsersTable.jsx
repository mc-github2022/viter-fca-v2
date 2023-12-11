import React from "react";
import { FiEdit3 } from "react-icons/fi";
import { MdOutlinePersonOff, MdRestore } from "react-icons/md";
import { PiKey } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";

const UsersTable = () => {
  return (
    <>
      <div className="table__wrapper relative rounded-md shadow-md overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Role Description</th>
              <th className="action"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>MC</td>
              <td>Mark Bumagat</td>
              <td>Admin</td>
              <td>Admin/Dev</td>
              <td
                className="table__action top-4 right-5 "
                data-ellipsis=". . ."
              >
                <ul className=" flex items-center gap-4 bg-">
                  <li>
                    <button className="tooltip" data-tooltip="Edit">
                      <FiEdit3 />
                    </button>
                  </li>
                  <li>
                    <button className="tooltip" data-tooltip="Suspend">
                      <MdOutlinePersonOff />
                    </button>
                  </li>
                  <li>
                    <button className="tooltip" data-tooltip="Reset">
                      <PiKey />
                    </button>
                  </li>
                </ul>
                <ul className="flex items-center gap-4">
                  <li>
                    <button className="tooltip" data-tooltip="Delete">
                      <RiDeleteBinLine />
                    </button>
                  </li>
                  <li>
                    <button className="tooltip" data-tooltip="Restore">
                      <MdRestore />
                    </button>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersTable;
