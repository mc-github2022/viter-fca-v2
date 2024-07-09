import useQueryData from "@/components/custom-hooks/useQueryData";
import {
  isItemEmpty,
  numberWithCommasToFixed,
} from "@/components/helpers/functions-general";
import {
  getGetAdditionalDiscount,
  getTotalAdditionalDiscount,
} from "./functions-assessment";

const AssessmentAdditionalDiscountList = ({
  primaryDiscountData,
  additionalDiscountId,
  setAdditionalDiscountId,
  item,
  listOfScheme,
  totalAdditionalDiscountData,
  loadingListOfScheme,
}) => {
  const {
    isLoading,
    isFetching,
    error,
    data: additionalDiscount,
  } = useQueryData(
    "/v2/dev-assessment/read-additional-discount", // endpoint
    "get", // method
    "addtional-discount" // key
  );

  const handleChangeAdditionalDiscount = (e) => {
    setAdditionalDiscountId(e.target.value);
    const additionalDisc = getGetAdditionalDiscount(
      additionalDiscount,
      e.target.value
    );

    totalAdditionalDiscountData = getTotalAdditionalDiscount(
      primaryDiscountData,
      listOfScheme,
      additionalDisc
    );
  };

  const additionalDisc = getGetAdditionalDiscount(
    additionalDiscount,
    additionalDiscountId
  );

  const getFinalAdditionalDiscount = getTotalAdditionalDiscount(
    primaryDiscountData,
    listOfScheme,
    additionalDisc
  );

  return (
    <>
      <div className="grid grid-cols-[250px_1fr] gap-5">
        <div className="form__wrap !mb-0">
          <label
            htmlFor=""
            className="font-bold opacity-100 text-black uppercase"
          >
            Additional Discount
          </label>
          <select
            value={additionalDiscountId}
            onChange={(e) => handleChangeAdditionalDiscount(e)}
            disabled={
              item.current_students_is_accept_payment === 0 ? false : true
            }
          >
            {isLoading || isFetching ? (
              <option hidden>Loading...</option>
            ) : error ? (
              <option hidden>Error</option>
            ) : additionalDiscount?.data.length === 0 ? (
              <option hidden>No Data</option>
            ) : (
              <>
                <option value="0">
                  {isLoading || isFetching ? "Loading..." : "No Discount"}
                </option>
                {additionalDiscount?.data.map((pItem, key) => {
                  return (
                    <option key={key} value={pItem.discount_additional_aid}>
                      {`${pItem.discount_additional_name}`}
                    </option>
                  );
                })}
              </>
            )}
          </select>
        </div>

        {(loadingListOfScheme || Number(additionalDiscountId) === 0) && (
          // <div className="min-h-250px grid place-content-center border border-line">
          <div className="min-h-250px flex items-end opacity-[0.8]">
            <p className="font-bold text-base mb-0">
              No Additional Discount Selected
            </p>
          </div>
        )}
        {Number(additionalDiscountId) > 0 && (
          <div className="discount-info">
            <p className="pb-1 font-bold">
              {
                getGetAdditionalDiscount(
                  additionalDiscount,
                  additionalDiscountId
                )[0]?.discount_additional_name
              }
            </p>

            <div className="grid grid-cols-2 max-w-[95%] mt-2">
              <ul className="flex gap-2 mb-2 text-xs">
                <li className="font-bold">Amount: </li>
                <li>
                  {/* {isItemEmpty(additionalDisc[0]?.discount_additional_amount)} */}
                  {numberWithCommasToFixed(
                    getFinalAdditionalDiscount?.amount,
                    2
                  )}
                </li>
              </ul>

              <ul className="flex gap-2 mb-2 text-xs">
                <li className="font-bold">Percent: </li>
                <li>
                  {isItemEmpty(
                    additionalDisc[0]?.discount_additional_percent,
                    "%"
                  )}{" "}
                  (
                  {numberWithCommasToFixed(
                    getFinalAdditionalDiscount?.percent,
                    2
                  )}
                  )
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AssessmentAdditionalDiscountList;
