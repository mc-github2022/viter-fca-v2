export const getUponEnrollment = (val) => {
  let result =
    Number(val.tuition_fee_books) +
    Number(val.tuition_fee_miscellaneous) +
    Number(val.tuition_fee_tuition) +
    Number(val.tuition_fee_admission);

  return result;
};
