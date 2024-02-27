import { numberWithCommasToFixed } from "@/components/helpers/functions-general";

const AssessmentRateList = ({ listOfScheme, selectItem }) => {
  return (
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
                {numberWithCommasToFixed(listItem.tuition_fee_admission, 2)}
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
                {numberWithCommasToFixed(listItem.tuition_fee_miscellaneous, 2)}
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
                {numberWithCommasToFixed(listItem.tuition_fee_tuition, 2)}
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
                )}
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
                {numberWithCommasToFixed(listItem.tuition_fee_total_monthly, 2)}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default AssessmentRateList;
