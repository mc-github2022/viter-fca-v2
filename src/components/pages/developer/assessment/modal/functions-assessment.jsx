// PRIMARY DISCOUNT

import {
  addmissionFeeId,
  booksFeeId,
  miscFeeId,
  monthlyFeeId,
  numberWithCommasToFixed,
  schemeCId,
  totalMonthlyFeeId,
  tuitionFeeId,
  uponEnrollmentFeeId,
} from "@/components/helpers/functions-general";

//  list of Primary discount for UI purpose
export const getPrimaryDiscount = (primaryDiscount, primaryDiscountId) => {
  let result = [];

  if (primaryDiscount?.count > 0) {
    result = primaryDiscount?.data.filter(
      (acItem) => acItem.discount_aid === Number(primaryDiscountId)
    );
  }

  return result;
};

//  list of Primary discount for UI purpose
export const getTotalPaymentWithComma = (listItem) => {
  const result = numberWithCommasToFixed(
    Number(listItem.tuition_fee_upon_enrollment) +
      Number(listItem.tuition_fee_total_monthly),
    2
  );
  return result;
};

// PRIMARY DISCOUNT
// Primary Discount percentage in compution
// Convert to decimal
export const getPrimaryPercentDiscount = (
  primaryDiscountData,
  primaryDiscountId
) => {
  let primaryDiscountRowData = [];
  let admissionFeePercent = 0;
  let tuitionFeePercent = 0;
  let isPrimaryStandAloneDiscount = false;

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

  const val = {
    admissionFeePercent,
    tuitionFeePercent,
    isPrimaryStandAloneDiscount,
  };

  return { ...val };
};

// PRIMARY DISCOUNT
// GET TOTAL OF DISCOUNT IN ADMISSION
export const getAdmissionDiscountedAmount = (
  primaryDiscountData,
  listItem,
  totalAdditionalDiscountData
) => {
  let result = "";
  let primaryDiscount = 0;

  if (!isNaN(primaryDiscountData.admissionFeePercent)) {
    const amount =
      Number(listItem.tuition_fee_admission) *
      Number(primaryDiscountData.admissionFeePercent);

    primaryDiscount = Number(amount);
  }

  result = Number(primaryDiscount);

  if (addmissionFeeId === totalAdditionalDiscountData?.id) {
    result =
      Number(primaryDiscount) + Number(totalAdditionalDiscountData.amount);
  }

  return result;
};

