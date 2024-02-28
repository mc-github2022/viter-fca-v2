import { numberWithCommasToFixed } from "@/components/helpers/functions-general";
import {
  getAdmissionDiscountedAmount,
  getMonthlyFeeDiscountedAmount,
  getTuitionDiscountedAmount,
  getUponEnrollmentDiscountedAmount,
} from "./functions-assessment";

const AssessmentRateList = ({
  listOfScheme,
  selectItem,
  primaryDiscountData,
  loadingListOfScheme,
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
        </>
      )}
    </>
  );
};

export default AssessmentRateList;
