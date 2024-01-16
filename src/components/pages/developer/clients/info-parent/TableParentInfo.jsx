import React from "react";

const TableParentInfo = () => {
  return (
    <div>
      <table className="table__sm">
        <thead>
          <tr>
            <td>#</td>
            <td>Name</td>
            <td className="hidden md:block">Relationship</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nimfa Alimagno</td>
            <td className="hidden md:block">Biological Mother</td>
            <td>
              <ul className="flex ">
                <li>
                  <button
                    className="tooltip"
                    data-tooltip="Edit"
                    onClick={() => handleEdit(item)}
                  >
                    <FiEdit2 />
                  </button>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableParentInfo;
