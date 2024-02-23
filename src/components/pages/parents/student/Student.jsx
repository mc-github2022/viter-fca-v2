import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
// import ParentNavigation from "../ParentNavigation.jsx";
import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import { devNavUrl } from "@/components/helpers/functions-general.jsx";
import ModalEditStudent from "../../admin/students/StudentEdit/ModalEditStudent.jsx";
import Navigation from "../Navigation.jsx";
import ModalRequirements from "./requirement/ModalRequirements.jsx";
import StudentViewInfo from "./student-info/StudentViewInfo.jsx";
import { default as ModalTuitionScheme } from "./tuition-scheme/ModalTuitionScheme.jsx";

const Student = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [showRequirement, setShowRequirement] = React.useState(false);
  const [isViewInfo, setIsViewInfo] = React.useState(false);
  const [showTuitionScheme, setShowTuitionScheme] = React.useState(false);

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

  const isOngoing = schoolYear?.data[0].school_year_is_enrollment_open;

  return (
    <>
      <Header />
      <section className="main__wrap flex flex-col relative ">
        <div className={`grow ${store.isMenuExpand ? "" : "expand"}`}>
          {/* <ParentNavigation menu="student" /> */}
          <Navigation menu="student" />

          <main
            className={`main__content mt-[35px]  ${
              store.isMenuExpand ? "expand" : ""
            } ${isOngoing === 1 ? "customHeightOngoing" : "customHeight"}`}
          >
            <div className="main__header  flex justify-between items-start lg:items-center  ">
              <div>
                <h1 className="text-clampH1 mb-0">My Student</h1>
                <p className="mb-4 text-xs hidden lg:block">
                  View information about your students, parents and emergency
                  contact list.
                </p>

                <Link
                  to={`${devNavUrl}/parent/information`}
                  className="flex items-center gap-2 mb-2 hover:underline "
                >
                  <FiPlus /> Parent - Guardian
                </Link>

                <button className="flex items-center gap-2 mb-2 hover:underline ">
                  <FiPlus /> Add Student
                </button>
              </div>
            </div>

            <StudentViewInfo
              setShowRequirement={setShowRequirement}
              setIsViewInfo={setIsViewInfo}
              setShowTuitionScheme={setShowTuitionScheme}
            />

            {/* <div className="student__card bg-primary  rounded-sm relative mb-2  max-w-[420px] w-full border-b border-line">
              <TableLoading count={20} cols={2} />
              <NoData />
              <ServerError />
            </div> */}
            <Footer />
          </main>
        </div>
      </section>

      {showTuitionScheme && (
        <ModalTuitionScheme setShowTuitionScheme={setShowTuitionScheme} />
      )}

      {isViewInfo && <ModalEditStudent setIsViewInfo={setIsViewInfo} />}

      {showRequirement && (
        <ModalRequirements setShowRequirement={setShowRequirement} />
      )}
    </>
  );
};

export default Student;
