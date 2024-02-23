import { setIsShowModal } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { FaBars } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";

const ModalAssessment = ({ setShowAssessment }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleClose = () => {
    dispatch(setIsShowModal(false));
    setTimeout(() => {
      setShowAssessment(false);
      dispatch(setIsShowModal(true));
    }, 200);
  };
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
                  <h3>Ramon Plaza</h3>
                  <p>Grade I</p>

                  <div className="grid grid-cols-4 gap-2 mt-3  text-xs">
                    <form action="">
                      <div className="form__wrap">
                        <label
                          htmlFor=""
                          className="font-bold opacity-100 text-black"
                        >
                          Rate
                        </label>
                        <select name="" id="">
                          <option value="">Legacy</option>
                          <option value="">Regular</option>
                          <option value="">Re-enroll</option>
                        </select>
                      </div>
                    </form>

                    <div className="col-header text-center">
                      <h4 className="uppercase">Scheme A</h4>
                      <p className="text-xl !mb-0 !leading-none font-bold">
                        10,748
                      </p>
                      <p className="text-sm !my-2 !leading-none">
                        5,088<span className="text-xs">/mo</span>
                      </p>
                    </div>
                    <div className="col-header text-center">
                      <h4 className="uppercase">Scheme B</h4>
                      <p className="text-xl !mb-0 !leading-none font-bold">
                        10,748
                      </p>
                      <p className="text-sm !my-2 !leading-none">
                        5,088<span className="text-xs">/mo</span>
                      </p>
                    </div>
                    <div className="col-header text-center">
                      <h4 className="uppercase">Scheme A</h4>
                      <p className="text-xl !mb-0 !leading-none font-bold">
                        10,748
                      </p>
                      <p className="text-sm !my-2 !leading-none">
                        5,088<span className="text-xs">/mo</span>
                      </p>
                    </div>
                  </div>

                  <div className="border-y border-line scheme-list">
                    <ul className="grid grid-cols-4 hover:bg-gray-100 border-b border-line text-xs">
                      <li>Admission</li>
                      <li className="">12000</li>
                      <li className="">3000</li>
                      <li className="">3000</li>
                    </ul>

                    <ul className="grid grid-cols-4 hover:bg-gray-100 border-b border-line text-xs">
                      <li>Misc</li>
                      <li className="">2000</li>
                      <li className="">500</li>
                      <li className="">500</li>
                    </ul>

                    <ul className="grid grid-cols-4 hover:bg-gray-100 border-b border-line text-xs">
                      <li>Tuition Fee</li>
                      <li className="">35000</li>
                      <li className="">8750.00</li>
                      <li className="">8750.00</li>
                    </ul>

                    <ul className="grid grid-cols-4 hover:bg-gray-100 border-b border-line text-xs">
                      <li>Books</li>
                      <li className="">53,743.25</li>
                      <li className="">1185.81</li>
                      <li className="">1185.81</li>
                    </ul>

                    <ul className="grid grid-cols-4 hover:bg-gray-100 border-b border-line text-xs">
                      <li>Enrollment</li>
                      <li className="">4743.23</li>
                      <li className="">1185.81</li>
                      <li className="">1185.81</li>
                    </ul>

                    <ul className="grid grid-cols-4 hover:bg-gray-100 border-b border-line text-xs">
                      <li>Monthly Fee</li>
                      <li className="">-</li>
                      <li className="">13435.81</li>
                      <li className="">13435.81</li>
                    </ul>
                    <ul className="grid grid-cols-4 hover:bg-gray-100  text-xs">
                      <li>Total Monthly Fee</li>
                      <li className="">-</li>
                      <li className="">41673.94</li>
                      <li className="">41673.94</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-[250px_1fr] mt-3 gap-5">
                    <div className="form__wrap">
                      <label
                        htmlFor=""
                        className="font-bold opacity-100 text-black"
                      >
                        Primary Discount
                      </label>
                      <select name="" id="">
                        <option value="">Legacy</option>
                        <option value="">Regular</option>
                        <option value="">Re-enroll</option>
                      </select>
                    </div>

                    {/* <div className="min-h-250px grid place-content-center border border-line">
                      <p className="font-bold text-base">
                        No Discount Selected
                      </p>
                    </div> */}

                    <div className="discount-info">
                      <h4 className="pb-1 ">Legacy & Loyalty</h4>

                      <div className="grid grid-cols-2 max-w-[80%] mt-2">
                        <ul className="flex gap-2 mb-2 text-xs">
                          <li className="font-bold">Type: </li>
                          <li>type ito</li>
                        </ul>

                        <ul className="flex gap-2 mb-2 text-xs">
                          <li className="font-bold">Entrance Fee: </li>
                          <li>20%</li>
                        </ul>

                        <ul className="flex gap-2 mb-2 text-xs">
                          <li className="font-bold">2%: </li>
                          <li>Currently Year</li>
                        </ul>

                        <ul className="flex gap-2 mb-2 text-xs">
                          <li className="font-bold">Qualification: </li>
                          <li>Magaling lang</li>
                        </ul>

                        <ul className="flex gap-2 mb-2 text-xs">
                          <li className="font-bold">Maintaining Grade: </li>
                          <li>13GA</li>
                        </ul>

                        <ul className="flex gap-2 mb-2 text-xs">
                          <li className="font-bold">Duration: </li>
                          <li>Current School Year</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-[250px_1fr] mt-3 gap-5">
                    <div className="form__wrap">
                      <label
                        htmlFor=""
                        className="font-bold opacity-100 text-black"
                      >
                        Additional Discount
                      </label>
                      <select name="" id="">
                        <option value="">Legacy</option>
                        <option value="">Regular</option>
                        <option value="">Re-enroll</option>
                      </select>
                    </div>

                    {/* <div className="min-h-250px grid place-content-center border border-line">
                      <p className="font-bold text-base">
                        No Additional Discount Selected
                      </p>
                    </div> */}

                    <div className="discount-info">
                      <h4 className="pb-1 ">Legacy & Loyalty</h4>

                      <div className="grid grid-cols-2 max-w-[80%] mt-2">
                        <ul className="flex gap-2 mb-2 text-xs">
                          <li className="font-bold">Type: </li>
                          <li>type ito</li>
                        </ul>

                        <ul className="flex gap-2 mb-2 text-xs">
                          <li className="font-bold">Entrance Fee: </li>
                          <li>20%</li>
                        </ul>

                        <ul className="flex gap-2 mb-2 text-xs">
                          <li className="font-bold">2%: </li>
                          <li>Currently Year</li>
                        </ul>

                        <ul className="flex gap-2 mb-2 text-xs">
                          <li className="font-bold">Qualification: </li>
                          <li>Magaling lang</li>
                        </ul>

                        <ul className="flex gap-2 mb-2 text-xs">
                          <li className="font-bold">Maintaining Grade: </li>
                          <li>13GA</li>
                        </ul>

                        <ul className="flex gap-2 mb-2 text-xs">
                          <li className="font-bold">Duration: </li>
                          <li>Current School Year</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h3 className="mb-3">
                    Total{" "}
                    <span className="block text-xs">
                      Discounted Tuition Fee
                    </span>
                  </h3>

                  <div className="grid grid-cols-6 ">
                    <div>
                      <h4 className="uppercase">Scheme A</h4>
                      <p className="text-xl font-bold mb-0 leading-none">
                        10,789.00
                      </p>
                      <small className="text-xs">0/mo</small>
                    </div>
                    <div>
                      <h4 className="uppercase">Scheme B</h4>
                      <p className="text-xl font-bold mb-0 leading-none">
                        10,789.00
                      </p>
                      <small className="text-xs">2500/mo</small>
                    </div>
                    <div>
                      <h4 className="uppercase">Scheme C</h4>
                      <p className="text-xl font-bold mb-0 leading-none">
                        10,789.00
                      </p>
                      <small className="text-xs">2500/mo</small>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end items-center gap-2">
                  <button className="btn btn--accent">Notify Parent</button>
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
