import Department from "@/components/pages/developer/settings/Department/Department";
import Discount from "@/components/pages/developer/settings/discount/Discount";
import EmailTemplates from "@/components/pages/developer/settings/email-templates/EmailTemplates";
import GradeLevel from "@/components/pages/developer/settings/grade-level/GradeLevel.jsx";
import LearningType from "@/components/pages/developer/settings/learning-type/LearningType.jsx";
import Notifications from "@/components/pages/developer/settings/notifications/Notifications";
import ParentRelationship from "@/components/pages/developer/settings/parent-relationship/ParentRelationship.jsx";
import RequirementFinance from "@/components/pages/developer/settings/requirement-finance/RequirementFinance.jsx";
import RequirementIt from "@/components/pages/developer/settings/requirement-it/RequirementIt";
import RequirementRegistrar from "@/components/pages/developer/settings/requirement-registrar/RequirementRegistrar.jsx";
import Roles from "@/components/pages/developer/settings/roles/Roles";
import ScheduleOfFees from "@/components/pages/developer/settings/schedule-of-fee/ScheduleOfFees";
import Scheme from "@/components/pages/developer/settings/scheme/Scheme";
import SchoolYear from "@/components/pages/developer/settings/school-year/SchoolYear";
import Staff from "@/components/pages/developer/settings/staff/Staff";
import SystemMode from "@/components/pages/developer/settings/system-mode/SystemMode";
import TuitionCategory from "@/components/pages/developer/settings/tuition-category/TuitionCategory";
import UserOther from "@/components/pages/developer/settings/user-other/UserOther";
import UserOtherParent from "@/components/pages/developer/settings/user-other/parent/UserOtherParent";
import UserOtherStaff from "@/components/pages/developer/settings/user-other/staff/UserOtherStaff";
import UserSystem from "@/components/pages/developer/settings/user-system/UserSystem";
import {
  setIndexItem,
  setIsShowModal,
  setIsShowSetting,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import ModalSettingsNav from "./ModalSettingsNav";

const ModalSettings = ({ setIsShowSettings, isGreaterThanEndYear = false }) => {
  const [showSideNav, setShowSideNav] = React.useState(false);
  const { store, dispatch } = React.useContext(StoreContext);

  const [index, setIndex] = React.useState(isGreaterThanEndYear ? 17 : 1);
  const [indexInner, setIndexInner] = React.useState(1);

  const handleShowSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  const handleCloseSettings = (e) => {
    dispatch(setIsShowModal(false));
    dispatch(setIsShowSetting(false));
    setTimeout(() => {
      setIsShowSettings(false);
      dispatch(setIsShowModal(true));

      // if (!isShowSetting) {
      //   document.querySelector("body").classList.add("no--scroll");
      // } else {
      //   document.querySelector("body").classList.remove("no--scroll");
      // }
    }, 200);
  };

  return (
    <>
      <div
        className={`modal modal--settings ${store.isShowModal ? "show" : ""} `}
      >
        <div className="modal__backdrop bg-black bg-opacity-0"></div>
        <div className="modal__main  w-full  h-screen flex justify-center items-center p-3 lg:p-5 ">
          <div className="relative w-full max-w-[1065px] h-[calc(100vh-80px)] lg:h-[calc(100vh-180px)] custom__scroll overflow-y-hidden">
            <div className=" modal__settings__header p-2 uppercase flex justify-between border-b border-line z-30 bg-primary ">
              <div className="flex item-center gap-4">
                <button
                  className="text-base tooltip tooltip--bottom z-50 !-translate-y-0 md:block"
                  onClick={() => handleShowSideNav()}
                  data-tooltip="Menu"
                >
                  <FaBars />
                </button>
                <h5 className="mb-0 font-normal pl-2">Settings</h5>
              </div>
              <button onClick={handleCloseSettings}>
                <LiaTimesSolid />
              </button>
            </div>
            <div
              className={`wrapper lg:flex gap-2 bg-primary p-2 lg:p-5 !pb-10 lg:pl-0 h-[calc(100vh-120px)] lg:h-[calc(100vh-220px)] overflow-hidden`}
            >
              {/* <div className="wrapper flex gap-2 bg-primary p-2 lg:p-5 lg:pl-0 h-[calc(100vh-120px)] lg:h-[calc(100vh-220px)] overflow-x-hidden "> */}
              <ModalSettingsNav
                showSideNav={showSideNav}
                setIndex={setIndex}
                setIndexInner={setIndexInner}
                index={index}
                setShowSideNav={setShowSideNav}
                isGreaterThanEndYear={isGreaterThanEndYear}
              />
              <main
                className={`${
                  showSideNav ? "lg:-left-[170px]" : "lg:left-[0px] "
                } p-2 lg:pl-5 lg:py-0 w-full relative overflow-y-auto custom__scroll transition-all duration-300 ease-timing-nav`}
              >
                <Department
                  index={index}
                  isGreaterThanEndYear={isGreaterThanEndYear}
                />
                <Notifications index={index} />
                <EmailTemplates index={index} />
                <ParentRelationship index={index} />
                <GradeLevel index={index} />
                <LearningType index={index} />
                <RequirementRegistrar index={index} />
                <RequirementFinance index={index} />
                <RequirementIt index={index} />
                <TuitionCategory index={index} />
                <Scheme index={index} />
                <ScheduleOfFees index={index} />
                {/* <UserOther index={index} indexInner={indexInner} /> */}
                <UserOtherParent index={index} indexInner={indexInner} />
                <UserOtherStaff index={index} indexInner={indexInner} />
                <UserSystem index={index} />
                <Roles index={index} />
                <Discount index={index} indexInner={indexInner} />
                <Staff index={index} />
                <SchoolYear
                  index={index}
                  isGreaterThanEndYear={isGreaterThanEndYear}
                />
                <SystemMode index={index} />
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSettings;
