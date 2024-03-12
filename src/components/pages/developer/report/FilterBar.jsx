import useQueryData from "@/components/custom-hooks/useQueryData";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const FilterBar = ({ error, isFetching, isLoading, schoolYear }) => {
  const [onFocus, setOnFocus] = React.useState(false);
  const [gender, setGender] = React.useState("");
  const refFilter = React.useRef();

  const { data: gradeLevel } = useQueryData(
    "/v2/dev-grade-level", // endpoint
    "get", // method
    "grade-level" // key
  );

  const getCurrentSchoolYear =
    schoolYear?.count > 0 &&
    schoolYear?.data.filter((item) => item.school_year_is_active === 1);

  const handleSelectGender = (e) => {
    // if (gender !== "" && gender === "m") {
    //   setGender("");
    //   return;
    // }
    // if (gender !== "" && gender === "f") {
    //   setGender("");
    //   return;
    // }

    if (gender === "m" && e.target.value === "m") {
      setGender("");
      return;
    }

    // if (gender !== "" && gender === "m" && e.target.value === "f") {
    //   setGender(e.target.value);
    //   return;
    // }
    // if (gender !== "" && e.target.value === "f" && e.target.value !== "m") {
    //   setGender("");
    //   return;
    // }

    setGender(e.target.value);
  };

  const handleSelectLevel = (e) => {
    console.log(e.target.value);
  };

  const handleSelectLrn = (e) => {
    console.log(e.target.value);
  };

  const handleSelectBirthDate = (e) => {
    console.log(e.target.value);
  };

  const handleSelectSy = (e) => {
    console.log(e.target.value);
  };

  console.log(gender);

  const handleClickOutside = (e) => {
    if (
      refFilter.current !== undefined &&
      refFilter.current !== null &&
      !refFilter.current.contains(e.target)
    ) {
      setOnFocus(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <form
      action=""
      className="w-1/3"
      onSubmit={(e) => e.preventDefault()}
      ref={refFilter}
    >
      <div className="relative w-full flex items-center gap-2">
        <select
          className="!border-gray-200 text-[12px] w-1/2"
          onChange={(e) => handleSelectSy(e)}
        >
          {error ? (
            <option hidden disabled>
              Error
            </option>
          ) : (
            (isFetching || isLoading) && <option hidden>Loading...</option>
          )}

          {schoolYear?.count > 0 ? (
            schoolYear?.data.map((item, key) => {
              return (
                <option key={key} value={item.school_year_aid}>
                  {item.school_year}
                </option>
              );
            })
          ) : (
            <option disabled>No Data</option>
          )}
        </select>

        <div className="relative w-1/2">
          <input
            type="text"
            className="text-[12px] caret-transparent"
            onFocus={() => setOnFocus(true)}
            value="All"
            onChange={(e) => e}
          />
          <span className="absolute right-2 top-1/2 -translate-y-1/2">
            <IoIosArrowDown className="h-4 w-4 fill-gray-700" />
          </span>

          {onFocus && (
            <ul className="absolute z-50 h-48 overflow-y-auto w-full bg-white border border-gray-200 rounded-md py-3 px-2">
              <div className="flex flex-wrap w-full items-center">
                <span className=" text-xs mb-1 text-accent">Gender</span>
                <span className="flex items-center gap-2 w-full mb-2 outline-none">
                  <button
                    type="button"
                    className="text-xs py-1 border rounded-md w-1/2 hover:bg-gray-200"
                    value="m"
                    onClick={(e) => handleSelectGender(e)}
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    className="text-xs py-1 border rounded-md w-1/2 hover:bg-gray-200"
                    value="f"
                    onClick={(e) => handleSelectGender(e)}
                  >
                    Female
                  </button>
                </span>

                <span className=" text-xs mb-1 text-accent">Level</span>
                <button className="w-full mb-2 outline-none">
                  <select
                    className="!border-gray-200 text-[12px]"
                    onChange={(e) => handleSelectLevel(e)}
                  >
                    <option value="all">All</option>

                    {error ? (
                      <option hidden disabled>
                        Error
                      </option>
                    ) : (
                      <option hidden>
                        {isFetching || isLoading ? "...Loading" : "Level"}
                      </option>
                    )}

                    {gradeLevel?.count > 0 ? (
                      <>
                        {gradeLevel?.data.map((item, key) => {
                          return (
                            <option key={key} value={item.grade_level_aid}>
                              {item.grade_level_name}
                            </option>
                          );
                        })}
                      </>
                    ) : (
                      <option disabled>No Data</option>
                    )}
                  </select>
                </button>

                <span className=" text-xs mb-1 text-accent">With</span>
                <span className="flex items-center gap-2 w-full mb-2 outline-none ">
                  <button
                    className="text-xs py-1 border rounded-md w-1/2 hover:bg-gray-200 active:bg-gray-200 focus-within:bg-gray-200"
                    value="with-lrn"
                    onClick={(e) => handleSelectLrn(e)}
                  >
                    LRN
                  </button>
                </span>

                <span className=" text-xs mb-1 text-accent">Birth Date</span>
                <input
                  type="month"
                  className="text-xs"
                  onChange={(e) => handleSelectBirthDate(e)}
                />
              </div>
            </ul>
          )}
        </div>

        <ul className="absolute top-10">
          <li className="flex items-center gap-1">
            <span className="leading-snug text-[10px] text-accent border bg-[#f3f4f6] py-px px-2 whitespace-nowrap rounded-md">
              Male
            </span>
            <span className="leading-snug text-[10px] text-accent border bg-[#f3f4f6] py-px px-2 whitespace-nowrap rounded-md">
              Grade 1
            </span>
            <span className="leading-snug text-[10px] text-accent border bg-[#f3f4f6] py-px px-2 whitespace-nowrap rounded-md">
              With LRN
            </span>
            <span className="leading-snug text-[10px] text-accent border bg-[#f3f4f6] py-px px-2 whitespace-nowrap rounded-md">
              September 2024
            </span>
          </li>
        </ul>
      </div>
    </form>
  );
};

export default FilterBar;
