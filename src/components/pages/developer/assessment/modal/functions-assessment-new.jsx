// PRIMARY DISCOUNT

import {
  addmissionFeeId,
  booksFeeId,
  miscFeeId,
  schemeAId,
  schemeBId,
  schemeCId,
  tuitionFeeId,
  uponEnrollmentFeeId,
} from "@/components/helpers/functions-general";

// TOTAL DISCOUNT
// GET TOTAL OF DISCOUNT IN TUITION
export const getDiscountAmount = (
  primaryDiscountData,
  listOfScheme,
  totalAdditionalDiscountData
) => {
  let addmissionAmount = 0;
  let miscAmount = 0;
  let tuitionAmount = 0;
  let booksAmount = 0;
  let uponEronllmentAmount = 0;
  let monthlyAmount = 0;
  let totalMonthlyAmount = 0;
  let isHaveDiscountAddmission = false;
  let isHaveDiscountMisc = false;
  let isHaveDiscountTuition = false;
  let isHaveDiscountBooks = false;
  let isHaveDiscountUponEronllment = false;
  let isHaveDiscountMonthly = false;
  let isHaveDiscountTotalMonthly = false;
  let result = [];
  let resultSchemeA = [];

  let totalTuitionDiscountForNotSchemeA = 0;

  // SCHEME A ORIGINAL AMOUNT
  let schemeAAddimissionFee = 0;
  let schemeAMiscFee = 0;
  let schemeATuitionFee = 0;
  let schemeABooksFee = 0;

  // SCHEME A WITH DISCOUNT
  let addmissionSchemeADiscounedAmount = 0;
  let miscSchemeADiscounedAmount = 0;
  let tuitionSchemeADiscounedAmount = 0;
  let booksSchemeADiscounedAmount = 0;

  if (listOfScheme?.data.length > 0) {
    // empty amount and discount additional discount
    if (listOfScheme?.count > 0) {
      resultSchemeA = listOfScheme?.data.filter(
        (item) => item.tuition_fee_monthly === ""
      );
    }

    if (resultSchemeA?.length > 0) {
      schemeAAddimissionFee = resultSchemeA[0].tuition_fee_admission;
      schemeAMiscFee = resultSchemeA[0].tuition_fee_miscellaneous;
      schemeATuitionFee = resultSchemeA[0].tuition_fee_tuition;
      schemeABooksFee = resultSchemeA[0].tuition_fee_books;
    }

    listOfScheme?.data.map((listItem) => {
      uponEronllmentAmount = 0;
      // ADDMISSION FEE
      if (
        addmissionFeeId === totalAdditionalDiscountData?.id ||
        (!isNaN(primaryDiscountData.admissionFeePercent) &&
          Number(primaryDiscountData.admissionFeePercent) > 0)
      ) {
        isHaveDiscountAddmission = true;
        addmissionAmount = 0;
        let amountPrimary = 0;
        let amountAdditional = 0;
        // SCHEME A
        if (Number(primaryDiscountData.tuitionFeePercent) > 0) {
          amountPrimary = Number(primaryDiscountData.finalAmountAddmission);
        }

        if (
          addmissionFeeId === totalAdditionalDiscountData?.id &&
          !totalAdditionalDiscountData?.isEarlyBird
        ) {
          amountAdditional = totalAdditionalDiscountData?.finalAmount;
        }

        const amount = amountPrimary + amountAdditional;

        addmissionAmount = Number(schemeAAddimissionFee) - amount;

        //IF AMOUNT IS NEGATIVE THE DISCOUNT VALUE WILL BE ZERO
        if (addmissionAmount < 0) {
          addmissionAmount = 0;
        }

        addmissionSchemeADiscounedAmount = addmissionAmount;
        if (Number(listItem.tuition_fee_scheme_id) === Number(schemeBId)) {
          const schemeBAddmission = addmissionAmount / 2;
          addmissionAmount = schemeBAddmission;
        }
        // SCHEME C
        if (Number(listItem.tuition_fee_scheme_id) === Number(schemeCId)) {
          const schemeCAddmission = addmissionAmount * 0.2;
          addmissionAmount = schemeCAddmission;
        }

        uponEronllmentAmount = Number(addmissionAmount);
      }
      // ADDMISSION FEE
      if (Number(addmissionAmount) === 0) {
        addmissionSchemeADiscounedAmount = addmissionAmount;
        uponEronllmentAmount = Number(listItem.tuition_fee_admission);
      }

      // MISC FEE
      if (miscFeeId === totalAdditionalDiscountData?.id) {
        isHaveDiscountMisc = true;
        miscAmount =
          Number(schemeAMiscFee) -
          Number(totalAdditionalDiscountData.finalAmount);

        //IF AMOUNT IS NEGATIVE THE DISCOUNT VALUE WILL BE ZERO
        if (miscAmount < 0) {
          miscAmount = 0;
        }

        miscSchemeADiscounedAmount = miscAmount;
        // SCHEME B
        if (Number(listItem.tuition_fee_scheme_id) === Number(schemeBId)) {
          const schemeBAddmission = miscAmount / 2;
          miscAmount = schemeBAddmission;
        }
        // SCHEME C
        if (Number(listItem.tuition_fee_scheme_id) === Number(schemeCId)) {
          const schemeCAddmission = miscAmount * 0.2;
          miscAmount = schemeCAddmission;
        }
        uponEronllmentAmount += Number(miscAmount);
      }

      // MISC FEE
      if (Number(miscAmount) === 0) {
        uponEronllmentAmount += Number(listItem.tuition_fee_miscellaneous);
        miscSchemeADiscounedAmount = Number(listItem.tuition_fee_miscellaneous);
      }

      // TUITION FEE
      if (
        (tuitionFeeId === totalAdditionalDiscountData?.id &&
          !totalAdditionalDiscountData?.isEarlyBird) ||
        (Number(primaryDiscountData?.tuitionFeePercent) > 0 &&
          !isNaN(primaryDiscountData.tuitionFeePercent)) ||
        Number(totalAdditionalDiscountData?.percent) > 0 ||
        Number(totalAdditionalDiscountData?.amount) > 0
      ) {
        isHaveDiscountTuition = true;
        let amountPrimary = 0;
        let amountAdditional = 0;
        let amountForSchemeAOnly = 0;
        if (Number(primaryDiscountData.tuitionFeePercent) > 0) {
          amountPrimary = Number(primaryDiscountData.finalAmountTuition);
        }

        if (
          tuitionFeeId === totalAdditionalDiscountData?.id &&
          !totalAdditionalDiscountData?.isEarlyBird
        ) {
          amountAdditional = Number(totalAdditionalDiscountData?.finalAmount);

          if (!totalAdditionalDiscountData?.isDisccountForSchemeAOnly) {
            amountForSchemeAOnly = Number(
              totalAdditionalDiscountData?.finalAmount
            );
          }
        }

        const amount = amountPrimary + amountAdditional;
        totalTuitionDiscountForNotSchemeA = amount + amountForSchemeAOnly;

        tuitionAmount = Number(schemeATuitionFee) - amount;

        //IF AMOUNT IS NEGATIVE THE DISCOUNT VALUE WILL BE ZERO
        if (tuitionAmount < 0) {
          tuitionAmount = 0;
        }

        tuitionSchemeADiscounedAmount = tuitionAmount;
        // SCHEME B
        if (Number(listItem.tuition_fee_scheme_id) === Number(schemeBId)) {
          const schemeBAddmission = tuitionAmount / 2;
          tuitionAmount = schemeBAddmission;
        }
        // SCHEME C
        if (Number(listItem.tuition_fee_scheme_id) === Number(schemeCId)) {
          const schemeCAddmission = tuitionAmount * 0.2;
          tuitionAmount = schemeCAddmission;
        }
        uponEronllmentAmount += Number(tuitionAmount);
      }

      // ADDMISSION FEE
      if (Number(tuitionAmount) === 0) {
        uponEronllmentAmount += Number(listItem.tuition_fee_tuition);
        tuitionSchemeADiscounedAmount = Number(listItem.tuition_fee_tuition);
      }

      // BOOKS FEE
      if (booksFeeId === totalAdditionalDiscountData?.id) {
        isHaveDiscountBooks = true;
        booksAmount =
          Number(schemeABooksFee) -
          Number(totalAdditionalDiscountData.finalAmount);

        //IF AMOUNT IS NEGATIVE THE DISCOUNT VALUE WILL BE ZERO
        if (booksAmount < 0) {
          booksAmount = 0;
        }
        booksSchemeADiscounedAmount = booksAmount;
        // SCHEME B
        if (Number(listItem.tuition_fee_scheme_id) === Number(schemeBId)) {
          const schemeBAddmission = booksAmount / 2;
          booksAmount = schemeBAddmission;
        }
        // SCHEME C
        if (Number(listItem.tuition_fee_scheme_id) === Number(schemeCId)) {
          const schemeCAddmission = booksAmount * 0.2;
          booksAmount = schemeCAddmission;
        }
        uponEronllmentAmount += Number(booksAmount);
      }

      // BOOKS FEE
      if (Number(booksAmount) === 0) {
        uponEronllmentAmount += Number(listItem.tuition_fee_books);
        booksSchemeADiscounedAmount = Number(listItem.tuition_fee_books);
      }
      // UPON ENROLLMENT
      if (
        isHaveDiscountAddmission === true ||
        isHaveDiscountMisc === true ||
        isHaveDiscountTuition === true ||
        isHaveDiscountBooks === true
      ) {
        isHaveDiscountUponEronllment = true;
        let discountUponenrollment = 0;

        if (uponEnrollmentFeeId === totalAdditionalDiscountData?.id) {
          discountUponenrollment = Number(
            totalAdditionalDiscountData.finalAmount
          );
        }

        uponEronllmentAmount =
          Number(uponEronllmentAmount) - Number(discountUponenrollment);

        //IF AMOUNT IS NEGATIVE THE DISCOUNT VALUE WILL BE ZERO
        if (uponEronllmentAmount < 0) {
          uponEronllmentAmount = 0;
        }
      }

      // MONTHLY

      const addmission =
        Number(addmissionSchemeADiscounedAmount) - Number(addmissionAmount);
      const misc = Number(miscSchemeADiscounedAmount) - Number(miscAmount);
      const tuition =
        Number(totalTuitionDiscountForNotSchemeA) - Number(tuitionAmount);
      const books = Number(booksSchemeADiscounedAmount) - Number(booksAmount);
      const additionalFeeForMonthly = tuition * 0.05;

      monthlyAmount =
        (addmission + misc + tuition + additionalFeeForMonthly + books) /
        Number(listItem.tuition_fee_how_many_months);

      if (
        (isHaveDiscountAddmission === true ||
          isHaveDiscountMisc === true ||
          isHaveDiscountTuition === true ||
          isHaveDiscountBooks === true) &&
        schemeAId !== Number(listItem.tuition_fee_scheme_id)
      ) {
        isHaveDiscountMonthly === true;
        monthlyAmount = monthlyAmount;
      }

      // TOTAL MONTHLY
      totalMonthlyAmount = 0;

      isHaveDiscountMonthly = true;
      isHaveDiscountTotalMonthly = true;
      monthlyAmount = 0;
      totalMonthlyAmount = 0;

      result.push({
        tuition_fee_aid: listItem.tuition_fee_aid,
        scheme_name: listItem.scheme_name,
        addmissionAmount,
        miscAmount,
        tuitionAmount,
        booksAmount,
        uponEronllmentAmount,
        monthlyAmount,
        totalMonthlyAmount,
        isHaveDiscountAddmission,
        isHaveDiscountMisc,
        isHaveDiscountTuition,
        isHaveDiscountBooks,
        isHaveDiscountUponEronllment,
        isHaveDiscountMonthly,
        isHaveDiscountTotalMonthly,
      });
    });
  }

  return result;
};

