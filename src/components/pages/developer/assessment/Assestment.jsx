import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import ModalSuccess from "@/components/partials/modals/ModalSuccess.jsx";
import ModalValidate from "@/components/partials/modals/ModalValidate.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { FaPlus } from "react-icons/fa";
import Navigation from "../Navigation.jsx";
import AssessmentList from "./AssessmentList.jsx";

const Assestment = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  return (
    <>
      <Header />
      <section className="main__wrap flex flex-col relative h-[100vh] ">
        <div className={`grow ${store.isMenuExpand ? "" : "expand"}`}>
          <Navigation menu="assessment" />

          <main
            className={`main__content mt-[35px]  ${
              store.isMenuExpand ? "expand" : ""
            }`}
          >
            <div className="main__header flex justify-between items-start lg:items-center  ">
              <div>
                <h1 className="text-clampH1 mb-0">Assessment</h1>
                <p className="mb-4 text-xs hidden lg:block">
                  List of all student that need for assessment
                </p>
              </div>
            </div>
            <AssessmentList />
          </main>
        </div>
        <Footer />
      </section>

      {store.success && <ModalSuccess />}
      {store.validate && <ModalValidate />}
    </>
  );
};

export default Assestment;
