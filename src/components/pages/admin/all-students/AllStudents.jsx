import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import ModalError from "@/components/partials/modals/ModalError.jsx";
import ModalSuccess from "@/components/partials/modals/ModalSuccess.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import AllStudentList from "../../developer/all-students/AllStudentList.jsx";
import Navigation from "../Navigation.jsx";

const AllStudents = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const { data: gradeLevel } = useQueryData(
    "/v2/dev-grade-level", // endpoint
    "get", // method
    "grade-level" // key
  );

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
    <div>
      <Header isLoading={isLoading} schoolYear={schoolYear} />
      <section className="main__wrap flex flex-col relative h-[calc(100vh-40px)]">
        <div className={`grow ${store.isMenuExpand ? "" : "expand"}`}>
          <Navigation
            menu="students"
            isLoading={isLoading}
            error={error}
            schoolYear={schoolYear}
          />

          <main
            className={`main__content pl-4 lg:pl-0 md:pr-[13.5px] relative ${
              store.isMenuExpand ? "expand" : ""
            } ${isOngoing === 1 ? "customHeightOngoing" : "customHeight"}`}
          >
            <div className="main__header flex justify-between items-start lg:items-center my-2 ">
              <div className="mt-[55px] flex items-start justify-between w-full">
                <div>
                  <h1 className="text-clampH1 mb-0">All Student List</h1>
                  <p className="mb-4 text-xs hidden lg:block">
                    List of students registered on the system.
                  </p>
                </div>
              </div>
            </div>

            <AllStudentList
              gradeLevel={gradeLevel}
              isOngoing={isOngoing}
              schoolYear={schoolYear}
            />
          </main>
        </div>
        <Footer />
      </section>

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </div>
  );
};

export default AllStudents;
