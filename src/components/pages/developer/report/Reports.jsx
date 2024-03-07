import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import ModalError from "@/components/partials/modals/ModalError.jsx";
import ModalSuccess from "@/components/partials/modals/ModalSuccess.jsx";
import ModalValidate from "@/components/partials/modals/ModalValidate.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import Navigation from "../Navigation.jsx";

const Reports = () => {
  const { store, dispatch } = React.useContext(StoreContext);

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

  return (
    <>
      <Header isLoading={isLoading} schoolYear={schoolYear} />
      <section className="main__wrap flex flex-col relative h-[calc(100vh-40px)]">
        <div className={`grow ${store.isMenuExpand ? "" : "expand"}`}>
          <Navigation
            menu="reports"
            isLoading={isLoading}
            error={error}
            schoolYear={schoolYear}
            subNavActive="student"
          />

          <main
            className={`main__content pl-0 md:pr-[13.5px] relative ${
              store.isMenuExpand ? "expand" : ""
            } ${isOngoing === 1 ? "customHeightOngoing" : "customHeight"}`}
          >
            <div className="main__header flex justify-between items-start lg:items-center my-2 ">
              <div className="mt-[55px] flex items-start justify-between w-full">
                <div>
                  <h1 className="text-clampH1 mb-0">Report List</h1>
                  <p className="mb-4 text-xs hidden lg:block">
                    List of reports enrolled in the current school year.
                  </p>
                </div>
              </div>
            </div>
            <p>we'll be right back</p>
          </main>
        </div>
        <Footer />
      </section>
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
      {store.validate && <ModalValidate />}
    </>
  );
};

export default Reports;
