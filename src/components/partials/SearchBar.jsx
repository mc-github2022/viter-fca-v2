import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ search, dispatch, store, result, isFetching }) => {
  // const handleChange = (e) => {
  //   if (e.target.value === "") {
  //     dispatch(setIsSearch(false));
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let val = search.current.value;

  //   if (val === " " || val === "") {
  //     dispatch(setIsSearch(false));
  //     dispatch(setError(true));
  //     dispatch(setMessage("Search keyword cannot be space only or blank."));
  //   } else {
  //     dispatch(setIsSearch(true));
  //   }
  // };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="search-box mb-2 relative"
    >
      <div className="pb-2 flex items-center overflow-hidden">
        <input
          type="search"
          placeholder="Search here..."
          className="searchbar rounded-tr-none rounded-br-none text-xs border-r-0 py-[0px] h-[35px]"
          // ref={search}
          // onChange={(e) => handleChange(e)}
        />
        <button
          type="submit"
          className="text-[16px] flex justify-center items-center w-[40px] h-[35px] py-[5px] rounded-tl-none rounded-bl-none rounded-tr-md rounded-br-md border-l-0 bg-accent text-white border-primary border hover:bg-accentDark"
          disabled={isFetching}
        >
          <FaSearch />
        </button>
      </div>
      {/* {store.isSearch && ( */}
      <p className="absolute top-[9px] right-20 text-xs">
        Result: {isFetching ? "Searching..." : result?.[0].count}
      </p>
      {/* )} */}
    </form>
  );
};

export default SearchBar;