// ADDITIONAL DISCOUNT
//  list of Additional discount for UI purpose
export const getTotalAdditionalDiscount = (listOfScheme, additionalDisc) => {
  let result = [];
  let val = {};
  let percent = 0;
  let amountPercent = 0;
  let finalAmount = 0;
  let amount = 0;
  let id = 0;
  let isAdditionalStandAloneDiscount = false;
  let isEarlyBird = false;
  let isDisccountForSchemeAOnly = false;

  val = {
    amount,
    percent,
    amountPercent,
    finalAmount,
    id,
    isAdditionalStandAloneDiscount,
    isEarlyBird,
    isDisccountForSchemeAOnly,
  };

  if (additionalDisc?.length > 0) {
    id = Number(additionalDisc[0]?.discount_additional_base_rate_id);

    // amount additional discount
    amount = Number(additionalDisc[0]?.discount_additional_amount);

    isAdditionalStandAloneDiscount =
      additionalDisc[0]?.discount_additional_is_stand_alone_discount === 1
        ? true
        : false;

    // percent additional discount
    if (listOfScheme?.count > 0) {
      percent = Number(additionalDisc[0]?.discount_additional_percent) / 100;
    }

    // empty amount and discount additional discount
    if (listOfScheme?.count > 0) {
      result = listOfScheme?.data.filter(
        (item) => item.tuition_fee_monthly === ""
      );
    }

    if (result?.length > 0 && percent > 0) {
      amountPercent = Number(result[0]?.tuition_fee_tuition) * Number(percent);
    }

    finalAmount = Number(amountPercent) + Number(amount);

    if (additionalDisc[0]?.discount_additional_is_early_bird === 1) {
      isEarlyBird = true;
      finalAmount = 0;
    }
    if (additionalDisc[0]?.discount_additional_is_applyed_scheme_a === 1) {
      isDisccountForSchemeAOnly = true;
    }

    val = {
      amount,
      percent,
      amountPercent,
      finalAmount,
      id,
      isAdditionalStandAloneDiscount,
      isEarlyBird,
    };
  }

  return { ...val };
};

