import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import NoData from "@/components/partials/NoData.jsx";
import TableLoading from "@/components/partials/TableLoading.jsx";
import ModalSuccess from "@/components/partials/modals/ModalSuccess.jsx";
import TableSpinner from "@/components/partials/spinners/TableSpinner.jsx";
import { setIsAdd } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { FaBars } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import StudentCodeOfConduct from "./StudentCodeOfConduct/StudentCodeOfConduct.jsx";
import StudentParentCommitment from "./StudentParentCommitment/StudentParentCommitment.jsx";
import StudentParentConsent from "./StudentParentConsent/StudentParentConsent.jsx";
import StudentParentDeclaration from "./StudentParentDeclaration/StudentParentDeclaration.jsx";
import ModalRevertOrSavePayment from "./StudentPaymentScheme/ModalRevertOrSavePayment.jsx";
import StudentPaymentScheme from "./StudentPaymentScheme/StudentPaymentScheme.jsx";
import StudentProfileForm from "./StudentProfile/StudentProfileForm.jsx";

const ModalEditStudent = ({ setIsViewInfo, dataItem }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [showSideNav, setShowSideNav] = React.useState(false);
  // accept or notify parent
  const [isSavePaymentScheme, setIsSavePaymentScheme] = React.useState(true);
  const [itemData, setItemData] = React.useState(null);
  const [id, setId] = React.useState(null);

  const [index, setIndex] = React.useState(1);

  console.log(dataItem);

  const handleClose = () => {
    dispatch(setIsAdd(false));
    setIsViewInfo(false);
  };

  const handleShowSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  const handleChangeProfile = (index) => {
    setIndex(index);
  };

  const {
    isLoading,
    isFetching,
    data: studentByCurrentSyId,
  } = useQueryData(
    `/v2/dev-students-payment-scheme/read-student-by-current-sy-id/${dataItem?.students_aid}`, // endpoint
    "get", // method
    "read-student-by-current-sy-id" // key
  );

  console.log(dataItem);

  return (
    <>
      <div className="modal modal--settings show ">
        <div className="modal__backdrop bg-black bg-opacity-0"></div>
        <div className="z-50 h-full w-full flex justify-center items-center relative ">
          <div className=" max-h-[calc(100%-200px)] md:max-h-[calc(100%-150px)] h-full max-w-[1065px] mx-2 md:mx-7  w-full -translate-y-5">
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
                  <span className="hidden md:inline"> - </span>
                  <span className="font-bold block md:inline">
                    {dataItem.student_fullname}
                  </span>
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

                  <li
                    className={`${index === 6 ? "bg-accent text-primary" : ""}`}
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
                </ul>
              </aside>
              <main
                className={` p-5 py-3 overflow-y-auto max-h-[100%] h-full custom__scroll w-full transition-all `}
              >
                {(store.credentials.data.role_is_admin === 1 ||
                  store.credentials.data.role_is_developer === 1) && (
                  <span className="block mb-3 uppercase text-accent font-normal text-[20px]">
                    Parent Account <span className="hidden md:inline">- </span>
                    <span className="block md:inline">
                      {dataItem.parent_fullname}
                    </span>
                  </span>
                )}

                {(isLoading || studentByCurrentSyId?.data.length === 0) && (
                  <div>
                    {isLoading ? (
                      <TableLoading count={20} cols={3} />
                    ) : (
                      <NoData />
                    )}
                  </div>
                )}

                {!isLoading && isFetching && <TableSpinner />}
                {studentByCurrentSyId?.data.length > 0 && (
                  <>
                    {index === 1 && (
                      <StudentProfileForm
                        index={index}
                        setIsViewInfo={setIsViewInfo}
                        showSideNav={showSideNav}
                        dataItem={{
                          ...dataItem,
                          ...studentByCurrentSyId?.data[0],
                        }}
                        handleClose={handleClose}
                      />
                    )}
                    {index === 2 && (
                      <StudentCodeOfConduct
                        index={index}
                        showSideNav={showSideNav}
                        dataItem={{
                          ...studentByCurrentSyId?.data[0],
                        }}
                        handleClose={handleClose}
                      />
                    )}
                    {index === 3 && (
                      <StudentParentDeclaration
                        index={index}
                        showSideNav={showSideNav}
                        dataItem={{
                          ...studentByCurrentSyId?.data[0],
                        }}
                        handleClose={handleClose}
                      />
                    )}
                    {index === 4 && (
                      <StudentParentConsent
                        index={index}
                        showSideNav={showSideNav}
                        dataItem={{
                          ...studentByCurrentSyId?.data[0],
                        }}
                        handleClose={handleClose}
                      />
                    )}
                    {index === 5 && (
                      <StudentParentCommitment
                        index={index}
                        showSideNav={showSideNav}
                        dataItem={{
                          ...studentByCurrentSyId?.data[0],
                        }}
                        handleClose={handleClose}
                      />
                    )}
                    {index === 6 && (
                      <StudentPaymentScheme
                        index={index}
                        showSideNav={showSideNav}
                        dataItem={{
                          ...studentByCurrentSyId?.data[0],
                        }}
                        setIsSavePaymentScheme={setIsSavePaymentScheme}
                        setItemData={setItemData}
                        handleClose={handleClose}
                      />
                    )}
                  </>
                )}
              </main>
            </div>
          </div>
        </div>
      </div>
      {store.success && <ModalSuccess />}
      {store.isSettingConfirm && (
        <ModalRevertOrSavePayment
          mysqlApiRevertOrSavePayment={`/v2/dev-students-payment-scheme/${dataItem?.current_students_student_id}`}
          msg={`Are you sure you want to ${
            isSavePaymentScheme ? "save" : "revert"
          } this record ?`}
          item={itemData}
          isSavePaymentScheme={isSavePaymentScheme}
          setIsViewInfo={setIsViewInfo}
        />
      )}
    </>
  );
};

export default ModalEditStudent;
