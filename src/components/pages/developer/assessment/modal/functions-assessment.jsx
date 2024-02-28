// PRIMARY DISCOUNT

import { numberWithCommasToFixed } from "@/components/helpers/functions-general";

//  list of Primary discount for UI purpose
export const getGetPrimaryDiscount = (primaryDiscount, primaryDiscountId) => {
  let result = [];

  if (primaryDiscount?.count > 0) {
    const val = primaryDiscount?.data.filter(
      (acItem) => acItem.discount_aid === Number(primaryDiscountId)
    );
    result = val;
  }

  return result;
};

// PRIMARY DISCOUNT
// Primary Discount percentage in compution
// Convert to decimal
export const getAdmissionDiscount = (
  primaryDiscountData,
  primaryDiscountId
) => {
  let primaryDiscountRowData = [];
  let admissionFeePercent = 0;
  let tuitionFeePercent = 0;

  if (primaryDiscountData?.count > 0) {
    primaryDiscountRowData = primaryDiscountData?.data.filter(
      (acItem) => acItem.discount_aid === Number(primaryDiscountId)
    );
  }

  if (primaryDiscountRowData?.length > 0) {
    admissionFeePercent =
      Number(primaryDiscountRowData[0]?.discount_admission_fee) / 100;
    tuitionFeePercent =
      Number(primaryDiscountRowData[0]?.discount_tuition_fee) / 100;
  }

  return { admissionFeePercent, tuitionFeePercent };
};

// PRIMARY DISCOUNT
// GET TOTAL OF DISCOUNT IN ADMISSION
export const getAdmissionDiscountedAmount = (primaryDiscountData, listItem) => {
  let result = "";

  if (!isNaN(primaryDiscountData.admissionFeePercent)) {
    const amount =
      Number(listItem.tuition_fee_admission) *
      Number(primaryDiscountData.admissionFeePercent);

    result = numberWithCommasToFixed(amount, 2);
  }
  return result;
};

// PRIMARY DISCOUNT
// GET TOTAL OF DISCOUNT IN TUITION
export const getTuitionDiscountedAmount = (primaryDiscountData, listItem) => {
  let result = "";

  if (!isNaN(primaryDiscountData.tuitionFeePercent)) {
    const amount =
      Number(listItem.tuition_fee_tuition) *
      Number(primaryDiscountData.tuitionFeePercent);

    result = numberWithCommasToFixed(amount, 2);
  }
  return result;
};

// PRIMARY DISCOUNT
// GET TOTAL OF UPON ENROLLMENT
export const getUponEnrollmentDiscountedAmount = (
  primaryDiscountData,
  listItem
) => {
  let result = "";

  if (
    !isNaN(primaryDiscountData.tuitionFeePercent) ||
    !isNaN(primaryDiscountData.admissionFeePercent)
  ) {
    const discountedAdmissionFeeAmount =
      Number(listItem.tuition_fee_admission) *
      Number(primaryDiscountData.admissionFeePercent);

    const discountedTuitionFeeAmount =
      Number(listItem.tuition_fee_tuition) *
      Number(primaryDiscountData.tuitionFeePercent);

    const amount =
      Number(discountedAdmissionFeeAmount) +
      Number(listItem.tuition_fee_miscellaneous) +
      Number(discountedTuitionFeeAmount) +
      Number(listItem.tuition_fee_books);

    result = amount;
  }
  return result;
};

// PRIMARY DISCOUNT
// GET TOTAL OF UPON ENROLLMENT
export const getTotalPaymentDiscountedAmount = (
  listOfScheme,
  primaryDiscountData,
  listItem
) => {
  let result = 0;

  if (Number(primaryDiscountData.tuitionFeePercent) > 0) {
    const uponEnrollmentDiscountedAmount = getUponEnrollmentDiscountedAmount(
      primaryDiscountData,
      listItem
    );
    const monthlyFeeDiscountedAmount = getMonthlyFeeDiscountedAmount(
      listOfScheme,
      primaryDiscountData,
      listItem
    ).totalMonthlyFeeDiscounted;

    const amount =
      Number(uponEnrollmentDiscountedAmount) +
      Number(monthlyFeeDiscountedAmount);

    result = numberWithCommasToFixed(amount, 2);
  }

  return result;
};

