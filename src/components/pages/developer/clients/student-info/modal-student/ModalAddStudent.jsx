import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import TableSpinner from "@/components/partials/spinners/TableSpinner.jsx";
import { setIsAdd } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { FaBars } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import StudentCodeOfConduct from "./StudentCodeOfConduct.jsx";
import StudentParentCommitment from "./StudentParentCommitment.jsx";
import StudentParentConsent from "./StudentParentConsent.jsx";
import StudentParentDeclaration from "./StudentParentDeclaration.jsx";
import StudentPaymentScheme from "./StudentPaymentScheme.jsx";
import StudentProfileForm from "./StudentProfileForm.jsx";

const ModalAddStudent = ({ itemEdit, parent, schoolYear }) => {
  const [showSideNav, setShowSideNav] = React.useState(false);
  const { store, dispatch } = React.useContext(StoreContext);
  const [index, setIndex] = React.useState(1);

  const { error, data: gradeLevel } = useQueryData(
    "/v2/dev-grade-level", // endpoint
    "get", // method
    "gradeLevel" // key
  );

  const {
    isLoading,
    isFetching,
    data: studentByCurrentSyId,
  } = useQueryData(
    `/v2/dev-students-payment-scheme/read-student-by-current-sy-id/${
      itemEdit ? itemEdit?.students_aid : 0
    }`, // endpoint
    "get", // method
    "read-student-by-current-sy-id-parent" // key
  );

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  const handleShowSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  const handleChangeProfile = (index) => {
    setIndex(index);
  };

  return (
    <>
      <div className={`modal modal--settings show `}>
        <div className="modal__backdrop bg-black bg-opacity-0"></div>
        <div className="z-50 h-full w-full flex justify-center items-center relative ">
          <div className=" max-h-[calc(100%-200px)] md:max-h-[calc(100%-150px)] h-full max-w-[1065px] mx-4 md:mx-7  w-full -translate-y-5">
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
                  Student Information{" "}
                  {/* <span className="font-bold">- {itemEdit.student_fullname}</span> */}
                </h5>
              </div>

              <div className="flex items-center gap-4">
                <button onClick={handleClose}>
                  <LiaTimesSolid />
                </button>
              </div>
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

                  {itemEdit && (
                    <>
                      <li
                        className={`${
                          index === 6 ? "bg-accent text-primary" : ""
                        }`}
                      >
                        <button
                          onClick={() => handleChangeProfile(6)}
                          className="p-1 pl-4 "
                        >
                          Payment Scheme
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
                    </>
                  )}
                </ul>
              </aside>
              <main
                className={` p-5 pb-20 py-3 overflow-y-auto max-h-[100%] h-full custom__scroll w-full transition-all `}
              >
                <span className="block mb-3 uppercase text-accent font-normal text-[20px]">
                  Parent Account <span className="hidden md:inline">- </span>
                  <span className="block md:inline">
                    {parent?.data[0].parents_fname}{" "}
                    {parent?.data[0].parents_lname}
                  </span>
                </span>

                {isLoading || isFetching ? (
                  <TableSpinner />
                ) : (
                  <>
                    {index === 1 && (
                      <StudentProfileForm
                        index={index}
                        showSideNav={showSideNav}
                        itemEdit={{
                          ...itemEdit,
                          ...studentByCurrentSyId?.data[0],
                        }}
                        gradeLevel={gradeLevel}
                        schoolYear={schoolYear}
                      />
                    )}
                    {itemEdit && (
                      <>
                        {index === 2 && (
                          <StudentCodeOfConduct
                            index={index}
                            showSideNav={showSideNav}
                            itemEdit={{
                              ...itemEdit,
                              ...studentByCurrentSyId?.data[0],
                            }}
                            gradeLevel={gradeLevel}
                            schoolYear={schoolYear}
                          />
                        )}
                        {index === 3 && (
                          <StudentParentDeclaration
                            index={index}
                            showSideNav={showSideNav}
                            itemEdit={{
                              ...itemEdit,
                              ...studentByCurrentSyId?.data[0],
                            }}
                            gradeLevel={gradeLevel}
                          />
                        )}
                        {index === 4 && (
                          <StudentParentConsent
                            index={index}
                            showSideNav={showSideNav}
                            itemEdit={{
                              ...itemEdit,
                              ...studentByCurrentSyId?.data[0],
                            }}
                            gradeLevel={gradeLevel}
                          />
                        )}
                        {index === 5 && (
                          <StudentParentCommitment
                            index={index}
                            showSideNav={showSideNav}
                            itemEdit={{
                              ...itemEdit,
                              ...studentByCurrentSyId?.data[0],
                            }}
                            gradeLevel={gradeLevel}
                          />
                        )}

                        {index === 6 && (
                          <StudentPaymentScheme
                            index={index}
                            showSideNav={showSideNav}
                            itemEdit={{
                              ...itemEdit,
                              ...studentByCurrentSyId?.data[0],
                            }}
                            gradeLevel={gradeLevel}
                          />
                        )}
                      </>
                    )}
                  </>
                )}
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAddStudent;
