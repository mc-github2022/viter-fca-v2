import React from "react";

import { AiOutlinePlus } from "react-icons/ai";

import { setIsAdd } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import NotificationsFormAddEdit from "./NotificationsFormAddEdit.jsx";
import NotificationsList from "./NotificationsList.jsx";

const Notification = ({ index }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const handleAdd = () => {
    dispatch(setIsAdd(true));
  };

  if (index === 2) {
    return (
      <>
        <div className="border-l border-line pl-4">
          <div className="bg-primary ">
            <h2 className="mb-3">Notification</h2>
            <p className="text-xs mb-5">
              Set list of departments that will be available to the current
              school year
            </p>
          </div>

          {!store.isAdd && (
            <button
              className="flex gap-1 items-center mt-2 text-xs text-accent hover:underline mb-5"
              onClick={handleAdd}
            >
              <AiOutlinePlus /> Add New Notification
            </button>
          )}

          {store.isAdd && <NotificationsFormAddEdit />}
          {!store.isAdd && <NotificationsList />}
        </div>
      </>
    );
  }
};

export default Notification;
