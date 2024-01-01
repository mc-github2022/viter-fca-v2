import React from "react";
import { FaBars } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { StoreContext } from "@/components/store/StoreContext";
import { setIsShowModal } from "@/components/store/StoreAction";
import ModalSettingsNav from "./ModalSettingsNav";
import Department from "@/components/pages/developer/settings/department/Department";

const ModalSettings = ({ setIsShowSettings }) => {
  const [showSideNav, setShowSideNav] = React.useState(false);
  const { store, dispatch } = React.useContext(StoreContext);

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
        <div className="modal__main w-full  h-screen relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-content-center grid-cols-1 max-w-[900px] max-h-[700px]  ">
          <div
            className={`${
              showSideNav ? "overflow-y-hidden lg:overflow-y-auto" : ""
            }  m-2 my-4 overflow-y-auto overflow-x-hidden relative custom__scroll`}
          >
            <div className=" modal__settings__header  p-2 uppercase flex sticky top-0 justify-between border-b border-line bg-primary z-30">
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
            <div className="wrapper flex gap-2 bg-primary">
              <ModalSettingsNav showSideNav={showSideNav} />
              <main
                className={`${
                  showSideNav ? "lg:-left-[220px]" : "lg:left-0]"
                }  modal__settings__main relative p-2 w-full border-l border-line lg:pl-5`}
              >
                <Department />
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSettings;
