import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import ModalSuccess from "@/components/partials/modals/ModalSuccess.jsx";
import ModalValidate from "@/components/partials/modals/ModalValidate.jsx";
import { setIsAdd } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { FaPlus } from "react-icons/fa";
import Navigation from "../Navigation.jsx";
import ModalAddStudent from "./ModalAddStudent.jsx";
import StudentList from "./StudentList.jsx";

const Students = () => {
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

  const isOngoing = schoolYear?.data[0].school_year_is_enrollment_open;

  const handleAdd = () => {
    dispatch(setIsAdd(true));
  };

  return (
    <div>
      <Header isLoading={isLoading} schoolYear={schoolYear} />
      <section className="main__wrap flex flex-col relative ">
        <div className={`grow ${store.isMenuExpand ? "" : "expand"}`}>
          <Navigation
            menu="students"
            isLoading={isLoading}
            error={error}
            schoolYear={schoolYear}
          />

          <main
            className={`main__content mt-[35px] relative ${
              store.isMenuExpand ? "expand" : ""
            } ${isOngoing === 1 ? "customHeightOngoing" : "customHeight"}`}
          >
            <div className="main__header flex justify-between items-start lg:items-center  ">
              <div>
                <h1 className="text-clampH1 mb-0">Student List</h1>
                <p className="mb-4 text-xs hidden lg:block">
                  List of students registered on the system.
                </p>
              </div>
              <button
                className="btn btn--accent btn--sm mt-1 mr-0.5"
                onClick={handleAdd}
              >
                <FaPlus /> Add
              </button>
            </div>

            <StudentList gradeLevel={gradeLevel} />
            <Footer />
          </main>
        </div>
      </section>
      {store.isAdd && (
        <ModalAddStudent schoolYear={schoolYear} gradeLevel={gradeLevel} />
      )}
      {store.success && <ModalSuccess />}
      {store.validate && <ModalValidate />}
    </div>
  );
};

export default Students;
