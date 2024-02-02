import useQueryData from "@/components/custom-hooks/useQueryData";
import { getUrlParam } from "@/components/helpers/functions-general";
import BreadCrumbs from "@/components/partials/BreadCrumbs";
import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import Navigation from "@/components/partials/Navigation";
import NoData from "@/components/partials/NoData.jsx";
import TableLoading from "@/components/partials/TableLoading.jsx";
import ModalValidate from "@/components/partials/modals/ModalValidate.jsx";
import { StoreContext } from "@/components/store/StoreContext";
import React from "react";
import { CiMobile3 } from "react-icons/ci";
import { FaAngleLeft, FaPlus } from "react-icons/fa";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LuDot } from "react-icons/lu";

import { setIsDelete } from "@/components/store/StoreAction.jsx";
import { PiMapPinLight, PiPhoneThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
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

  const id = getUrlParam().get("cid");
  const navigate = useNavigate();

  const {
    isLoading: userIsLoading,
    isFetching: userIsFetching,
    error: userError,
    data: userAccount,
  } = useQueryData(
    `/v2/user-other/${id}`, // endpoint
    "get", // method
    "userAccount" // key
  );

  const {
    isLoading,
    isFetching,
    error,
    data: parentInfo,
  } = useQueryData(
    `/v2/dev-read-info-parent/${id}`, // endpoint
    "get", // method
    "parentInfo" // key
  );

  const {
    isLoading: contactIsLoading,
    isFetching: contactIsFetching,
    error: contactIsError,
    data: contactInfo,
  } = useQueryData(
    `/v2/dev-read-info-contact/${id}`, // endpoint
    "get", // method
    "contactInfo" // key
  );

  const {
    isLoading: financierIsLoading,
    isFetching: financierIsFetching,
    error: financierIsError,
    data: financierInfo,
  } = useQueryData(
    `/v2/dev-read-info-financial/${id}`, // endpoint
    "get", // method
    "financierInfo" // key
  );

  return (
    <div>
      <Header />
      <section className="main__wrap flex relative ">
        <Navigation menu="clients" />
        <main
          className={`main__content mt-[35px] ${
            store.isMenuExpand ? "" : "expand"
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
              <h1 className="text-clampH1 mb-5">
                {userIsLoading || userIsFetching ? (
                  <p>Loading</p>
                ) : (
                  <>
                    <span className="pr-2">
                      {userAccount?.data[0].user_other_fname}
                    </span>
                    <span>{userAccount?.data[0].user_other_lname}</span>
                  </>
                )}
              </h1>
            </div>
          </div>

          {isLoading ? (
            <TableLoading />
          ) : (
            !showParentForm && (
              <div
                className={`bg-primary p-4 max-w-[620px] w-full rounded-md shadow-sm relative mb-10 ${
                  showContactForm || showFinancierForm
                    ? "pointer-events-none opacity-60"
                    : ""
                }`}
              >
                <CardClientParentInfo
                  parentInfo={parentInfo}
                  itemEdit={itemEdit}
                  setItemEdit={setItemEdit}
                  setShowParentForm={setShowParentForm}
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
                className={`bg-primary p-4 max-w-[620px] w-full rounded-md shadow-sm relative mb-10 ${
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
          )}

          {financierIsLoading || financierIsFetching ? (
            <TableLoading />
          ) : (
            !showFinancierForm && (
              <div
                className={`bg-primary p-4 max-w-[620px] w-full rounded-md shadow-sm relative mb-10 ${
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
        </main>

        <Footer />
      </section>

      {store.validate && <ModalValidate />}
      {store.error && <ModalError />}
    </div>
  );
};

export default ClientViewInfo;