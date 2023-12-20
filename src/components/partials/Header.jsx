import React from "react";
import Logo from "../../../public/fcalogo.png";
import { FaUserCircle } from "react-icons/fa";
import LogoGreen from "./svg/Logo";

const Header = () => {
  return (
    <>
      <header className="py-2 px-4 relative">
        <div className="flex justify-between items-center">
          <LogoGreen />
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
