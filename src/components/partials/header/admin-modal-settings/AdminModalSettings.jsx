import Department from "@/components/pages/developer/settings/department/Department";
import Discount from "@/components/pages/developer/settings/discount/Discount";
import GradeLevel from "@/components/pages/developer/settings/grade-level/GradeLevel.jsx";
import LearningType from "@/components/pages/developer/settings/learning-type/LearningType.jsx";
import Notifications from "@/components/pages/developer/settings/notifications/Notifications";
import ParentRelationship from "@/components/pages/developer/settings/parent-relationship/ParentRelationship.jsx";
import RequirementFinance from "@/components/pages/developer/settings/requirement-finance/RequirementFinance.jsx";
import RequirementIt from "@/components/pages/developer/settings/requirement-it/RequirementIt";
import RequirementRegistrar from "@/components/pages/developer/settings/requirement-registrar/RequirementRegistrar.jsx";
import Roles from "@/components/pages/developer/settings/roles/Roles";
import Scheme from "@/components/pages/developer/settings/scheme/Scheme";
import Staff from "@/components/pages/developer/settings/staff/Staff";
import SystemMode from "@/components/pages/developer/settings/system-mode/SystemMode";
import TuitionCategory from "@/components/pages/developer/settings/tuition-category/TuitionCategory";
import UserOther from "@/components/pages/developer/settings/user-other/UserOther";
import UserSystem from "@/components/pages/developer/settings/user-system/UserSystem";
import { setIsShowModal } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import React from "react";
import { FaBars } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import ModalSettingsNav from "./AdminModalSettingsNav";
const AdminModalSettings = ({ setIsShowSettings }) => {
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
        className={`modal modal--settings ${store.isShowModal ? "show" : ""} `}>
        <div className="modal__backdrop bg-black/30"></div>
        <div className="modal__main  w-full  h-screen flex justify-center items-center p-3 lg:p-5 ">
          <div className="relative w-full max-w-[1065px] h-[calc(100vh-80px)] lg:h-[calc(100vh-180px)] custom__scroll overflow-y-hidden">
            <div className=" modal__settings__header p-2 uppercase flex justify-between border-b border-line z-30 bg-primary ">
              <div className="flex item-center gap-4">
                <button
                  className="text-base tooltip tooltip--bottom z-50 !-translate-y-0 md:block"
                  onClick={handleShowSideNav}
                  data-tooltip="Menu">
                  <FaBars />
                </button>
                <h5 className="mb-0 font-normal pl-2">Settings</h5>
              </div>
              <button onClick={handleCloseSettings}>
                <LiaTimesSolid />
              </button>
            </div>
            <div className="wrapper flex gap-2 bg-primary p-2 lg:p-5 lg:pl-0 h-[calc(100vh-120px)] lg:h-[calc(100vh-220px)]   overflow-x-hidden ">
              <ModalSettingsNav
                showSideNav={showSideNav}
                setIndex={setIndex}
                index={index}
                setShowSideNav={setShowSideNav}
              />
              <main
                className={`${
                  showSideNav ? "lg:-left-[210px]" : "lg:left-[0px]"
                } p-2 lg:px-5 lg:py-0 max-w-[600px] w-full relative transition-all duration-300 ease-timing-nav `}>
                <Department index={index} />
                <Notifications index={index} />
                <ParentRelationship index={index} />
                <GradeLevel index={index} />
                <LearningType index={index} />
                <RequirementRegistrar index={index} />
                <RequirementFinance index={index} />
                <RequirementIt index={index} />
                <TuitionCategory index={index} />
                <Scheme index={index} />
                <UserOther index={index} />
                <Roles index={index} />
                <Discount index={index} />
                <Staff index={index} />
                <SystemMode index={index} />
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminModalSettings;