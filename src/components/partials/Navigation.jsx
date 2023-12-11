import React from "react";
import { IoFastFood, IoPeopleSharp } from "react-icons/io5";
import { MdSettings } from "react-icons/md";
import { Link } from "react-router-dom";
import { devNavUrl } from "../helpers/functions-general.jsx";
import {
  setIsSearch,
  setIsSettingsOpen,
  setIsShow,
} from "../store/StoreAction";
import { StoreContext } from "../store/StoreContext.jsx";
import { BsGear } from "react-icons/bs";
import { PiCaretRight } from "react-icons/pi";
const Navigation = ({ menu, submenu }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleShow = () => {
    dispatch(setIsShow(!store.isShow));
    dispatch(setIsSearch(false));
    dispatch(setInputVal(0));
  };

  const handleDropDownSetting = () => {
    dispatch(setIsSettingsOpen(!store.isSettingsOpen));
  };
  return (
    <>
      <nav className="h-full bg-white">
        <div className="flex flex-col justify-between h-full p-2 ">
          <ul className="mt-3">
            <li className="nav__link ">
              <button
                className={`rounded-lg p-1 w-full ${
                  menu === "settings" ? "bg-[#dfdfdf]" : ""
                }`}
                onClick={(e) => handleDropDownSetting(e)}
              >
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
            </li>
            {store.isSettingsOpen && (
              <ul className="ml-12 text-black">
                <li
                  className={` ${
                    submenu === "settingsDeparment"
                      ? "bg-[#436c8a]/80 rounded-md"
                      : ""
                  }`}
                >
                  <Link
                    onClick={() => handleShow()}
                    to={`${urlRolePath}/settings/users`}
                    className={`text-white border-l-2 hover:!border-accent duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
                      submenu === "users" ? "active__submenu" : ""
                    }`}

                    // onClick={() => setIsSettingOpen(false)}
                  >
                    Users
                  </Link>
                </li>

                <li>Users</li>
                <li>Departmemt</li>
                <li>Notifications</li>
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
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
