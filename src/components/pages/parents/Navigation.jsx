import React from "react";
import {
  BsCalendar2Week,
  BsFillInfoCircleFill,
  BsGear,
  BsInfoCircle,
  BsPeople,
} from "react-icons/bs";
import { Link } from "react-router-dom";
// import {
//   consoleLog,
//   devNavUrl,
//   getUserType,
// } from "../helpers/functions-general.jsx";
import { devNavUrl } from "@/components/helpers/functions-general.jsx";
import { setIsSettingsOpen, setIsShow } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext.jsx";

const Navigation = ({ menu, isLoading, error, schoolYear }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  // const urlRolePath = getUserType();

  const getOngoingSchoolYear =
    schoolYear?.count > 0 &&
    schoolYear?.data.filter((item) => item.school_year_is_active === 1);

  const handleToggleMenu = () => {
    dispatch(setIsShow(!store.isShow));
    if (store.isShow) {
      document.querySelector("body").classList.remove("no--scroll");
    } else {
      document.querySelector("body").classList.add("no--scroll");
    }
  };

  const handleNavigateLink = () => {
    dispatch(setIsShow(false));
    document.querySelector("body").classList.remove("no--scroll");
  };

  const handleDropDownSetting = () => {
    dispatch(setIsSettingsOpen(!store.isSettingsOpen));
  };

  const handleBackDropClick = () => {
    dispatch(setIsShow(false));
    document.querySelector("body").classList.remove("no--scroll");
  };
  return (
    <>
      <nav
        className={` ${store.isShow ? "show" : ""} ${
          store.isMenuExpand ? "expand" : ""
        }`}
      >
        <div
          className={`backdrop ${store.isShow ? "" : "hidden"}`}
          onClick={() => handleBackDropClick()}
        ></div>
        <div
          className={`${
            schoolYear?.data[0]?.school_year_is_enrollment_open === 1 ||
            schoolYear?.isGreaterThanEndYear
              ? "mt-[94px]"
              : "mt-[54px]"
          } flex flex-col justify-between h-full  pr-0 custom__scroll overflow-y-auto`}
        >
          <ul className="pt-3  h-screen ">
            <li
              className={`nav__link ${menu === "" ? "active" : ""}`}
              // data-tooltip="Invalid S.Y."
            >
              <Link
                // to={`${devNavUrl}/admin/students`}
                className={`flex gap-3 items-center uppercase p-1 w-full cursor-default pointer-events-none ${
                  schoolYear?.isGreaterThanEndYear ||
                  getOngoingSchoolYear?.length === 0
                    ? "text-alert"
                    : ""
                }`}
              >
                <BsCalendar2Week className="text-lg ml-4" />
                {isLoading
                  ? "Loading..."
                  : error
                  ? "API / Network Error"
                  : getOngoingSchoolYear?.length > 0
                  ? `S.Y ${getOngoingSchoolYear[0]?.start_year}-${getOngoingSchoolYear[0]?.end_year}`
                  : "S.Y not set"}
                {/* {schoolYear?.isGreaterThanEndYear && (
                  <span className="text-[10px]"></span>
                )} */}
              </Link>
            </li>
            <li className={`nav__link ${menu === "my-info" ? "active" : ""}`}>
              <Link
                to={`${devNavUrl}/parent/information`}
                className="flex gap-3 items-center uppercase p-1 w-full"
                onClick={() => handleNavigateLink()}
              >
                <BsInfoCircle className="text-lg ml-4" /> My Information
              </Link>
            </li>
            <li
              className={`nav__link ${menu === "my-student" ? "active" : ""}`}
            >
              <Link
                to={`${devNavUrl}/parent/student`}
                className="flex gap-3 items-center uppercase p-1 w-full"
                onClick={() => handleNavigateLink()}
              >
                <BsPeople className="text-lg ml-4" /> My Students
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
