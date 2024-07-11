import { isItemEmpty } from "@/components/helpers/functions-general";
import { getPrimaryDiscount } from "./functions-assessment";

const AssessmentPrimaryDiscountList = ({
  primaryDiscountId,
  setAdditionalDiscountId,
  setPrimaryDiscountId,
  totalAdditionalDiscountData,
  isLoading,
  isFetching,
  primaryDiscount,
  item,
}) => {
  const handleChangePrimaryDiscount = (e) => {
    setPrimaryDiscountId(e.target.value);
    if (e.target.options[e.target.selectedIndex].id === 1) {
      setAdditionalDiscountId(0);
    }
  };

  return (
    <>
      <div className="grid grid-cols-[250px_1fr] mb-8 mt-5 gap-5">
        <div className="form__wrap !mb-0">
          <label
            htmlFor=""
            className="font-bold opacity-100 text-black uppercase"
          >
            Primary Discount
          </label>
          <select
            value={primaryDiscountId}
            onChange={(e) => handleChangePrimaryDiscount(e)}
            disabled={
              item.current_students_is_accept_payment === 0 ? false : true
            }
          >
            {isLoading || isFetching ? (
              <option hidden>Loading...</option>
            ) : primaryDiscount?.data.length === 0 ? (
              <option hidden>No Data</option>
            ) : (
              <>
                <option value="0">
                  {isLoading || isFetching ? "Loading..." : "No Discount"}
                </option>
                {primaryDiscount?.data.map((pItem, key) => {
                  return (
                    <option
                      key={key}
                      value={pItem.discount_aid}
                      id={pItem.discount_is_stand_alone_discount}
                      disabled={
                        totalAdditionalDiscountData?.isAdditionalStandAloneDiscount
                      }
                    >
                      {`${pItem.discount_category_name} (${pItem.discount_type})`}
                    </option>
                  );
                })}
              </>
            )}
          </select>
        </div>

        {Number(primaryDiscountId) === 0 && (
          <div className="min-h-250px flex items-end opacity-[0.8]">
            <p className="font-bold text-base mb-0">
              No Primary Discount Selected
            </p>
          </div>
        )}
        {Number(primaryDiscountId) > 0 && (
          <div className="discount-info">
            <p className="pb-1 font-bold">
              {
                getPrimaryDiscount(primaryDiscount, primaryDiscountId)[0]
                  ?.discount_category_name
              }
            </p>

            <div className="grid grid-cols-2 max-w-[95%] mt-2">
              <ul className="flex gap-2 mb-2 text-xs">
                <li className="font-bold">Type: </li>
                <li>
                  {
                    getPrimaryDiscount(primaryDiscount, primaryDiscountId)[0]
                      ?.discount_type
                  }
                </li>
              </ul>

              <ul className="flex gap-2 mb-2 text-xs">
                <li className="font-bold">Admission Fee: </li>
                <li>
                  {isItemEmpty(
                    getPrimaryDiscount(primaryDiscount, primaryDiscountId)[0]
                      ?.discount_admission_fee,
                    "%"
                  )}
                </li>
              </ul>

              <ul className="flex gap-2 mb-2 text-xs">
                <li className="font-bold">Tuition Fee: </li>
                <li>
                  {isItemEmpty(
                    getPrimaryDiscount(primaryDiscount, primaryDiscountId)[0]
                      ?.discount_tuition_fee,
                    "%"
                  )}
                </li>
              </ul>

              <ul className="flex gap-2 mb-2 text-xs">
                <li className="font-bold">Qualification: </li>
                <li>
                  {isItemEmpty(
                    getPrimaryDiscount(primaryDiscount, primaryDiscountId)[0]
                      ?.discount_qualification
                  )}
                </li>
              </ul>

              <ul className="flex gap-2 mb-2 text-xs">
                <li className="font-bold">Maintaining Grade: </li>
                <li>
                  {isItemEmpty(
                    getPrimaryDiscount(primaryDiscount, primaryDiscountId)[0]
                      ?.discount_maintaining_grade,
                    " GA"
                  )}
                </li>
              </ul>

              <ul className="flex gap-2 mb-2 text-xs">
                <li className="font-bold">Duration: </li>
                <li>
                  {
                    getPrimaryDiscount(primaryDiscount, primaryDiscountId)[0]
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
