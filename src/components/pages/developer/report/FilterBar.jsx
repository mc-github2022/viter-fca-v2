import useQueryData from "@/components/custom-hooks/useQueryData";
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
}) => {
  const [onFocus, setOnFocus] = React.useState(false);
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

  const handleSelectBirthDate = (e) => {
    setBirthDate(e.target.value);
  };

  const handleSelectSy = (e) => {
    console.log(e.target.value);
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
      className="md:w-1/3"
      onSubmit={(e) => e.preventDefault()}
      ref={refFilter}
    >
      <div className="relative w-full flex items-center gap-2">
        <select
          className="!border-gray-200 text-[12px] md:w-1/2"
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

        <div className="relative w-full md:w-1/2">
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
                    className={`text-xs py-1 border rounded-md w-1/2 hover:bg-[#f3f4f6] ${
                      gender === "m" && "bg-[#f3f4f6] border-gray-300"
                    }`}
                    value="m"
                    onClick={(e) => handleSelectGender(e)}
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    className={`text-xs py-1 border rounded-md w-1/2 hover:bg-[#f3f4f6] ${
                      gender === "f" && "bg-[#f3f4f6] border-gray-300"
                    }`}
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

                <span className=" text-xs mb-1 text-accent">With</span>
                <span className="flex items-center gap-2 w-full mb-2 outline-none ">
                  <button
                    className={`text-xs py-1 border rounded-md w-1/2 hover:bg-[#f3f4f6] ${
                      withLrn === 1 && "bg-[#f3f4f6] border-gray-300"
                    }`}
                    onClick={() => handleSelectLrn()}
                  >
                    LRN
                  </button>
                </span>

                <span className=" text-xs mb-1 text-accent">Birth Date</span>
                <input
                  type="month"
                  className="text-xs"
                  value={birthDate}
                  onChange={(e) => handleSelectBirthDate(e)}
                />
              </div>
            </ul>
          )}
        </div>
      </div>
    </form>
  );
};

export default FilterBar;
