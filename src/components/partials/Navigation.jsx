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
  const [isAnimating, setAnimation] = React.useState(false);
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
      <nav className={`mt-[70px] ${store.isShow ? "show" : ""}`}>
        <div className="backdrop" onClick={handleToggleMenu}></div>
        <div className="flex flex-col justify-between h-[93%] py-2 pr-0 custom__scroll overflow-y-auto">
          <ul className="mt-3  h-[calc(100vh-70px)] pb-8 ">
            <li className="nav__link  ">
              <button
                className={` p-1 w-full ${
                  menu === "settings" ? "bg-[#dfdfdf]" : ""
                }`}>
                <div className="flex justify-between items-center w-full">
                  <div className="flex gap-3 items-center uppercase">
                    <BsGear className="text-lg" /> Student
                  </div>
                </div>
              </button>
            </li>
            <li className="nav__link active">
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
                  <li className={`active__submenu`}>
                    <Link
                      onClick={() => handleShow()}
                      to={`/system/settings/department`}
                      className={`duration-150 border-transparent w-full inline-block py-1  `}

                      // onClick={() => setIsSettingOpen(false)}
                    >
                      Department
                    </Link>
                  </li>
                  <li
                    className={` ${
                      submenu === "settingsNotifications"
                        ? "bg-[#123a09]/80 rounded-md"
                        : ""
                    }`}>
                    <Link
                      onClick={() => handleShow()}
                      to={`/system/settings/notification`}
                      className={`duration-150 border-transparent w-full inline-block py-1 ${
                        submenu === "settingsNotifications"
                          ? "active__submenu"
                          : ""
                      }`}

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

            <li className="nav__link ">
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
                  <li>Users</li>
                  <li
                    className={` ${
                      submenu === "settingsDepartment"
                        ? "bg-[#123a09]/80 rounded-md"
                        : ""
                    }`}>
                    <Link
                      onClick={() => handleShow()}
                      to={`/system/settings/department`}
                      className={`duration-150 border-transparent w-full inline-block py-1 ${
                        submenu === "settingsDepartment"
                          ? "active__submenu"
                          : ""
                      }`}

                      // onClick={() => setIsSettingOpen(false)}
                    >
                      Department
                    </Link>
                  </li>
                  <li
                    className={` ${
                      submenu === "settingsNotifications"
                        ? "bg-[#123a09]/80 rounded-md"
                        : ""
                    }`}>
                    <Link
                      onClick={() => handleShow()}
                      to={`/system/settings/notification`}
                      className={`uration-150 order-transparent w-full inline-block py-1 ${
                        submenu === "settingsNotifications"
                          ? "active__submenu"
                          : ""
                      }`}

                      // onClick={() => setIsSettingOpen(false)}
                    >
                      Notifications
                    </Link>
                  </li>
                  <li>Parents Relationship</li>
                  <li>Grade Level</li>
                  <li>Learning Type</li>
                  <li>Requirement Registration</li>
                  <li>Requirement Finance</li>
                  <li>Requirement IT</li>
                  <li>Tuition Fee Category</li>
                  <li>Scheme</li>
                  <li>Schedule of Fees</li>
                  <li>Rooms</li>
                </ul>
              )}
            </li>
            <li className="nav__link ">
              <button
                className={` p-1 w-full ${
                  menu === "settings" ? "bg-[#dfdfdf]" : ""
                }`}>
                <div className="flex justify-between items-center w-full">
                  <div className="flex gap-3 items-center uppercase">
                    <BsGear className="text-lg" /> Student
                  </div>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
