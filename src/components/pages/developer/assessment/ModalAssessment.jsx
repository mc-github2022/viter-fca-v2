import React from "react";
import { FaBars } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";

const ModalAssessment = ({ index = 1 }) => {
  return (
    <div>
      <div className={`modal modal--settings show `}>
        <div className="modal__backdrop bg-black bg-opacity-0"></div>
        <div className="z-50 h-full w-full flex justify-center items-center relative ">
          <div className=" max-h-[calc(100%-200px)] md:max-h-[calc(100%-150px)] h-full max-w-[1065px] mx-7  w-full -translate-y-5">
            <div className=" modal__settings__header p-2 uppercase flex justify-between border-b border-line z-30 bg-primary ">
              <div className="flex item-center gap-4">
                <h5 className="mb-0 font-normal">
                  Student Assessment{" "}
                  {/* {`${itemEdit.student_info_fname}, ${itemEdit.student_info_lname}`} */}
                </h5>
              </div>
              <button>
                <LiaTimesSolid />
              </button>
            </div>
            <div
              className={`flex gap-3 h-full  bg-white overflow-hidden relative`}
            >
              <main
                className={` p-5 py-3 overflow-y-auto max-h-[100%] h-full custom__scroll w-full transition-all `}
              >
                {index === 1 && (
                  <>
                    <div>
                      <small>FOR EM VIEW - alisin mo to</small>
                      <h3>Ramon Plaza</h3>
                      <p>Grade I</p>

                      <div className="gap-2">
                        <div className="grid grid-cols-4 gap-2">
                          <div></div>
                          <div className="col-header text-center">
                            <h4>Scheme A</h4>
                            <p className="text-xl !mb-0 !leading-none font-bold">
                              10,748
                            </p>
                            <p className="text-sm !my-2 !leading-none">
                              5,088<span className="text-xs">/mo</span>
                            </p>
                          </div>
                          <div className="col-header text-center">
                            <h4>Scheme B</h4>
                            <p className="text-xl !mb-0 !leading-none font-bold">
                              10,748
                            </p>
                            <p className="text-sm !my-2 !leading-none">
                              5,088<span className="text-xs">/mo</span>
                            </p>
                          </div>
                          <div className="col-header text-center">
                            <h4>Scheme A</h4>
                            <p className="text-xl !mb-0 !leading-none font-bold">
                              10,748
                            </p>
                            <p className="text-sm !my-2 !leading-none">
                              5,088<span className="text-xs">/mo</span>
                            </p>
                          </div>
                        </div>

                        <div className="border-y border-line scheme-list">
                          <ul className="grid grid-cols-4 hover:bg-gray-100 border-b border-line">
                            <li>Admission</li>
                            <li className="">12000</li>
                            <li className="">3000</li>
                            <li className="">3000</li>
                          </ul>

                          <ul className="grid grid-cols-4 hover:bg-gray-100 border-b border-line">
                            <li>Misc</li>
                            <li className="">2000</li>
                            <li className="">500</li>
                            <li className="">500</li>
                          </ul>

                          <ul className="grid grid-cols-4 hover:bg-gray-100 border-b border-line">
                            <li>Tuition Fee</li>
                            <li className="">35000</li>
                            <li className="">8750.00</li>
                            <li className="">8750.00</li>
                          </ul>

                          <ul className="grid grid-cols-4 hover:bg-gray-100 border-b border-line">
                            <li>Books</li>
                            <li className="">53,743.25</li>
                            <li className="">1185.81</li>
                            <li className="">1185.81</li>
                          </ul>

                          <ul className="grid grid-cols-4 hover:bg-gray-100 border-b border-line">
                            <li>Enrollment</li>
                            <li className="">4743.23</li>
                            <li className="">1185.81</li>
                            <li className="">1185.81</li>
                          </ul>

                          <ul className="grid grid-cols-4 hover:bg-gray-100 border-b border-line">
                            <li>Monthly Fee</li>
                            <li className="">-</li>
                            <li className="">13435.81</li>
                            <li className="">13435.81</li>
                          </ul>
                          <ul className="grid grid-cols-4 hover:bg-gray-100 ">
                            <li>Total Monthly Fee</li>
                            <li className="">-</li>
                            <li className="">41673.94</li>
                            <li className="">41673.94</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAssessment;
