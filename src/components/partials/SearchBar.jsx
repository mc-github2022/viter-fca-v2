import React from "react";
import { FaSearch } from "react-icons/fa";
import { StoreContext } from "../store/StoreContext";
import { setError, setIsSearch, setMessage } from "../store/StoreAction";

const SearchBar = () => {
  return (
    <form className="search-box">
      <div className="pb-2 flex items-center relative">
        <input
          type="search"
          placeholder="Search here..."
          className="rounded-tr-none rounded-br-none border  text-sm py-2 "
        />
        <button
          type="submit"
          className="rounded text-[16px] p-2.5 border border-accent rounded-tl-none rounded-bl-none border-l-0 bg-accent text-white hover:bg-accentDark hover:border-accentDark"
        >
          <FaSearch className="bg-gray" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
