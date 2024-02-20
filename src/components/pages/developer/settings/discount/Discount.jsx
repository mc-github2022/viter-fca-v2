import React from "react";

import ModalError from "@/components/partials/modals/ModalError";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import { StoreContext } from "@/components/store/StoreContext";
import DiscountList from "./DiscountList";
import Category from "./category/Category";
import ListDiscount from "./list/ListDiscount";
import { FaArrowLeft } from "react-icons/fa";
import { setIndexItem, setIsSettingAdd } from "@/components/store/StoreAction";
const Discount = ({ index }) => {
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

          {store.indexItem === 0 && (
            <>
              <DiscountList />
            </>
          )}

          <Category />
          <ListDiscount />

          {store.success && <ModalSuccess />}
          {store.error && <ModalError />}
        </div>
      </>
    );
  }
};

export default Discount;
