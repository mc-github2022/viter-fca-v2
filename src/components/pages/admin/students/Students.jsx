import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import BreadCrumbs from "@/components/partials/BreadCrumbs.jsx";
import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import ModalSuccess from "@/components/partials/modals/ModalSuccess.jsx";
import ModalValidate from "@/components/partials/modals/ModalValidate.jsx";
import { setIsAdd } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { FaAngleLeft, FaBars, FaPlus } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import ModalAddStudent from "../../developer/students/ModalAddStudent.jsx";
import StudentList from "../../developer/students/StudentList.jsx";
import Navigation from "../Navigation.jsx";

const Students = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const {
    isLoading,
    isFetching,
    error,
    data: roles,
  } = useQueryData(
    "/v2/dev-roles", // endpoint
    "get", // method
    "roles" // key
  );

  const {
    isLoading: isLoadingSY,
    isFetching: isFetchingSY,
    error: errorSY,
    data: schoolYear,
  } = useQueryData(
    "/v2/dev-school-year", // endpoint
    "get", // method
    "header-school-year" // key
  );

  const isOngoing =
    schoolYear?.count > 0 && schoolYear?.data[0].school_year_is_enrollment_open;

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  return (
    <div>
      <Header />
      <section className="main__wrap flex flex-col relative ">
        <div className={`grow ${store.isMenuExpand ? "" : "expand"} `}>
          <Navigation menu="students" />

          <main
            className={`main__content mt-[35px]  ${
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
                className="btn btn--accent btn--sm mt-1"
                onClick={handleAdd}
              >
                <FaPlus /> Add
              </button>
            </div>

            <StudentList setItemEdit={setItemEdit} />
            <Footer />
          </main>
        </div>
      </section>
      {store.isAdd && <ModalAddStudent itemEdit={itemEdit} roles={roles} />}
      {store.success && <ModalSuccess />}
      {store.validate && <ModalValidate />}
    </div>
  );
};

export default Students;
