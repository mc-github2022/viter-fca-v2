import React from "react";
import { FaBars } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import StudentCodeOfConduct from "./StudentCodeOfConduct/StudentCodeOfConduct.jsx";
import StudentParentCommitment from "./StudentParentCommitment/StudentParentCommitment.jsx";
import StudentParentConsent from "./StudentParentConsent/StudentParentConsent.jsx";
import StudentParentDeclaration from "./StudentParentDeclaration/StudentParentDeclaration.jsx";
import StudentProfileForm from "./StudentProfile/StudentProfileForm.jsx";

const ModalEditStudent = ({ setIsViewInfo, itemEdit }) => {
  const [showSideNav, setShowSideNav] = React.useState(false);

  const [index, setIndex] = React.useState(1);

  const handleClose = () => {
    setIsViewInfo(false);
  };

  const handleShowSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  const handleChangeProfile = (index) => {
    setIndex(index);
  };
  return (
    <>
      <div className="fixed top-0 left-0 z-20 h-screen w-full">
        <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-40"></div>
        <div className="z-50 h-full w-full flex justify-center items-center relative ">
          <div className=" max-h-[calc(100%-200px)] md:max-h-[calc(100%-350px)] h-full max-w-[1065px] mx-7  w-full -translate-y-5">
            <div className=" modal__settings__header p-2 uppercase flex justify-between border-b border-line z-30 bg-primary ">
              <div className="flex item-center gap-4">
                <button
                  className="text-base tooltip tooltip--bottom z-50 !-translate-y-0"
                  onClick={handleShowSideNav}
                  data-tooltip="Menu"
                >
                  <FaBars />
                </button>
                <h5 className="mb-0 font-normal">
                  Student Information -{" "}
                  {/* {`${itemEdit.student_info_fname}, ${itemEdit.student_info_lname}`} */}
                </h5>
              </div>
              <button onClick={handleClose}>
                <LiaTimesSolid />
              </button>
            </div>
            <div
              className={`flex gap-3 h-full  bg-white overflow-hidden relative`}
            >
              <aside
                className={`${
                  showSideNav ? "!hidden" : "block"
                } md:relative transition-all overflow-y-auto  max-h-[100%] h-full custom__scroll bg-secondary max-w-[200px] w-full absolute z-30 hidden md:block `}
              >
                <ul className="mt-2 ">
                  <li
                    className={`${index === 1 ? "bg-accent text-primary" : ""}`}
                  >
                    <button
                      onClick={() => handleChangeProfile(1)}
                      className="p-1 pl-4 "
                    >
                      Profile
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
                      Code of Conduct
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
                      Parent Declaration
                    </button>
                  </li>

                  <li
                    className={` ${
                      index === 4 ? "bg-accent text-primary" : ""
                    }`}
                  >
                    <button
                      onClick={() => handleChangeProfile(4)}
                      className="p-1 pl-4 "
                    >
                      Parent Consent
                    </button>
                  </li>

                  <li
                    className={` ${
                      index === 5 ? "bg-accent text-primary" : ""
                    }`}
                  >
                    <button
                      onClick={() => handleChangeProfile(5)}
                      className="p-1 pl-4 "
                    >
                      Commitment Form
                    </button>
                  </li>
                </ul>
              </aside>
              <main
                className={` p-5 overflow-y-auto max-h-[100%] h-full custom__scroll w-full transition-all `}
              >
                {index === 1 && (
                  <StudentProfileForm
                    index={index}
                    setIsViewInfo={setIsViewInfo}
                    showSideNav={showSideNav}
                    itemEdit={itemEdit}
                  />
                )}
                {index === 2 && (
                  <StudentCodeOfConduct
                    index={index}
                    setIsViewInfo={setIsViewInfo}
                    showSideNav={showSideNav}
                    itemEdit={itemEdit}
                  />
                )}
                {index === 3 && (
                  <StudentParentDeclaration
                    index={index}
                    setIsViewInfo={setIsViewInfo}
                    showSideNav={showSideNav}
                    itemEdit={itemEdit}
                  />
                )}
                {index === 4 && (
                  <StudentParentConsent
                    index={index}
                    setIsViewInfo={setIsViewInfo}
                    showSideNav={showSideNav}
                    itemEdit={itemEdit}
                  />
                )}
                {index === 5 && (
                  <StudentParentCommitment
                    index={index}
                    setIsViewInfo={setIsViewInfo}
                    showSideNav={showSideNav}
                    itemEdit={itemEdit}
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

export default ModalEditStudent;
