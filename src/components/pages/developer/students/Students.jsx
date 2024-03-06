import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import ModalSuccess from "@/components/partials/modals/ModalSuccess.jsx";
import ModalValidate from "@/components/partials/modals/ModalValidate.jsx";
import {
  setIsAdd,
  setMessage,
  setValidate,
} from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { FaPlus } from "react-icons/fa";
import Navigation from "../Navigation.jsx";
import ModalAddStudent from "./ModalAddStudent.jsx";
import ModalEditStudent from "./StudentEdit/ModalEditStudent.jsx";
import StudentList from "./StudentList.jsx";

const Students = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isViewInfo, setIsViewInfo] = React.useState(false);
  const [dataItem, setData] = React.useState(null);

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

  const handleAdd = () => {
    if (isOngoing === 0 || !isOngoing) {
      dispatch(setValidate(true));
      dispatch(setMessage(" There's no enrollment yet."));
      return;
    }
    dispatch(setIsAdd(true));
  };

  return (
    <>
      <Header isLoading={isLoading} schoolYear={schoolYear} />
      <section className="main__wrap flex flex-col relative h-[calc(100vh-40px)]">
        <div className={`grow ${store.isMenuExpand ? "" : "expand"}`}>
          <Navigation
            menu="enrollment"
            isLoading={isLoading}
            error={error}
            schoolYear={schoolYear}
          />

          <main
            className={`main__content pl-0 md:pr-[13.5px] relative ${
              store.isMenuExpand ? "expand" : ""
            } ${isOngoing === 1 ? "customHeightOngoing" : "customHeight"}`}
          >
            <div className="main__header flex justify-between items-start lg:items-center my-2 ">
              <div className="mt-[55px] flex items-start justify-between w-full">
                <div>
                  <h1 className="text-clampH1 mb-0">Enrollment List</h1>
                  <p className="mb-4 text-xs hidden lg:block">
                    List of students enrolled in the current school year.
                  </p>
                </div>

                <button
                  className="btn btn--accent btn--sm mt-1"
                  onClick={handleAdd}
                >
                  <FaPlus /> Add
                </button>
              </div>
            </div>

            <StudentList
              setIsViewInfo={setIsViewInfo}
              setData={setData}
              dataItem={dataItem}
            />
          </main>
        </div>
        <Footer />
      </section>
      {store.isAdd && <ModalAddStudent schoolYear={schoolYear} />}
      {store.success && <ModalSuccess />}
      {store.validate && <ModalValidate />}

      {isViewInfo && (
        <ModalEditStudent setIsViewInfo={setIsViewInfo} dataItem={dataItem} />
      )}
    </>
  );
};

export default Students;