// PRIMARY DISCOUNT
// GET TOTAL OF MONTHLY FEE
export const getMonthlyFeeDiscountedAmount = (
  listOfScheme,
  primaryDiscountData,
  listItem
) => {
  let monthlyFeeDiscounted = "";
  let totalMonthlyFeeDiscounted = "";
  let newListOfSchemeData = [];
  let schemeADiscountedAdmissionFeeAmount = "";
  let schemeADiscountedTuitionFeeAmount = "";
  let schemeAMisc = "";
  let schemeABooks = "";
  let finalAmount = 0;
  let isDiscounted = 1;

  if (listOfScheme?.count > 0) {
    newListOfSchemeData = listOfScheme?.data.filter(
      (acItem) => acItem.tuition_fee_monthly === ""
    );
  }

  if (
    ((Number(primaryDiscountData.tuitionFeePercent) > 0 ||
      Number(primaryDiscountData.admissionFeePercent) > 0) &&
      !isNaN(primaryDiscountData.tuitionFeePercent)) ||
    !isNaN(primaryDiscountData.admissionFeePercent)
  ) {
    if (newListOfSchemeData?.length > 0) {
      schemeADiscountedAdmissionFeeAmount =
        Number(newListOfSchemeData[0]?.tuition_fee_admission) *
        Number(primaryDiscountData.admissionFeePercent);

      schemeADiscountedTuitionFeeAmount =
        Number(newListOfSchemeData[0]?.tuition_fee_tuition) *
        Number(primaryDiscountData.tuitionFeePercent);

      schemeAMisc = Number(newListOfSchemeData[0]?.tuition_fee_miscellaneous);
      schemeABooks = Number(newListOfSchemeData[0]?.tuition_fee_books);
    }

    const discountedAdmissionFeeAmount =
      Number(listItem.tuition_fee_admission) *
      Number(primaryDiscountData.admissionFeePercent);

    const discountedTuitionFeeAmount =
      Number(listItem.tuition_fee_tuition) *
      Number(primaryDiscountData.tuitionFeePercent);

    // COMPUTION START HERE
    const finalAdimissionFee =
      schemeADiscountedAdmissionFeeAmount - discountedAdmissionFeeAmount;

    const finalMiscFee =
      schemeAMisc - Number(listItem.tuition_fee_miscellaneous);

    const finalTuitionFee =
      schemeADiscountedTuitionFeeAmount - discountedTuitionFeeAmount;

    const finalTuitionFeeAmount = finalTuitionFee * 0.05;

    const finalBooksFee = schemeABooks - Number(listItem.tuition_fee_books);

    const amount =
      Number(finalAdimissionFee) +
      Number(finalMiscFee) +
      Number(finalTuitionFee) +
      finalTuitionFeeAmount +
      Number(finalBooksFee);

    if (Number(listItem.tuition_fee_how_many_months) > 0) {
      finalAmount = amount / Number(listItem.tuition_fee_how_many_months);
    }

    monthlyFeeDiscounted = numberWithCommasToFixed(finalAmount, 2);
    totalMonthlyFeeDiscounted = amount;
  }
  if (
    finalAmount === 0 ||
    Number(primaryDiscountData.tuitionFeePercent) === 0
  ) {
    isDiscounted = 0;
  }

  return { monthlyFeeDiscounted, totalMonthlyFeeDiscounted, isDiscounted };
};

// ACCEPT PAYMENT
// GETTING THE SELECTED SCHEME

export const getGetSectedScheme = (listOfScheme, selectItem) => {
  let result = [];

  if (listOfScheme?.count > 0) {
    result = listOfScheme?.data.filter(
      (acItem) => acItem.tuition_fee_aid === Number(selectItem)
    );
  }

  return { ...result[0] };
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
