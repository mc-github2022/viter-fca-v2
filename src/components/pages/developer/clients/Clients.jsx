import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import PageNotFound from "@/components/partials/PageNotFound.jsx";
import ModalSuccess from "@/components/partials/modals/ModalSuccess.jsx";
import ModalValidate from "@/components/partials/modals/ModalValidate.jsx";
import { setIsAdd } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { FaPlus } from "react-icons/fa";
import Navigation from "../Navigation.jsx";
import ClientList from "./ClientList.jsx";
import ModalAddClient from "./ModalAddClient.jsx";

const Clients = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  const {
    isLoading,
    error,
    data: schoolYear,
  } = useQueryData(
    "/v2/dev-school-year", // endpoint
    "get", // method
    "school-year" // key
  );

  const isOngoing =
    schoolYear?.count > 0 && schoolYear?.data[0].school_year_is_enrollment_open;

  const isDev = JSON.parse(localStorage.getItem("fcatoken")).isDev;

  if (store.credentials.data.role_is_developer !== 1 || !isDev) {
    return <PageNotFound />;
  }

  return (
    <>
      <Header isLoading={isLoading} schoolYear={schoolYear} />
      <section className="main__wrap flex flex-col relative h-[calc(100vh-40px)]">
        <div className={`grow ${store.isMenuExpand ? "" : "expand"}`}>
          <Navigation
            menu="clients"
            isLoading={isLoading}
            error={error}
            schoolYear={schoolYear}
          />

          <main
            className={`main__content pl-4 md:pr-[13.5px] relative ${
              store.isMenuExpand ? "expand" : ""
            } ${isOngoing === 1 ? "customHeightOngoing" : "customHeight"}`}
          >
            <div className="main__header flex justify-between items-start lg:items-center my-2 ">
              <div className="mt-[55px] flex items-start justify-between w-full">
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
            </div>

            <ClientList setItemEdit={setItemEdit} />
          </main>
        </div>
        <Footer />
      </section>

      {store.isAdd && !store.isShowSetting && (
        <ModalAddClient itemEdit={itemEdit} />
      )}
      {store.success && !store.isShowSetting && <ModalSuccess />}
      {store.validate && !store.isShowSetting && <ModalValidate />}
    </>
  );
};

export default Clients;
