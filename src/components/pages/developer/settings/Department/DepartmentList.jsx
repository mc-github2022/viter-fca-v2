import useQueryData from "@/components/custom-hooks/useQueryData";
import TableLoading from "@/components/partials/TableLoading";
import TableSpinner from "@/components/partials/spinners/TableSpinner";
import { setIsAdd } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import React from "react";
import { FiEdit2, FiTrash } from "react-icons/fi";
const DepartmentList = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const {
    isLoading,
    isFetching,
    error,
    data: department,
  } = useQueryData(
    "/v2/dev-department", // endpoint
    "get", // method
    "department" // key
  );

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  return (
    <>
      <h5 className="text-sm">List</h5>

      <div className="datalist mt-2 max-w-[650px] w-full overflow-x-hidden overflow-y-auto max-h-[350px] lg:max-h-[580px] custom__scroll">
        {isFetching && !isLoading && <TableSpinner />}

        {(isLoading || department?.data.length === 0) &&
          (isLoading ? <TableLoading count={20} cols={3} /> : <NoData />)}
        {department?.data.map((item, key) => (
          <div
            className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1"
            key={key}
          >
            <p>{item.department_name}</p>
            <ul className="datalist__action flex items-center gap-1">
              <li className=" ">
                <button
                  className="tooltip"
                  data-tooltip="Edit"
                  onClick={() => handleEdit(item)}
                >
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
        ))}
      </div>
    </>
  );
};

export default DepartmentList;
