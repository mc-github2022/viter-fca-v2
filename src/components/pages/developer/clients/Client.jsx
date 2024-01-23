import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import Navigation from "@/components/partials/Navigation.jsx";
import ModalSuccess from "@/components/partials/modals/ModalSuccess.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";

import { FaAngleLeft } from "react-icons/fa";
import { FiEdit2, FiTrash } from "react-icons/fi";

import { Link } from "react-router-dom";

import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import NoData from "@/components/partials/NoData.jsx";
import ServerError from "@/components/partials/ServerError.jsx";
import TableLoading from "@/components/partials/TableLoading.jsx";
import ModalDelete from "@/components/partials/modals/ModalDelete.jsx";
import { setIsAdd, setIsDelete } from "@/components/store/StoreAction.jsx";
import ContactWrapper from "./info-contact/ContactWrapper.jsx";
import TableParentInfo from "./info-parent/TableParentInfo.jsx";
import ParentInfoForm from "./info-parent/forms/ParentInfoForm.jsx";

const Client = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [dataItem, setData] = React.useState(null);
  const [id, setId] = React.useState(null);

  // SHOW HIDE TABLE& FORMS
  const [showParentForm, setShowParentForm] = React.useState(false);

  const credentialUserId = store.credentials.data.user_system_aid;

  const {
    isLoading,
    isFetching,
    error,
    data: parentinfo,
  } = useQueryData(
    `/v2/dev-read-info-parent/${credentialUserId}`, // endpoint
    "get", // method
    "parentinfo" // key
  );

  const { data: relationship } = useQueryData(
    "/v2/dev-relationship", // endpoint
    "get", // method
    "relationship" // key
  );

  const listRelationship = relationship?.data.filter(
    (item) => item.relationship_active === 1
  );

  const handleAdd = () => {
    setShowParentForm(true);
    setItemEdit(null);
  };

  return (
    <>
      <Header />
      <section className="main__wrap flex relative ">
        <Navigation menu="student" />

        <main
          className={`main__content mt-[35px] ${
            store.isMenuExpand ? "" : "expand"
          }`}
        >
          <div className="main__header flex justify-between items-start lg:items-center">
            <div>
              <Link to="/" className="flex gap-1 items-center lg:hidden">
                <FaAngleLeft /> Back
              </Link>

              <h1 className="text-clampH1 mb-2">Parent & Guardian Records</h1>
              <p className="mb-4 text-xs hidden lg:block max-w-[650px] w-full">
                This parent & guardian record registration form is an official
                document that must be completed in its entirety and digitally
                signed by the parent or guardian. It must be accurate and
                complete before a student can be enrolled in FCA through the
                online enrollment system.
              </p>

              <button
                className={`${itemEdit ? "pointer-events-none" : ""} text-xs`}
                onClick={handleAdd}
              >
                Add Parent or Guardian
              </button>
            </div>
          </div>
          {/* {!showParentForm && (
            <TableParentInfo
              setShowParentForm={setShowParentForm}
              setItemEdit={setItemEdit}
              setId={setId}
              setData={setData}
              isLoading={isLoading}
              parentinfo={parentinfo}
              error={error}
            />
          )}
          {showParentForm && (
            <ParentInfoForm
              setItemEdit={setItemEdit}
              itemEdit={itemEdit}
              setShowParentForm={setShowParentForm}
              listRelationship={listRelationship}
            />
          )} */}

          <ContactWrapper />
        </main>

        <Footer />
      </section>

      {store.success && <ModalSuccess />}

      {store.isDelete && (
        <ModalDelete
          mysqlApiDelete={`/v2/dev-info-parent/${id}`}
          msg={"Are you sure you want to delete this record?"}
          item={`${dataItem.parent_guardian_info_fname} ${dataItem.parent_guardian_info_lname}`}
          queryKey={"parentinfo"}
        />
      )}
    </>
  );
};

export default Client;
