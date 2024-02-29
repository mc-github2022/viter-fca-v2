import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import ServerError from "@/components/partials/ServerError.jsx";
import ModalSuccess from "@/components/partials/modals/ModalSuccess.jsx";
import ModalValidate from "@/components/partials/modals/ModalValidate.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import Navigation from "../Navigation.jsx";
import AssessmentList from "./AssessmentList.jsx";
import ModalAssessment from "./modal/ModalAssessment.jsx";

const Assestment = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [showAssesment, setShowAssessment] = React.useState(false);
  const [itemAssessment, setItemAssessment] = React.useState(null);

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
      <section className="main__wrap flex flex-col relative">
        <div className={`grow ${store.isMenuExpand ? "" : "expand"}`}>
          <Navigation
            menu="assessment"
            isLoading={isLoading}
            error={error}
            schoolYear={schoolYear}
          />

          <main
            className={`main__content translate-y-[35px] relative ${
              store.isMenuExpand ? "expand" : ""
            } ${isOngoing === 1 ? "customHeightOngoing" : "customHeight"}`}
          >
            <div className="main__header flex justify-between items-start lg:items-center  ">
              <div>
                <h1 className="text-clampH1 mb-0">Assessment</h1>
                <p className="mb-4 text-xs hidden lg:block">
                  List of all student that need for assessment
                </p>
              </div>
            </div>
            <AssessmentList
              setShowAssessment={setShowAssessment}
              setItemAssessment={setItemAssessment}
            />
          </main>
        </div>
        <Footer />
      </section>

      {showAssesment && (
        <ModalAssessment
          setShowAssessment={setShowAssessment}
          item={itemAssessment}
        />
      )}
      {store.success && <ModalSuccess />}
      {store.validate && <ModalValidate />}
    </>
  );
};

export default Assestment;
