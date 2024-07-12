import {
  numberWithCommasToFixed,
  schemeAId,
} from "@/components/helpers/functions-general";
import {
  getDiscountAmount,
  getTotalDiscountedAmount,
} from "../../../assessment/modal/functions-assessment-new";

const StudentPaymentSchemeList = ({
  dataItem,
  selectItem,
  listOfScheme,
  primaryDiscountData,
  totalAdditionalDiscountData,
}) => {
  // UPON ENROLLMENT
  let discountAmount = getDiscountAmount(
    primaryDiscountData,
    listOfScheme,
    totalAdditionalDiscountData
  );

  let discountedAmount = getTotalDiscountedAmount(discountAmount, listOfScheme);

  return (
    <div>
      <div className="border-y border-line scheme-list">
        <ul className="grid grid-cols-4 hover:bg-gray-100 border-b border-line">
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

                {discountAmount?.map((itemDiscount, dkey) => {
                  return (
                    itemDiscount.isHaveDiscountAddmission === true &&
                    Number(itemDiscount.tuition_fee_aid) ===
                      Number(listItem.tuition_fee_aid) && (
                      <span key={dkey} className="text-accent font-bold ml-1">
                        {`(Disc. ${numberWithCommasToFixed(
                          itemDiscount.addmissionAmount,
                          2
                        )})`}
                      </span>
                    )
                  );
                })}
              </li>
            );
          })}
        </ul>

        <ul className="grid grid-cols-4 hover:bg-gray-100 border-b border-line">
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
                {discountAmount?.map((itemDiscount, dkey) => {
                  return (
                    itemDiscount.isHaveDiscountMisc === true &&
                    Number(itemDiscount.tuition_fee_aid) ===
                      Number(listItem.tuition_fee_aid) && (
                      <span key={dkey} className="text-accent font-bold ml-1">
                        {`(Disc. ${numberWithCommasToFixed(
                          itemDiscount.miscAmount,
                          2
                        )})`}
                      </span>
                    )
                  );
                })}
              </li>
            );
          })}
        </ul>

        <ul className="grid grid-cols-4 hover:bg-gray-100 border-b border-line">
          <li>Tuition Fee</li>{" "}
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
                {discountAmount?.map((itemDiscount, dkey) => {
                  return (
                    itemDiscount.isHaveDiscountTuition === true &&
                    Number(itemDiscount.tuition_fee_aid) ===
                      Number(listItem.tuition_fee_aid) && (
                      <span key={dkey} className="text-accent font-bold ml-1">
                        {`(Disc. ${numberWithCommasToFixed(
                          itemDiscount.tuitionAmount,
                          2
                        )})`}
                      </span>
                    )
                  );
                })}
              </li>
            );
          })}
        </ul>

        <ul className="grid grid-cols-4 hover:bg-gray-100 border-b border-line">
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
                {discountAmount?.map((itemDiscount, dkey) => {
                  return (
                    itemDiscount.isHaveDiscountBooks === true &&
                    Number(itemDiscount.tuition_fee_aid) ===
                      Number(listItem.tuition_fee_aid) && (
                      <span key={dkey} className="text-accent font-bold ml-1">
                        {`(Disc. ${numberWithCommasToFixed(
                          itemDiscount.booksAmount,
                          2
                        )})`}
                      </span>
                    )
                  );
                })}
              </li>
            );
          })}
        </ul>

        <ul className="grid grid-cols-4 hover:bg-gray-100 border-b border-line">
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

                {discountAmount?.map((itemDiscount, dkey) => {
                  return (
                    itemDiscount.isHaveDiscountUponEronllment === true &&
                    Number(itemDiscount.tuition_fee_aid) ===
                      Number(listItem.tuition_fee_aid) && (
                      <span key={dkey} className="text-accent font-bold ml-1">
                        {`(Disc. ${numberWithCommasToFixed(
                          itemDiscount.uponEronllmentAmount,
                          2
                        )})`}
                      </span>
                    )
                  );
                })}
              </li>
            );
          })}
        </ul>

        <ul className="grid grid-cols-4 hover:bg-gray-100 border-b border-line">
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

                {discountAmount?.map((itemDiscount, dkey) => {
                  return (
                    itemDiscount.isHaveDiscountMonthly === true &&
                    Number(itemDiscount.tuition_fee_aid) ===
                      Number(listItem.tuition_fee_aid) && (
                      <span key={dkey} className="text-accent font-bold ml-1">
                        {`(Disc. ${numberWithCommasToFixed(
                          itemDiscount.monthlyAmount,
                          2
                        )})`}
                      </span>
                    )
                  );
                })}
              </li>
            );
          })}
        </ul>
        <ul className="grid grid-cols-4 hover:bg-gray-100 ">
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
                {numberWithCommasToFixed(listItem.tuition_fee_total_monthly, 2)}{" "}
                {discountAmount?.map((itemDiscount, dkey) => {
                  return (
                    itemDiscount.isHaveDiscountTotalMonthly === true &&
                    Number(itemDiscount.tuition_fee_aid) ===
                      Number(listItem.tuition_fee_aid) && (
                      <span key={dkey} className="text-accent font-bold ml-1">
                        {`(Disc. ${numberWithCommasToFixed(
                          itemDiscount.totalMonthlyAmount,
                          2
                        )})`}
                      </span>
                    )
                  );
                })}
              </li>
            );
          })}
        </ul>

        {(Number(dataItem.current_students_primary_discount_id) > 0 ||
          Number(dataItem.current_students_additional_discount_id) > 0) &&
          Number(discountedAmount) !== 0 && (
            <div className="grid grid-cols-4 mt-3 text-xs items-center">
              <h4 className="uppercase">Discounted Total Amount</h4>
              {listOfScheme?.data.map((listItem, key) => {
                return (
                  <div
                    className={`${
                      selectItem === listItem.tuition_fee_aid ? "selected" : ""
                    }`}
                    key={key}
                  >
                    {discountAmount?.map((itemDiscount, dkey) => {
                      return (
                        Number(itemDiscount.tuition_fee_aid) ===
                          Number(listItem.tuition_fee_aid) && (
                          <div
                            key={dkey}
                            className="col-header flex flex-col items-center justify-start p-2"
                          >
                            <p className="text-xl !leading-none font-bold !mb-0 text-accent">
                              {discountAmount?.map((itemDiscount, dkey) => {
                                return (
                                  Number(itemDiscount.tuition_fee_aid) ===
                                    Number(listItem.tuition_fee_aid) && (
                                    <span key={dkey} className="text-accent">
                                      {numberWithCommasToFixed(
                                        itemDiscount.finalAmountWithDiscount,
                                        2
                                      )}
                                    </span>
                                  )
                                );
                              })}
                            </p>

                            <p className="text-sm !mt-1 !leading-none text-accent">
                              {discountAmount?.map((itemDiscount, dkey) => {
                                return (
                                  Number(itemDiscount.tuition_fee_aid) ===
                                    Number(listItem.tuition_fee_aid) && (
                                    <span key={dkey} className="text-accent">
                                      {numberWithCommasToFixed(
                                        itemDiscount.monthlyAmount,
                                        2
                                      )}
                                    </span>
                                  )
                                );
                              })}
                              <span className="text-xs">/mo</span>
                            </p>
                          </div>
                        )
                      );
                    })}
                  </div>
                );
              })}
            </div>
          )}

        {totalAdditionalDiscountData.isEarlyBird === true && (
          <div className="grid grid-cols-4 mt-3 text-xs items-center bg-warning">
            <h4 className="uppercase ml-2">With Early Bird Promo</h4>
            {listOfScheme?.data.map((listItem, key) => {
              return (
                <div className="" key={key}>
                  {discountAmount?.map((itemDiscount, dkey) => {
                    return (
                      Number(itemDiscount.tuition_fee_aid) ===
                        Number(listItem.tuition_fee_aid) &&
                      schemeAId === Number(listItem.tuition_fee_scheme_id) && (
                        <div
                          key={dkey}
                          className="col-header flex flex-col items-center justify-start p-2"
                        >
                          <p className="text-xl !leading-none font-bold !mb-0 text-accent">
                            <span className="text-accent">
                              {numberWithCommasToFixed(
                                itemDiscount.uponEronllmentAmount -
                                  totalAdditionalDiscountData.earlyBirdAmount,
                                2
                              )}
                            </span>
                          </p>
                        </div>
                      )
                    );
                  })}
                  {schemeAId !== Number(listItem.tuition_fee_scheme_id) && (
                    <div className="col-header flex flex-col items-center justify-start p-2">
                      <p className="text-xl !leading-none font-bold !mb-0 text-accent">
                        <span className="text-accent">{"--"}</span>
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {(Number(dataItem.current_students_primary_discount_id) > 0 ||
          Number(dataItem.current_students_additional_discount_id) > 0) && (
          <div className="grid grid-cols-4 mt-3 text-xs items-center ">
            <h4 className="uppercase ">AMOUNT SAVED</h4>
            {listOfScheme?.data.map((listItem, key) => {
              return (
                <div
                  className={`${
                    selectItem === listItem.tuition_fee_aid ? "selected" : ""
                  }`}
                  key={key}
                >
                  {discountAmount?.map((itemDiscount, dkey) => {
                    return (
                      Number(itemDiscount.tuition_fee_aid) ===
                        Number(listItem.tuition_fee_aid) &&
                      schemeAId === Number(listItem.tuition_fee_scheme_id) && (
                        <div
                          key={dkey}
                          className="col-header flex flex-col items-center justify-start p-2"
                        >
                          <p className="text-xl !leading-none font-bold !mb-0 text-accent">
                            <span className="text-accent">
                              {numberWithCommasToFixed(
                                discountedAmount +
                                  totalAdditionalDiscountData.earlyBirdAmount,
                                2
                              )}
                            </span>
                          </p>
                        </div>
                      )
                    );
                  })}
                  {schemeAId !== Number(listItem.tuition_fee_scheme_id) && (
                    <div className="col-header flex flex-col items-center justify-start p-2">
                      <p className="text-xl !leading-none font-bold !mb-0 text-accent">
                        <span className="text-accent">
                          {numberWithCommasToFixed(discountedAmount, 2)}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentPaymentSchemeList;
