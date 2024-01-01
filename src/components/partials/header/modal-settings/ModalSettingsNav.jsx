import React from "react";
import { Link } from "react-router-dom";

const ModalSettingsNav = ({ showSideNav }) => {
  return (
    <>
      <aside
        className={`${
          showSideNav ? "lg:-left-[250px]" : "-left-[250px] lg:left-0"
        } modal__settings__nav z-10 lg:relative bg-primary  w-[250px] p-4  overflow-y-auto absolute h-[700px] lg:h-auto border-r border-line lg:border-none`}
      >
        <ul className="pb-5 overflow-auto h-[90%]">
          <li className="mb-4">
            <Link to="#">Department2222</Link>
          </li>
          <li className="mb-4">
            <Link to="#">Department</Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default ModalSettingsNav;
