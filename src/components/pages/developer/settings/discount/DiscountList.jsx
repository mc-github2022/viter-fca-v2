import React from "react";
import { setIndexItem, setIsSettingAdd } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { FaListUl } from "react-icons/fa";
const DiscountList = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleOpen = (val) => {
    dispatch(setIndexItem(val));
    dispatch(setIsSettingAdd(false));
  };

  return (
    <>
      <div className="datalist max-w-[650px] w-full overflow-x-hidden overflow-y-auto max-h-[450px] lg:max-h-[580px] custom__scroll  poco:max-h-[640px] lg:poco:max-h-[400px]">
        <div
          className={
            "datalist__item text-xs  flex justify-between lg:items-center border-b border-line py-2 first:pt-5 lg:flex-row "
          }
        >
          {/* Category of Discount */}
          <p className="mb-1">Category</p>

          <ul className="datalist__action flex items-center gap-1 pr-3 ">
            <li className=" ">
              <button
                className="tooltip"
                data-tooltip="View"
                onClick={() => handleOpen(1)}
              >
                <FaListUl className="text-base" />
              </button>
            </li>
          </ul>
        </div>

        <div
          className={
            "datalist__item text-xs  flex justify-between lg:items-center border-b border-line py-2 first:pt-5 lg:flex-row "
          }
        >
          {/* List of Discount */}
          <p className="mb-1">List</p>

          <ul className="datalist__action flex items-center gap-1 pr-3 ">
            <li className=" ">
              <button
                className="tooltip"
                data-tooltip="View"
                onClick={() => handleOpen(2)}
              >
                <FaListUl className="text-base" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DiscountList;
