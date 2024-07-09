import React from "react";

import ModalError from "@/components/partials/modals/ModalError";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import { setIndexItem, setIsSettingAdd } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { FaArrowLeft } from "react-icons/fa";
import AdditionalDiscount from "./additional/AdditionalDiscount";
import Category from "./category/Category";
import ListDiscount from "./list/ListDiscount";
import BaseRate from "./base-rate/BaseRate";
const Discount = ({ index, indexInner }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleBack = () => {
    dispatch(setIndexItem(0));
    dispatch(setIsSettingAdd(false));
  };

  if (index === 15) {
    return (
      <>
        <div className="">
          <div className="bg-primary">
            <div className="flex items-center mb-3">
              {store.indexItem !== 0 && (
                <button
                  className="tooltip mr-2"
                  data-tooltip="Back"
                  onClick={handleBack}
                >
                  <FaArrowLeft />
                </button>
              )}
              <h2 className="m-0">Discount</h2>
            </div>
            <p className="text-xs mb-5">
              Set list of discount that will be available to the current school
              year
            </p>
          </div>
          {indexInner === 3 && <Category />}

          {indexInner === 4 && <ListDiscount />}
          {indexInner === 5 && <AdditionalDiscount />}
          {indexInner === 6 && <BaseRate />}

          {store.success && <ModalSuccess />}
          {store.error && <ModalError />}
        </div>
      </>
    );
  }
};

export default Discount;
