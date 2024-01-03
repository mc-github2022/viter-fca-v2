import { setIsAdd } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";

const ModalSettingsNav = ({ showSideNav, setIndex, setShowSideNav }) => {
  const { dispatch } = React.useContext(StoreContext);

  const handleChangeSetting = (index, e) => {
    e.preventDefault;
    setIndex(index);
    dispatch(setIsAdd(false));
    setShowSideNav(false);
  };
  return (
    <>
      <aside
        className={`${
          showSideNav ? "left-4 lg:-left-[250px]" : "-left-[250px] lg:left-0"
        } modal__settings__nav z-10  bg-primary top-[40px] h-[calc(100%-40px)] lg:h-full w-[195px]  absolute lg:relative lg:top-0 border-r border-line transition-all duration-300 ease-in-out`}
      >
        <ul className="py-5 lg:pt-0 mb-10 overflow-y-auto h-full custom__scroll">
          <li className="mb-3">
            <button onClick={(e) => handleChangeSetting(1, e)}>
              Department
            </button>
          </li>
          <li className="mb-3">
            <button onClick={(e) => handleChangeSetting(2, e)}>
              Notification
            </button>
          </li>

          <li className="mb-3">
            <button onClick={(e) => handleChangeSetting(3, e)}>
              Parent Relationship
            </button>
          </li>

          <li className="mb-3">
            <button onClick={(e) => handleChangeSetting(4, e)}>
              Grade Level
            </button>
          </li>

          <li className="mb-3">
            <button onClick={(e) => handleChangeSetting(5, e)}>
              Learning Type
            </button>
          </li>

          <li className="mb-3">
            <button onClick={(e) => handleChangeSetting(6, e)}>
              Requirement - Registrar
            </button>
          </li>

          <li className="mb-3">
            <button onClick={(e) => handleChangeSetting(7, e)}>
              Requirement - Finance
            </button>
          </li>

          <li className="mb-3">
            <button onClick={(e) => handleChangeSetting(3)}>
              Requirement - IT
            </button>
          </li>

          <li className="mb-3">
            <button onClick={(e) => handleChangeSetting(3)}>
              Tuition Fee Category
            </button>
          </li>

          <li className="mb-3">
            <button onClick={(e) => handleChangeSetting(3)}>
              Tuition Fee Scheme
            </button>
          </li>

          <li className="mb-3">
            <button onClick={(e) => handleChangeSetting(3)}>
              Schedule of Fees
            </button>
          </li>

          <li className="mb-4">
            <button onClick={(e) => handleChangeSetting(3)}>Users</button>
          </li>

          <li className="mb-4">
            <button onClick={(e) => handleChangeSetting(3)}>Developer</button>
          </li>

          <li>
            <button onClick={(e) => handleChangeSetting(3)}>Roles</button>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default ModalSettingsNav;
