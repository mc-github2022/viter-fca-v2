import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import Navigation from "@/components/partials/Navigation.jsx";
import ModalSuccess from "@/components/partials/modals/ModalSuccess.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";

import { FaAngleLeft } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";

import { Link } from "react-router-dom";

import ParentInfoForm from "./info-parent/forms/ParentInfoForm.jsx";

const Client = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  let counter = 1;
  return (
    <>
      <Header />
      <section className="main__wrap flex relative ">
        <Navigation menu="student" />

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

              <h1 className="text-clampH1 mb-2">Parent & Guardian Records</h1>
              <p className="mb-4 text-xs hidden lg:block max-w-[650px] w-full">
                This parent & guardian record registration form is an official
                document that must be completed in its entirety and digitally
                signed by the parent or guardian. It must be accurate and
                complete before a student can be enrolled in FCA through the
                online enrollment system.
              </p>

              <button className="text-xs">Add Parent or Guardian</button>
            </div>
          </div>

          <div className="my-5 bg-primary rounded-md max-w-[900px] border-line border shadow-sm relative p-4 md:pl-0">
            <div className="gap-8 md:flex">
              <aside className="md:max-w-[220px] w-full">
                <h4 className="md:pl-4 mb-2 font-bold">Parent Information</h4>
              </aside>
              <div className="w-full">
                <div className={``}>
                  <table className="table__sm">
                    <thead>
                      <tr>
                        <td>#</td>
                        <td>Name</td>
                        <td className="hidden md:block">Relationship</td>
                        <td></td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{counter++}</td>
                        <td>asdasd</td>
                        <td className="hidden md:block">asdasd</td>
                        <td>
                          <ul className="flex ">
                            <li>
                              <button className="tooltip" data-tooltip="Edit">
                                <FiEdit2 />
                              </button>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <ParentInfoForm />
        </main>

        <Footer />
      </section>

      {store.success && <ModalSuccess />}
    </>
  );
};

export default Client;
