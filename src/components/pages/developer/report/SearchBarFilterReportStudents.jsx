import React from "react";
import { FaSearch } from "react-icons/fa";
import { setError, setIsSearch, setMessage } from "../../../store/StoreAction";

const SearchBarFilterReportStudents = ({
  search,
  dispatch,
  store,
  result,
  isFetching,
  setOnSearch,
  onSearch,
}) => {
  const handleChange = (e) => {
    if (e.target.value === "") {
      setOnSearch(!onSearch);
      dispatch(setIsSearch(false));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let val = search.current.value;

    if (val === " " || val === "") {
      setOnSearch(!onSearch);
      dispatch(setIsSearch(false));
      dispatch(setError(true));
      dispatch(setMessage("Search keyword cannot be space only or blank."));
    } else {
      setOnSearch(!onSearch);
      dispatch(setIsSearch(true));
    }
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="search-box relative md:w-full"
    >
      <div className="flex items-center overflow-hidden">
        <input
          type="search"
          placeholder="Search here..."
          className="searchbar rounded-tr-none rounded-br-none text-xs border-r-0 py-[0px] h-[35px]"
          ref={search}
          onChange={(e) => handleChange(e)}
        />
        <button
          type="submit"
          className="text-[16px] flex justify-center items-center w-[40px] h-[37px] py-[5px] rounded-tl-none rounded-bl-none rounded-tr-md rounded-br-md border-l-0 bg-accent text-white border-primary border hover:bg-accentDark"
          disabled={isFetching}
        >
          <FaSearch />
        </button>
      </div>
      {store.isSearch && (
        <p className="absolute top-[9px] right-20 text-xs">
          Result: {isFetching ? "Searching..." : result?.[0].count}
        </p>
      )}
    </form>
  );
};

export default SearchBarFilterReportStudents;
