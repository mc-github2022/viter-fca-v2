import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import Navigation from "@/components/partials/Navigation.jsx";
import Toast from "@/components/partials/Toast.jsx";
import ModalValidate from "@/components/partials/modals/ModalValidate.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { setIsAdd } from "@/components/store/StoreAction.jsx";
import { FaSearch } from "react-icons/fa";

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
            <div className="flex justify-between items-center mb-10">
              <div>
                <h1 className="leading-none mb-0">Users</h1>
                <p className="mb-0">View all system users and their role.</p>
              </div>
              <button className="btn btn--accent btn--sm">Add</button>
            </div>
            <form className="search-box">
              <div className="pb-2 flex items-center relative">
                <input
                  type="search"
                  placeholder="Search here..."
                  className="rounded-tr-none rounded-br-none border  text-sm py-2 "
                />
                <button
                  type="submit"
                  className="rounded text-[16px] p-2.5 border border-accent rounded-tl-none rounded-bl-none border-l-0 bg-accentDark text-white hover:bg-accentDark hover:border-accentDark"
                >
                  <FaSearch className="bg-gray" />
                </button>
              </div>
            </form>
            <Footer />
          </div>
        </div>
      </main>
      {store.validate && <ModalValidate />}
      {store.success && <Toast />}
    </>
  );
};

export default Users;
