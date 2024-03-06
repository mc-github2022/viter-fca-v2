import { queryDataInfinite } from "@/components/helpers/queryDataInfinite.jsx";
import Loadmore from "@/components/partials/Loadmore.jsx";
import NoData from "@/components/partials/NoData.jsx";
import SearchBar from "@/components/partials/SearchBar.jsx";
import ServerError from "@/components/partials/ServerError.jsx";
import TableLoading from "@/components/partials/TableLoading.jsx";
import FetchingSpinner from "@/components/partials/spinners/FetchingSpinner.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { CiViewList } from "react-icons/ci";
import { useInView } from "react-intersection-observer";
import ModalAssessment from "./modal/ModalAssessment.jsx";

const AssessmentList = ({ setShowAssessment, setItemAssessment }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setId] = React.useState(null);
  const [dataItem, setData] = React.useState(null);
  const [isArchive, setIsArchive] = React.useState(1);
  const search = React.useRef({ value: "" });
  const [onSearch, setOnSearch] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const { ref, inView } = useInView();
  let counter = 1;

  const {
    data: result,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["assessment", onSearch, store.isSearch],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `/v2/dev-assessment/search`, // search endpoint
        `/v2/dev-assessment/page/${pageParam}`, // list endpoint
        store.isSearch, // search boolean
        { search: search.current.value }
      ),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total) {
        return lastPage.page + lastPage.count;
      }
      return;
    },
    refetchOnWindowFocus: false,
  });

  const handleAssessment = (item) => {
    setShowAssessment(true);
    setItemAssessment(item);
  };

  return (
    <>
      <SearchBar
        search={search}
        dispatch={dispatch}
        store={store}
        result={result?.pages}
        isFetching={isFetching}
        setOnSearch={setOnSearch}
        onSearch={onSearch}
      />
      <div className="main__table relative">
        {isFetching && !isFetchingNextPage && status !== "loading" && (
          <FetchingSpinner />
        )}
        <div className="table__wrapper mb-[80px] custom__scroll scroll-gutter-stable ">
          <h6>
            Count: <span>{result?.pages[0].data.length}</span>
          </h6>
          <div className="my-2 px-2 bg-primary rounded-md min-h-[100px] overflow-x-auto custom__scroll">
            <table className="table__sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Grade</th>
                  <th className="text-right pr-2">Action</th>
                </tr>
              </thead>

              <tbody>
                {result?.pages[0].success === false ? (
                  <tr className="text-center hover:bg-transparent ">
                    <td colSpan="100%" className="p-10">
                      <ModalInvalidRequestError />
                    </td>
                  </tr>
                ) : status === "loading" || result?.pages[0].count === 0 ? (
                  <tr className="text-center hover:bg-transparent ">
                    <td colSpan="100%" className="p-10">
                      {status === "loading" ? (
                        <TableLoading count={20} cols={3} />
                      ) : (
                        <NoData />
                      )}
                    </td>
                  </tr>
                ) : (
                  status !== "loading" &&
                  result?.pages[0].success === true &&
                  result?.pages.map((page, key) => (
                    <React.Fragment key={key}>
                      {page.data.map((item, key) => (
                        <tr key={key}>
                          <td>{counter++}.</td>

                          <td>{item.student_fullname}</td>
                          <td>{item.grade_level_name}</td>
                          <td>
                            <div className="flex gap-2 justify-end mr-5">
                              <button
                                type="button"
                                className="tooltip "
                                data-tooltip="View"
                                onClick={() => handleAssessment(item)}
                              >
                                <CiViewList />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))
                )}
              </tbody>
            </table>

            <div className="flex justify-between mt-10">
              <Loadmore
                fetchNextPage={fetchNextPage}
                isFetchingNextPage={isFetchingNextPage}
                hasNextPage={hasNextPage}
                result={result?.pages[0]}
                setPage={setPage}
                page={page}
                refView={ref}
              />
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssessmentList;
