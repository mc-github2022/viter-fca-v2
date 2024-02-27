import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import TableLoading from "@/components/partials/TableLoading.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import CardClientContactInfo from "../developer/clients/client-info/CardClientContactInfo.jsx";
import CardClientFinancierInfo from "../developer/clients/client-info/CardClientFinancierInfo.jsx";
import CardClientParentInfo from "../developer/clients/client-info/CardClientParentInfo.jsx";
import ClientViewInfo from "../developer/clients/client-info/ClientViewInfo.jsx";
import FormClientContactInfo from "../developer/clients/client-info/FormClientContactInfo.jsx";
import FormClientFinancierInfo from "../developer/clients/client-info/FormClientFinancierInfo.jsx";
import FormClientParentInfo from "../developer/clients/client-info/FormClientParentInfo.jsx";
import ModalEditStudent from "../developer/students/StudentEdit/ModalEditStudent.jsx";
import StudentProfileForm from "../developer/students/StudentEdit/StudentProfile/StudentProfileForm.jsx";
import Navigation from "./Navigation.jsx";
// import ParentNavigation from "./ParentNavigation.jsx";

const Parents = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [showParentForm, setShowParentForm] = React.useState(false);
  const [showContactForm, setShowContactForm] = React.useState(false);
  const [showFinancierForm, setShowFinancierForm] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [parentID, setParentID] = React.useState(null);

  const [hasBiologicalMother, setHasBiologicalMother] = React.useState(false);
  const [hasBiologicalFather, setHasBiologicalFather] = React.useState(false);

  const {
    isLoading,
    isFetching,
    error,
    data: guardianInfo,
  } = useQueryData(
    `/v2/dev-read-info-guardian/${store.credentials?.data.parents_aid}`, // endpoint
    "get", // method
    "guardianInfo" // key
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

  const isOngoing = schoolYear?.data[0].school_year_is_enrollment_open;

  const {
    isLoading: contactIsLoading,
    isFetching: contactIsFetching,
    error: contactIsError,
    data: contactInfo,
  } = useQueryData(
    `/v2/dev-read-info-contact/${store.credentials?.data.parents_aid}`, // endpoint
    "get", // method
    "contactInfo" // key
  );

  const {
    isLoading: financierIsLoading,
    isFetching: financierIsFetching,
    error: financierIsError,
    data: financierInfo,
  } = useQueryData(
    `/v2/dev-parents/${store.credentials?.data.parents_aid}`, // endpoint
    "get", // method
    "financierInfo" // key
  );

  React.useEffect(() => {
    function checkRelationshipExist(guardianInfo) {
      if (!isLoading) {
        guardianInfo.data.map((relationship) => {
          if (relationship.relationship_name === "Biological Mother") {
            setHasBiologicalMother(true);
          } else if (relationship.relationship_name === "Biological Father") {
            setHasBiologicalFather(true);
          }
          return;
        });
      }
    }

    checkRelationshipExist(guardianInfo);
  }, [isLoading]);

  return (
    <>
      <Header isLoading={isLoading} schoolYear={schoolYear} />
      {/* <ModalEditStudent /> */}
      <section className="main__wrap flex flex-col relative ">
        <div className={`grow ${store.isMenuExpand ? "" : "expand"}`}>
          {/* <ParentNavigation menu="clients" /> */}
          <Navigation
            menu="my-info"
            isLoading={isLoading}
            error={error}
            schoolYear={schoolYear}
          />

          <main
            className={`main__content mt-[35px]  ${
              store.isMenuExpand ? "expand" : ""
            }  ${isOngoing === 1 ? "customHeightOngoing" : "customHeight"}`}
          >
            <div className="flex justify-between items-center max-w-[620px] w-full mb-3">
              <div>
                <h1 className="text-clampH1 mb-2">My Information</h1>
                <p className="text-xs opacity-75">
                  View information about your students, parents and emergency
                  contact list.
                </p>
              </div>
            </div>
            <div className="main__cardlist">
              {isLoading ? (
                <TableLoading />
              ) : (
                !showParentForm && (
                  <div
                    className={`bg-primary p-4 max-w-[620px] w-full rounded-md   relative mb-2 ${
                      showContactForm || showFinancierForm
                        ? "pointer-events-none opacity-60"
                        : ""
                    }`}
                  >
                    <CardClientParentInfo
                      guardianInfo={guardianInfo}
                      itemEdit={itemEdit}
                      setItemEdit={setItemEdit}
                      setShowParentForm={setShowParentForm}
                      error={error}
                    />
                  </div>
                )
              )}
              {showParentForm && (
                <FormClientParentInfo
                  itemEdit={itemEdit}
                  setShowParentForm={setShowParentForm}
                  setItemEdit={setItemEdit}
                  hasBiologicalMother={hasBiologicalMother}
                  hasBiologicalFather={hasBiologicalFather}
                />
              )}
              {contactIsLoading || contactIsFetching ? (
                <TableLoading />
              ) : (
                !showContactForm && (
                  <div
                    className={`bg-primary p-4 max-w-[620px] w-full rounded-md  relative mb-2 ${
                      showParentForm || showFinancierForm
                        ? "pointer-events-none opacity-60"
                        : ""
                    }`}
                  >
                    <CardClientContactInfo
                      contactInfo={contactInfo}
                      itemEdit={itemEdit}
                      setShowContactForm={setShowContactForm}
                      setItemEdit={setItemEdit}
                    />
                  </div>
                )
              )}
              {showContactForm && (
                <FormClientContactInfo
                  itemEdit={itemEdit}
                  setShowContactForm={setShowContactForm}
                  setItemEdit={setItemEdit}
                />
              )}{" "}
              {financierIsLoading || financierIsFetching ? (
                <TableLoading />
              ) : (
                !showFinancierForm && (
                  <div
                    className={`bg-primary p-4 max-w-[620px] w-full rounded-md  relative mb-10 ${
                      showParentForm || showContactForm
                        ? "pointer-events-none opacity-60"
                        : ""
                    }`}
                  >
                    <CardClientFinancierInfo
                      financierInfo={financierInfo}
                      itemEdit={itemEdit}
                      setShowFinancierForm={setShowFinancierForm}
                      setItemEdit={setItemEdit}
                    />
                  </div>
                )
              )}
              {showFinancierForm && (
                <FormClientFinancierInfo
                  itemEdit={itemEdit}
                  setShowFinancierForm={setShowFinancierForm}
                  setItemEdit={setItemEdit}
                />
              )}
            </div>
            <Footer />
          </main>
        </div>
      </section>
    </>
  );
};

export default Parents;
