import { queryData } from "./queryData";

export const queryDataInfinite = (urlSearch, urlList, isSearch, fd = {}) => {
  return queryData(
    isSearch ? urlSearch : urlList,
    isSearch ? "post" : "get",
    fd
  );
};
