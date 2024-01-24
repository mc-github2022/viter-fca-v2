import NoData from "@/components/partials/NoData.jsx";
import ServerError from "@/components/partials/ServerError.jsx";
import TableLoading from "@/components/partials/TableLoading.jsx";
import React from "react";
import { FiEdit2, FiTrash } from "react-icons/fi";
import ModalDeleteParent from "./ModalDeleteParent.jsx";

const TableParentInfo = ({
  setItemEdit,
  setShowParent,
  parentinfo,
  isLoading,
  error,
}) => {
  const [deleteParent, setDeleteParent] = React.useState(false);
  const [id, setId] = React.useState(null);
  const [dataItem, setData] = React.useState(null);

  let counter = 1;

  const handleEdit = (item) => {
    setShowParent(true);
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    setDeleteParent(true);
    setId(item.parent_guardian_info_aid);
    setData(item);
  };

  return (
    <>
      <div className="my-5 bg-primary rounded-md max-w-[900px] border-line border shadow-sm relative p-4 md:pl-0">
        <div className="gap-8 md:flex">
          <aside className="md:max-w-[220px] w-full">
            <h4 className="md:pl-4 mb-2 font-bold">Parent Information</h4>
          </aside>
          <div className="w-full">
            <div className="">
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
                  {(isLoading || parentinfo?.data.length === 0) && (
                    <tr className="text-center ">
                      <td colSpan="100%" className="p-10">
                        {isLoading ? (
                          <TableLoading count={20} cols={3} />
                        ) : (
                          <NoData />
                        )}
                      </td>
                    </tr>
                  )}

                  {error && (
                    <tr className="text-center ">
                      <td colSpan="100%" className="p-10">
                        <ServerError />
                      </td>
                    </tr>
                  )}

                  {parentinfo?.data.map((item, key) => (
                    <tr key={key}>
                      <td>{counter++}</td>
                      <td>
                        {item.parent_guardian_info_fname},
                        {item.parent_guardian_info_lname}
                      </td>
                      <td className="hidden md:block">
                        {item.relationship_name}
                      </td>
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

                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Delete"
                              onClick={() => handleDelete(item)}
                            >
                              <FiTrash />
                            </button>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {deleteParent && (
        <ModalDeleteParent
          mysqlApiDelete={`/v2/dev-info-parent/${id}`}
          msg={"Are you sure you want to delete this record?"}
          item={`${dataItem.parent_guardian_info_fname} ${dataItem.parent_guardian_info_lname}`}
          queryKey={"parentinfo"}
          setDeleteParent={setDeleteParent}
        />
      )}
    </>
  );
};

export default TableParentInfo;
