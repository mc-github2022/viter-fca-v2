import useQueryData from "@/components/custom-hooks/useQueryData";
import { InputText } from "@/components/helpers/FormInputs";
import { getUrlParam } from "@/components/helpers/functions-general";
import { queryData } from "@/components/helpers/queryData";
import BreadCrumbs from "@/components/partials/BreadCrumbs";
import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import Navigation from "@/components/partials/Navigation";
import NoData from "@/components/partials/NoData.jsx";
import TableLoading from "@/components/partials/TableLoading.jsx";
import ModalValidate from "@/components/partials/modals/ModalValidate.jsx";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner.jsx";
import { setError } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik"; // <== this correct import
import React from "react";
import { AiOutlineSave } from "react-icons/ai";
import { CiMobile3 } from "react-icons/ci";
import { FaAngleLeft } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { HiOutlineEnvelope, HiOutlineUsers } from "react-icons/hi2";
import {
  LiaHardHatSolid,
  LiaMapMarkerAltSolid,
  LiaTimesSolid,
} from "react-icons/lia";
import { MdOutlineContactEmergency } from "react-icons/md";
import { PiMapPinLight, PiPhoneThin } from "react-icons/pi";
import { RiProfileLine } from "react-icons/ri";
import { SlHome } from "react-icons/sl";
import { TfiLocationPin } from "react-icons/tfi";
import { TiPhoneOutline } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import ModalClientParentInfo from "./ModalClientParentInfo.jsx";
const ClientViewInfo = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [showParentForm, setShowParentForm] = React.useState(false);
  const [showContactForm, setShowContactForm] = React.useState(false);
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
    `/v2/dev-info-parent/${id}`, // endpoint
    "get", // method
    "parentInfo" // key
  );

  const handleShowParentForm = (item) => {
    setItemEdit(item);
    setShowParentForm(true);
  };

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
              <h1 className="text-clampH1 mb-0">
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
              <>
                {parentInfo?.data.length === 0 ? (
                  <NoData />
                ) : (
                  <>
                    <h3 className="py-3">List of parent/guardian</h3>
                    {parentInfo?.data.map((item, key) => (
                      <div
                        className="max-w-[620px] w-full gap-4 mb-5"
                        key={key}
                      >
                        <div className="card bg-primary border border-line relative p-4 rounded-md shadow-sm">
                          <div className="flex gap-3 items-center mb-3">
                            <div className="avatar w-14 h-14 bg-accent text-primary grid place-content-center rounded-full text-3xl uppercase">
                              {item.parent_guardian_info_fname[0]}
                              {item.parent_guardian_info_lname[0]}
                            </div>
                            <ul>
                              <li className="font-bold capitalize">
                                <span className="pr-2">
                                  {item.parent_guardian_info_salutation}.
                                </span>
                                {item.parent_guardian_info_fname}{" "}
                                {item.parent_guardian_info_lname}
                              </li>
                              <li className="text-xs">
                                {item.relationship_name}
                              </li>
                            </ul>
                            <button
                              className="absolute top-5 right-5 tooltip"
                              data-tooltip="Edit"
                              onClick={() => handleShowParentForm(item)}
                            >
                              <FiEdit2 />
                            </button>
                          </div>

                          <p className=" flex gap-2 text-xs ">
                            <PiMapPinLight className="text-xl" />
                            {item.parent_guardian_info_address},
                            {item.parent_guardian_info_province}
                            {item.parent_guardian_info_city}
                            {item.parent_guardian_info_zipcode}
                          </p>

                          <ul className="text-xs mt-4 flex gap-10 items-center ">
                            <li className="flex gap-2 text-xs">
                              <CiMobile3 className="text-base" />{" "}
                              {item.parent_guardian_info_mobile}
                            </li>

                            <li className="flex gap-2 text-xs">
                              <HiOutlineEnvelope className="text-base" />
                              {item.parent_guardian_info_email}
                            </li>

                            <li className="flex gap-2 text-xs">
                              {item.parent_guardian_info_landline && (
                                <>
                                  <PiPhoneThin className="text-base" />
                                  {item.parent_guardian_info_landline}
                                </>
                              )}
                            </li>
                          </ul>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </>
            )
          )}

          {showParentForm && (
            <ModalClientParentInfo
              itemEdit={itemEdit}
              setShowParentForm={setShowParentForm}
              setItemEdit={setItemEdit}
            />
          )}
        </main>

        <Footer />
      </section>

      {store.validate && <ModalValidate />}
    </div>
  );
};

export default ClientViewInfo;
