import React from "react";
import { FaBars, FaCog, FaEdit, FaUserCircle } from "react-icons/fa";
import { setIsMenuExpand, setIsShow } from "../store/StoreAction.jsx";
import { StoreContext } from "../store/StoreContext.jsx";
import LogoTextOnly from "./svg/LogoTextOnly.jsx";
import { FaRegCircleUser } from "react-icons/fa6";
import { RiEdit2Line } from "react-icons/ri";

import {
  MdOutlineAdminPanelSettings,
  MdOutlineMailOutline,
} from "react-icons/md";
import { PiSignOut } from "react-icons/pi";
import ModalSettings from "./header/modal-settings/ModalSettings.jsx";
const Header = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [show, setShow] = React.useState(false);
  const [isShowSetting, setIsShowSettings] = React.useState(false);

  const menuRef = React.useRef();

  const handleToggleMenu = () => {
    dispatch(setIsShow(!store.isShow));
    if (store.isShow) {
      document.querySelector("body").classList.remove("no--scroll");
    } else {
      document.querySelector("body").classList.add("no--scroll");
    }
  };

  const handleToggleExpandMenu = () => {
    dispatch(setIsMenuExpand(!store.isMenuExpand));
  };

  const handleShowSettings = () => {
    setIsShowSettings(true);
  };

  React.useEffect(() => {
    let handleShowDropdown = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleShowDropdown);
    return () => {
      document.removeEventListener("mousedown", handleShowDropdown);
    };
  }, []);

  return (
    <>
      <header className=" px-4 fixed  w-full bg-primary shadow-sm  py-1 z-50">
        <div className="flex justify-between items-center">
          <div className="flex justify-center">
            <button className="text-2xl lg:hidden" onClick={handleToggleMenu}>
              <FaBars />
            </button>

            <button
              className="hidden lg:block text-2xl tooltip tooltip--bottom"
              data-tooltip="Menu Expand"
              onClick={handleToggleExpandMenu}
            >
              <FaBars />
            </button>
            <LogoTextOnly />
          </div>

          <div className="flex items-center gap-3">
            <button className="text-xl" onClick={handleShowSettings}>
              <FaCog />
            </button>

            <div className="header__avatar  rounded-lg" ref={menuRef}>
              <button
                className="w-[30px] h-[30px] bg-accent grid place-content-center rounded-full text-white"
                onClick={() => setShow(!show)}
              >
                RP
              </button>

              <div
                className={`dropdown ${
                  show ? "active" : "inactive"
                } absolute top-[40px] right-5 max-w-[200px] lg:max-w-[350px] w-full bg-primary rounded-md border border-gray-200 shadow-sm`}
              >
                <div className="p-4 grid lg:grid-cols-[80px_1fr] gap-4 relative">
                  <div className="rounded-full h-[40px] w-[40px] lg:h-[80px] lg:w-[80px] bg-accent flex justify-center items-center text-primary lg:text-3xl justify-self-center">
                    RP
                  </div>

                  <button
                    className="absolute top-2 right-2 tooltip"
                    data-tooltip="Edit Profile"
                  >
                    <RiEdit2Line />
                  </button>

                  <ul className=" w-full text-xs ">
                    <li className="mb-3 flex gap-2 items-center">
                      <FaRegCircleUser className="text-base" />
                      Ramon Plaza
                    </li>
                    <li className="mb-3 flex gap-2 items-center">
                      <MdOutlineAdminPanelSettings className="text-base" />
                      Developer
                    </li>
                    <li className="mb-3 items-center flex gap-2">
                      <MdOutlineMailOutline className="text-base" />
                      <p className="truncate w-[140px] lg:w-[80%]">
                        ramon.plaza@frontlinebusiness.com.ph
                      </p>
                    </li>
                    <li className="">
                      <button className="flex gap-2 items-center hover:underline">
                        <PiSignOut className="text-base" />
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isShowSetting && <ModalSettings setIsShowSettings={setIsShowSettings} />}
    </>
  );
};

export default Header;
