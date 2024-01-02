import { setIsAdd } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";

const ModalSettingsNav = ({ showSideNav, setIndex, setShowSideNav }) => {
  const { dispatch } = React.useContext(StoreContext);

  const handleChangeSetting = (index) => {
    setIndex(index);
    dispatch(setIsAdd(false));
    setShowSideNav(false);
  };
  return (
    <>
      <aside
        className={`${
          showSideNav ? "-left-0 lg:-left-[250px]" : "-left-[250px] lg:left-0"
        } modal__settings__nav z-10  bg-primary top-[40px] h-[calc(100%-40px)] lg:h-full w-[195px] p-4  absolute lg:static `}
      >
        <ul className="pb-5 mb-10 overflow-y-auto h-full custom__scroll">
          <li className="mb-4">
            <button onClick={() => handleChangeSetting(1)}>Department</button>
          </li>
          <li className="mb-4">
            <button onClick={() => handleChangeSetting(2)}>Notification</button>
          </li>

          <li className="mb-4">
            <button onClick={() => setIndex(3)}>Parent Relationship</button>
          </li>

          <li className="mb-4">
            <button onClick={() => setIndex(4)}>Grade Level</button>
          </li>

          <li className="mb-4">
            <button onClick={() => setIndex(5)}>Learning Type</button>
          </li>

          <li className="mb-4">
            <button onClick={() => setIndex(6)}>Requirement - Registrar</button>
          </li>

          <li className="mb-4">
            <button onClick={() => setIndex(7)}>Requirement - Finance</button>
          </li>

          <li className="mb-4">
            <button onClick={() => setIndex(8)}>Requirement - IT</button>
          </li>

          <li className="mb-4">
            <button onClick={() => setIndex(9)}>Tuition Fee Category</button>
          </li>

          <li className="mb-4">
            <button onClick={() => setIndex(10)}>Tuition Fee Scheme</button>
          </li>

          <li className="mb-4">
            <button onClick={() => setIndex(11)}>Schedule of Fees</button>
          </li>

          <li className="mb-4">
            <button onClick={() => setIndex(12)}>Users</button>
          </li>

          <li className="mb-4">
            <button onClick={() => setIndex(13)}>Developer</button>
          </li>

          <li>
            <button onClick={() => setIndex(14)}>Roles</button>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default ModalSettingsNav;
