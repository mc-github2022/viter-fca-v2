import { useQuery } from "@tanstack/react-query";
import { queryData } from "../helpers/queryData";

// Queries hook
const useQueryData = (
  endpoint,
  method,
  key = "",
  fd = {},
  id = null,
  item = null,
  isRefresh
) => {
  return useQuery({
    queryKey: [key, id, item],
    queryFn: () => queryData(endpoint, method, fd),
    // retry: false,
    refetchOnWindowFocus: isRefresh,
    // cacheTime: 200,
  });
};

export default useQueryData;
