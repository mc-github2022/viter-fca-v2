import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { FaBars } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import StudentProfile from "./StudentProfile/StudentProfile.jsx";

const ModalEditStudent = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [showSideNav, setShowSideNav] = React.useState(false);
  const [index, setIndex] = React.useState(1);

  const handleShowSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  const handleChangeProfile = (index, e) => {
    e.preventDefault;
    setIndex(index);
    dispatch(setIsAdd(false));
    setShowSideNav(false);
  };
  return (
    <div>
      <div
        className={`modal modal--settings ${store.isShowModal ? "show" : ""} `}
      >
        <div className="modal__backdrop bg-black/30"></div>
        <div className="modal__main w-full  h-screen flex justify-center items-center p-3 lg:p-5">
          <div className="relative w-full max-w-[1065px] h-[calc(100vh-80px)] lg:h-[calc(100vh-180px)] custom__scroll overflow-y-hidden">
            <div className=" modal__settings__header p-2 uppercase flex justify-between border-b border-line z-30 bg-primary ">
              <div className="flex item-center gap-4">
                <button
                  className="text-base tooltip tooltip--bottom z-50 !-translate-y-0"
                  onClick={handleShowSideNav}
                  data-tooltip="Menu"
                >
                  <FaBars />
                </button>
                <h5 className="mb-0 font-normal">Student Profile</h5>
              </div>
              <button>
                <LiaTimesSolid />
              </button>
            </div>
            <div className="wrapper  flex gap-2 bg-primary h-[calc(100vh-120px)] lg:h-[calc(100vh-220px)] overflow-x-hidden custom__scroll ">
              <aside
                className={`${
                  showSideNav
                    ? "left-0 lg:-left-[250px]"
                    : "-left-[250px] lg:left-0"
                } modal__settings__nav z-10 ease-timing-nav top-0 h-[calc(100%-40px)] lg:h-full w-[195px] absolute lg:sticky   transition-all duration-300`}
              >
                <ul className="py-5  mb-10  ">
                  <li className={`${index === 1 ? "active" : ""}`}>
                    <button
                      onClick={(e) => handleChangeProfile(1, e)}
                      className="p-1 pl-4"
                    >
                      Profile
                    </button>
                  </li>
                  <li className={` ${index === 2 ? "active" : ""}`}>
                    <button
                      onClick={(e) => handleChangeProfile(2, e)}
                      className="p-1 pl-4"
                    >
                      Code of Conduct
                    </button>
                  </li>

                  <li className={` ${index === 3 ? "active" : ""}`}>
                    <button
                      onClick={(e) => handleChangeProfile(3, e)}
                      className="p-1 pl-4"
                    >
                      Parent Declaration
                    </button>
                  </li>

                  <li className={` ${index === 4 ? "active" : ""}`}>
                    <button
                      onClick={(e) => handleChangeProfile(4, e)}
                      className="p-1 pl-4"
                    >
                      Parent Consent
                    </button>
                  </li>

                  <li className={` ${index === 5 ? "active" : ""}`}>
                    <button
                      onClick={(e) => handleChangeProfile(5, e)}
                      className="p-1 pl-4"
                    >
                      Commitment Form
                    </button>
                  </li>
                </ul>
              </aside>
              <main
                className={`${
                  showSideNav ? "lg:-left-[210px]" : "lg:left-[0px]"
                } p-2 lg:px-5 lg:py-0 max-w-[800px] w-full relative transition-all duration-300 ease-timing-nav `}
              >
                <StudentProfile index={index} />
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEditStudent;
