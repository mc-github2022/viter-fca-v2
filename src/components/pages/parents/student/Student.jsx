import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { FiEdit2, FiTrash } from "react-icons/fi";
import ParentNavigation from "../ParentNavigation.jsx";
import ModalRequirements from "./requirement/ModalRequirements.jsx";
import TableLoading from "@/components/partials/TableLoading.jsx";
import NoData from "@/components/partials/NoData.jsx";
import ServerError from "@/components/partials/ServerError.jsx";

const Student = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [showRequirement, setShowRequirement] = React.useState(false);
  return (
    <>
      <Header />
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
              </div>

              <button className="btn btn--accent btn--sm mt-1">
                <FaPlus /> Add
              </button>
            </div>

            <div className="student__card bg-primary  rounded-sm relative mb-2  max-w-[420px] w-full border-b border-line">
              <TableLoading count={20} cols={2} />
              <NoData />
              <ServerError />
            </div>
            <div className="student__card bg-primary  rounded-sm relative mb-2  max-w-[420px] w-full border-b border-line">
              <h5 className="mb-1.5">Khael Sebastian Acal</h5>
              <ul className="grid grid-cols-[90px_1fr] gap-4 mb-1.5 text-xs ">
                <li className="min-w-[80px]">Grade Level: </li>
                <li>Grade II </li>
              </ul>

              <ul className="grid grid-cols-[90px_1fr] gap-4 mb-1.5 text-xs ">
                <li className="min-w-[80px]">LRN: </li>
                <li>1234-1234-456 </li>
              </ul>

              <ul className="grid grid-cols-[90px_1fr] gap-4 mb-1.5 text-xs ">
                <li className="min-w-[80px]">Status: </li> <li>Enrolled </li>
              </ul>
              <ul className="grid grid-cols-[90px_1fr] gap-4 mb-1.5 text-xs ">
                <li className="min-w-[80px]">Requirement: </li>
                <li>Completed</li>
              </ul>

              <button
                className="text-xs block my-4 hover:underline"
                onClick={() => setShowRequirement(true)}
              >
                View Requirements
              </button>
              <div className="card__action absolute top-1 right-0  flex gap-2 ">
                <button
                  className=" tooltip"
                  data-tooltip="Edit"
                  // onClick={() => handleShowContactForm(item)}
                >
                  <FiEdit2 />
                </button>

                <button
                  className=" tooltip"
                  data-tooltip="Delete"
                  // onClick={() => handleDeleteContactCard(item)}
                >
                  <FiTrash />
                </button>
              </div>
            </div>
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
