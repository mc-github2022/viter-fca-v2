import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import Navigation from "@/components/partials/Navigation.jsx";
import ModalSuccess from "@/components/partials/modals/ModalSuccess.jsx";
import ModalValidate from "@/components/partials/modals/ModalValidate.jsx";
import { setIsAdd } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { FaPlus } from "react-icons/fa";
import ClientList from "./ClientList.jsx";
import ModalAddClient from "./ModalAddClient.jsx";

const Clients = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  return (
    <>
      <Header />
      <section className="main__wrap flex flex-col relative h-[100vh] ">
        <div className={`grow ${store.isMenuExpand ? "" : "expand"}`}>
          <Navigation menu="clients" />

          <main
            className={`main__content mt-[35px]  ${
              store.isMenuExpand ? "expand" : ""
            }`}
          >
            <div className="main__header flex justify-between items-start lg:items-center  ">
              <div>
                <h1 className="text-clampH1 mb-0">Parent List</h1>
                <p className="mb-4 text-xs hidden lg:block">
                  List of clients/parents registered on the system.
                </p>
              </div>
              <button
                className="btn btn--accent btn--sm mt-1"
                onClick={handleAdd}
              >
                <FaPlus /> Add
              </button>
            </div>

            <ClientList setItemEdit={setItemEdit} />
          </main>
        </div>
        <Footer />
      </section>

      {store.isAdd && <ModalAddClient itemEdit={itemEdit} />}

      {store.success && <ModalSuccess />}
      {store.validate && <ModalValidate />}
    </>
  );
};

export default Clients;
