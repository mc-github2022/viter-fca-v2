import { consoleLog } from "@/components/helpers/functions-general";
import { setIndexItem, setIsAdd } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React, { useState } from "react";
import { BsChevronRight } from "react-icons/bs";

const ModalSettingsNav = ({
  showSideNav,
  setIndex,
  setShowSideNav,
  setIndexInner,
  index,
  indexInner,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  let userRole = store.credentials.data.role_name.toLowerCase();

  const [btnCollapse, setbtnCollapse] = useState(false);
  const handleBtnCollapse = () => {
    setbtnCollapse(!btnCollapse);
  };

  const [subNavActive, setSubNavActive] = useState(true);
  const handleSubNavActive = () => {
    setSubNavActive(!subNavActive);
  };

  const handleChangeSetting = (index, e) => {
    dispatch(setIsAdd(false));
    e.preventDefault;
    setIndex(index);
    setShowSideNav(false);
    dispatch(setIndexItem(0));
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

          <li className={` ${index === 5 ? "active" : ""}`}>
            <button
              onClick={(e) => handleChangeSetting(5, e)}
              className="p-1 pl-4"
            >
              Learning Type
            </button>
          </li>

          <li className={` ${index === 6 ? "active" : ""}`}>
            <button
              onClick={(e) => handleChangeSetting(6, e)}
              className="p-1 pl-4"
            >
              Requirement - Registrar
            </button>
          </li>

          <li className={` ${index === 7 ? "active" : ""}`}>
            <button
              onClick={(e) => handleChangeSetting(7, e)}
              className="p-1 pl-4"
            >
              Requirement - Finance
            </button>
          </li>

          <li className={` ${index === 8 ? "active" : ""}`}>
            <button
              onClick={(e) => handleChangeSetting(8, e)}
              className="p-1 pl-4"
            >
              Requirement - IT
            </button>
          </li>

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
            <ul className={`${btnCollapse ? "!block" : ""} hidden bg-white`}>
              <li className="text-gray-600 p-1 pl-8">
                <button
                  onClick={(e) => {
                    handleChangeSettingInner(1, e);
                    handleSubNavActive();
                  }}
                  className={`${
                    subNavActive
                      ? "!border-l-2 !border-[#123909]"
                      : "border-l-2 border-transparent"
                  } !bg-[unset] !text-gray-600`}
                >
                  <span className="ml-2">Parent</span>
                </button>
              </li>
              <li className="text-gray-600 p-1 pl-8">
                <button
                  onClick={(e) => {
                    handleChangeSettingInner(122, e);
                    handleSubNavActive();
                  }}
                  className={`${
                    subNavActive
                      ? "border-l-2 border-transparent"
                      : "!border-l-2 !border-[#123909]"
                  } !bg-[unset] !text-gray-600`}
                >
                  <span className="ml-2">Staff</span>
                </button>
              </li>
            </ul>
          </li>

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

          <li className={`${index === 14 ? "active" : ""}`}>
            <button
              onClick={(e) => handleChangeSetting(14, e)}
              className="p-1 pl-4"
            >
              Roles
            </button>
          </li>

          <li className={` ${index === 15 ? "active" : ""}`}>
            <button
              onClick={(e) => handleChangeSetting(15, e)}
              className="p-1 pl-4"
            >
              Discount
            </button>
          </li>

          <li className={` ${index === 16 ? "active" : ""}`}>
            <button
              onClick={(e) => handleChangeSetting(16, e)}
              className="p-1 pl-4"
            >
              Staff
            </button>
          </li>
          <li className={` ${index === 17 ? "active" : ""}`}>
            <button
              onClick={(e) => handleChangeSetting(17, e)}
              className="p-1 pl-4"
            >
              System Mode
            </button>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default ModalSettingsNav;
