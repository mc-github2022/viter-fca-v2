import useQueryData from "@/components/custom-hooks/useQueryData";
import {
  numberWithCommas,
  numberWithCommasToFixed,
} from "@/components/helpers/functions-general";
import NoData from "@/components/partials/NoData";
import TableLoading from "@/components/partials/TableLoading";
import { setIsShowModal } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { FaBars } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import AssessmentRateList from "./AssessmentRateList";
import AssessmentPrimaryDiscountList from "./AssessmentPrimaryDiscountList";
import AssessmentAdditionalDiscountList from "./AssessmentAdditionalDiscountList";
import { BiSolidCheckCircle } from "react-icons/bi";
import {
  getFinalMonthlyFee,
  getTotalUponEnrollmentWithDiscount,
} from "./functions-assessment";

const ModalAssessment = ({ setShowAssessment, item }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [categoryId, setCatgeoryId] = React.useState(0);
  const [primaryDiscountId, setPrimaryDiscountId] = React.useState(0);
  const [additionalDiscountId, setAdditionalDiscountId] = React.useState(0);
  const [selectItem, setSelectItem] = React.useState(0);
  const [primaryDiscountData, setPrimaryDiscountData] = React.useState([]);

  const handleSelectScheme = (item) => {
    setSelectItem(item.tuition_fee_aid);
  };

  const {
    isLoading,
    isFetching,
    error,
    data: schemeByGrade,
  } = useQueryData(
    "/v2/dev-assessment/group-by-tuition-grade", // endpoint
    "post", // method
    "school-year", // key
    { gradeId: item.grade_level_aid },
    item.grade_level_aid
  );

  const handleClose = () => {
    dispatch(setIsShowModal(false));
    setTimeout(() => {
      setShowAssessment(false);
      dispatch(setIsShowModal(true));
    }, 200);
  };

  const handleChangeCategory = (e) => {
    setCatgeoryId(e.target.value);
  };

  const { isLoading: loadingListOfScheme, data: listOfScheme } = useQueryData(
    "/v2/dev-assessment/read-by-tuition-scheme", // endpoint
    "post", // method
    "school-year", // key
    { gradeId: item.grade_level_aid, categoryId },
    item.grade_level_aid,
    categoryId
  );

  return (
    <>
      <div
        className={`modal modal--settings ${store.isShowModal ? "show" : ""} `}
      >
        <div className="modal__backdrop bg-black bg-opacity-0"></div>
        <div className="modal__main z-50 h-full w-full flex justify-center items-center relative ">
          <div className=" max-h-[calc(100%-200px)] md:max-h-[calc(100%-180px)] h-full max-w-[1065px] mx-7  w-full -translate-y-5">
            <div className=" modal__settings__header p-2 uppercase flex justify-between border-b border-line z-30 bg-primary ">
              <div className="flex item-center gap-4">
                <h5 className="mb-0 font-normal">
                  Student Assessment{" "}
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
              <main
                className={` p-5 py-3 flex flex-col overflow-y-auto max-h-[100%] h-full custom__scroll w-full transition-all `}
              >
                <div className="grow">
                  <h3>
                    {item.students_fname} {item.students_lname}
                  </h3>
                  <p>{item.grade_level_name}</p>

                  <div className="grid grid-cols-4 gap-2 mt-3  text-xs">
                    <form action="">
                      <div className="form__wrap">
                        <label
                          htmlFor=""
                          className="font-bold opacity-100 text-black"
                        >
                          Rate
                        </label>
                        <select
                          onChange={(e) => handleChangeCategory(e)}
                          value={categoryId}
                        >
                          <option value="" hidden></option>

                          {isLoading || isFetching ? (
                            <option>Loading...</option>
                          ) : schemeByGrade?.data.length === 0 ? (
                            <option disabled>No Data</option>
                          ) : (
                            schemeByGrade?.data.map((item, key) => {
                              return (
                                <option
                                  key={key}
                                  value={item.tuition_category_aid}
                                >
                                  {`${item.tuition_category_name}`}
                                </option>
                              );
                            })
                          )}
                        </select>
                      </div>
                    </form>

                    {listOfScheme?.count > 0 && (
                      <>
                        {listOfScheme?.data.map((listItem, key) => {
                          return (
                            <div
                              className={`${
                                selectItem === listItem.tuition_fee_aid
                                  ? "selected border-b-[0]"
                                  : ""
                              }`}
                              key={key}
                            >
                              <div className="col-header min-h-[140px] flex flex-col  items-center justify-center p-1">
                                <h4 className="uppercase">
                                  {listItem.scheme_name}
                                </h4>
                                <p className="text-xl !leading-none font-bold !mb-0">
                                  {numberWithCommasToFixed(
                                    Number(
                                      listItem.tuition_fee_upon_enrollment
                                    ) +
                                      Number(
                                        listItem.tuition_fee_total_monthly
                                      ),
                                    2
                                  )}
                                </p>
                                <p className="text-sm !my-2 !leading-none">
                                  {numberWithCommasToFixed(
                                    listItem.tuition_fee_monthly,
                                    2
                                  )}
                                  <span className="text-xs">/mo</span>
                                </p>
                                {selectItem === listItem.tuition_fee_aid ? (
                                  <BiSolidCheckCircle
                                    className="h-[38px] w-[38px] fill-accent"
                                    onClick={() => handleSelectScheme(0)}
                                  />
                                ) : (
                                  <button
                                    className="btn btn--accent"
                                    onClick={() => handleSelectScheme(listItem)}
                                  >
                                    Select
                                  </button>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </>
                    )}
                  </div>

                  {(loadingListOfScheme || listOfScheme?.count === 0) && (
                    <div>
                      {loadingListOfScheme ? (
                        <TableLoading count={20} cols={3} />
                      ) : (
                        <div className="min-h-[250px] grid place-content-center border border-line">
                          <p className="font-bold text-base">
                            No Rate Selected
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {!loadingListOfScheme && listOfScheme?.count > 0 && (
                    <>
                      <AssessmentRateList
                        listOfScheme={listOfScheme}
                        selectItem={selectItem}
                      />
                      <AssessmentPrimaryDiscountList
                        primaryDiscountId={primaryDiscountId}
                        setPrimaryDiscountId={setPrimaryDiscountId}
                        setPrimaryDiscountData={setPrimaryDiscountData}
                      />
                      <AssessmentAdditionalDiscountList
                        additionalDiscountId={additionalDiscountId}
                        setAdditionalDiscountId={setAdditionalDiscountId}
                      />

                      <h3 className="px-2">
                        Total{" "}
                        <span className="block text-xs">
                          Discounted Tuition Fee
                        </span>
                      </h3>

                      <div className="grid grid-cols-6 ">
                        {listOfScheme?.data.map((listItem, key) => {
                          return (
                            <div
                              className={`${
                                selectItem === listItem.tuition_fee_aid
                                  ? "selected"
                                  : ""
                              } p-2`}
                              key={key}
                            >
                              <h4 className="uppercase">
                                {listItem.scheme_name}
                              </h4>
                              <p className="text-xl font-bold mb-0 leading-none">
                                {
                                  getTotalUponEnrollmentWithDiscount(
                                    primaryDiscountData,
                                    listItem
                                  ).finalUponEnrollment
                                }
                              </p>
                              {listItem.tuition_fee_monthly !== "" && (
                                <small className="text-xs">
                                  {getFinalMonthlyFee(
                                    listOfScheme,
                                    listItem,
                                    primaryDiscountData
                                  )}
                                  /mo
                                </small>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>

                <div className="flex justify-end items-center gap-2">
                  {listOfScheme?.count > 0 && (
                    <button className="btn btn--accent">Notify Parent</button>
                  )}
                  <button className="btn btn--cancel" onClick={handleClose}>
                    Discard
                  </button>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAssessment;
