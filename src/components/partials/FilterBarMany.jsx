import React from "react";
import { setIsFilter, setIsSearch } from "../store/StoreAction";
import { StoreContext } from "../store/StoreContext";

const FilterBar = ({
  children,
  isFetching,
  setFilterValue,
  setFilterText,
  filterValue,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const handleChange = (e) => {
    dispatch(setIsSearch(false));
    dispatch(setIsFilter(true));
    let text = e.target.options[e.target.selectedIndex].text;
    let value = e.target.value;
    setFilterValue(value);
    setFilterText(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilterValue("");
    setFilterText("");
    dispatch(setIsSearch(false));
    dispatch(setIsFilter(false));
  };

  return (
    <form
      className="search-box mb-2 relative"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="pb-2 flex items-center overflow-hidden">
        <select
          type="search"
          value={filterValue}
          onChange={(e) => handleChange(e)}
        >
          {children}
        </select>

        <button
          type="submit"
          className="pt-[10px] hover:underline ml-5 "
          disabled={isFetching}
        >
          clear
        </button>
      </div>
    </form>
  );
};

export default FilterBar;
