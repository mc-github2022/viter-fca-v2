import React from "react";
import { BsCalendar2Week, BsGear, BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";
// import {
//   consoleLog,
//   devNavUrl,
//   getUserType,
// } from "../helpers/functions-general.jsx";
import useQueryData from "@/components/custom-hooks/useQueryData";
import { devNavUrl } from "@/components/helpers/functions-general.jsx";
import { setIsSettingsOpen, setIsShow } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { PiStudent } from "react-icons/pi";
import { RiParentLine } from "react-icons/ri";

const Navigation = ({ menu, submenu }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  // const urlRolePath = getUserType();

  const {
    isLoading,
    isFetching,
    error,
    data: schoolYear,
  } = useQueryData(
    "/v2/dev-school-year", // endpoint
    "get", // method
    "nav-school-year" // key
  );

  const getOngoingSchoolYear =
    schoolYear?.count > 0 &&
    schoolYear?.data.filter((item) => item.school_year_is_active === 1);

  console.log(schoolYear);

  const handleToggleMenu = () => {
    dispatch(setIsShow(!store.isShow));
    if (store.isShow) {
      document.querySelector("body").classList.add("no--scroll");
    } else {
      document.querySelector("body").classList.remove("no--scroll");
    }
  };

  const handleDropDownSetting = () => {
    dispatch(setIsSettingsOpen(!store.isSettingsOpen));
  };

  console.log(store.isMenuExpand);
  return (
    <>
      <nav
        className={`${
          getOngoingSchoolYear[0]?.school_year_is_enrollment_open === 1 ||
          schoolYear?.isGreaterThanEndYear
            ? "mt-[82px]"
            : "mt-[54px]"
        } ${store.isShow ? "show" : ""} ${store.isMenuExpand ? "expand" : ""}`}
      >
        <div className="backdrop" onClick={() => setIsShow(false)}></div>
        <div className="flex flex-col justify-between h-[93%] py-2 pr-0 custom__scroll overflow-y-auto">
          <ul className="mt-3 h-[calc(100vh-48px)] pb-8">
            <li
              className={`nav__link ${menu === "" ? "active" : ""} ${
                schoolYear?.isGreaterThanEndYear
                  ? "border-b-2 border-alert"
                  : ""
              }`}
            >
              <Link
                // to={`${devNavUrl}/admin/students`}
                className={`flex gap-3 items-center uppercase w-full cursor-default ${
                  schoolYear?.isGreaterThanEndYear ? "text-alert" : ""
                }`}
              >
                <BsCalendar2Week className="text-lg ml-4" />
                {isLoading || isFetching
                  ? "Loading..."
                  : error
                  ? "API / Network Error"
                  : getOngoingSchoolYear?.length > 0
                  ? `S.Y ${getOngoingSchoolYear[0]?.start_year}-${getOngoingSchoolYear[0]?.end_year}`
                  : "0000-0000"}
                {schoolYear?.isGreaterThanEndYear && (
                  <span className="text-[10px]">Please check S.Y</span>
                )}
              </Link>
            </li>
            <li className={`nav__link ${menu === "students" ? "active" : ""}`}>
              <Link
                to={`${devNavUrl}/system/students`}
                className="flex gap-3 items-center uppercase  w-full"
              >
                <PiStudent className="text-lg ml-4" /> Students
              </Link>
            </li>

            <li className={`nav__link ${menu === "clients" ? "active" : ""}`}>
              <Link
                to={`${devNavUrl}/system/clients`}
                className="flex gap-3 items-center uppercase  w-full"
              >
                <RiParentLine className="text-lg ml-4" /> Parents
              </Link>
            </li>
            <li
              className={`nav__link ${menu === "assessment" ? "active" : ""}`}
            >
              <Link
                to={`${devNavUrl}/system/assessment`}
                className="flex gap-3 items-center uppercase  w-full"
              >
                <RiParentLine className="text-lg ml-4" /> Assessment
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
