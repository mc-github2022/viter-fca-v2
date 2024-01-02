import BreadCrumbs from "@/components/partials/BreadCrumbs";
import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import Navigation from "@/components/partials/Navigation";
import { StoreContext } from "@/components/store/StoreContext";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaAngleLeft, FaBars, FaPlus } from "react-icons/fa";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";

const Settings = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  return (
    <>
      <Header />
      <section className="main__wrap flex relative ">
        <Navigation menu="settings" submenu="department" />

        <main
          className={`main__content mt-[45px] ${
            store.isMenuExpand ? "" : "expand"
          } `}
        >
          <div className="main__header flex justify-between items-start lg:items-center">
            <div>
              <Link to="/" className="flex gap-1 items-center lg:hidden">
                <FaAngleLeft /> Back
              </Link>
              {/* <BreadCrumbs /> */}
              <h1 className="text-clampH1 mb-4">Settings</h1>
            </div>
          </div>
        </main>

        <Footer />
      </section>
    </>
  );
};

export default Settings;
