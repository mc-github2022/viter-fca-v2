import useQueryData from "@/components/custom-hooks/useQueryData";
import { getUrlParam } from "@/components/helpers/functions-general";
import BreadCrumbs from "@/components/partials/BreadCrumbs";
import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import TableLoading from "@/components/partials/TableLoading.jsx";
import ModalValidate from "@/components/partials/modals/ModalValidate.jsx";
import { StoreContext } from "@/components/store/StoreContext";
import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navigation from "../../Navigation.jsx";
import CardClientContactInfo from "./CardClientContactInfo.jsx";
import CardClientFinancierInfo from "./CardClientFinancierInfo.jsx";
import CardClientParentInfo from "./CardClientParentInfo.jsx";
import FormClientContactInfo from "./FormClientContactInfo.jsx";
import FormClientFinancierInfo from "./FormClientFinancierInfo.jsx";
import FormClientParentInfo from "./FormClientParentInfo.jsx";
const ClientViewInfo = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [showParentForm, setShowParentForm] = React.useState(false);
  const [showContactForm, setShowContactForm] = React.useState(false);
  const [showFinancierForm, setShowFinancierForm] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(null);

  const cid = getUrlParam().get("cid");
  const navigate = useNavigate();

  const {
    isLoading: guardianIsLoading,
    isFetching: guardianIsFetching,
    error: guardianIsError,
    data: guardianInfo,
  } = useQueryData(
    `/v2/dev-read-info-guardian/${cid}`, // endpoint
    "get", // method
    "guardianInfo" // key
  );

  const {
    isLoading: contactIsLoading,
    isFetching: contactIsFetching,
    error: contactIsError,
    data: contactInfo,
  } = useQueryData(
    `/v2/dev-read-info-contact/${cid}`, // endpoint
    "get", // method
    "contactInfo" // key
  );

  const {
    isLoading: financierIsLoading,
    isFetching: financierIsFetching,
    error: financierIsError,
    data: financierInfo,
  } = useQueryData(
    `/v2/dev-parents/${cid}`, // endpoint
    "get", // method
    "financierInfo" // key
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

  const {
    isLoading: parentIsLoading,
    isFetching: parentIsFetching,
    error: parentIsError,
    data: parent,
  } = useQueryData(
    `/v2/dev-parents/${cid}`, // endpoint
    "get", // method
    "parent" // key
  );

  const isOngoing =
    schoolYear?.count > 0 && schoolYear?.data[0].school_year_is_enrollment_open;

  return (
    <>
      <Header isLoading={isLoading} schoolYear={schoolYear} />
      <section className="main__wrap flex flex-col relative h-[calc(100vh-40px)]">
        <div className={`grow ${store.isMenuExpand ? "" : "expand"}`}>
          <Navigation
            menu="clients"
            isLoading={isLoading}
            error={error}
            schoolYear={schoolYear}
          />
          <main
            className={`main__content pl-4 md:pr-[13.5px] relative ${
              store.isMenuExpand ? "expand" : ""
            } ${isOngoing === 1 ? "customHeightOngoing" : "customHeight"}`}
          >
            <div className="main__header flex justify-between items-start lg:items-center ">
              <div className=" max-w-[620px] mt-[55px] flex items-start justify-between w-full">
                <div>
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="flex gap-1 items-center lg:hidden"
                  >
                    <FaAngleLeft /> Back
                  </button>
                  <BreadCrumbs />
                  <h1 className="text-clampH1 mb-2">
                    {parentIsLoading || parentIsFetching ? (
                      <p>Loading...</p>
                    ) : (
                      <>
                        <span className="pr-2">
                          {parent?.data[0].parents_fname}
                        </span>
                        <span>{parent?.data[0].parents_lname}</span>
                      </>
                    )}
                  </h1>
                </div>
              </div>
            </div>

            <div className="main__cardlist">
              {guardianIsLoading ? (
                <TableLoading />
              ) : (
                !showParentForm && (
                  <div
                    className={`bg-primary py-4 max-w-[620px] w-full rounded-md relative mb-2 ${
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
                      error={guardianIsError}
                      isLoading={guardianIsLoading}
                      isFetching={guardianIsFetching}
                    />
                  </div>
                )
              )}

              {showParentForm && (
                <FormClientParentInfo
                  guardianInfo={guardianInfo}
                  itemEdit={itemEdit}
                  setShowParentForm={setShowParentForm}
                  setItemEdit={setItemEdit}
                />
              )}

              {contactIsLoading || contactIsFetching ? (
                <TableLoading />
              ) : (
                !showContactForm && (
                  <div
                    className={`bg-primary py-4 max-w-[620px] w-full rounded-md  relative mb-2 ${
                      showParentForm || showFinancierForm
                        ? "pointer-events-none opacity-60"
                        : ""
                    }`}
                  >
                    <CardClientContactInfo
                      contactInfo={contactInfo}
                      itemEdit={itemEdit}
                      setItemEdit={setItemEdit}
                      setShowContactForm={setShowContactForm}
                      error={contactIsError}
                      isLoading={contactIsLoading}
                      isFetching={contactIsFetching}
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
              )}

              {financierIsLoading || financierIsFetching ? (
                <TableLoading />
              ) : (
                !showFinancierForm && (
                  <div
                    className={`bg-primary py-4 max-w-[620px] w-full rounded-md  relative mb-10 ${
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
                      error={financierIsError}
                      isLoading={financierIsLoading}
                      isFetching={financierIsFetching}
                    />
                  </div>
                )
              )}

              {showFinancierForm && (
                <FormClientFinancierInfo
                  itemEdit={itemEdit}
                  setShowFinancierForm={setShowFinancierForm}
                  setItemEdit={setItemEdit}
                  financierInfo={financierInfo}
                />
              )}
            </div>
          </main>
        </div>

        <Footer />
      </section>

      {store.validate && <ModalValidate />}
    </>
  );
};

export default ClientViewInfo;
