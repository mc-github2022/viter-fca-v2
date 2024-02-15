import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import NoData from "@/components/partials/NoData.jsx";
import ServerError from "@/components/partials/ServerError.jsx";
import TableLoading from "@/components/partials/TableLoading.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { FiEdit2, FiPlus, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import ParentNavigation from "../ParentNavigation.jsx";
import ModalRequirements from "./requirement/ModalRequirements.jsx";
import StudentViewInfo from "./student-info/StudentViewInfo.jsx";

const Student = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [showRequirement, setShowRequirement] = React.useState(false);
  return (
    <>
      {/* <Header /> */}
      <section className="main__wrap flex flex-col relative h-[100vh] ">
        <div className={`grow ${store.isMenuExpand ? "" : "expand"}`}>
          <ParentNavigation menu="student" />

          <main
            className={`main__content mt-[35px]  ${
              store.isMenuExpand ? "expand" : ""
            }`}
          >
            <div className="main__header  flex justify-between items-start lg:items-center  ">
              <div>
                <h1 className="text-clampH1 mb-0">My Student</h1>
                <p className="mb-4 text-xs hidden lg:block">
                  View information about your students, parents and emergency
                  contact list.
                </p>

                <Link
                  to="/"
                  className="flex items-center gap-2 mb-2 hover:underline "
                >
                  <FiPlus /> Parent - Guardian
                </Link>

                <button className="flex items-center gap-2 mb-2 hover:underline ">
                  <FiPlus /> Add Student
                </button>
              </div>
            </div>

            <StudentViewInfo />

            {/* <div className="student__card bg-primary  rounded-sm relative mb-2  max-w-[420px] w-full border-b border-line">
              <TableLoading count={20} cols={2} />
              <NoData />
              <ServerError />
            </div> */}
          </main>
        </div>
        <Footer />
      </section>
      {showRequirement && (
        <ModalRequirements setShowRequirement={setShowRequirement} />
      )}
    </>
  );
};

export default Student;