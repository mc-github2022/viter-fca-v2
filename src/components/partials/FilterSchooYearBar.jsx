import React from "react";
import useQueryData from "../custom-hooks/useQueryData";
import { setIsFilter, setIsSearch } from "../store/StoreAction";
import { StoreContext } from "../store/StoreContext";
import TableSpinner from "./spinners/TableSpinner";
import { getLastAndCurrentSchoolYear } from "../helpers/functions-general";

const FilterSchooYearBar = ({
  setFilterValue,
  setFilterText,
  filterValue,
  filterText,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const {
    isLoading,
    isFetching,
    error,
    data: schoolYear,
  } = useQueryData(
    "/v2/dev-school-year", // endpoint
    "get", // method
    "school-year" // key
  );

  const handleClick = () => {
    dispatch(setIsFilter(true));
  };

  const handleGetDateVal = (val) => {
    dispatch(setIsFilter(false));
    setFilterValue(val);
    setFilterText(val);
  };

  const handleChange = (e) => {
    dispatch(setIsSearch(false));
    let text = e.target.options[e.target.selectedIndex].text;
    let value = e.target.value;
    setFilterValue(value);
    setFilterText(text);
  };

  return (
    <div className="pb-2 items-center overflow-hidden mb-2">
      <input
        type="search"
        className="text-[12px]"
        value={filterText}
        onChange={(e) => handleChange(e)}
        onClick={handleClick}
      />
      {store.isFilter && (
        <ul className="absolute z-50 max-h-[7rem] overflow-y-auto top-8 w-full bg-primary shadow-3xl rounded-md h-[30rem] border border-t-0  ">
          {isLoading ? (
            <li className=" p-2 w-full text-center bg-white focus:bg-gray-200 border-b border-white">
              <TableSpinner />
            </li>
          ) : (
            <>
              <button
                onClick={() => handleGetDateVal("All")}
                type="button"
                className="text-left pl-2 py-[1px] w-full bg-primary hover:bg-gray-200 focus:bg-gray-200 cursor-pointer duration-200 text-[12px]"
              >
                All
              </button>
              <button
                onClick={() => handleGetDateVal("2023-2024")}
                type="button"
                className="text-left pl-2 py-[1px] w-full bg-primary hover:bg-gray-200 focus:bg-gray-200 cursor-pointer duration-200 text-[12px]"
              >
                {getLastAndCurrentSchoolYear(schoolYear)?.currentSY}
              </button>

              <button
                onClick={() => handleGetDateVal("2024-2025")}
                type="button"
                className="text-left pl-2 py-[1px] w-full bg-primary hover:bg-gray-200 focus:bg-gray-200 cursor-pointer duration-200 text-[12px]"
              >
                2024-2025
              </button>

              <button className="px-2 text-left py-[1px] w-full bg-primary hover:bg-gray-200 focus:bg-gray-200 cursor-pointer duration-200">
                <select
                  className="!border-gray-200 text-[12px]"
                  onChange={(e) => handleChange(e)}
                >
                  {error ? (
                    <option hidden disabled>
                      Error
                    </option>
                  ) : (
                    <option hidden>
                      {isFetching || isLoading ? "...Loading" : "School Year"}
                    </option>
                  )}

                  {schoolYear?.count > 0 ? (
                    <>
                      {schoolYear?.data.map((item, key) => {
                        return (
                          <option key={key} value={item.school_year}>
                            {item.school_year}
                          </option>
                        );
                      })}
                    </>
                  ) : (
                    <option disabled>No Data</option>
                  )}
                </select>
              </button>
            </>
          )}
        </ul>
      )}
    </div>
  );
};

export default FilterSchooYearBar;
