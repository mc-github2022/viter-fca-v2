import React from "react";
import { BsGear } from "react-icons/bs";
import { MdOutlinePunchClock } from "react-icons/md";
import { PiCaretRight } from "react-icons/pi";
import { Link } from "react-router-dom";
import {
  consoleLog,
  devNavUrl,
  getUserType,
} from "../helpers/functions-general.jsx";
import {
  setInputVal,
  setIsSearch,
  setIsSettingsOpen,
  setIsShow,
} from "../store/StoreAction";
import { StoreContext } from "../store/StoreContext.jsx";
const Navigation = ({ menu, submenu }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  // const urlRolePath = getUserType();

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
  return (
    <>
      <nav
        className={`mt-[48px] ${store.isShow ? "show" : ""}  ${
          store.isMenuExpand ? "expand" : ""
        }`}
      >
        <div className="backdrop" onClick={() => setIsShow(false)}></div>
        <div className="flex flex-col justify-between h-[93%] py-2 pr-0 custom__scroll overflow-y-auto">
          <ul className="mt-3  h-[calc(100vh-48px)] pb-8">
            <li className={`nav__link ${menu === "student" ? "active" : ""}`}>
              <Link
                to={`${devNavUrl}/system/students`}
                className="flex gap-3 items-center uppercase p-1 w-full">
                <BsGear className="text-lg" /> Student
              </Link>
            </li>
            <li className={`nav__link ${menu === "settings" ? "active" : ""}`}>
              <button
                className={` p-1 w-full ${
                  menu === "settings" ? "bg-[#dfdfdf]" : ""
                }`}
                onClick={(e) => handleDropDownSetting(e)}>
                <div className="flex justify-between items-center w-full">
                  <div className="flex gap-3 items-center uppercase">
                    <BsGear className="text-lg" /> Settings
                  </div>
                  <PiCaretRight
                    className={
                      !store.isSettingsOpen
                        ? "rotate-0 duration-200"
                        : "rotate-90 duration-200"
                    }
                  />
                </div>
              </button>

              {store.isSettingsOpen && (
                <ul className=" text-black">
                  <li>
                    <Link to="/">Users</Link>{" "}
                  </li>
                  <li
                    className={` ${
                      submenu === "department" ? "active__submenu" : ""
                    }`}>
                    <Link
                      to={`${devNavUrl}/system/settings/department`}
                      className={`duration-150 border-transparent w-full inline-block py-1  `}

                      // onClick={() => setIsSettingOpen(false)}
                    >
                      Department
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/system/settings/notification`}
                      // onClick={() => setIsSettingOpen(false)}
                    >
                      Notifications
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Parents Relationship</Link>
                  </li>
                  <li>
                    <Link to="/">Grade Level</Link>
                  </li>
                  <li>
                    <Link to="/">Learning Type</Link>
                  </li>
                  <li>
                    <Link to="/">Requirement Registration</Link>
                  </li>
                  <li>
                    <Link to="/">Requirement Finance</Link>
                  </li>
                  <li>
                    <Link to="/">Requirement IT</Link>
                  </li>
                  <li>
                    <Link to="/">Tuition Fee Category</Link>
                  </li>
                  <li>
                    <Link to="/">Scheme</Link>
                  </li>
                  <li>
                    <Link to="/">Schedule of Fees</Link>
                  </li>
                  <li>
                    <Link to="/">Rooms</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
