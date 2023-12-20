import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import Navigation from "@/components/partials/Navigation.jsx";
import Toast from "@/components/partials/Toast.jsx";
import ModalValidate from "@/components/partials/modals/ModalValidate.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import {
  setIsAdd,
  setIsSettingsOpen,
} from "@/components/store/StoreAction.jsx";
import { FaSearch } from "react-icons/fa";
import SearchBar from "@/components/partials/SearchBar";
import RecordCount from "@/components/partials/RecordCount";
import UsersTable from "./NotificationTable";
import ModalAddDepartment from "./ModalAddNotification";
import useQueryData from "@/components/custom-hooks/useQueryData";
import DepartmentTable from "./NotificationTable";

const Notification = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  React.useEffect(() => {
    dispatch(setIsSettingsOpen(true));
  }, []);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };
  return (
    <>
      <Header />
      <main className="bg-secondary main__wrapper h-[calc(100vh-48px)]">
        <div className="grid grid-cols-[180px_1fr] gap-10 h-full ">
          <Navigation menu="settings" submenu="settingsNotifications" />
          <div className="pr-10 pt-5 relative">
            <div className="breadcrumbs"></div>
            <div className="flex justify-between items-center mb-5">
              <div>
                <h1 className="leading-none mb-2">Notifications</h1>
                <p className="mb-0">Set Notifications</p>
              </div>
              <button className="btn btn--accent btn--sm" onClick={handleAdd}>
                Add
              </button>
            </div>
            <SearchBar />
            <DepartmentTable setItemEdit={setItemEdit} />
            <Footer />
          </div>
        </div>
      </main>

      {store.isAdd && <ModalAddDepartment itemEdit={itemEdit} />}
      {store.validate && <ModalValidate />}
      {store.success && <Toast />}
    </>
  );
};

export default Notification;
