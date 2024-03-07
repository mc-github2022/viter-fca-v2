import { devNavUrl } from "@/components/helpers/functions-general.jsx";
import ModalSettings from "@/components/partials/header/modal-settings/ModalSettings";
import { setIsSettingsOpen, setIsShow } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { BsCalendar2Week, BsChevronRight } from "react-icons/bs";
import { PiListMagnifyingGlass, PiStudent } from "react-icons/pi";
import { RiParentLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navigation = ({
  menu,
  isLoading,
  error,
  schoolYear,
  subNavActive = "",
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isShowSetting, setIsShowSettings] = React.useState(false);
  const [isShowReport, setIsShowReport] = React.useState(
    menu === "reports" ? true : false
  );

  const getOngoingSchoolYear =
    schoolYear?.count > 0 &&
    schoolYear?.data.filter((item) => item.school_year_is_active === 1);

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

  const handleShowSettings = () => {
    setIsShowSettings(true);
  };

  const handleNavigateLink = () => {
    dispatch(setIsShow(false));
    document.querySelector("body").classList.remove("no--scroll");
  };

  const handleShowAllReport = () => {
    dispatch(setIsShow(false));
    setIsShowReport(!isShowReport);
    document.querySelector("body").classList.remove("no--scroll");
  };

  return (
    <>
      <nav
        className={`${
          schoolYear?.data[0]?.school_year_is_enrollment_open === 1 ||
          schoolYear?.isGreaterThanEndYear
            ? "mt-[94px]"
            : "mt-[54px]"
        } ${store.isShow ? "show" : ""} ${store.isMenuExpand ? "expand" : ""}`}
      >
        <div className="backdrop" onClick={() => setIsShow(false)}></div>
        <div className="flex flex-col justify-between h-[93%] py-2 pr-0 custom__scroll overflow-y-auto">
          <ul className="mt-3 h-[calc(100vh-48px)] pb-8">
            <li
              className={`nav__link ${menu === "" ? "active" : ""} ${
                schoolYear?.isGreaterThanEndYear ||
                getOngoingSchoolYear?.length === 0
                  ? "border-alert cursor-pointer tooltip h-[unset] w-[unset] hover:!bg-[unset] hover:underline hover:decoration-[#af1818]"
                  : ""
              }`}
              data-tooltip="Invalid S.Y. Go to settings school year"
              onClick={
                schoolYear?.isGreaterThanEndYear ||
                getOngoingSchoolYear?.length === 0
                  ? handleShowSettings
                  : null
              }
            >
              <Link
                // to={`${devNavUrl}/admin/students`}
                className={`flex gap-3 items-center uppercase w-full cursor-default pointer-events-none ${
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
            <li
              className={`nav__link ${menu === "enrollment" ? "active" : ""}`}
            >
              <Link
                to={`${devNavUrl}/system/enrollment`}
                className="flex gap-3 items-center uppercase  w-full"
                onClick={handleNavigateLink}
              >
                <PiStudent className="text-lg ml-4" /> Enrollment
              </Link>
            </li>

            <li className={`nav__link ${menu === "clients" ? "active" : ""}`}>
              <Link
                to={`${devNavUrl}/system/clients`}
                className="flex gap-3 items-center uppercase  w-full"
                onClick={handleNavigateLink}
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
                onClick={handleNavigateLink}
              >
                <PiListMagnifyingGlass className="text-lg ml-4" /> Assessment
              </Link>
            </li>
            <li className={`nav__link ${menu === "students" ? "active" : ""}`}>
              <Link
                to={`${devNavUrl}/system/students`}
                className="flex gap-3 items-center uppercase  w-full"
                onClick={handleNavigateLink}
              >
                <PiStudent className="text-lg ml-4" /> Students
              </Link>
            </li>

            {/* <li className={`nav__link ${menu === "report" ? "active" : ""}`}>
              <Link
                to={`${devNavUrl}/system/report`}
                className="flex gap-3 items-center uppercase  w-full"
                onClick={handleNavigateLink}
              >
                <PiStudent className="text-lg ml-4" /> Report
              </Link>
            </li> */}

            <li
              className={`nav__link items-start  ${
                menu === "reports" ? "active" : ""
              }`}
            >
              <Link
                className="p-1 pl-4"
                to={`${devNavUrl}/system/report`}
                onClick={handleShowAllReport}
              >
                <div className="flex items-center justify-between">
                  <span className="flex gap-3 items-center uppercase  w-full">
                    <PiStudent className="text-lg " />
                    <span>Report</span>
                  </span>

                  <BsChevronRight
                    className={isShowReport ? "-rotate-90" : "rotate-90"}
                  />
                </div>
              </Link>
              <ol
                className={`pl-[1.25rem] border-l-[1px] ${
                  isShowReport ? "block " : "hidden "
                } bg-white h ml-6`}
              >
                <li
                  className={` ${
                    subNavActive === "student"
                      ? "border-l-2 border-[#123909]"
                      : ""
                  }`}
                >
                  <Link
                    to={`${devNavUrl}/system/report`}
                    className="flex gap-3 items-center uppercase ml-1 w-full text-[12px]"
                    onClick={handleNavigateLink}
                  >
                    Students
                  </Link>
                </li>
                {/* <li
                  className={` ${
                    subNavActive === "reports"
                      ? "border-l-2 border-[#123909]"
                      : "ml-1"
                  }`}
                >
                  <Link
                    to={`${devNavUrl}/system/report`}
                    className="flex gap-3 items-center uppercase ml-1 w-full  text-[12px]"
                    onClick={handleNavigateLink}
                  >
                    Parents
                  </Link>
                </li> */}
              </ol>
            </li>
          </ul>
        </div>
      </nav>

      {isShowSetting && (
        <ModalSettings
          setIsShowSettings={setIsShowSettings}
          isGreaterThanEndYear={
            schoolYear?.isGreaterThanEndYear ||
            getOngoingSchoolYear?.length === 0
          }
        />
      )}
    </>
  );
};

export default Navigation;
