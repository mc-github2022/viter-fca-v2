import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import React from "react";
import { FaBars } from "react-icons/fa";
import { FiEdit2, FiPlus } from "react-icons/fi";
import { LiaTimesSolid } from "react-icons/lia";
import RequirementRegistrar from "./requirement-registrar/RequirementRegistrar.jsx";

const ModalRequirements = ({ setViewRequirements, itemEdit, schoolYear }) => {
  const [showSideNav, setShowSideNav] = React.useState(false);
  const [index, setIndex] = React.useState(1);

  const { isLoading, data: registrarRequirements } = useQueryData(
    `/v2/dev-requirement-registrar`, // endpoint
    "get", // method
    "registrar-requirements" // key
  );

  const {
    isLoading: reqLoading,
    isFetching: reqFetching,
    data: studentRequirement,
  } = useQueryData(
    `/v2/dev-students-requirement/${itemEdit.students_aid}/${itemEdit.students_aid}`, // endpoint
    "get", // method
    "students-requirements", // key
    {},
    itemEdit.students_aid
  );

  const handleClose = () => {
    setViewRequirements(false);
  };

  const handleShowSideNav = () => {
    console.log("showSideNav", showSideNav);
    setShowSideNav(!showSideNav);
  };

  const handleChangeProfile = (index) => {
    setIndex(index);
  };

  return (
    <>
      <div className="fixed top-0 left-0 z-20 w-full h-screen modal-requirements">
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
        <div className="relative z-50 flex items-center justify-center w-full h-full ">
          <div className=" max-h-[calc(100%-200px)] md:max-h-[calc(100%-120px)] h-full max-w-[1065px] mx-7  w-full -translate-y-5">
            <div className="z-30 flex justify-between p-2 uppercase border-b modal__settings__header border-line bg-primary">
              <div className="flex gap-4 item-center">
                <button
                  className="text-base tooltip tooltip--bottom z-50 !-translate-y-0"
                  onClick={handleShowSideNav}
                  data-tooltip="Menu"
                >
                  <FaBars />
                </button>
                <h5 className="mb-0 font-normal">
                  Student Information{" "}
                  <span className="hidden md:inline">-</span>{" "}
                  <span className="font-bold block md:inline-block">
                    {itemEdit.students_fname} {itemEdit.students_lname}
                  </span>
                </h5>
              </div>
              <button onClick={handleClose}>
                <LiaTimesSolid />
              </button>
            </div>
            <div
              className={`flex gap-3 h-full  bg-primary overflow-hidden relative`}
            >
              <aside
                className={` ${
                  showSideNav ? "show" : ""
                } md:relative transition-all overflow-y-auto  max-h-[100%] h-full custom__scroll bg-secondary max-w-[200px] w-full absolute z-30  `}
              >
                <ul className="mt-2 ">
                  <li
                    className={`${index === 1 ? "bg-accent text-primary" : ""}`}
                  >
                    <button
                      onClick={() => handleChangeProfile(1)}
                      className="p-1 pl-4 "
                    >
                      Registrar
                    </button>
                  </li>
                  <li
                    className={` ${
                      index === 2 ? "bg-accent text-primary" : ""
                    }`}
                  >
                    <button
                      onClick={() => handleChangeProfile(2)}
                      className="p-1 pl-4 "
                    >
                      Finance
                    </button>
                  </li>

                  <li
                    className={` ${
                      index === 3 ? "bg-accent text-primary" : ""
                    }`}
                  >
                    <button
                      onClick={() => handleChangeProfile(3)}
                      className="p-1 pl-4 "
                    >
                      Information Technology
                    </button>
                  </li>
                </ul>
              </aside>
              <main
                className={` p-5 overflow-y-auto max-h-[100%] h-full custom__scroll w-full transition-all bg-primary`}
              >
                {index === 1 && (
                  <RequirementRegistrar
                    itemEdit={itemEdit}
                    registrarRequirements={registrarRequirements}
                    isLoading={isLoading}
                    studentRequirement={studentRequirement}
                    schoolYear={schoolYear}
                    reqLoading={reqLoading}
                    reqFetching={reqFetching}
                  />
                )}
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalRequirements;
