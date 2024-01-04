import Pills from "@/components/partials/Pills.jsx";
import SearchBar from "@/components/partials/SearchBar";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiArchive, FiEdit3 } from "react-icons/fi";
import { MdRestore } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

const DepartmentTable = () => {
  return (
    <>
      <div className="main__table">
        <div className="table__wrapper mb-[80px]">
          <table>
            <thead>
              <tr>
                <th className="w-[30px]">#</th>
                <th>Name</th>
                <th>Status</th>
                <th className="table__action">
                  <span className="lg:hidden">Action</span>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="w-[30px]">1</td>
                <td className="whitespace-nowrap">Bernanrdino, Mark John</td>
                <td>
                  <Pills color="text-success" label="Active" />
                </td>
                <td className="table__action">
                  <span className="border border-gray-100 text-base p-1 hidden  lg:grid w-[30px] place-content-center rounded-md">
                    <BsThreeDotsVertical />
                  </span>
                  <ul className="">
                    <li>
                      <button className="tooltip" data-tooltip="Edit">
                        <FiEdit3 />
                      </button>
                    </li>

                    <li>
                      <button className="tooltip" data-tooltip="Archive">
                        <FiArchive />
                      </button>
                    </li>

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
      </div>
    </>
  );
};

export default DepartmentTable;
