import React from "react";
import { BiSolidCheckCircle } from "react-icons/bi";
import { LiaTimesSolid } from "react-icons/lia";
const ModalTuitionScheme = ({ setShowTuitionScheme }) => {
  const [selectA, setSelectA] = React.useState(false);
  const [selectB, setSelectB] = React.useState(false);
  const [selectC, setSelectC] = React.useState(false);

  const handleSelectScheme = (item) => {
    if (item === 1) {
      setSelectA(true);
      setSelectB(false);
      setSelectC(false);
    } else if (item === 2) {
      setSelectA(false);
      setSelectB(true);
      setSelectC(false);
    } else if (item === 3) {
      setSelectA(false);
      setSelectB(false);
      setSelectC(true);
    }
  };

  const handleClose = () => {
    setShowTuitionScheme(false);
  };

  return (
    <>
      <div className={`modal modal--settings show `}>
        <div className="modal__backdrop bg-black bg-opacity-0"></div>
        <div className="z-50 h-full w-full flex justify-center items-center relative ">
          <div className=" max-h-[calc(100%-200px)] md:max-h-[calc(100%-150px)] h-full max-w-[1065px] mx-7  w-full -translate-y-5">
            <div className=" modal__settings__header p-2 uppercase flex justify-between border-b border-line z-30 bg-primary ">
              <div className="flex item-center gap-4">
                <h5 className="mb-0 font-normal">
                  Payment Scheme
                  {/* {`${itemEdit.student_info_fname}, ${itemEdit.student_info_lname}`} */}
                </h5>
              </div>
              <button onClick={handleClose}>
                <LiaTimesSolid />
              </button>
            </div>
            <div className="flex gap-3 h-full  bg-white overflow-hidden relative">
              <main className="mt-5 p-5 py-3 overflow-y-auto max-h-[100%] h-full custom__scroll w-full transition-all ">
                <div className="overflow-y-auto custom__scroll  z-30 modal__article">
                  <div className="text-xs">
                    <div className=" grid grid-cols-4 mb-5">
                      <div className="col-header min-h-[140px] flex items-center  p-1">
                        <h4>Compare All Legacy Grade I Tuition Fee Scheme</h4>
                      </div>
                      <div className={`${selectA ? "selected" : ""}`}>
                        <div className="col-header min-h-[140px] flex flex-col  items-center justify-center  p-1">
                          <h4>Scheme A</h4>
                          <p className="text-xl !mb-0 !leading-none font-bold">
                            53,743
                          </p>
                          <p className="text-sm !my-2 !leading-none">
                            0<span className="text-xs">/mo</span>
                          </p>

                          {selectA ? (
                            <BiSolidCheckCircle className="h-[38px] w-[38px] fill-accent" />
                          ) : (
                            <button
                              className="btn btn--accent"
                              onClick={() => handleSelectScheme(1)}
                            >
                              Select
                            </button>
                          )}
                        </div>
                      </div>

                      <div className={`${selectB ? "selected" : ""}`}>
                        <div className="col-header min-h-[140px] flex flex-col  items-center justify-center  p-1 ">
                          <h4 className="">Scheme B</h4>
                          <p className="text-xl !mb-0 !leading-none font-bold">
                            13,435
                          </p>
                          <p className="text-sm !my-2 !leading-none">
                            11,387<span className="text-xs">/mo</span>
                          </p>
                          {selectB ? (
                            <BiSolidCheckCircle className="h-[38px] w-[38px] fill-accent" />
                          ) : (
                            <button
                              className="btn btn--accent"
                              onClick={() => handleSelectScheme(2)}
                            >
                              Select
                            </button>
                          )}
                        </div>
                      </div>
                      <div className={`${selectC ? "selected" : ""}`}>
                        <div className="col-header min-h-[140px] flex flex-col  items-center justify-center p-1">
                          <h4>Scheme C</h4>
                          <p className="text-xl !mb-0 !leading-none font-bold">
                            10748
                          </p>
                          <p className="text-sm !my-2 !leading-none">
                            5088<span className="text-xs">/mo</span>
                          </p>
                          {selectC ? (
                            <BiSolidCheckCircle className="h-[38px] w-[38px] fill-accent" />
                          ) : (
                            <button
                              className="btn btn--accent"
                              onClick={() => handleSelectScheme(3)}
                            >
                              Select
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="border-y border-line scheme-list">
                      <ul className="grid grid-cols-4 hover:bg-gray-100 border-b border-line">
                        <li>Admission</li>
                        <li className={`${selectA ? "bg-gray-100" : ""}`}>
                          12000
                        </li>
                        <li className={`${selectB ? "bg-gray-100" : ""}`}>
                          3000
                        </li>
                        <li className={`${selectC ? "bg-gray-100" : ""}`}>
                          3000
                        </li>
                      </ul>

                      <ul className="grid grid-cols-4 hover:bg-gray-100 border-b border-line">
                        <li>Misc</li>
                        <li className={`${selectA ? "bg-gray-100" : ""}`}>
                          2000
                        </li>
                        <li className={`${selectB ? "bg-gray-100" : ""}`}>
                          500
                        </li>
                        <li className={`${selectC ? "bg-gray-100" : ""}`}>
                          500
                        </li>
                      </ul>

                      <ul className="grid grid-cols-4 hover:bg-gray-100 border-b border-line">
                        <li>Tuition Fee</li>
                        <li className={`${selectA ? "bg-gray-100" : ""}`}>
                          35000
                        </li>
                        <li className={`${selectB ? "bg-gray-100" : ""}`}>
                          8750.00
                        </li>
                        <li className={`${selectC ? "bg-gray-100" : ""}`}>
                          8750.00
                        </li>
                      </ul>

                      <ul className="grid grid-cols-4 hover:bg-gray-100 border-b border-line">
                        <li>Books</li>
                        <li className={`${selectA ? "bg-gray-100" : ""}`}>
                          53,743.25
                        </li>
                        <li className={`${selectB ? "bg-gray-100" : ""}`}>
                          1185.81
                        </li>
                        <li className={`${selectC ? "bg-gray-100" : ""}`}>
                          1185.81
                        </li>
                      </ul>

                      <ul className="grid grid-cols-4 hover:bg-gray-100 border-b border-line">
                        <li>Enrollment</li>
                        <li className={`${selectA ? "bg-gray-100" : ""}`}>
                          4743.23
                        </li>
                        <li className={`${selectB ? "bg-gray-100" : ""}`}>
                          1185.81
                        </li>
                        <li className={`${selectC ? "bg-gray-100" : ""}`}>
                          1185.81
                        </li>
                      </ul>

                      <ul className="grid grid-cols-4 hover:bg-gray-100 border-b border-line">
                        <li>Monthly Fee</li>
                        <li className={`${selectA ? "bg-gray-100" : ""}`}>-</li>
                        <li className={`${selectB ? "bg-gray-100" : ""}`}>
                          13435.81
                        </li>
                        <li className={`${selectC ? "bg-gray-100" : ""}`}>
                          13435.81
                        </li>
                      </ul>
                      <ul className="grid grid-cols-4 hover:bg-gray-100 ">
                        <li>Total Monthly Fee</li>
                        <li className={`${selectA ? "bg-gray-100" : ""}`}>-</li>
                        <li className={`${selectB ? "bg-gray-100" : ""}`}>
                          41673.94
                        </li>
                        <li className={`${selectC ? "bg-gray-100" : ""}`}>
                          41673.94
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div action="" className="mt-5 max-w-[300px] w-full">
                    <div className="form__wrap">
                      <label htmlFor="">Remarks</label>
                      <textarea
                        name=""
                        id=""
                        className="min-h-[50px]"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div
                  className={`flex items-center gap-x-2  bg-primary z-20   w-full `}
                >
                  <button className="btn btn--accent">Save</button>
                  <button className="btn btn--cancel" onClick={handleClose}>
                    Discard
                  </button>{" "}
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalTuitionScheme;
