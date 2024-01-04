import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import BreadCrumbs from "@/components/partials/BreadCrumbs";
import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import Navigation from "@/components/partials/Navigation";
import { setIsAdd } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import {
  FaAngleLeft,
  FaCaretLeft,
  FaPlus,
  FaRegCaretSquareLeft,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ModalAddSystem from "./ModalAddSystem.jsx";
import UsersTable from "./SystemList.jsx";

const System = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const { data: roles } = useQueryData(
    "/v2/dev-roles", // endpoint
    "get", // method
    "dev-roles" // key
  );

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  // if (store.credentials.data.role_is_developer !== 1) {
  //   return <PageNotFound />;
  // }

  return (
    <>
      <Header />
      <section className="main__wrap flex relative ">
        <Navigation menu="student" />

        <main className="main__content mt-[65px]">
          <div className="main__header flex justify-between items-start lg:items-center">
            <div>
              <Link to="/" className="flex gap-1 items-center lg:hidden">
                <FaAngleLeft /> Back
              </Link>
              <BreadCrumbs param={location.search} />
              <h1 className="text-clampH1 mb-0">User System</h1>
              <p className="mb-4 text-xs hidden lg:block">
                List of developers on the system
              </p>
            </div>
            <button
              className="btn btn--accent btn--sm mt-1"
              onClick={handleAdd}
            >
              Add <FaPlus />
            </button>
          </div>

          <UsersTable setItemEdit={setItemEdit} />
        </main>

        <Footer />
      </section>

      {store.isAdd && <ModalAddSystem itemEdit={itemEdit} roles={roles} />}
    </>
  );
};

export default System;
