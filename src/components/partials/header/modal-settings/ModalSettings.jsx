import Department from "@/components/pages/developer/settings/department/Department";
import Notifications from "@/components/pages/developer/settings/notifications/Notifications";
import { setIsShowModal } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import React from "react";
import { FaBars } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import ModalSettingsNav from "./ModalSettingsNav";
const ModalSettings = ({ setIsShowSettings }) => {
  const [showSideNav, setShowSideNav] = React.useState(false);
  const { store, dispatch } = React.useContext(StoreContext);

  const [index, setIndex] = React.useState(1);

  const handleShowSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  const handleCloseSettings = () => {
    dispatch(setIsShowModal(false));
    setTimeout(() => {
      setIsShowSettings(false);
      dispatch(setIsShowModal(true));
    }, 200);
  };
  return (
    <>
      <div
        className={`modal modal--settings ${store.isShowModal ? "show" : ""} `}
      >
        <div className="modal__backdrop bg-black/30"></div>
        <div className="modal__main  w-full  h-screen flex justify-center items-center p-5 ">
          <div className="relative w-full max-w-[1065px] h-[calc(100vh-80px)] lg:h-[calc(100vh-280px)]">
            <div className=" modal__settings__header p-2 uppercase flex justify-between border-b border-line z-30 bg-primary ">
              <div className="flex item-center gap-4">
                <button className="text-base" onClick={handleShowSideNav}>
                  <FaBars />
                </button>
                <h5 className="mb-0 font-normal">Settings</h5>
              </div>
              <button onClick={handleCloseSettings}>
                <LiaTimesSolid />
              </button>
            </div>
            <div className="wrapper flex gap-2 bg-primary p-5 h-[calc(100vh-120px)] lg:h-[calc(100vh-320px)]   overflow-x-hidden ">
              <ModalSettingsNav
                showSideNav={showSideNav}
                setIndex={setIndex}
                setShowSideNav={setShowSideNav}
              />
              <main className="p-2 lg:p-5 max-w-[600px] w-full">
                <Department index={index} />
                <Notifications index={index} />
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSettings;
