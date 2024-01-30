import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import BreadCrumbs from "@/components/partials/BreadCrumbs.jsx";
import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import Navigation from "@/components/partials/Navigation.jsx";
import ModalSuccess from "@/components/partials/modals/ModalSuccess.jsx";
import ModalValidate from "@/components/partials/modals/ModalValidate.jsx";
import { setIsAdd } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { FaAngleLeft, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import ClientList from "./ClientList.jsx";
import ModalAddClient from "./ModalAddClient.jsx";

const Clients = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const {
    isLoading,
    isFetching,
    error,
    data: roles,
  } = useQueryData(
    "/v2/dev-roles", // endpoint
    "get", // method
    "roles" // key
  );

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  return (
    <div>
      <Header />
      <section className="main__wrap flex relative ">
        <Navigation menu="clients" />

        <main
          className={`main__content mt-[35px] ${
            store.isMenuExpand ? "" : "expand"
          }`}
        >
          <div className="main__header flex justify-between items-start lg:items-center">
            <div>
              <Link to="/" className="flex gap-1 items-center lg:hidden">
                <FaAngleLeft /> Back
              </Link>
              <BreadCrumbs />
              <h1 className="text-clampH1 mb-0">Client List</h1>
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

        <Footer />
      </section>
      {store.isAdd && <ModalAddClient itemEdit={itemEdit} roles={roles} />}

      {store.success && <ModalSuccess />}
      {store.validate && <ModalValidate />}
    </div>
  );
};

export default Clients;
