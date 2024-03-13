import React from "react";
import { BsCalendar2Week, BsGear, BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";

import { devNavUrl } from "@/components/helpers/functions-general.jsx";
import {
  setIsSearch,
  setIsSettingsOpen,
  setIsShow,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { PiListMagnifyingGlass, PiStudent } from "react-icons/pi";
import { RiParentLine } from "react-icons/ri";
const Navigation = ({ menu, isLoading, error, schoolYear }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isShowSetting, setIsShowSettings] = React.useState(false);

  const getOngoingSchoolYear =
    schoolYear?.count > 0 &&
    schoolYear?.data.filter((item) => item.school_year_is_active === 1);

  const handleShowSettings = () => {
    setIsShowSettings(true);
    dispatch(setIsSearch(false));
  };

  const handleNavigateLink = () => {
    dispatch(setIsSearch(false));
    dispatch(setIsShow(false));
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
          <ul className="mt-3  h-[calc(100vh-48px)] pb-8">
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
              </Link>
            </li>
            <li
              className={`nav__link ${menu === "enrollment" ? "active" : ""}`}
            >
              <Link
                to={`${devNavUrl}/admin/enrollment`}
                className="flex gap-3 items-center uppercase  w-full"
                onClick={handleNavigateLink}
              >
                <PiStudent className="text-lg ml-4" /> Enrollment
              </Link>
            </li>

            <li className={`nav__link ${menu === "clients" ? "active" : ""}`}>
              <Link
                to={`${devNavUrl}/admin/clients`}
                className="flex gap-3 items-center uppercase  w-full"
                onClick={handleNavigateLink}
              >
                <RiParentLine className="text-lg ml-4" /> Clients
              </Link>
            </li>
            <li
              className={`nav__link ${menu === "assessment" ? "active" : ""}`}
            >
              <Link
                to={`${devNavUrl}/admin/assessment`}
                className="flex gap-3 items-center uppercase  w-full"
                onClick={handleNavigateLink}
              >
                <PiListMagnifyingGlass className="text-lg ml-4" /> Assessment
              </Link>
            </li>
            <li className={`nav__link ${menu === "students" ? "active" : ""}`}>
              <Link
                to={`${devNavUrl}/admin/students`}
                className="flex gap-3 items-center uppercase  w-full"
                onClick={handleNavigateLink}
              >
                <PiStudent className="text-lg ml-4" /> Students
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
