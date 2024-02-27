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
export const getGetPrimaryDiscountData = (
  primaryDiscount,
  primaryDiscountId
) => {
  let result = [];
  let admissionFee = 0;
  let tuitionFee = 0;

  if (primaryDiscount?.count > 0) {
    const val = primaryDiscount?.data.filter(
      (acItem) => acItem.discount_aid === Number(primaryDiscountId)
    );
    result = val;
  }

  if (result?.length > 0) {
    admissionFee = Number(result[0]?.discount_admission_fee) / 100;
    tuitionFee = Number(result[0]?.discount_tuition_fee) / 100;
  }

  return { admissionFee, tuitionFee };
};

// PRIMARY DISCOUNT
// getting the Upon Enrollment fee
export const getTotalUponEnrollmentWithDiscount = (
  primaryDiscount,
  listItem
) => {
  let finalUponEnrollment = numberWithCommasToFixed(
    Number(listItem.tuition_fee_upon_enrollment) +
      Number(listItem.tuition_fee_total_monthly),
    2
  );
  let finalAdmission = 0;
  let finalTuition = 0;

  if (typeof primaryDiscount.tuitionFee !== "undefined") {
    // adimmision discount
    const admission =
      Number(listItem.tuition_fee_admission) *
      Number(primaryDiscount.admissionFee);

    // tuition discount
    const tuition =
      Number(listItem.tuition_fee_tuition) * Number(primaryDiscount.tuitionFee);

    // final adimmision discount
    finalAdmission = Number(listItem.tuition_fee_admission) - Number(admission);

    // final tuition discount
    finalTuition = Number(listItem.tuition_fee_tuition) - Number(tuition);

    const totalDiscount = finalAdmission + finalTuition;

    finalUponEnrollment = numberWithCommasToFixed(
      listItem.tuition_fee_upon_enrollment - totalDiscount,
      2
    );
  }

  return { finalUponEnrollment, finalAdmission, finalTuition };
};

// PRIMARY DISCOUNT
// getting the Upon Enrollment fee
export const getFinalMonthlyFee = (
  listOfScheme,
  listItem,
  primaryDiscountData
) => {
  let result = [];
  let admissionFee = 0;
  let miscFee = 0;
  let tuitionDiscount = 0;
  let tuitionFee = 0;
  let booksFee = 0;
  let finalAmount = numberWithCommasToFixed(listItem.tuition_fee_monthly, 2);
  let primaryTuitionDiscount = primaryDiscountData.tuitionFee;

  if (listOfScheme?.count > 0) {
    const val = listOfScheme?.data.filter(
      (acItem) => Number(acItem.tuition_fee_monthly) === 0
    );
    result = val;
  }

  if (typeof primaryTuitionDiscount !== "undefined") {
    if (result?.length > 0) {
      // SCHEME A - scheme x

      const schemeAAdmissionDiscount = getTotalUponEnrollmentWithDiscount(
        primaryDiscountData,
        result[0]
      ).finalAdmission;

      const schemeXAdmissionDiscount = getTotalUponEnrollmentWithDiscount(
        primaryDiscountData,
        listItem
      ).finalAdmission;

      const schemeATuitionDiscount = getTotalUponEnrollmentWithDiscount(
        primaryDiscountData,
        result[0]
      ).finalTuition;

      const schemeXTuitionDiscount = getTotalUponEnrollmentWithDiscount(
        primaryDiscountData,
        listItem
      ).finalTuition;

      admissionFee =
        Number(schemeAAdmissionDiscount) - Number(schemeXAdmissionDiscount);

      miscFee =
        Number(result[0]?.tuition_fee_admission) -
        Number(listItem.tuition_fee_admission);

      tuitionDiscount =
        Number(schemeATuitionDiscount) - Number(schemeXTuitionDiscount);

      tuitionFee = Number(tuitionDiscount) * 0.05;

      booksFee =
        Number(result[0]?.tuition_fee_books) -
        Number(listItem.tuition_fee_books);

      const totalAmount =
        admissionFee + miscFee + tuitionDiscount + tuitionFee + booksFee;

      finalAmount = numberWithCommasToFixed(
        totalAmount / Number(listItem.tuition_fee_how_many_months),
        2
      );

      console.log(
        "123",
        Number(schemeATuitionDiscount),
        Number(schemeXTuitionDiscount),
        Number(schemeAAdmissionDiscount),
        Number(schemeXAdmissionDiscount)
      );
    }
  }

  return finalAmount;
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
