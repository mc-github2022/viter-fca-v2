import BreadCrumbs from "@/components/partials/BreadCrumbs";
import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import Navigation from "@/components/partials/Navigation";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import {
  FaAngleLeft,
  FaCaretLeft,
  FaPlus,
  FaRegCaretSquareLeft,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import StudentList from "./StudentList";

const Students = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  return (
    <>
      <Header />
      <section className="main__wrap flex relative ">
        <Navigation menu="student" />

        <main
          className={`main__content mt-[65px] ${
            store.isMenuExpand ? "" : "expand"
          }`}
        >
          <div className="main__header flex justify-between items-start lg:items-center">
            <div>
              <Link to="/" className="flex gap-1 items-center lg:hidden">
                <FaAngleLeft /> Back
              </Link>
              <BreadCrumbs />
              <h1 className="text-clampH1 mb-0">Students List</h1>
              <p className="mb-4 text-xs hidden lg:block">
                List of students registered on the system.
              </p>
            </div>
            <button className="btn btn--accent btn--sm mt-1">
              Add <FaPlus />
            </button>
          </div>

          <StudentList />
        </main>

        <Footer />
      </section>
    </>
  );
};

export default Students;
