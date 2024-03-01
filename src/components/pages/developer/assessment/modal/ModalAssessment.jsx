import useQueryData from "@/components/custom-hooks/useQueryData";
import { numberWithCommasToFixed } from "@/components/helpers/functions-general";
import TableLoading from "@/components/partials/TableLoading";
import {
  setIsShowModal,
  setSettingIsConfirm,
} from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { BiSolidCheckCircle } from "react-icons/bi";
import { LiaTimesSolid } from "react-icons/lia";
import AssessmentAdditionalDiscountList from "./AssessmentAdditionalDiscountList";
import AssessmentPrimaryDiscountList from "./AssessmentPrimaryDiscountList";
import AssessmentRateList from "./AssessmentRateList";
import {
  getSectedScheme,
  getMonthlyFeeDiscountedAmount,
  getPrimaryPercentDiscount,
  getTotalPaymentDiscountedAmount,
  getTotalPaymentWithComma,
  getSelectedRate,
  getNotifyAcceptParentInitVal,
} from "./functions-assessment";
import ModalNotifyOrAcceptPayment from "./ModalNotifyOrAcceptPayment";

const ModalAssessment = ({ setShowAssessment, item }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [categoryId, setCatgeoryId] = React.useState(
    Number(item.current_students_rate_id)
  );
  const [primaryDiscountId, setPrimaryDiscountId] = React.useState(
    Number(item.current_students_primary_discount_id)
  );
  const [additionalDiscountId, setAdditionalDiscountId] = React.useState(
    Number(item.current_students_additional_discount_id)
  );
  const [selectItem, setSelectItem] = React.useState(
    Number(item.current_students_schedule_fees_id)
  );

  const {
    isLoading: isLoadingPrimaryDiscount,
    isFetching: isFetchingPrimaryDiscount,
    data: primaryDiscount,
  } = useQueryData(
    "/v2/dev-assessment/read-primary-discount", // endpoint
    "get", // method
    "primary-discount" // key
  );
  const primaryDiscountData = getPrimaryPercentDiscount(
    primaryDiscount,
    primaryDiscountId
  );

  // accept or notify parent
  const [isNotify, setIsNotify] = React.useState(true);
  const [dataItem, setData] = React.useState(null);
  const [id, setId] = React.useState(null);

  const {
    isLoading,
    isFetching,
    error,
    data: schemeByGrade,
  } = useQueryData(
    "/v2/dev-assessment/group-by-tuition-grade", // endpoint
    "post", // method
    "group-by-tuition-grade", // key
    { gradeId: item.grade_level_aid },
    item.grade_level_aid
  );

  const handleSelectScheme = (listItem) => {
    if (item.current_students_is_accept_payment === 0) {
      setSelectItem(listItem.tuition_fee_aid);
    }
    if (typeof listItem.tuition_fee_aid === "undefined") {
      setSelectItem(0);
    }
  };

  const handleClose = () => {
    dispatch(setIsShowModal(false));
    setTimeout(() => {
      setShowAssessment(false);
      dispatch(setIsShowModal(true));
    }, 200);
  };

  const handleChangeCategory = (e) => {
    setCatgeoryId(e.target.value);
    setSelectItem(0);
  };

  const handleNotifyParent = (tuitionItem) => {
    dispatch(setSettingIsConfirm(true));
    setId(item.current_students_aid);
    setData({
      ...getNotifyAcceptParentInitVal(
        tuitionItem,
        primaryDiscountId,
        additionalDiscountId,
        item
      ),
      tuition_fee_aid: 0,
    });
    setIsNotify(true);
  };

  const handleAcceptPayment = (tuitionItem) => {
    dispatch(setSettingIsConfirm(true));
    setId(item.current_students_aid);

    setData(
      getNotifyAcceptParentInitVal(
        tuitionItem,
        primaryDiscountId,
        additionalDiscountId,
        item
      )
    );
    setIsNotify(false);
  };

  const { isLoading: loadingListOfScheme, data: listOfScheme } = useQueryData(
    "/v2/dev-assessment/read-by-tuition-scheme", // endpoint
    "post", // method
    "read-by-tuition-scheme", // key
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
                    <form action="" className="">
                      <div className="form__wrap">
                        <label
                          htmlFor=""
                          className="font-bold opacity-100 text-black uppercase"
                        >
                          Rate
                        </label>
                        <select
                          onChange={(e) => handleChangeCategory(e)}
                          value={categoryId}
                          disabled={
                            (!isLoading || !isFetching) &&
                            item.current_students_is_accept_payment === 0
                              ? false
                              : true
                          }
                        >
                          <option value="" hidden>
                            No Rate
                          </option>

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
                              <div className="col-header min-h-[140px] flex flex-col items-center justify-start p-1">
                                <h4 className="uppercase">
                                  {listItem.scheme_name}
                                </h4>
                                <p className="text-xl !leading-none font-bold !mb-0 ">
                                  {getTotalPaymentWithComma(listItem)}
                                </p>

                                <p className="text-sm !mt-1 !leading-none">
                                  {numberWithCommasToFixed(
                                    listItem.tuition_fee_monthly,
                                    2
                                  )}

                                  <span className="text-xs"> /mo</span>
                                </p>

                                {selectItem === listItem.tuition_fee_aid ? (
                                  <>
                                    {item.current_students_is_accept_payment ===
                                    1 ? (
                                      <BiSolidCheckCircle className="h-[38px] w-[38px] fill-accent my-2 opacity-[0.6] cursor-not-allowed" />
                                    ) : (
                                      <BiSolidCheckCircle
                                        className="h-[38px] w-[38px] fill-accent my-2 cursor-pointer"
                                        onClick={handleSelectScheme}
                                      />
                                    )}
                                  </>
                                ) : (
                                  item.current_students_is_accept_payment ===
                                    0 && (
                                    <button
                                      className="btn btn--accent my-2"
                                      onClick={() =>
                                        handleSelectScheme(listItem)
                                      }
                                      disabled={
                                        item.current_students_is_accept_payment ===
                                        0
                                          ? false
                                          : true
                                      }
                                    >
                                      Select
                                    </button>
                                  )
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </>
                    )}

                    {(loadingListOfScheme || listOfScheme?.count === 0) && (
                      <>
                        {loadingListOfScheme ? (
                          <TableLoading count={20} cols={3} />
                        ) : (
                          <div className="min-h-250px flex items-end opacity-[0.8] ml-3 ">
                            <p className="font-bold text-base">
                              No Rate Selected
                            </p>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <AssessmentRateList
                    listOfScheme={listOfScheme}
                    selectItem={selectItem}
                    primaryDiscountData={primaryDiscountData}
                    loadingListOfScheme={loadingListOfScheme}
                    primaryDiscountId={primaryDiscountId}
                  />

                  <AssessmentPrimaryDiscountList
                    primaryDiscountId={primaryDiscountId}
                    setPrimaryDiscountId={setPrimaryDiscountId}
                    isLoading={isLoadingPrimaryDiscount}
                    isFetching={isFetchingPrimaryDiscount}
                    primaryDiscount={primaryDiscount}
                    item={item}
                  />
                  <AssessmentAdditionalDiscountList
                    additionalDiscountId={additionalDiscountId}
                    setAdditionalDiscountId={setAdditionalDiscountId}
                    item={item}
                  />
                </div>

                <div className="flex justify-end items-center gap-2">
                  {item.current_students_is_accept_payment === 1 && (
                    <button
                      className="btn btn--accent"
                      // onClick={handleNotifyParent}
                    >
                      Revert Payment
                    </button>
                  )}
                  {item.current_students_is_accept_payment === 0 && (
                    <>
                      {listOfScheme?.count > 0 && selectItem === 0 && (
                        <button
                          className="btn btn--accent"
                          onClick={() =>
                            handleNotifyParent(
                              getSelectedRate(schemeByGrade, categoryId)
                            )
                          }
                        >
                          Notify Parent
                        </button>
                      )}

                      {listOfScheme?.count > 0 && selectItem > 0 && (
                        <button
                          className="btn btn--accent"
                          onClick={() =>
                            handleAcceptPayment(
                              getSectedScheme(listOfScheme, selectItem)
                            )
                          }
                        >
                          Accept Payment
                        </button>
                      )}
                    </>
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

      {store.isSettingConfirm && (
        <ModalNotifyOrAcceptPayment
          mysqlApiNotifyOrAcceptPayment={`/v2/dev-assessment/notify-or-accept-payment/${id}`}
          msg={`Are you sure you want to ${
            isNotify ? "notify parent" : "accept payment"
          } ?`}
          item={dataItem}
          queryKey={"assessment"}
          isNotify={isNotify}
          setShowAssessment={setShowAssessment}
        />
      )}
    </>
  );
};

export default ModalAssessment;
