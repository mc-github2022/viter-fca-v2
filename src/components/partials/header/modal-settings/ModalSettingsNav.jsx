import { consoleLog } from "@/components/helpers/functions-general";
import {
  setIndexItem,
  setIsAdd,
  setIsSettingAdd,
} from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React, { useState } from "react";
import { BsChevronRight } from "react-icons/bs";

const ModalSettingsNav = ({
  showSideNav,
  setIndex,
  setShowSideNav,
  setIndexInner,
  index,
  isGreaterThanEndYear,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  let userRole = store.credentials.data.role_name.toLowerCase();

  const [btnCollapse, setbtnCollapse] = useState(false);
  const [categoryCollapse, setCategoryCollapse] = useState(false);
  const handleBtnCollapse = () => {
    setbtnCollapse(!btnCollapse);
  };
  const handleCategoryCollapse = () => {
    setCategoryCollapse(!categoryCollapse);
  };

  const [subNavActive, setSubNavActive] = useState("");

  const handleSubNavActive = (subMenu, index) => {
    setIndex(index);
    setSubNavActive(subMenu);
    dispatch(setIsSettingAdd(false));
  };

  const handleChangeSetting = (index, e) => {
    dispatch(setIsAdd(false));
    e.preventDefault;
    setIndex(index);
    setShowSideNav(false);
    dispatch(setIndexItem(0));
    setbtnCollapse(false);
    setCategoryCollapse(false);
    dispatch(setIsSettingAdd(false));
  };

  const handleChangeSettingInner = (indexInner, e) => {
    e.preventDefault;
    setIndexInner(indexInner);
    dispatch(setIsAdd(false));
    setShowSideNav(false);
  };

  return (
    <>
      <aside
        className={`${
          showSideNav ? "left-0 lg:-left-[250px]" : "-left-[250px] lg:left-0"
        } modal__settings__nav z-10 ease-timing-nav top-11 h-[calc(100%-40px)] lg:h-full w-[195px]  absolute lg:relative lg:top-0 border-r border-line transition-all duration-300 bg-primary`}
      >
        <ul className="py-5 lg:pt-0 mb-10 overflow-y-auto h-full custom__scroll ">
          <li className={` ${index === 1 ? "active" : ""}`}>
            <button
              onClick={(e) => handleChangeSetting(1, e)}
              className="p-1 pl-4"
            >
              Department
            </button>
          </li>
          <li className={` ${index === 2 ? "active" : ""}`}>
            <button
              onClick={(e) => handleChangeSetting(2, e)}
              className="p-1 pl-4"
            >
              Notification
            </button>
          </li>
          <li className={` ${index === 19 ? "active" : ""}`}>
            <button
              onClick={(e) => handleChangeSetting(19, e)}
              className="p-1 pl-4"
            >
              Email Templates
            </button>
          </li>

          <li className={` ${index === 3 ? "active" : ""}`}>
            <button
              onClick={(e) => handleChangeSetting(3, e)}
              className="p-1 pl-4"
            >
              Parent Relationship
            </button>
          </li>

          <li className={` ${index === 4 ? "active" : ""}`}>
            <button
              onClick={(e) => handleChangeSetting(4, e)}
              className="p-1 pl-4"
            >
              Grade Level
            </button>
          </li>

          {/* <li className={` ${index === 5 ? "active" : ""}`}>
            <button
              onClick={(e) => handleChangeSetting(5, e)}
              className="p-1 pl-4"
            >
              Learning Type
            </button>
          </li> */}

          <li className={` ${index === 6 ? "active" : ""}`}>
            <button
              onClick={(e) => handleChangeSetting(6, e)}
              className="p-1 pl-4"
            >
              Requirement - Registrar
            </button>
          </li>

          {/* <li className={` ${index === 7 ? "active" : ""}`}>
            <button
              onClick={(e) => handleChangeSetting(7, e)}
              className="p-1 pl-4"
            >
              Requirement - Finance
            </button>
          </li> */}

          {/* <li className={` ${index === 8 ? "active" : ""}`}>
            <button
              onClick={(e) => handleChangeSetting(8, e)}
              className="p-1 pl-4"
            >
              Requirement - IT
            </button>
          </li> */}

          <li className={` ${index === 9 ? "active" : ""}`}>
            <button
              onClick={(e) => handleChangeSetting(9, e)}
              className="p-1 pl-4"
            >
              Tuition Fee Category
            </button>
          </li>

          <li className={` ${index === 10 ? "active" : ""}`}>
            <button
              onClick={(e) => handleChangeSetting(10, e)}
              className="p-1 pl-4"
            >
              Tuition Fee Scheme
            </button>
          </li>

          <li className={` ${index === 11 ? "active" : ""}`}>
            <button
              onClick={(e) => handleChangeSetting(11, e)}
              className="p-1 pl-4"
            >
              Schedule of Fees
            </button>
          </li>

          <li className={` ${index === 12 ? "active" : ""}`}>
            {/* {console.log(index)} */}
            <button
              onClick={(e) => {
                handleChangeSetting(12, e);
                handleBtnCollapse();
                handleChangeSettingInner(1, e);
                handleSubNavActive("Parent", 12);
              }}
              className="p-1 pl-4"
            >
              <div className="flex items-center justify-between">
                <span>Users</span>
                <BsChevronRight
                  className={` ${btnCollapse ? "-rotate-90" : "rotate-90"}`}
                />
              </div>
            </button>
            <ul className={`${btnCollapse ? "!block" : ""} hidden bg-white h`}>
              <li className="text-gray-600 p-1 pl-8">
                <button
                  onClick={(e) => {
                    handleChangeSettingInner(1, e);
                    handleSubNavActive("Parent", 12);
                  }}
                  className={`${
                    subNavActive === "Parent"
                      ? "!border-l-2 !border-[#123909]"
                      : ""
                  } !bg-[unset] !text-gray-600 border-l-2 border-transparent`}
                >
                  <span className="ml-2">Parent</span>
                </button>
              </li>
              <li className="text-gray-600 p-1 pl-8">
                <button
                  onClick={(e) => {
                    handleChangeSettingInner(2, e);
                    handleSubNavActive("Staff", 12);
                  }}
                  className={`${
                    subNavActive === "Staff"
                      ? "!border-l-2 !border-[#123909]"
                      : ""
                  } !bg-[unset] !text-gray-600 border-l-2 border-transparent`}
                >
                  <span className="ml-2">Staff</span>
                </button>
              </li>
            </ul>
          </li>

          {store.credentials.data.role_is_developer === 1 && (
            <>
              <li
                className={` ${index === 13 ? "active" : ""} ${
                  userRole === "developer" ? "" : "hidden"
                }`}
              >
                <button
                  onClick={(e) => handleChangeSetting(13, e)}
                  className="p-1 pl-4"
                >
                  Developer
                </button>
              </li>

              <li
                className={`${index === 14 ? "active" : ""} ${
                  userRole === "developer" ? "" : "hidden"
                }`}
              >
                <button
                  onClick={(e) => handleChangeSetting(14, e)}
                  className="p-1 pl-4"
                >
                  Roles
                </button>
              </li>
            </>
          )}

          <li className={` ${index === 15 ? "active" : ""}`}>
            {/* {console.log(index)} */}
            <button
              onClick={(e) => {
                handleChangeSetting(15, e);
                handleCategoryCollapse();
                handleChangeSettingInner(3, e);
                handleSubNavActive("discount-category", 15);
              }}
              className="p-1 pl-4"
            >
              <div className="flex items-center justify-between">
                <span>Discount</span>
                <BsChevronRight
                  className={` ${
                    categoryCollapse ? "-rotate-90" : "rotate-90"
                  }`}
                />
              </div>
            </button>
            <ul
              className={`${
                categoryCollapse ? "!block" : ""
              } hidden bg-white h`}
            >
              <li className="text-gray-600 p-1 pl-8">
                <button
                  onClick={(e) => {
                    handleChangeSettingInner(3, e);
                    handleSubNavActive("discount-category", 15);
                  }}
                  className={`${
                    subNavActive === "discount-category"
                      ? "!border-l-2 !border-[#123909]"
                      : ""
                  } !bg-[unset] !text-gray-600 border-l-2 border-transparent`}
                >
                  <span className="ml-2">Category</span>
                </button>
              </li>
              <li className="text-gray-600 p-1 pl-8">
                <button
                  onClick={(e) => {
                    handleChangeSettingInner(4, e);
                    handleSubNavActive("discount-list", 15);
                  }}
                  className={`${
                    subNavActive === "discount-list"
                      ? "!border-l-2 !border-[#123909]"
                      : ""
                  } !bg-[unset] !text-gray-600 border-l-2 border-transparent`}
                >
                  <span className="ml-2">Primary</span>
                </button>
              </li>
              <li className="text-gray-600 p-1 pl-8">
                <button
                  onClick={(e) => {
                    handleChangeSettingInner(5, e);
                    handleSubNavActive("additional-list", 15);
                  }}
                  className={`${
                    subNavActive === "additional-list"
                      ? "!border-l-2 !border-[#123909]"
                      : ""
                  } !bg-[unset] !text-gray-600 border-l-2 border-transparent`}
                >
                  <span className="ml-2">Additional</span>
                </button>
              </li>
            </ul>
          </li>

          <li className={` ${index === 16 ? "active" : ""}`}>
            <button
              onClick={(e) => handleChangeSetting(16, e)}
              className="p-1 pl-4"
            >
              Staff
            </button>
          </li>
          <li
            className={` ${
              index === 17 || (index === 17 && isGreaterThanEndYear)
                ? "active"
                : ""
            }`}
          >
            <button
              onClick={(e) => handleChangeSetting(17, e)}
              className="p-1 pl-4"
            >
              School Year
            </button>
          </li>
          {store.credentials.data.role_is_developer === 1 && (
            <li className={` ${index === 18 ? "active" : ""}`}>
              <button
                onClick={(e) => handleChangeSetting(18, e)}
                className="p-1 pl-4"
              >
                System Mode
              </button>
            </li>
          )}
        </ul>
      </aside>
    </>
  );
};

export default ModalSettingsNav;
