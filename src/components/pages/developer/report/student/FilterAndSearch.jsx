import FilterSchooYearBar from "@/components/partials/FilterSchooYearBar";
import SearchBar from "@/components/partials/SearchBar";

const FilterAndSearch = ({
  search,
  dispatch,
  store,
  result,
  isFetching,
  setOnSearch,
  onSearch,
  setFilterValue,
  setFilterText,
  filterValue,
  filterText,
}) => {
  return (
    <>
      <div className="grid grid-cols-[10rem,1fr] gap-5 items-center ">
        <div className="relative">
          <FilterSchooYearBar
            setFilterValue={setFilterValue}
            setFilterText={setFilterText}
            filterValue={filterValue}
            filterText={filterText}
          />
        </div>

        <SearchBar
          search={search}
          dispatch={dispatch}
          store={store}
          result={result?.pages}
          isFetching={isFetching}
          setOnSearch={setOnSearch}
          onSearch={onSearch}
        />
      </div>
    </>
  );
};

export default FilterAndSearch;
