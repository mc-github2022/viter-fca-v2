import useQueryData from "@/components/custom-hooks/useQueryData";
import { getGetAdditionalDiscount } from "./functions-assessment";
import { isItemEmpty } from "@/components/helpers/functions-general";

const AssessmentAdditionalDiscountList = ({
  additionalDiscountId,
  setAdditionalDiscountId,
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
  };

  return (
    <>
      <div className="grid grid-cols-[250px_1fr] mt-3 gap-5">
        <div className="form__wrap">
          <label htmlFor="" className="font-bold opacity-100 text-black">
            Primary Discount
          </label>
          <select
            value={additionalDiscountId}
            onChange={(e) => handleChangeAdditionalDiscount(e)}
          >
            <option value="0">
              {isLoading || isFetching ? "Loading..." : "No Discount"}
            </option>

            {isLoading || isFetching ? (
              <option>Loading...</option>
            ) : additionalDiscount?.data.length === 0 ? (
              <option disabled>No Data</option>
            ) : (
              additionalDiscount?.data.map((pItem, key) => {
                return (
                  <option key={key} value={pItem.discount_additional_aid}>
                    {`${pItem.discount_additional_name}`}
                  </option>
                );
              })
            )}
          </select>
        </div>

        {Number(additionalDiscountId) === 0 && (
          <div className="min-h-250px grid place-content-center border border-line">
            <p className="font-bold text-base">
              No Additional Discount Selected
            </p>
          </div>
        )}
        {Number(additionalDiscountId) > 0 && (
          <div className="discount-info">
            <h4 className="pb-1 ">
              {
                getGetAdditionalDiscount(
                  additionalDiscount,
                  additionalDiscountId
                )[0].discount_additional_name
              }
            </h4>

            <div className="grid grid-cols-2 max-w-[95%] mt-2">
              <ul className="flex gap-2 mb-2 text-xs">
                <li className="font-bold">Amount: </li>
                <li>
                  {
                    getGetAdditionalDiscount(
                      additionalDiscount,
                      additionalDiscountId
                    )[0]?.discount_additional_amount
                  }
                </li>
              </ul>

              <ul className="flex gap-2 mb-2 text-xs">
                <li className="font-bold">Percent: </li>
                <li>
                  {isItemEmpty(
                    getGetAdditionalDiscount(
                      additionalDiscount,
                      additionalDiscountId
                    )[0]?.discount_additional_percent,
                    "%"
                  )}
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