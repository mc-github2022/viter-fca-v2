import useQueryData from "@/components/custom-hooks/useQueryData";
import { numberWithCommasToFixed } from "@/components/helpers/functions-general.jsx";
import TableLoading from "@/components/partials/TableLoading";
import { setSettingIsConfirm } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import React from "react";
import { BiSolidCheckCircle } from "react-icons/bi";
import {
  getMonthlyFeeDiscountedAmount,
  getPrimaryPercentDiscount,
  getSectedScheme,
  getTotalPaymentDiscountedAmount,
  getTotalPaymentWithComma,
} from "../../../assessment/modal/functions-assessment";
import StudentPaymentSchemeList from "./StudentPaymentSchemeList";
import { FaExclamationCircle } from "react-icons/fa";
import { getStudentByCurrentSyId } from "../../functions-student";

const StudentPaymentScheme = ({
  setIsViewInfo,
  showSideNav,
  dataItem,
  setIsSavePaymentScheme,
  setItemData,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [selectItem, setSelectItem] = React.useState(
    Number(dataItem.school_year_students_schedule_fees_id)
  );

  const { data: primaryDiscount } = useQueryData(
    "/v2/dev-assessment/read-primary-discount", // endpoint
    "get", // method
    "primary-discount" // key
  );

  const primaryDiscountData = getPrimaryPercentDiscount(
    primaryDiscount,
    dataItem.school_year_students_primary_discount_id
  );

  const { isLoading: loadingListOfScheme, data: listOfScheme } = useQueryData(
    "/v2/dev-assessment/read-by-tuition-scheme", // endpoint
    "post", // method
    "read-by-tuition-scheme", // key
    {
      gradeId: dataItem?.grade_level_aid,
      categoryId: dataItem?.school_year_students_rate_id,
    },
    dataItem?.grade_level_aid,
    dataItem?.school_year_students_rate_id
  );

  const handleClose = () => {
    setIsViewInfo(false);
  };

  const handleSelectScheme = (listItem) => {
    if (dataItem.school_year_students_is_accept_payment === 0) {
      setSelectItem(listItem.tuition_fee_aid);
    }
    if (typeof listItem.tuition_fee_aid === "undefined") {
      setSelectItem(0);
    }
  };

  const handleSave = (tuitionItem) => {
    dispatch(setSettingIsConfirm(true));
    setItemData({ ...tuitionItem });
    setIsSavePaymentScheme(true);
    setSelectItem(tuitionItem.tuition_fee_aid);
  };

  const handleRevert = (tuitionItem) => {
    dispatch(setSettingIsConfirm(true));
    setItemData({ ...tuitionItem });
    setIsSavePaymentScheme(false);
  };

  return (
    <>
      <div className="overflow-y-auto custom__scroll  z-30 modal__article">
        {!loadingListOfScheme && (
          <div
            className={` ${
              showSideNav
                ? "max-w-[calc(1065px-0px)]"
                : "max-w-[calc(1065px-200px)]"
            } absolute -bottom-1 right-0 flex items-center justify-end gap-x-2  bg-primary z-20 max-w-[calc(1065px-200px)] p-4 w-full `}
          >
            <div className="flex items-center gap-2">
              {(store.credentials.data.role_is_admin === 1 ||
                store.credentials.data.role_is_developer === 1) &&
                dataItem.school_year_students_is_accept_payment === 1 && (
                  <button
                    className="btn btn--accent"
                    type="submit"
                    onClick={() =>
                      handleRevert(getSectedScheme(listOfScheme, selectItem))
                    }
                  >
                    Request Revert Payment
                  </button>
                )}
              {dataItem.school_year_students_is_accept_payment === 0 &&
                dataItem.school_year_students_schedule_fees_id === 0 && (
                  <button
                    className="btn btn--accent"
                    type="submit"
                    disabled={selectItem > 0 ? false : true}
                    onClick={() =>
                      handleSave(getSectedScheme(listOfScheme, selectItem))
                    }
                  >
                    Save
                  </button>
                )}
              <button
                className="btn btn--cancel"
                type="button"
                onClick={handleClose}
                // disabled={mutation.isPending}
              >
                Discard
              </button>
            </div>
          </div>
        )}

        <div className="mb-14 text-xs">
          <h3 className="mb-3">Payment Scheme</h3>

          {loadingListOfScheme ? (
            <TableLoading count={20} cols={3} />
          ) : listOfScheme?.data.length > 0 ? (
            <>
              <div className=" grid grid-cols-4 my-5">
                <div className="col-header min-h-[140px] p-1">
                  <h4>
                    Compare All {listOfScheme?.data[0].tuitionName} Tuition Fee
                    Scheme
                  </h4>
                </div>
                {listOfScheme?.data.map((listItem, key) => {
                  return (
                    <div
                      className={`${
                        selectItem === listItem.tuition_fee_aid
                          ? "selected"
                          : ""
                      }`}
                      key={key}
                    >
                      <div className="col-header min-h-[140px] flex flex-col  items-center justify-start  p-1">
                        <h4>{listItem.scheme_name}</h4>
                        <p className="text-xl !mb-0 !leading-none font-bold text-center">
                          {getTotalPaymentWithComma(listItem)}{" "}
                        </p>
                        <p className="text-sm !my-2 !leading-none">
                          {numberWithCommasToFixed(
                            listItem.tuition_fee_monthly,
                            2
                          )}{" "}
                          <span className="text-xs">/mo</span>
                        </p>

                        {selectItem === listItem.tuition_fee_aid ? (
                          <>
                            {dataItem?.school_year_students_schedule_fees_id !==
                            0 ? (
                              <BiSolidCheckCircle className="h-[38px] w-[38px] fill-accent my-2 opacity-[0.6] cursor-not-allowed" />
                            ) : (
                              <BiSolidCheckCircle
                                className="h-[38px] w-[38px] fill-accent my-2 cursor-pointer"
                                onClick={handleSelectScheme}
                              />
                            )}
                          </>
                        ) : (
                          dataItem?.school_year_students_is_accept_payment ===
                            0 &&
                          dataItem?.school_year_students_schedule_fees_id ===
                            0 && (
                            <button
                              className="btn btn--accent my-2"
                              onClick={() => handleSelectScheme(listItem)}
                              disabled={
                                dataItem.school_year_students_is_accept_payment ===
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
              </div>
              <StudentPaymentSchemeList
                selectItem={selectItem}
                listOfScheme={listOfScheme}
                primaryDiscountData={primaryDiscountData}
              />
            </>
          ) : (
            <p className="uppercase text-base flex items-center justify-center gap-2 text-center bg-[#fff5c2] mb-0 h-10 w-full z-10 ">
              <FaExclamationCircle className="h-6 w-6 fill-white bg-[#f09a02] rounded-full" />
              Pending From FCA Finance
            </p>
          )}

          {!loadingListOfScheme &&
            listOfScheme?.data.length > 0 &&
            dataItem.school_year_students_primary_discount_id !== 0 && (
              <>
                <div className=" grid grid-cols-4 mt-5 ">
                  <div className="col-header flex items-center p-2">
                    <h4>Discounted Total Amount</h4>
                  </div>
                  {listOfScheme?.data.map((listItem, key) => {
                    return (
                      <div
                        className={`${
                          selectItem === listItem.tuition_fee_aid
                            ? "selected"
                            : ""
                        }`}
                        key={key}
                      >
                        <div className="text-center p-2">
                          <p className="text-xl !mb-0 !leading-none font-bold">
                            <span className="text-accent ">
                              {getTotalPaymentDiscountedAmount(
                                listOfScheme,
                                primaryDiscountData,
                                listItem
                              ) !== 0 &&
                                `${getTotalPaymentDiscountedAmount(
                                  listOfScheme,
                                  primaryDiscountData,
                                  listItem
                                )}`}
                            </span>
                          </p>
                          <p className="text-sm !mt-2 !leading-none">
                            {getMonthlyFeeDiscountedAmount(
                              listOfScheme,
                              primaryDiscountData,
                              listItem
                            ).isDiscounted > 0
                              ? `${
                                  getMonthlyFeeDiscountedAmount(
                                    listOfScheme,
                                    primaryDiscountData,
                                    listItem
                                  ).monthlyFeeDiscounted
                                }`
                              : "0.00"}
                            <span className="text-xs"> /mo</span>
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
        </div>
      </div>
    </>
  );
};

export default StudentPaymentScheme;
