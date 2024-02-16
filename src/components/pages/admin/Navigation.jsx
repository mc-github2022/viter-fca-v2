import React from "react";
import { BsCalendar2Week, BsGear, BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";
// import {
//   consoleLog,
//   devNavUrl,
//   getUserType,
// } from "../helpers/functions-general.jsx";
import { devNavUrl } from "@/components/helpers/functions-general.jsx";
import { setIsSettingsOpen, setIsShow } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext.jsx";
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
            <li className={`nav__link ${menu === "" ? "active" : ""}`}>
              <Link
                // to={`${devNavUrl}/admin/students`}
                className="flex gap-3 items-center uppercase p-1 w-full"
              >
                <BsCalendar2Week className="text-lg ml-4" /> S.Y 2023-2024
              </Link>
            </li>
            <li className={`nav__link ${menu === "students" ? "active" : ""}`}>
              <Link
                to={`${devNavUrl}/admin/students`}
                className="flex gap-3 items-center uppercase p-1 w-full"
              >
                <BsPeople className="text-lg ml-4" /> Students
              </Link>
            </li>
            <li className={`nav__link ${menu === "clients" ? "active" : ""}`}>
              <Link
                to={`${devNavUrl}/admin/clients`}
                className="flex gap-3 items-center uppercase p-1 w-full"
              >
                <BsGear className="text-lg ml-4" /> Parents
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
