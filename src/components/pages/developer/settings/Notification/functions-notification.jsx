export const getNotificationCountRecord = (notification) => {
  let active = 0;
  let inactive = 0;

  const resultActive = notification?.data.filter(
    (acItem) => acItem.notification_active === 1
  );
  active = resultActive?.length;
  const resultInactive = notification?.data.filter(
    (inacItem) => inacItem.notification_active === 0
  );
  inactive = resultInactive?.length;

  return { active, inactive };
};