// PRIMARY DISCOUNT
// Primary Discount percentage in compution
// Convert to decimal
export const getPrimaryPercentDiscount = (
  listOfScheme,
  primaryDiscountData,
  primaryDiscountId
) => {
  let resultSchemeA = [];
  let primaryDiscountRowData = [];
  let admissionFeePercent = 0;
  let tuitionFeePercent = 0;
  let finalAmountTuition = 0;
  let finalAmountAddmission = 0;
  let isPrimaryStandAloneDiscount = false;

  // empty amount and discount additional discount
  if (listOfScheme?.count > 0) {
    resultSchemeA = listOfScheme?.data.filter(
      (item) => item.tuition_fee_monthly === ""
    );
  }

  if (primaryDiscountData?.count > 0) {
    primaryDiscountRowData = primaryDiscountData?.data.filter(
      (acItem) => acItem.discount_aid === Number(primaryDiscountId)
    );
  }

  if (primaryDiscountRowData?.length > 0) {
    isPrimaryStandAloneDiscount =
      primaryDiscountRowData[0]?.discount_is_stand_alone_discount === 1
        ? true
        : false;
    admissionFeePercent =
      Number(primaryDiscountRowData[0]?.discount_admission_fee) / 100;
    tuitionFeePercent =
      Number(primaryDiscountRowData[0]?.discount_tuition_fee) / 100;
  }

  if (resultSchemeA?.length > 0) {
    finalAmountTuition =
      Number(resultSchemeA[0].tuition_fee_admission) *
      Number(tuitionFeePercent);

    finalAmountAddmission =
      Number(resultSchemeA[0].tuition_fee_admission) *
      Number(admissionFeePercent);
  }

  const val = {
    admissionFeePercent,
    tuitionFeePercent,
    isPrimaryStandAloneDiscount,
    finalAmountTuition,
    finalAmountAddmission,
  };

  return { ...val };
};

