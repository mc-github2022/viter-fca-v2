import useQueryData from "@/components/custom-hooks/useQueryData";
import TableLoading from "@/components/partials/TableLoading";
import TableSpinner from "@/components/partials/spinners/TableSpinner";

import NoData from "@/components/partials/NoData.jsx";
import ModalInvalidRequestError from "@/components/partials/modals/ModalInvalidRequestError";
import ScheduleOfFeeSchemeList from "./ScheduleOfFeeSchemeList";
const ScheduleOfFeesList = ({ setItemEdit }) => {
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

      <div className="datalist max-w-[800px] w-[750px] overflow-x-hidden overflow-y-auto max-h-[610px] lg:max-h-[520px] custom__scroll ">
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
              <div
                className={`${
                  item.tuition_fee_active ? "opacity-100" : "opacity-40"
                } w-full mr-1`}
              >
                <p className="my-3 first:mb-3 first:mt-0 font-bold">
                  {item.tuition_category_name} - {item.grade_level_name}
                </p>

                <ul className="grid grid-cols-[4rem,6rem,7rem,7rem,7rem,8rem] w-full text-right">
                  <li></li>
                  <li>Admission Fee</li>
                  <li>Misc Fee</li>
                  <li>Tuition Fee</li>
                  <li>Books</li>
                  <li>Upon Enrollment</li>
                </ul>

                <ScheduleOfFeeSchemeList
                  setItemEdit={setItemEdit}
                  val={item}
                  fetching={isFetching}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ScheduleOfFeesList;
