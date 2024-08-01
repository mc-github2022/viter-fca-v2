import React from "react";

import { AiOutlinePlus } from "react-icons/ai";

import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import ModalError from "@/components/partials/modals/ModalError";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import { setIsAdd, setIsSettingAdd } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import NotificationsFormAddEdit from "./NotificationsFormAddEdit";
import NotificationsList from "./NotificationsList";
const Notifications = ({ index }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsSettingAdd(true));
    setItemEdit(null);
  };

  const {
    isLoading,
    isFetching,
    error,
    data: department,
  } = useQueryData(
    "/v2/dev-department", // endpoint
    "get", // method
    "department" // key
  );

  if (index === 2) {
    return (
      <>
        <div className="">
          <div className="bg-primary">
            <h2 className="mb-3">Notifications</h2>
            <p className="text-xs mb-5">
              Set list of notificationss that will be available to the current
              school year
            </p>
          </div>

          {store.isSettingAdd && (
            <NotificationsFormAddEdit
              itemEdit={itemEdit}
              department={department}
            />
          )}

          {!store.isSettingAdd && (
            <div className="custom__scroll">
              <button
                className="flex gap-1 items-center mt-2 text-xs hover:underline mb-5"
                onClick={handleAdd}
              >
                <AiOutlinePlus /> Add New
              </button>
              <NotificationsList setItemEdit={setItemEdit} />
            </div>
          )}
          {store.success && <ModalSuccess />}
          {store.error && <ModalError />}
        </div>
      </>
    );
  }
};

export default Notifications;
