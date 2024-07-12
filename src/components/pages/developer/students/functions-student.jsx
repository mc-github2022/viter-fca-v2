import { queryData } from "../../../helpers/queryData";

export const getMonth = () => {
  let monthStart = 0;
  let monthCount = 12;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let list = [];

  for (let i = 0; i < monthCount; i++) {
    monthStart++;
    list.push({
      month_aid: Number(monthStart),
      month_name: `${months[Number(monthStart) - 1]}`,
    });
  }
  return list;
};

export const getMonthName = (month) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const name = month === "" ? "" : `${months[Number(month) - 1]}`;

  return name;
};

export const handleStaffSearch = async (
  e,
  setSearch,
  setIsSearch,
  setLoading,
  endpoint,
  setData,
  setId,
  value
) => {
  if (e.target.value.trim() === "") {
    setSearch("");
    setId("");
    setIsSearch(false);
    return;
  }
  setLoading(true);
  setIsSearch(true);
  setSearch(e.target.value);

  const data = await queryData(endpoint, "post", { search: value });

  // console.log(data);

  if (typeof data === "undefined") {
    setLoading(true);
    return;
  }

  if (!data.success) {
    setLoading(true);
    setData([]);
    setIsSearch(false);
    return;
  }

  if (data.success) {
    setData(data.data);
    setLoading(false);
  }
};

export const handleClick = (name, id, setSearch, setIsSearch, setId) => {
  setSearch(name);
  setIsSearch(false);
  setId(id);
};

export const getStudentCountRecord = (client) => {
  let active = 0;
  let inactive = 0;

  const resultActive = client?.data.filter(
    (acItem) => acItem.client_is_active === 1
  );
  active = resultActive?.length;

  const resultInactive = client?.data.filter(
    (inacItem) => inacItem.client_is_active === 0
  );
  inactive = resultInactive?.length;

  return { active, inactive };
};

export const getStudentByCurrentSyId = (studentByCurrentSyId) => {
  let result = [];

  if (studentByCurrentSyId?.count > 0) {
    result = studentByCurrentSyId?.data[0];
  }

  return result;
};
