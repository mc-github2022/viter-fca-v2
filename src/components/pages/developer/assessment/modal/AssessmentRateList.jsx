import { numberWithCommasToFixed } from "@/components/helpers/functions-general";
import {
  getAdmissionDiscountedAmount,
  getMonthlyFeeDiscountedAmount,
  getTotalPaymentDiscountedAmount,
  getTuitionDiscountedAmount,
  getUponEnrollmentDiscountedAmount,
} from "./functions-assessment";

const AssessmentRateList = ({
  listOfScheme,
  selectItem,
  primaryDiscountData,
  loadingListOfScheme,
  primaryDiscountId,
  additionalDiscountId,
  totalAdditionalDiscount,
}) => {
  return (
    <>
      {!loadingListOfScheme && listOfScheme?.count > 0 && (
        <>
          <div className="border-y border-line scheme-list">
            <ul className="grid grid-cols-4 gap-2 hover:bg-gray-100 border-b border-line text-xs">
              <li>Admission</li>
              {listOfScheme?.data.map((listItem, key) => {
                return (
                  <li
                    className={`${
                      selectItem === listItem.tuition_fee_aid
                        ? "selected border-y-[0]"
                        : ""
                    }`}
                    key={key}
                  >
                    {numberWithCommasToFixed(listItem.tuition_fee_admission, 2)}{" "}
                    <span className="text-accent font-bold">
                      {Number(primaryDiscountData.admissionFeePercent) > 0 &&
                        `(Disc. ${getAdmissionDiscountedAmount(
                          primaryDiscountData,
                          listItem
                        )})`}
                    </span>
                  </li>
                );
              })}
            </ul>

            <ul className="grid grid-cols-4 gap-2 hover:bg-gray-100 border-b border-line text-xs">
              <li>Misc</li>
              {listOfScheme?.data.map((listItem, key) => {
                return (
                  <li
                    className={`${
                      selectItem === listItem.tuition_fee_aid
                        ? "selected border-y-[0]"
                        : ""
                    }`}
                    key={key}
                  >
                    {numberWithCommasToFixed(
                      listItem.tuition_fee_miscellaneous,
                      2
                    )}
                  </li>
                );
              })}
            </ul>

            <ul className="grid grid-cols-4 gap-2 hover:bg-gray-100 border-b border-line text-xs">
              <li>Tuition Fee</li>
              {listOfScheme?.data.map((listItem, key) => {
                return (
                  <li
                    className={`${
                      selectItem === listItem.tuition_fee_aid
                        ? "selected border-y-[0]"
                        : ""
                    }`}
                    key={key}
                  >
                    {numberWithCommasToFixed(listItem.tuition_fee_tuition, 2)}{" "}
                    <span className="text-accent font-bold">
                      {Number(primaryDiscountData.tuitionFeePercent) > 0 &&
                        `(Disc. ${getTuitionDiscountedAmount(
                          primaryDiscountData,
                          listItem
                        )})`}
                    </span>
                  </li>
                );
              })}
            </ul>

            <ul className="grid grid-cols-4 gap-2 hover:bg-gray-100 border-b border-line text-xs">
              <li>Books</li>
              {listOfScheme?.data.map((listItem, key) => {
                return (
                  <li
                    className={`${
                      selectItem === listItem.tuition_fee_aid
                        ? "selected border-y-[0]"
                        : ""
                    }`}
                    key={key}
                  >
                    {numberWithCommasToFixed(listItem.tuition_fee_books, 2)}
                  </li>
                );
              })}
            </ul>

            <ul className="grid grid-cols-4 gap-2 hover:bg-gray-100 border-b border-line text-xs">
              <li>Upon Enrollment</li>
              {listOfScheme?.data.map((listItem, key) => {
                return (
                  <li
                    className={`${
                      selectItem === listItem.tuition_fee_aid
                        ? "selected border-y-[0]"
                        : ""
                    }`}
                    key={key}
                  >
                    {numberWithCommasToFixed(
                      listItem.tuition_fee_upon_enrollment,
                      2
                    )}{" "}
                    <span className="text-accent font-bold">
                      {(Number(primaryDiscountData.tuitionFeePercent) > 0 ||
                        Number(primaryDiscountData.admissionFeePercent) > 0) &&
                        `(Disc. ${numberWithCommasToFixed(
                          getUponEnrollmentDiscountedAmount(
                            primaryDiscountData,
                            listItem
                          ),
                          2
                        )})`}
                    </span>
                  </li>
                );
              })}
            </ul>

            <ul className="grid grid-cols-4 gap-2 hover:bg-gray-100 border-b border-line text-xs">
              <li>Monthly Fee</li>
              {listOfScheme?.data.map((listItem, key) => {
                return (
                  <li
                    className={`${
                      selectItem === listItem.tuition_fee_aid
                        ? "selected border-y-[0]"
                        : ""
                    }`}
                    key={key}
                  >
                    {numberWithCommasToFixed(listItem.tuition_fee_monthly, 2)}
                    <span className="text-accent font-bold">
                      {getMonthlyFeeDiscountedAmount(
                        listOfScheme,
                        primaryDiscountData,
                        listItem
                      ).isDiscounted > 0 &&
                        ` (Disc. ${
                          getMonthlyFeeDiscountedAmount(
                            listOfScheme,
                            primaryDiscountData,
                            listItem
                          ).monthlyFeeDiscounted
                        })`}
                    </span>
                  </li>
                );
              })}
            </ul>
            <ul className="grid grid-cols-4 gap-2 hover:bg-gray-100  text-xs">
              <li>Total Monthly Fee</li>
              {listOfScheme?.data.map((listItem, key) => {
                return (
                  <li
                    className={`${
                      selectItem === listItem.tuition_fee_aid
                        ? "selected border-y-[0]"
                        : ""
                    }`}
                    key={key}
                  >
                    {numberWithCommasToFixed(
                      listItem.tuition_fee_total_monthly,
                      2
                    )}{" "}
                    <span className="text-accent font-bold">
                      {getMonthlyFeeDiscountedAmount(
                        listOfScheme,
                        primaryDiscountData,
                        listItem
                      ).isDiscounted > 0 &&
                        ` (Disc. ${numberWithCommasToFixed(
                          getMonthlyFeeDiscountedAmount(
                            listOfScheme,
                            primaryDiscountData,
                            listItem
                          ).totalMonthlyFeeDiscounted,
                          2
                        )})`}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {(Number(primaryDiscountId) > 0 ||
            Number(additionalDiscountId) > 0) && (
            <div className="grid grid-cols-4 gap-2 mt-3 text-xs items-center">
              <h4 className="uppercase">Discounted Total Amount</h4>
              {listOfScheme?.data.map((listItem, key) => {
                return (
                  <div
                    className={`${
                      selectItem === listItem.tuition_fee_aid ? "selected" : ""
                    }`}
                    key={key}
                  >
                    <div className="col-header flex flex-col items-center justify-start p-2">
                      <p className="text-xl !leading-none font-bold !mb-0 text-accent">
                        {getTotalPaymentDiscountedAmount(
                          listOfScheme,
                          primaryDiscountData,
                          listItem,
                          totalAdditionalDiscount
                        ) !== 0 &&
                          `${getTotalPaymentDiscountedAmount(
                            listOfScheme,
                            primaryDiscountData,
                            listItem,
                            totalAdditionalDiscount
                          )}`}
                      </p>

                      <p className="text-sm !mt-1 !leading-none text-accent">
                        <span className=" text-accent">
                          {getMonthlyFeeDiscountedAmount(
                            listOfScheme,
                            primaryDiscountData,
                            listItem,
                            totalAdditionalDiscount
                          ).isDiscounted > 0
                            ? `${
                                getMonthlyFeeDiscountedAmount(
                                  listOfScheme,
                                  primaryDiscountData,
                                  listItem,
                                  totalAdditionalDiscount
                                ).monthlyFeeDiscounted
                              }`
                            : "0.00"}
                        </span>
                        <span className="text-xs"> /mo</span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default AssessmentRateList;
