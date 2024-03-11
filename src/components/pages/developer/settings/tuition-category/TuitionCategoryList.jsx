import useQueryData from "@/components/custom-hooks/useQueryData";
import TableLoading from "@/components/partials/TableLoading";
import TableSpinner from "@/components/partials/spinners/TableSpinner";
import {
  setIsSettingAdd,
  setSettingIsConfirm,
  setSettingIsDelete,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { BsArchive } from "react-icons/bs";

import NoData from "@/components/partials/NoData.jsx";
import ModalConfirm from "@/components/partials/modals/ModalConfirm.jsx";
import ModalDelete from "@/components/partials/modals/ModalDelete.jsx";
import ModalInvalidRequestError from "@/components/partials/modals/ModalInvalidRequestError";
import React from "react";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { MdOutlineRestore } from "react-icons/md";
const TuitionCategoryList = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [dataItem, setData] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [isArchive, setIsArchive] = React.useState(1);

  const {
    isLoading,
    isFetching,
    error,
    data: tuitionCategory,
  } = useQueryData(
    "/v2/dev-tuition-category", // endpoint
    "get", // method
    "tuition-category" // key
  );

  const handleEdit = (item) => {
    dispatch(setIsSettingAdd(true));
    setItemEdit(item);
  };

  const handleArchive = (item) => {
    dispatch(setSettingIsConfirm(true));
    setId(item.tuition_category_aid);
    setData(item);
    setIsArchive(0);
    console.log(isArchive);
  };

  const handleRestore = (item) => {
    dispatch(setSettingIsConfirm(true));
    setId(item.tuition_category_aid);
    setData(item);
    setIsArchive(1);
    console.log(isArchive);
  };

  const handleDelete = (item) => {
    dispatch(setSettingIsDelete(true));
    setId(item.tuition_category_aid);
    setData(item);
  };

  return (
    <>
      <h5 className="text-sm">List</h5>

      <div className="datalist max-w-[650px] w-full overflow-x-hidden overflow-y-auto h-[450px] lg:max-h-[580px] custom__scroll  poco:max-h-[640px] lg:poco:max-h-[400px] relative">
        {isFetching && !isLoading && <TableSpinner />}

        {!isLoading && tuitionCategory.success === false ? (
          <ModalInvalidRequestError />
        ) : isLoading ? (
          <TableLoading count={20} cols={3} />
        ) : tuitionCategory?.data.length === 0 ? (
          <NoData />
        ) : (
          !isLoading &&
          tuitionCategory.success === true &&
          tuitionCategory?.data.map((item, key) => (
            <div
              className={
                "datalist__item text-xs  flex justify-between lg:items-center border-b border-line py-2 first:pt-5 lg:flex-row last:border-none"
              }
              key={key}
            >
              <div
                className={`${
                  item.tuition_category_active ? "opacity-100" : "opacity-40"
                } `}
              >
                <p className="mb-1">{item.tuition_category_name}</p>
              </div>

              <ul className="datalist__action flex items-center gap-1 pr-3 ">
                {item.tuition_category_active === 1 ? (
                  <>
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
                      <button
                        className="tooltip"
                        data-tooltip="Archive"
                        onClick={() => handleArchive(item)}
                      >
                        <BsArchive />
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className=" ">
                      <button
                        className="tooltip"
                        data-tooltip="Restore"
                        onClick={() => handleRestore(item)}
                      >
                        <MdOutlineRestore className="text-base" />
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
                  </>
                )}
              </ul>
            </div>
          ))
        )}
      </div>

      {store.isSettingConfirm && (
        <ModalConfirm
          mysqlApiArchive={`/v2/dev-tuition-category/active/${id}`}
          msg={`Are you sure you want to ${
            isArchive ? "restore" : "archive"
          } this record?`}
          item={dataItem.tuition_category_name}
          queryKey={"tuition-category"}
          isArchive={isArchive}
        />
      )}

      {store.isSettingDelete && (
        <ModalDelete
          mysqlApiDelete={`/v2/dev-tuition-category/${id}`}
          msg={"Are you sure you want to delete this record?"}
          item={dataItem.tuition_category_name}
          queryKey={"tuition-category"}
        />
      )}
    </>
  );
};

export default TuitionCategoryList;
