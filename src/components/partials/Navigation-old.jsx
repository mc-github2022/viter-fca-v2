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
} from "../store/StoreAction.jsx";
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
        className={`mt-[50px] ${store.isShow ? "show" : ""}  ${
          store.isMenuExpand ? "expand" : ""
        }`}
      >
        <div className="backdrop" onClick={() => setIsShow(false)}></div>
        <div className="flex flex-col justify-between h-[93%] py-2 pr-0 custom__scroll overflow-y-auto">
          <ul className="mt-3  h-[calc(100vh-48px)] pb-8">
            <li className={`nav__link ${menu === "students" ? "active" : ""}`}>
              <Link
                to={`${devNavUrl}/system/students`}
                className="flex gap-3 items-center uppercase p-1 w-full"
              >
                <BsGear className="text-lg" /> Student
              </Link>
            </li>

            <li className={`nav__link ${menu === "clients" ? "active" : ""}`}>
              <Link
                to={`${devNavUrl}/system/clients`}
                className="flex gap-3 items-center uppercase p-1 w-full"
              >
                <BsGear className="text-lg" /> Parents
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
