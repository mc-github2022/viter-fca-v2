import useQueryData from "@/components/custom-hooks/useQueryData";
import {
  formatDateMonth,
  getAllmonths,
} from "@/components/helpers/functions-general";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const FilterBar = ({
  error,
  isFetching,
  isLoading,
  schoolYear,
  gender,
  setGender,
  withLrn,
  setWithLrn,
  gradeLevel,
  setGradeLevel,
  birthDate,
  setBirthDate,
  setSyId,
}) => {
  const [onFocus, setOnFocus] = React.useState(false);
  const [monthName, setMonthName] = React.useState("");
  const refFilter = React.useRef();

  const { data: gradeLevelData } = useQueryData(
    "/v2/dev-grade-level", // endpoint
    "get", // method
    "grade-level" // key
  );

  const handleSelectGender = (e) => {
    if (gender === "m" && e.target.value === "m") {
      setGender("");
      return;
    }

    if (gender === "f" && e.target.value === "f") {
      setGender("");
      return;
    }

    setGender(e.target.value);
  };

  const handleSelectLevel = (e) => {
    if (e.target.value === "0") {
      setGradeLevel({ id: 0, grade: 0 });
      return;
    }

    let item = JSON.parse(e.target.value);

    setGradeLevel({ id: item.grade_level_aid, grade: item.grade_level_name });
  };

  const handleSelectLrn = () => {
    if (withLrn === 1) {
      setWithLrn(0);
      return;
    }

    setWithLrn(1);
  };

  const handleSelectBirthDate = (e, item) => {
    setBirthDate(e.target.value);
    setMonthName(e.target.options[e.target.selectedIndex].text);
  };

  const handleSelectSy = (e) => {
    setSyId(e.target.value);
  };

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
      className="md:w-3/4"
      onSubmit={(e) => e.preventDefault()}
      ref={refFilter}
    >
      <div className="relative w-full flex items-center gap-2">
        <div className="relative w-full md:w-1/2">
          <label className="text-xs" htmlFor="school_year">
            School Year
          </label>
          <select
            className="!border-gray-200 text-[12px] "
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
        </div>

        <div className="relative w-full md:w-1/2">
          <label className="text-xs" htmlFor="school_year">
            Filter
          </label>
          <input
            type="text"
            className="text-[12px] caret-transparent"
            onFocus={() => setOnFocus(true)}
            value="All"
            onChange={(e) => e}
          />
          <span
            className="absolute right-2 bottom-2"
            onClick={() => setOnFocus(true)}
          >
            <IoIosArrowDown className="h-4 w-4 fill-gray-700" />
          </span>

          {onFocus && (
            <ul className="absolute z-50 h-72 overflow-y-auto w-full bg-white border border-gray-200 rounded-md py-4 px-2">
              <div className="flex flex-wrap w-full items-center">
                <span className=" text-xs mb-1 font-bold">Gender</span>
                <span className="flex items-center gap-2 w-full mb-3 outline-none">
                  <button
                    type="button"
                    className={`text-xs py-1 border rounded-md w-1/2 hover:bg-accentLight hover:text-white ${
                      gender === "m" &&
                      "bg-accentLight text-white border-gray-300"
                    }`}
                    value="m"
                    onClick={(e) => handleSelectGender(e)}
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    className={`text-xs py-1 border rounded-md w-1/2 hover:bg-accentLight hover:text-white ${
                      gender === "f" &&
                      "bg-accentLight text-white border-gray-300"
                    }`}
                    value="f"
                    onClick={(e) => handleSelectGender(e)}
                  >
                    Female
                  </button>
                </span>

                <span className=" text-xs mb-1 font-bold">Level</span>
                <button className="w-full mb-3 outline-none">
                  <select
                    className="!border-gray-200 text-[12px]"
                    onChange={(e) => handleSelectLevel(e)}
                  >
                    {Object.keys(gradeLevel).length > 0 && (
                      <option value={gradeLevel} hidden>
                        {gradeLevel.grade}
                      </option>
                    )}
                    <option value="0">All</option>

                    {error ? (
                      <option hidden disabled>
                        Error
                      </option>
                    ) : (
                      <option hidden>
                        {isFetching || isLoading ? "...Loading" : "Level"}
                      </option>
                    )}

                    {gradeLevelData?.count > 0 ? (
                      <>
                        {gradeLevelData?.data.map((item, key) => {
                          return (
                            <option key={key} value={JSON.stringify(item)}>
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

                <span className=" text-xs mb-1 font-bold">With</span>
                <span className="flex items-center gap-2 w-full mb-3 outline-none ">
                  <button
                    className={`text-xs py-1 border rounded-md w-1/2 hover:bg-accentLight hover:text-white ${
                      withLrn === 1 &&
                      "bg-accentLight text-white border-gray-300"
                    }`}
                    onClick={() => handleSelectLrn()}
                  >
                    LRN
                  </button>
                </span>

                <span className=" text-xs mb-1 font-bold">Birth Date</span>
                {/* <input
                  type="month"
                  className="text-xs"
                  value={birthDate}
                  onChange={(e) => handleSelectBirthDate(e)}
                /> */}
                <button className="w-full mb-3 outline-none">
                  <select
                    className="!border-gray-200 text-[12px]"
                    onChange={(e) => handleSelectBirthDate(e)}
                  >
                    {birthDate !== "" && (
                      <option value={birthDate} hidden>
                        {monthName}
                      </option>
                    )}
                    <option value="">All</option>

                    {getAllmonths?.map((item, key) => {
                      return (
                        <option key={key} value={key + 1}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </button>
              </div>
            </ul>
          )}
        </div>
      </div>
      <div className="relative w-full flex items-center gap-2">
        <div className="relative w-full md:w-1/2">
          {/* <select
            className="!border-gray-200 text-[12px] "
            onChange={(e) => handleSelectSy(e)}
          >
            <optgroup label="Select SY">
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
            </optgroup>
          </select> */}
        </div>

        <div className="relative w-full md:w-1/2">
          <ul className="my-2">
            <li className="flex items-center gap-1">
              {gender !== "" && (
                <span className="leading-snug text-[10px] text-white border bg-accentLight py-px px-2 whitespace-nowrap rounded-md capitalize">
                  {gender === "m" ? "Male" : "Female"}
                </span>
              )}
              {Object.keys(gradeLevel).length > 0 && gradeLevel.grade !== 0 && (
                <span className="leading-snug text-[10px] text-white border bg-accentLight py-px px-2 whitespace-nowrap rounded-md">
                  {gradeLevel.grade}
                </span>
              )}
              {withLrn === 1 && (
                <span className="leading-snug text-[10px] text-white border bg-accentLight py-px px-2 whitespace-nowrap rounded-md">
                  With LRN
                </span>
              )}
              {birthDate !== "" && (
                <span className="leading-snug text-[10px] text-white border bg-accentLight py-px px-2 whitespace-nowrap rounded-md">
                  {formatDateMonth(birthDate).split(" ")[0]}
                </span>
              )}
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
};

export default FilterBar;