// PRIMARY DISCOUNT
// GET TOTAL OF DISCOUNT IN TUITION
export const getTuitionDiscountedAmount = (
  primaryDiscountData,
  listItem,
  additionalDiscount
) => {
  let result = 0;

  if (
    !isNaN(primaryDiscountData.tuitionFeePercent) &&
    Number(primaryDiscountData.tuitionFeePercent) > 0
  ) {
    const amount =
      Number(listItem.tuition_fee_tuition) *
      Number(primaryDiscountData.tuitionFeePercent);

    result = Number(listItem.tuition_fee_tuition) - amount;
  }

  if (!isNaN(additionalDiscount) && Number(additionalDiscount) > 0) {
    const amount =
      Number(listItem.tuition_fee_tuition) - Number(additionalDiscount);

    result = amount;
  }

  if (
    !isNaN(primaryDiscountData.tuitionFeePercent) &&
    Number(primaryDiscountData.tuitionFeePercent) > 0 &&
    !isNaN(additionalDiscount) &&
    Number(additionalDiscount) > 0
  ) {
    const primaryAmount =
      Number(listItem.tuition_fee_tuition) *
      Number(primaryDiscountData.tuitionFeePercent);
    const additionalAmount = Number(additionalDiscount);

    const amount = Number(primaryAmount) + Number(additionalAmount);

    result = Number(listItem.tuition_fee_tuition) - amount;
  }

  const finalamount = Number(result);

  return finalamount;
};

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

  if (listOfScheme?.data.length > 0) {
    listOfScheme?.data.map((listItem) => {
      // ADDMISSION FEE
      if (
        addmissionFeeId === totalAdditionalDiscountData?.id ||
        (!isNaN(primaryDiscountData.tuitionFeePercent) &&
          Number(primaryDiscountData.tuitionFeePercent) > 0)
      ) {
        isHaveDiscountAddmission = true;
        addmissionAmount = getAdmissionDiscountedAmount(
          primaryDiscountData,
          listItem,
          totalAdditionalDiscountData
        );

        if (addmissionAmount < 0) {
          addmissionAmount = 0;
        }
      }
      // MISC FEE
      if (miscFeeId === totalAdditionalDiscountData?.id) {
        isHaveDiscountMisc = true;
        miscAmount = 0;
        if (miscAmount < 0) {
          miscAmount = 0;
        }
      }
      // TUITION FEE
      if (
        tuitionFeeId === totalAdditionalDiscountData?.id &&
        (Number(primaryDiscountData?.tuitionFeePercent) > 0 ||
          Number(totalAdditionalDiscountData?.percent) > 0 ||
          Number(totalAdditionalDiscountData?.amount) > 0)
      ) {
        isHaveDiscountTuition = true;
        tuitionAmount = getTuitionDiscountedAmount(
          primaryDiscountData,
          listItem,
          totalAdditionalDiscountData.amount
        );

        if (tuitionAmount < 0) {
          tuitionAmount = 0;
        }
      }
      // BOOKS FEE
      if (booksFeeId === totalAdditionalDiscountData?.id) {
        isHaveDiscountBooks = true;
        booksAmount = 0;

        if (booksAmount < 0) {
          booksAmount = 0;
        }
      }
      // UPON ENROLLMENT
      if (uponEnrollmentFeeId === totalAdditionalDiscountData?.id) {
        isHaveDiscountUponEronllment = true;
        uponEronllmentAmount = 0;

        if (uponEronllmentAmount < 0) {
          uponEronllmentAmount = 0;
        }
      }
      // MONTHLY
      if (monthlyFeeId === totalAdditionalDiscountData?.id) {
        isHaveDiscountMonthly = true;
        monthlyAmount = 0;

        if (monthlyAmount < 0) {
          monthlyAmount = 0;
        }
      }
      // TOTAL MONTHLY
      if (totalMonthlyFeeId === totalAdditionalDiscountData?.id) {
        isHaveDiscountTotalMonthly = true;
        totalMonthlyAmount = 0;

        if (totalMonthlyAmount < 0) {
          totalMonthlyAmount = 0;
        }
      }
      result.push({
        tuition_fee_aid: listItem.tuition_fee_aid,
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

// PRIMARY DISCOUNT
// GET TOTAL OF UPON ENROLLMENT
export const getUponEnrollmentDiscountedAmount = (
  primaryDiscountData,
  listItem,
  additionalDiscount
) => {
  let result = "";

  if (
    (!isNaN(primaryDiscountData.tuitionFeePercent) ||
      !isNaN(primaryDiscountData.admissionFeePercent)) &&
    (Number(primaryDiscountData.tuitionFeePercent) > 0 ||
      Number(primaryDiscountData.admissionFeePercent) > 0)
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

  if (
    Number(additionalDiscount) > 0 &&
    (!isNaN(primaryDiscountData.tuitionFeePercent) ||
      !isNaN(primaryDiscountData.admissionFeePercent)) &&
    (Number(primaryDiscountData.tuitionFeePercent) > 0 ||
      Number(primaryDiscountData.admissionFeePercent) > 0)
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
      Number(listItem.tuition_fee_books) -
      Number(additionalDiscount);

    result = amount;
  }

  if (
    Number(additionalDiscount) > 0 &&
    (Number(primaryDiscountData.tuitionFeePercent) === 0 ||
      Number(primaryDiscountData.admissionFeePercent) === 0)
  ) {
    const discountedTuitionFeeAmount =
      Number(listItem.tuition_fee_tuition) - Number(additionalDiscount);

    const amount =
      Number(listItem.tuition_fee_admission) +
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
  uponEnrollment,
  totalMonthly
) => {
  const amount = Number(uponEnrollment) + Number(totalMonthly);

  const result = numberWithCommasToFixed(amount, 2);

  return result;
};
// // PRIMARY DISCOUNT
// // GET TOTAL OF UPON ENROLLMENT
// export const getTotalPaymentDiscountedAmount = (
//   listOfScheme,
//   primaryDiscountData,
//   listItem
// ) => {
//   let result = 0;
//   let newListOfSchemeData = [];
//   let amount =
//     Number(listItem.tuition_fee_upon_enrollment) +
//     Number(listItem.tuition_fee_total_monthly);

//   if (listOfScheme?.count > 0) {
//     newListOfSchemeData = listOfScheme?.data.filter(
//       (acItem) => acItem.tuition_fee_monthly === ""
//     );
//   }

//   if (Number(primaryDiscountData.tuitionFeePercent) > 0) {
//     const uponEnrollmentDiscountedAmount = getUponEnrollmentDiscountedAmount(
//       primaryDiscountData,
//       listItem
//     );
//     const monthlyFeeDiscountedAmount = getMonthlyFeeDiscountedAmount(
//       listOfScheme,
//       primaryDiscountData,
//       listItem
//     ).totalMonthlyFeeDiscounted;

//     amount =
//       Number(uponEnrollmentDiscountedAmount) +
//       Number(monthlyFeeDiscountedAmount);
//   }

//   result = numberWithCommasToFixed(amount, 2);

//   return result;
// };

// PRIMARY DISCOUNT
// GET TOTAL OF MONTHLY FEE
export const getMonthlyFeeDiscountedAmount = (
  listOfScheme,
  primaryDiscountData,
  listItem,
  totalAdditionalDiscountData
) => {
  let monthlyFeeDiscounted = "";
  let totalMonthlyFeeDiscounted = "";
  let newListOfSchemeData = [];
  let schemeBData = [];
  let schemeADiscountedAdmissionFeeAmount = "";
  let schemeADiscountedTuitionFeeAmount = "";
  let schemeAMisc = "";
  let schemeABooks = "";
  let finalAmount = 0;
  let isDiscounted = 1;
  let isMultifySchemeB = 0.05;

  let totalAdditionalDiscount = getAdditonalDiscount(
    totalAdditionalDiscountData,
    listItem
  );

  if (listOfScheme?.count > 0) {
    newListOfSchemeData = listOfScheme?.data.filter(
      (acItem) => acItem.tuition_fee_monthly === ""
    );
  }

  if (listOfScheme?.count > 0) {
    schemeBData = listOfScheme?.data.filter(
      (acItem) => Number(acItem.tuition_fee_scheme_id) === Number(schemeCId)
    );
    if (
      schemeBData?.length > 0 &&
      schemeBData[0]?.tuition_fee_scheme_id === listItem.tuition_fee_scheme_id
    ) {
      isMultifySchemeB = 0.1;
    }
  }

  // for primary discount only
  if (
    Number(totalAdditionalDiscount?.amount) === 0 &&
    (Number(primaryDiscountData?.tuitionFeePercent) > 0 ||
      Number(primaryDiscountData?.admissionFeePercent) > 0) &&
    (!isNaN(primaryDiscountData?.tuitionFeePercent) ||
      !isNaN(primaryDiscountData?.admissionFeePercent))
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

    const finalTuitionFeeAmount = finalTuitionFee * Number(isMultifySchemeB);

    const finalBooksFee = schemeABooks - Number(listItem.tuition_fee_books);

    const amount =
      Number(finalAdimissionFee) +
      Number(finalMiscFee) +
      Number(finalTuitionFee) +
      finalTuitionFeeAmount +
      Number(finalBooksFee);

    if (Number(listItem.tuition_fee_how_many_months) > 0) {
      finalAmount =
        Number(amount) / Number(listItem.tuition_fee_how_many_months);
    }

    monthlyFeeDiscounted = numberWithCommasToFixed(finalAmount, 2);
    totalMonthlyFeeDiscounted = amount;
  }

  // for additional discount only
  if (
    Number(totalAdditionalDiscount?.amount) > 0 &&
    (Number(primaryDiscountData?.tuitionFeePercent) === 0 ||
      Number(primaryDiscountData?.admissionFeePercent) === 0 ||
      isNaN(primaryDiscountData?.tuitionFeePercent) ||
      isNaN(primaryDiscountData?.admissionFeePercent))
  ) {
    if (newListOfSchemeData?.length > 0) {
      schemeADiscountedAdmissionFeeAmount = Number(
        newListOfSchemeData[0]?.tuition_fee_admission
      );

      schemeADiscountedTuitionFeeAmount = Number(
        newListOfSchemeData[0]?.tuition_fee_tuition -
          getAdditonalDiscount(
            totalAdditionalDiscountData,
            newListOfSchemeData[0]
          )?.amount
      );

      schemeAMisc = Number(newListOfSchemeData[0]?.tuition_fee_miscellaneous);
      schemeABooks = Number(newListOfSchemeData[0]?.tuition_fee_books);
    }

    const discountedAdmissionFeeAmount = Number(listItem.tuition_fee_admission);

    const discountedTuitionFeeAmount =
      Number(listItem.tuition_fee_tuition) -
      Number(totalAdditionalDiscount?.amount);

    // COMPUTION START HERE
    const finalAdimissionFee =
      schemeADiscountedAdmissionFeeAmount - discountedAdmissionFeeAmount;

    const finalMiscFee =
      schemeAMisc - Number(listItem.tuition_fee_miscellaneous);

    const finalTuitionFee =
      schemeADiscountedTuitionFeeAmount - discountedTuitionFeeAmount;

    const finalTuitionFeeAmount = finalTuitionFee * Number(isMultifySchemeB);

    const finalBooksFee = schemeABooks - Number(listItem.tuition_fee_books);

    const amount =
      Number(finalAdimissionFee) +
      Number(finalMiscFee) +
      Number(finalTuitionFee) +
      finalTuitionFeeAmount +
      Number(finalBooksFee);

    if (Number(listItem.tuition_fee_how_many_months) > 0) {
      finalAmount =
        Number(amount) / Number(listItem.tuition_fee_how_many_months);
    }

    monthlyFeeDiscounted = numberWithCommasToFixed(finalAmount, 2);
    totalMonthlyFeeDiscounted = amount;
  }

  // for primary and additional discount
  if (
    Number(totalAdditionalDiscount?.amount) > 0 &&
    (Number(primaryDiscountData?.tuitionFeePercent) > 0 ||
      Number(primaryDiscountData?.admissionFeePercent) > 0) &&
    (!isNaN(primaryDiscountData?.tuitionFeePercent) ||
      !isNaN(primaryDiscountData?.admissionFeePercent))
  ) {
    if (newListOfSchemeData?.length > 0) {
      schemeADiscountedAdmissionFeeAmount =
        Number(newListOfSchemeData[0]?.tuition_fee_admission) *
        Number(primaryDiscountData.admissionFeePercent);

      schemeADiscountedTuitionFeeAmount =
        Number(newListOfSchemeData[0]?.tuition_fee_tuition) *
          Number(primaryDiscountData.tuitionFeePercent) -
        getAdditonalDiscount(
          totalAdditionalDiscountData,
          newListOfSchemeData[0]
        )?.amount;

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

    const finalTuitionFeeAmount = finalTuitionFee * Number(isMultifySchemeB);

    const finalBooksFee = schemeABooks - Number(listItem.tuition_fee_books);

    const amount =
      Number(finalAdimissionFee) +
      Number(finalMiscFee) +
      Number(finalTuitionFee) +
      finalTuitionFeeAmount +
      Number(finalBooksFee);

    if (Number(listItem.tuition_fee_how_many_months) > 0) {
      finalAmount =
        Number(amount) / Number(listItem.tuition_fee_how_many_months);
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
  if (Number(totalAdditionalDiscount?.amount) > 0) {
    isDiscounted = 1;
  }

  return { monthlyFeeDiscounted, totalMonthlyFeeDiscounted, isDiscounted };
};

// ACCEPT PAYMENT
// GETTING THE SELECTED SCHEME
export const getSectedScheme = (listOfScheme, selectItem) => {
  let result = [];

  if (listOfScheme?.count > 0) {
    result = listOfScheme?.data.filter(
      (acItem) => acItem.tuition_fee_aid === Number(selectItem)
    );
  }

  return { ...result[0] };
};

// ACCEPT PAYMENT
// GETTING THE SELECTED SCHEME
export const getAdditonalDiscount = (totalAdditionalDiscount, listItem) => {
  let monthly = 0;
  let amount = 0;

  if (Number(totalAdditionalDiscount?.percent) > 0) {
    amount =
      Number(listItem.tuition_fee_tuition) *
      Number(totalAdditionalDiscount?.percent);

    if (Number(listItem.tuition_fee_how_many_months) > 0) {
      monthly = Number(amount) / Number(listItem.tuition_fee_how_many_months);
    }
  }

  if (Number(totalAdditionalDiscount?.amount) > 0) {
    amount = Number(totalAdditionalDiscount?.amount);

    if (Number(listItem.tuition_fee_how_many_months) > 0) {
      monthly = Number(amount) / Number(listItem.tuition_fee_how_many_months);
    }
  }

  return { monthly, amount };
};

// Notify Parent
// GETTING THE SELECTED SCHEME
export const getSelectedRate = (schemeByGrade, categoryId) => {
  let result = [];

  if (schemeByGrade?.count > 0) {
    result = schemeByGrade?.data.filter(
      (acItem) => acItem.tuition_category_aid === Number(categoryId)
    );
  }

  return { ...result[0] };
};

// NOTIFY PARENT AND ACCEPT PAYMENT
// INITIAL VALUES THAT NEEDS IN NOTFY AND ACCEPT PAYMENT
export const getNotifyAcceptParentInitVal = (
  tuitionItem,
  primaryDiscountId,
  additionalDiscountId,
  item,
  assessmentRemarks
) => {
  const result = {
    ...tuitionItem,
    primaryDiscountId,
    additionalDiscountId,
    students_aid: item.students_aid,
    ...item,
    assessmentRemarks,
  };

  return result;
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

// // ADDITIONAL DISCOUNT
// //  list of Additional discount for UI purpose
// export const getTotalAdditionalDiscount = (listOfScheme, additionalDisc) => {
//   let result = [];
//   let tuitionFeeSchemeA = 0;

//   if (additionalDisc?.length > 0) {
//     // amount additional discount
//     tuitionFeeSchemeA = Number(additionalDisc[0]?.discount_additional_amount);

//     // percent additional discount
//     if (
//       listOfScheme?.count > 0 &&
//       Number(additionalDisc[0]?.discount_additional_amount) === 0
//     ) {
//       result = listOfScheme?.data.filter(
//         (item) => item.tuition_fee_monthly === ""
//       );
//       if (result?.length > 0) {
//         const percent =
//           Number(additionalDisc[0]?.discount_additional_percent) / 100;
//         tuitionFeeSchemeA =
//           Number(result[0]?.tuition_fee_tuition) * Number(percent);
//       }
//     }

//     // empty amount and discount additional discount
//     if (
//       listOfScheme?.count > 0 &&
//       Number(additionalDisc[0]?.discount_additional_amount) === 0 &&
//       Number(additionalDisc[0]?.discount_additional_percent) === 0
//     ) {
//       result = listOfScheme?.data.filter(
//         (item) => item.tuition_fee_monthly === ""
//       );
//       if (result?.length > 0) {
//         tuitionFeeSchemeA = (Number(result[0]?.tuition_fee_tuition) / 9) * 2;
//       }
//     }
//   }

//   return tuitionFeeSchemeA;
// };

// ADDITIONAL DISCOUNT
//  list of Additional discount for UI purpose
export const getTotalAdditionalDiscount = (
  primaryDiscountData,
  listOfScheme,
  additionalDisc
) => {
  let result = [];
  let val = {};
  let percent = 0;
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
    amount = Number(additionalDisc[0]?.discount_additional_amount);

    isAdditionalStandAloneDiscount =
      additionalDisc[0]?.discount_additional_is_stand_alone_discount === 1
        ? true
        : false;
    // percent additional discount
    if (
      listOfScheme?.count > 0 &&
      Number(additionalDisc[0]?.discount_additional_amount) === 0
    ) {
      percent = Number(additionalDisc[0]?.discount_additional_percent) / 100;
    }

    // empty amount and discount additional discount
    if (
      listOfScheme?.count > 0 &&
      Number(additionalDisc[0]?.discount_additional_amount) === 0 &&
      Number(additionalDisc[0]?.discount_additional_percent) === 0
    ) {
      result = listOfScheme?.data.filter(
        (item) => item.tuition_fee_monthly === ""
      );
    }

    if (result?.length > 0) {
      // IF PRIMARY TUITION PERCENT IS NEGATIVE OR ZERO
      // OR IF DONT HAVE PRIMARY DISCOUNT
      const primaryAmount =
        Number(result[0]?.tuition_fee_tuition) * Number(primaryDiscountData);

      const newTuitionFeeAmount =
        Number(result[0]?.tuition_fee_tuition) - Number(primaryAmount);

      amount = (Number(newTuitionFeeAmount) / 9) * 2;
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

// if use filter
export const handleAssessmentRemarks = (e, setAssessmentRemarks) => {
  setAssessmentRemarks(e.target.value);
};
