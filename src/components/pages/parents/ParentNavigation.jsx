import { devNavUrl } from "@/components/helpers/functions-general.jsx";
import { setIsShow } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { BsGear } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { LiaCalendarSolid } from "react-icons/lia";
import { PiStudent } from "react-icons/pi";
import { Link } from "react-router-dom";

const ParentNavigation = ({ menu, submenu }) => {
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
            <p className="flex gap-3 items-center uppercase p-1 w-full text-sm mb-5">
              <LiaCalendarSolid className="text-lg" /> 2024-2025
            </p>
            <li className={`nav__link ${menu === "student" ? "active" : ""}`}>
              <Link
                to={`${devNavUrl}/parent/student`}
                className="flex gap-3 items-center uppercase p-1 w-full"
              >
                <PiStudent className="text-lg" /> My Students
              </Link>
            </li>

            <li className={`nav__link ${menu === "clients" ? "active" : ""}`}>
              <Link
                to={`${devNavUrl}/parent/information`}
                className="flex gap-3 items-center uppercase p-1 w-full"
              >
                <HiOutlineInformationCircle className="text-lg" /> My
                Information
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default ParentNavigation;
