import React from "react";
import Logo from "../../../public/fcalogo.png";
import { setIsShow } from "../store/StoreAction";

const Header = () => {
  return (
    <>
      <header className="py-2 px-4 relative">
        <div className="flex justify-between items-center">
          <img className="h-[70px] w-auto" src={Logo} alt="" />
        </div>
      </header>
    </>
  );
};

export default Header;
