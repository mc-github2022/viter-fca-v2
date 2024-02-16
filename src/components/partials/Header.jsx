import React from "react";
import { FaBars, FaCog, FaEdit, FaUserCircle } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { RiEdit2Line } from "react-icons/ri";
import { setIsMenuExpand, setIsShow } from "../store/StoreAction.jsx";
import { StoreContext } from "../store/StoreContext.jsx";
import LogoTextOnly from "./svg/LogoTextOnly.jsx";

import {
  MdOutlineAdminPanelSettings,
  MdOutlineMailOutline,
} from "react-icons/md";
import { PiSignOut } from "react-icons/pi";
import { Link } from "react-router-dom";
import { checkLocalStorage } from "../helpers/CheckLocalStorage.jsx";
import { devNavUrl } from "../helpers/functions-general.jsx";
import ModalSettings from "./header/modal-settings/ModalSettings.jsx";
import FetchingSpinner from "./spinners/FetchingSpinner.jsx";
const Header = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [show, setShow] = React.useState(false);
  const [isShowSetting, setIsShowSettings] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const menuRef = React.useRef();

  const handleToggleMenu = () => {
    dispatch(setIsShow(!store.isShow));
    if (store.isShow) {
      document.querySelector("body").classList.remove("no--scroll");
    } else {
      document.querySelector("body").classList.add("no--scroll");
    }
  };

  const credentials = () => {
    if (store.credentials.data.role_is_developer === 1) {
      return {
        firstname: store.credentials.data.user_system_fname,
        lastname: store.credentials.data.user_system_lname,
        email: store.credentials.data.user_system_email,
        role: store.credentials.data.role_name,
      };
    } else
      return {
        firstname: store.credentials.data.user_other_fname,
        lastname: store.credentials.data.user_other_lname,
        email: store.credentials.data.user_other_email,
        role: store.credentials.data.role_name,
      };
  };

  const handleToggleExpandMenu = () => {
    dispatch(setIsMenuExpand(!store.isMenuExpand));
  };

  const handleShowSettings = () => {
    setIsShowSettings(true);
  };

  const handleLogout = () => {
    // dispatch(setIsLogout(!store.isLogout));
    setLoading(true);
    setTimeout(() => {
      if (checkLocalStorage() !== null) {
        localStorage.removeItem("fcatoken");
        store.credentials.data.role_is_developer === 1
          ? window.location.replace(`${devNavUrl}/system/login`)
          : window.location.replace(`${devNavUrl}/login`);
        return;
      }
      setLoading(false);
    }, 1500);
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
      {loading && <FetchingSpinner />}
      <header className=" px-4 fixed  w-full bg-primary border-b border  py-1 z-20">
        <div className="flex justify-between items-center">
          <div className="flex justify-center">
            <button className="text-2xl lg:hidden" onClick={handleToggleMenu}>
              <FaBars />
            </button>

            <button
              className="hidden lg:block text-2xl tooltip tooltip--bottom"
              data-tooltip="Expand"
              onClick={handleToggleExpandMenu}
            >
              <FaBars />
            </button>
            <LogoTextOnly />
          </div>

          <div className="flex items-center gap-3">
            {store.credentials.data.role_is_developer === 1 && (
              <button className="text-xl" onClick={handleShowSettings}>
                <FaCog />
              </button>
            )}

            <div className="header__avatar  rounded-lg" ref={menuRef}>
              <button
                className="w-[30px] h-[30px] bg-accent grid place-content-center rounded-full text-white"
                onClick={() => setShow(!show)}
              >
                {credentials().firstname[0]}
                {credentials().lastname[0]}
              </button>

              <div
                className={`dropdown ${
                  show ? "active" : "inactive"
                } absolute top-[40px] right-5 max-w-[250px] lg:max-w-[350px] w-full bg-primary rounded-md border border-gray-200 shadow-sm`}
              >
                <div className="p-4 grid lg:grid-cols-[80px_1fr] gap-4 relative">
                  <div className="rounded-full h-[40px] w-[40px] lg:h-[80px] lg:w-[80px] bg-accent flex justify-center items-center text-primary lg:text-3xl justify-self-center">
                    {credentials().firstname[0]}
                    {credentials().lastname[0]}
                  </div>

                  <button
                    className="absolute top-2 right-2 tooltip"
                    data-tooltip="Edit Profile"
                  >
                    <Link to={`${devNavUrl}/system/profile`}>
                      <RiEdit2Line />
                    </Link>
                  </button>

                  <ul className="w-full text-xs ">
                    <li className="mb-3 flex gap-2 items-center">
                      <FaRegCircleUser className="text-base" />
                      {credentials().firstname} {credentials().lastname}
                    </li>
                    <li className="mb-3 flex gap-2 items-center capitalize">
                      <MdOutlineAdminPanelSettings className="text-base" />
                      {credentials().role}
                    </li>
                    <li className="mb-3 items-center flex gap-2">
                      <MdOutlineMailOutline className="text-base" />
                      <p className="truncate w-[26ch]">{credentials().email}</p>
                    </li>
                    <li className="">
                      <button
                        className="flex gap-2 items-center hover:underline"
                        onClick={handleLogout}
                      >
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
