import React from "react";
import logo from "../../../public/fcalogo.png";

const Header = () => {
  return (
    <>
      <header className="py-2 px-4 relative">
        <div className="flex justify-between items-center">
          <img className="h-[70px] w-auto" src={logo} alt="" />
        </div>
      </header>
    </>
  );
};

export default Header;
