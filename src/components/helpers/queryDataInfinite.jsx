import { queryData } from "./queryData";

export const queryDataInfinite = (
  urlSearch,
  urlList,
  isSearch,
  fd = {},
  method = "get"
) => {
  return queryData(
    isSearch ? urlSearch : urlList,
    isSearch ? "post" : method,
    fd
  );
};
