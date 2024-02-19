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

  const pid = getUrlParam().get("pid");
  const navigate = useNavigate();

  const {
    isLoading: guardianIsLoading,
    isFetching: guardianIsFetching,
    error: guardianIsError,
    data: guardianInfo,
  } = useQueryData(
    `/v2/dev-read-info-guardian/${pid}`, // endpoint
    "get", // method
    "guardianInfo" // key
  );

  const {
    isLoading: contactIsLoading,
    isFetching: contactIsFetching,
    error: contactIsError,
    data: contactInfo,
  } = useQueryData(
    `/v2/dev-read-info-contact/${pid}`, // endpoint
    "get", // method
    "contactInfo" // key
  );

  // const {
  //   isLoading: financierIsLoading,
  //   isFetching: financierIsFetching,
  //   error: financierIsError,
  //   data: financierInfo,
  // } = useQueryData(
  //   `/v2/dev-read-info-financial/${id}`, // endpoint
  //   "get", // method
  //   "financierInfo" // key
  // );

  return (
    <>
      <Header />
      <section className="main__wrap flex flex-col relative h-[100vh]">
        <div className="grow">
          <Navigation menu="clients" />
          <main
            className={`main__content mt-[35px]  ${
              store.isMenuExpand ? "expand" : ""
            }`}
          >
            <div className="main__header flex justify-between items-start lg:items-center">
              <div>
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="flex gap-1 items-center lg:hidden"
                >
                  <FaAngleLeft /> Back
                </button>
                <BreadCrumbs />
                <h1 className="text-clampH1 ">
                  {/* {parentIsLoading || parentIsFetching ? (
                    <p>Loading</p>
                  ) : (
                    <>
                      <span className="pr-2 capitalize">
                        {parentInfo?.data[0].parents_fname}{" "}
                        {parentInfo?.data[0].parents_lname}
                      </span>
                    </>
                  )} */}
                </h1>
              </div>
            </div>

            <div className="main__cardlist">
              {guardianIsLoading ? (
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
                      error={guardianIsError}
                      isLoading={guardianIsLoading}
                      isFetching={guardianIsFetching}
                    />
                  </div>
                )
              )}

              {showParentForm && (
                <FormClientParentInfo
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
                    className={`bg-primary p-4 max-w-[620px] w-full rounded-md  relative mb-2 ${
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

              {/*{financierIsLoading || financierIsFetching ? (
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
              )} */}
            </div>
          </main>
        </div>

        <Footer />
      </section>

      {store.validate && <ModalValidate />}
      {store.error && <ModalError />}
    </>
  );
};

export default ClientViewInfo;
