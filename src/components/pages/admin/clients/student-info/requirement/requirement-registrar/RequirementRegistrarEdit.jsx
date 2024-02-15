import React from "react";
import { AiOutlineSave } from "react-icons/ai";
import { LiaTimesSolid } from "react-icons/lia";

const RequirementRegistrarEdit = ({ setIsEdit }) => {
  const handleView = () => setIsEdit(false);
  return (
    <>
      <div className="mode__edit">
        <div className="max-w-[600px] flex justify-between mb-2">
          <h5>Add/Remove Registrar Requirement</h5>
          <ul className="flex justify-end gap-4">
            <li>
              <button
                className="flex justify-center items-center gap-2  mb-2  tooltip text-xl"
                data-tooltip="Edit"
              >
                <AiOutlineSave />
              </button>
            </li>
            <li>
              <button
                className="flex justify-center items-center gap-2  mb-2  tooltip text-xl"
                data-tooltip="Close"
                onClick={handleView}
              >
                <LiaTimesSolid />
              </button>
            </li>
          </ul>
        </div>

        <div className="max-w-[600px]  ">
          <div className="list  flex justify-between items-center py-2 border-b border-line">
            <p className="text-xs">PSA Certificatre</p>
            <div className="flex gap-4">
              <label className="relative text-xs column__toggle">
                <input
                  className="cursor-pointer opacity-0 w-0 h-0"
                  type="checkbox"
                />
                <div className="absolute w-[30px] cursor-pointer h-[19px] border bg-gray-300 top-0 right-0 rounded-2xl">
                  <div className="absolute w-[13px] h-[13px] top-[2px] left-[1px] bg-white rounded-full transition-all ease-linear "></div>
                </div>
              </label>
            </div>
          </div>

          <div className="list  flex justify-between items-center py-2 border-b border-line">
            <p className="text-xs">PSA Certificatre</p>
            <div className="flex gap-4">
              <label className="relative text-xs column__toggle">
                <input
                  className="cursor-pointer opacity-0 w-0 h-0"
                  type="checkbox"
                />
                <div className="absolute w-[30px] cursor-pointer h-[19px] border bg-gray-300 top-0 right-0 rounded-2xl">
                  <div className="absolute w-[13px] h-[13px] top-[2px] left-[1px] bg-white rounded-full transition-all ease-linear "></div>
                </div>
              </label>
            </div>
          </div>

          <div className="list  flex justify-between items-center py-2 border-b border-line">
            <p className="text-xs">PSA Certificatre</p>
            <div className="flex gap-4">
              <label className="relative text-xs column__toggle">
                <input
                  className="cursor-pointer opacity-0 w-0 h-0"
                  type="checkbox"
                />
                <div className="absolute w-[30px] cursor-pointer h-[19px] border bg-gray-300 top-0 right-0 rounded-2xl">
                  <div className="absolute w-[13px] h-[13px] top-[2px] left-[1px] bg-white rounded-full transition-all ease-linear "></div>
                </div>
              </label>
            </div>
          </div>

          <div className="list  flex justify-between items-center py-2 border-b border-line">
            <p className="text-xs">PSA Certificatre</p>
            <div className="flex gap-4">
              <label className="relative text-xs column__toggle">
                <input
                  className="cursor-pointer opacity-0 w-0 h-0"
                  type="checkbox"
                />
                <div className="absolute w-[30px] cursor-pointer h-[19px] border bg-gray-300 top-0 right-0 rounded-2xl">
                  <div className="absolute w-[13px] h-[13px] top-[2px] left-[1px] bg-white rounded-full transition-all ease-linear "></div>
                </div>
              </label>
            </div>
          </div>

          <div className="list  flex justify-between items-center py-2 border-b border-line">
            <p className="text-xs">PSA Certificatre</p>
            <div className="flex gap-4">
              <label className="relative text-xs column__toggle">
                <input
                  className="cursor-pointer opacity-0 w-0 h-0"
                  type="checkbox"
                />
                <div className="absolute w-[30px] cursor-pointer h-[19px] border bg-gray-300 top-0 right-0 rounded-2xl">
                  <div className="absolute w-[13px] h-[13px] top-[2px] left-[1px] bg-white rounded-full transition-all ease-linear "></div>
                </div>
              </label>
            </div>
          </div>

          <div className="remarks mt-5">
            <div className="form__wrap">
              <label htmlFor="">Remarks</label>
              <textarea name="" id="" cols="20" rows="5"></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequirementRegistrarEdit;
