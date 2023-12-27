import React from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { setIsShow } from "../store/StoreAction.jsx";
import { StoreContext } from "../store/StoreContext.jsx";
import LogoGreen from "./svg/LogoGreen.jsx";

const Header = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleToggleMenu = () => {
    dispatch(setIsShow(!store.isShow));
    if (store.isShow) {
      document.querySelector("body").classList.remove("no--scroll");
    } else {
      document.querySelector("body").classList.add("no--scroll");
    }
  };

  return (
    <>
      <header className=" px-4 fixed  w-full bg-primary shadow-sm  z-50">
        <div className="flex justify-between items-center">
          <button className="text-2xl lg:hidden" onClick={handleToggleMenu}>
            <FaBars />
          </button>
          <LogoGreen height={70} width={180} />
          <div className="header__avatar flex items-center gap-2 md:border-2 md:border-gray md:py-1 md:px-2 rounded-lg cursor-pointer">
            <div className="userName hidden md:block leading-[1] text-right">
              <p className="mb-0 text-black font-semibold">MC</p>
              <p className="mb-0">Devloper</p>
            </div>
            <FaUserCircle className="text-[40px] text-[#9ca3af]" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
