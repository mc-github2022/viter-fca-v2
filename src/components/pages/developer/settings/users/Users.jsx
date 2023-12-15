import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import Navigation from "@/components/partials/Navigation.jsx";
import Toast from "@/components/partials/Toast.jsx";
import ModalValidate from "@/components/partials/modals/ModalValidate.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { setIsAdd } from "@/components/store/StoreAction.jsx";
import { FaSearch } from "react-icons/fa";
import SearchBar from "@/components/partials/SearchBar";
import RecordCount from "@/components/partials/RecordCount";
import UsersTable from "./UsersTable";
import ModalAddUser from "./ModalAddUser";

const Users = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };
  return (
    <>
      <Header />
      <main className="bg-secondary main__wrapper h-[calc(100vh-48px)]">
        <div className="grid grid-cols-[180px_1fr] gap-10 h-full ">
          <Navigation menu="settings" />
          <div className="pr-10 pt-5 relative">
            <div className="breadcrumbs"></div>
            <div className="flex justify-between items-center mb-5">
              <div>
                <h1 className="leading-none mb-0">Users</h1>
                <p className="mb-0">View all system users and their role.</p>
              </div>
              <button className="btn btn--accent btn--sm" onClick={handleAdd}>
                Add
              </button>
            </div>
            <SearchBar />
            <RecordCount />
            <UsersTable />
            <Footer />
          </div>
        </div>
      </main>

      {store.isAdd && <ModalAddUser />}
      {store.validate && <ModalValidate />}
      {store.success && <Toast />}
    </>
  );
};

export default Users;