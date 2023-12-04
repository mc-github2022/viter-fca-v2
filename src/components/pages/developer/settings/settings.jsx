import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import Navigation from "@/components/partials/Navigation.jsx";
import Toast from "@/components/partials/Toast.jsx";
import ModalValidate from "@/components/partials/modals/ModalValidate.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { setIsAdd } from "@/components/store/StoreAction.jsx";

const Settings = () => {
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
            <div className="flex justify-between items-end mb-10">
              <dvi>
                <h1 className="leading-none mb-2">Settings</h1>
                <p>Configure general system options</p>
              </dvi>
            </div>
            <Footer />
          </div>
        </div>
      </main>
      {store.validate && <ModalValidate />}
      {store.success && <Toast />}
    </>
  );
};

export default Settings;
