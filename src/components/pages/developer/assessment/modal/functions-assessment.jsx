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

export const getGetPrimaryDiscountItem = (
  primaryDiscount,
  primaryDiscountId
) => {
  let result = [];

  if (primaryDiscount?.count > 0) {
    const val = primaryDiscount?.data.filter(
      (acItem) => acItem.discount_aid === Number(primaryDiscountId)
    );
    result = val;
  }

  return result;
};
