export const getUponEnrollment = (val) => {
  let result =
    Number(val.tuition_fee_books) +
    Number(val.tuition_fee_miscellaneous) +
    Number(val.tuition_fee_tuition) +
    Number(val.tuition_fee_admission);

  return result;
};
export const getTotalMonthlyFee = (val) => {
  let result =
    Number(val.tuition_fee_monthly) * Number(val.tuition_fee_how_many_months);

  return result;
};
export const getTotalPayment = (val) => {
  let result = 0;
  let uponEnrollment =
    Number(val.tuition_fee_books) +
    Number(val.tuition_fee_miscellaneous) +
    Number(val.tuition_fee_tuition) +
    Number(val.tuition_fee_admission);
  let totalMonthly =
    Number(val.tuition_fee_monthly) * Number(val.tuition_fee_how_many_months);

  result = uponEnrollment + totalMonthly;
  return result;
};
