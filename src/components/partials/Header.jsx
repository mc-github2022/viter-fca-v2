import React from "react";
import { FaBars, FaExclamationCircle } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { LiaCogSolid } from "react-icons/lia";
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
const Header = ({ isLoading, schoolYear }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [show, setShow] = React.useState(false);
  const [isShowSetting, setIsShowSettings] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  let link =
    store.credentials.data.role_name.toLowerCase() === "developer"
      ? "system"
      : store.credentials.data.role_name.toLowerCase();

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
    if (!isShowSetting) {
      document.querySelector("body").classList.add("no--scroll");
    } else {
      document.querySelector("body").classList.remove("no--scroll");
    }
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
      {!isLoading &&
        // !isFetching &&
        (schoolYear?.data[0].school_year_is_enrollment_open === 1 ||
          schoolYear?.isGreaterThanEndYear) && (
          <>
            <p className="uppercase text-base flex items-center justify-center gap-2 text-center bg-[#fff5c2] mb-0 h-10 fixed w-full z-10 top-0">
              <FaExclamationCircle className="h-6 w-6 fill-white bg-[#f09a02] rounded-full" />
              {schoolYear?.isGreaterThanEndYear ? (
                <span>
                  School Year is not updated.{" "}
                  {store.credentials.role_is_admin === 1 ||
                    (store.credentials.role_is_developer === 1 && (
                      <span>
                        Go to{" "}
                        <span
                          className="underline cursor-pointer"
                          onClick={handleShowSettings}
                        >
                          settings
                        </span>{" "}
                        and add new S.Y
                      </span>
                    ))}
                </span>
              ) : (
                "Enrollment is On-going"
              )}
            </p>
            <p className="mb-10"></p>
          </>
        )}
      {loading && <FetchingSpinner />}

      <header className="pr-4 pl-[13.5px] fixed  w-full bg-primary border-gray-100 border-0 py-1 z-20 drop-shadow">
        <div className="flex justify-between items-center">
          <div className="flex justify-center gap-2">
            <button className="lg:hidden" onClick={handleToggleMenu}>
              <FaBars className="h-5 w-5" />
            </button>

            <button
              className="hidden lg:block"
              data-tooltip="Expand"
              onClick={handleToggleExpandMenu}
            >
              <FaBars className="h-5 w-5" />
            </button>
            <LogoTextOnly />
            {/* <LogoGreen width="170" height="44" /> */}
          </div>

          <div className="flex items-center gap-3">
            {(store.credentials.data.role_is_developer === 1 ||
              store.credentials.data.role_is_admin === 1) && (
              <button className="text-xl" onClick={handleShowSettings}>
                <LiaCogSolid />
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
                    className="absolute top-3 right-2 tooltip"
                    data-tooltip="Account"
                  >
                    <Link to={`${devNavUrl}/${link}/profile`}>
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
      {isShowSetting && (
        <ModalSettings
          setIsShowSettings={setIsShowSettings}
          isGreaterThanEndYear={schoolYear?.isGreaterThanEndYear}
        />
      )}
    </>
  );
};

export default Header;