// ADDITIONAL DISCOUNT
//  list of Additional discount for UI purpose
export const getEarlyBirdDiscount = (
  primaryDiscountData,
  listOfScheme,
  additionalDisc
) => {
  let result = [];
  let val = {};
  let percent = 0;
  let flatDisccountAmount = 0;
  let percentDisccountAmount = 0;
  let amount = 0;
  let id = 0;
  let isAdditionalStandAloneDiscount = false;

  val = {
    amount,
    percent,
    id,
    isAdditionalStandAloneDiscount,
  };

  if (additionalDisc?.length > 0) {
    id = Number(additionalDisc[0]?.discount_additional_base_rate_id);
    // amount additional discount
    flatDisccountAmount = Number(additionalDisc[0]?.discount_additional_amount);

    isAdditionalStandAloneDiscount =
      additionalDisc[0]?.discount_additional_is_stand_alone_discount === 1
        ? true
        : false;
    // percent additional discount
    if (listOfScheme?.count > 0) {
      percent = Number(additionalDisc[0]?.discount_additional_percent) / 100;
    }

    // empty amount and discount additional discount
    if (listOfScheme?.count > 0) {
      result = listOfScheme?.data.filter(
        (item) => item.tuition_fee_monthly === ""
      );
    }

    if (result?.length > 0) {
      // IF PRIMARY TUITION PERCENT IS NEGATIVE OR ZERO
      // OR IF DONT HAVE PRIMARY DISCOUNT

      if (
        !result[0]?.discount_additional_is_early_bird &&
        Number(percent) > 0
      ) {
        // IF REGULAR ADDITIONAL PERCENT DISCOUNT
        percentDisccountAmount =
          Number(result[0]?.tuition_fee_tuition) * Number(percent);
      } else {
        // IF EARLY BIRD ADDITIONAL DISCOUNT
        const primaryAmount =
          Number(result[0]?.tuition_fee_tuition) * Number(primaryDiscountData);

        const newTuitionFeeAmount =
          Number(result[0]?.tuition_fee_tuition) - Number(primaryAmount);

        percentDisccountAmount = (Number(newTuitionFeeAmount) / 9) * 2;
      }

      amount = flatDisccountAmount + percentDisccountAmount;
    }
    val = {
      amount,
      percent,
      id,
      isAdditionalStandAloneDiscount,
    };
  }

  return { ...val };
};

// ADDITIONAL DISCOUNT
//  list of Additional discount for UI purpose
export const getGetAdditionalDiscount = (
  additionalDiscount,
  additionalDiscountId
) => {
  let result = [];

  if (additionalDiscount?.count > 0) {
    const val = additionalDiscount?.data.filter(
      (acItem) =>
        acItem.discount_additional_aid === Number(additionalDiscountId)
    );
    result = val;
  }

  return result;
};
