import useQueryData from "@/components/custom-hooks/useQueryData";
import NoData from "@/components/partials/NoData.jsx";
import TableLoading from "@/components/partials/TableLoading";
import ModalConfirm from "@/components/partials/modals/ModalConfirm";
import ModalDelete from "@/components/partials/modals/ModalDelete";
import ModalInvalidRequestError from "@/components/partials/modals/ModalInvalidRequestError";
import TableSpinner from "@/components/partials/spinners/TableSpinner";
import { StoreContext } from "@/components/store/StoreContext";
import React from "react";
import ScheduleOfFeeSchemeList from "./ScheduleOfFeeSchemeList";
const ScheduleOfFeesList = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [dataItem, setData] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [isArchive, setIsArchive] = React.useState(1);
  const {
    isLoading,
    isFetching,
    error,
    data: scheduleOfFees,
  } = useQueryData(
    "/v2/dev-tuition-fee/read-all-group-by-category-grade", // endpoint
    "get", // method
    "group-by-category-grade" // key
  );

  return (
    <>
      <h5 className="text-sm">List</h5>

      <div className="datalist max-w-[810px] w-[810px] overflow-x-hidden overflow-y-auto max-h-[610px] lg:max-h-[520px] custom__scroll relative">
        {isFetching && !isLoading && <TableSpinner />}

        {!isLoading && scheduleOfFees.success === false ? (
          <ModalInvalidRequestError />
        ) : isLoading ? (
          <TableLoading count={20} cols={3} />
        ) : scheduleOfFees?.data.length === 0 ? (
          <NoData />
        ) : (
          !isLoading &&
          scheduleOfFees.success === true &&
          scheduleOfFees?.data.map((item, key) => (
            <div
              className={
                "datalist__item text-xs  flex justify-between lg:items-center border-b border-line py-2 first:pt-5 lg:flex-row "
              }
              key={key}
            >
              <div className={` w-full mr-1`}>
                <p className="my-3 first:mb-3 first:mt-0 font-bold">
                  {item.tuition_category_name} - {item.grade_level_name}
                </p>

                <ul className="grid grid-cols-[4rem,6rem,6rem,6rem,6rem,6rem,6rem,6rem,7rem] w-full text-right">
                  <li></li>
                  <li>Admission</li>
                  <li>Miscellaneous</li>
                  <li>Tuition</li>
                  <li className="mr-3">Books</li>
                  <li className="text-accent font-bold">Upon Enrollment</li>
                  <li>Monthly</li>
                  <li>Total Monthly</li>
                </ul>

                <ScheduleOfFeeSchemeList
                  setItemEdit={setItemEdit}
                  val={item}
                  fetching={isFetching}
                  setData={setData}
                  setId={setId}
                  setIsArchive={setIsArchive}
                />
              </div>
            </div>
          ))
        )}
      </div>
      {store.isSettingConfirm && (
        <ModalConfirm
          mysqlApiArchive={`/v2/dev-tuition-fee/active/${id}`}
          msg={`Are you sure you want to ${
            isArchive ? "restore" : "archive"
          } this record?`}
          item={`${dataItem.tuition_category_name} - ${dataItem.grade_level_name} (${dataItem.scheme_name})`}
          queryKey={"group-by-category-grade"}
          isArchive={isArchive}
        />
      )}

      {store.isSettingDelete && (
        <ModalDelete
          mysqlApiDelete={`/v2/dev-tuition-fee/${id}`}
          msg={"Are you sure you want to delete this record?"}
          item={`${dataItem.tuition_category_name} - ${dataItem.grade_level_name} (${dataItem.scheme_name})`}
          queryKey={"group-by-category-grade"}
        />
      )}
    </>
  );
};

export default ScheduleOfFeesList;
