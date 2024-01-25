export const getDepartmentCountRecord = (department) => {
  let active = 0;
  let inactive = 0;

  const resultActive = department?.data.filter(
    (acItem) => acItem.department_active === 1
  );
  active = resultActive?.length;
  const resultInactive = department?.data.filter(
    (inacItem) => inacItem.department_is_active === 0
  );
  inactive = resultInactive?.length;

  return { active, inactive };
};
