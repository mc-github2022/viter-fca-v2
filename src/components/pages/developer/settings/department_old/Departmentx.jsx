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
import DepartmentTable from "./DepartmentTable.jsx";
import ModalAddDepartment from "./ModalAddDepartment.jsx";

const Departmentx = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
  };
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
              <BreadCrumbs />
              <h1 className="text-clampH1 mb-0">Department</h1>
              <p className="mb-4 text-xs hidden lg:block">Set New Department</p>
            </div>
            <button
              className="btn btn--accent btn--sm mt-1"
              onClick={handleAdd}
            >
              Add <FaPlus />
            </button>
          </div>

          <DepartmentTable />
        </main>

        <Footer />
      </section>

      {/* {store.isAdd && <ModalAddDepartment />} */}
    </>
  );
};

export default Departmentx;
