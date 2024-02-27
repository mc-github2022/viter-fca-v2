import useQueryData from "@/components/custom-hooks/useQueryData";
import { getGetPrimaryDiscount } from "./functions-assessment";
import { isItemEmpty } from "@/components/helpers/functions-general";

const AssessmentPrimaryDiscountList = ({
  primaryDiscountId,
  setPrimaryDiscountId,
}) => {
  const {
    isLoading,
    isFetching,
    error,
    data: primaryDiscount,
  } = useQueryData(
    "/v2/dev-assessment/read-primary-discount", // endpoint
    "get", // method
    "primary-discount" // key
  );

  const handleChangePrimaryDiscount = (e) => {
    setPrimaryDiscountId(e.target.value);
  };

  return (
    <>
      <div className="grid grid-cols-[250px_1fr] mt-3 gap-5">
        <div className="form__wrap">
          <label htmlFor="" className="font-bold opacity-100 text-black">
            Primary Discount
          </label>
          <select
            value={primaryDiscountId}
            onChange={(e) => handleChangePrimaryDiscount(e)}
          >
            <option value="0">
              {isLoading || isFetching ? "Loading..." : "No Discount"}
            </option>

            {isLoading || isFetching ? (
              <option>Loading...</option>
            ) : primaryDiscount?.data.length === 0 ? (
              <option disabled>No Data</option>
            ) : (
              primaryDiscount?.data.map((pItem, key) => {
                return (
                  <option key={key} value={pItem.discount_aid}>
                    {`${pItem.discount_category_name} (${pItem.discount_type})`}
                  </option>
                );
              })
            )}
          </select>
        </div>

        {Number(primaryDiscountId) === 0 && (
          <div className="min-h-250px grid place-content-center border border-line">
            <p className="font-bold text-base">No Primary Discount Selected</p>
          </div>
        )}
        {Number(primaryDiscountId) > 0 && (
          <div className="discount-info">
            <h4 className="pb-1 ">
              {
                getGetPrimaryDiscount(primaryDiscount, primaryDiscountId)[0]
                  .discount_category_name
              }
            </h4>

            <div className="grid grid-cols-2 max-w-[95%] mt-2">
              <ul className="flex gap-2 mb-2 text-xs">
                <li className="font-bold">Type: </li>
                <li>
                  {
                    getGetPrimaryDiscount(primaryDiscount, primaryDiscountId)[0]
                      ?.discount_type
                  }
                </li>
              </ul>

              <ul className="flex gap-2 mb-2 text-xs">
                <li className="font-bold">Entrance Fee: </li>
                <li>
                  {isItemEmpty(
                    getGetPrimaryDiscount(primaryDiscount, primaryDiscountId)[0]
                      ?.discount_entrance_fee,
                    "%"
                  )}
                </li>
              </ul>

              <ul className="flex gap-2 mb-2 text-xs">
                <li className="font-bold">Tuition Fee: </li>
                <li>
                  {isItemEmpty(
                    getGetPrimaryDiscount(primaryDiscount, primaryDiscountId)[0]
                      ?.discount_tuition_fee,
                    "%"
                  )}
                </li>
              </ul>

              <ul className="flex gap-2 mb-2 text-xs">
                <li className="font-bold">Qualification: </li>
                <li>
                  {isItemEmpty(
                    getGetPrimaryDiscount(primaryDiscount, primaryDiscountId)[0]
                      ?.discount_qualification
                  )}
                </li>
              </ul>

              <ul className="flex gap-2 mb-2 text-xs">
                <li className="font-bold">Maintaining Grade: </li>
                <li>
                  {isItemEmpty(
                    getGetPrimaryDiscount(primaryDiscount, primaryDiscountId)[0]
                      ?.discount_maintaining_grade,
                    " GA"
                  )}
                </li>
              </ul>

              <ul className="flex gap-2 mb-2 text-xs">
                <li className="font-bold">Duration: </li>
                <li>
                  {
                    getGetPrimaryDiscount(primaryDiscount, primaryDiscountId)[0]
                      ?.discount_duration
                  }
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AssessmentPrimaryDiscountList;
