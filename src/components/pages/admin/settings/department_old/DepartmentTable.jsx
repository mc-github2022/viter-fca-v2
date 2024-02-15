import useQueryData from "@/components/custom-hooks/useQueryData";
import NoData from "@/components/partials/NoData";
import Pills from "@/components/partials/Pills.jsx";
import SearchBar from "@/components/partials/SearchBar";
import ServerError from "@/components/partials/ServerError";
import TableLoading from "@/components/partials/TableLoading";
import TableSpinner from "@/components/partials/spinners/TableSpinner";
import { setIsConfirm } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import React, { Fragment } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiArchive, FiEdit3 } from "react-icons/fi";
import { MdRestore } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

const DepartmentTable = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [dataItem, setData] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [isDel, setDel] = React.useState(false);
  let counter = 1;

  const {
    isLoading,
    isFetching,
    error,
    data: department,
  } = useQueryData(
    "/v2/dev-department", // endpoint
    "get", // method
    "settings-department" // key
  );

  const handleArchive = (item) => {
    dispatch(setIsConfirm(true));
    setId(item.department_aid);
    setData(item);
    setDel(null);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setId(item.department_aid);
    setData(item);
    setDel(null);
  };

  const handleDelete = (item) => {
    dispatch(setIsRestore(true));
    setId(item.department_aid);
    setData(item);
    setDel(true);
  };

  const handleQuickEdit = (item) => {
    dispatch(setQuickEditID(item.department_aid));
    setId(item.department_aid);
    setData(item);
  };

  return (
    <>
      <div className="main__table">
        <div className="table__wrapper mb-[80px]">
          <table className="table__sm">
            <thead>
              <tr>
                <th className="w-[30px]">#</th>
                <th>Department Name</th>
                <th>Description</th>
                <th className="table__action">
                  <span className="lg:hidden">Action</span>
                </th>
              </tr>
            </thead>

            <tbody>
              {(isLoading || department?.data.length === 0) && (
                <tr className="text-center ">
                  <td colSpan="100%" className="p-2 md:p-10">
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
              {department?.data.map((item, key) => {
                return (
                  <Fragment key={key}>
                    <tr>
                      <td className="w-[30px]">1</td>
                      <td className="whitespace-nowrap">
                        {item.department_name}
                      </td>
                      <td className="whitespace-nowrap">
                        {item.department_description}
                      </td>
                      <td className="table__action">
                        <span className="border border-gray-100 text-base p-1 hidden  lg:grid w-[30px] place-content-center rounded-md">
                          <BsThreeDotsVertical />
                        </span>
                        <ul className="">
                          {item.department_active === 1 ? (
                            <>
                              <li>
                                <button className="tooltip" data-tooltip="Edit">
                                  <FiEdit3 />
                                </button>
                              </li>

                              <li>
                                <button
                                  className="tooltip"
                                  data-tooltip="Archive">
                                  <FiArchive />
                                </button>
                              </li>
                            </>
                          ) : (
                            <>
                              <li>
                                <button
                                  className="tooltip"
                                  data-tooltip="Delete">
                                  <RiDeleteBinLine />
                                </button>
                              </li>

                              <li className="">
                                <button
                                  className="tooltip"
                                  data-tooltip="Restore">
                                  <MdRestore />
                                </button>
                              </li>
                            </>
                          )}
                        </ul>
                      </td>
                    </tr>
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DepartmentTable;
