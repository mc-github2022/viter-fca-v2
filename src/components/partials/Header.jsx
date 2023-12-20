import React from "react";
import { FaUserCircle } from "react-icons/fa";
import LogoGreen from "./svg/LogoGreen.jsx";

const Header = () => {
  return (
    <>
      <header className=" px-4 relative">
        <div className="flex justify-between items-center">
          <LogoGreen height={75} width={200} />
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
