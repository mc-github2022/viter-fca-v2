import {
  formatMobileNumber,
  getUrlParam,
} from "@/components/helpers/functions-general.jsx";
import BreadCrumbs from "@/components/partials/BreadCrumbs.jsx";
import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import Navigation from "@/components/partials/Navigation.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { CiMobile3 } from "react-icons/ci";
import { FaAngleLeft, FaPlus } from "react-icons/fa";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LuDot } from "react-icons/lu";
import { PiPhoneThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import ModalRequirements from "./ModalRequirements.jsx";

const ClientStudentViewInfo = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const id = getUrlParam().get("cid");
  const navigate = useNavigate();
  return (
    <>
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
                Loverboy
                {/* {userIsLoading || userIsFetching ? (
                  <p>Loading</p>
                ) : (
                  <>
                    <span className="pr-2">
                      {userAccount?.data[0].user_other_fname}
                    </span>
                    <span>{userAccount?.data[0].user_other_lname}</span>
                  </>
                )} */}
              </h1>
            </div>
          </div>

          <div className="flex justify-between items-center max-w-[620px] w-full mb-3">
            <div>
              <h3 className="">Student</h3>
              <p className="text-xs opacity-75">
                List of client student enrolled for this school year
              </p>
            </div>

            <button
              className="tooltip"
              data-tooltip="New"
              // onClick={handleAddContact}
            >
              <FaPlus />
            </button>
          </div>

          <div className="max-w-[620px] w-full gap-4 mb-5">
            <div className="card bg-primary border border-line p-4 rounded-sm  relative">
              <h5>Daniel Padilla - Enrolled </h5>
              <small className="flex mb-2 ">
                Grade II <LuDot className="text-xl" /> LRN Here
              </small>

              <button className="block text-xs mb-2">View Requirement</button>

              <div className="card__action absolute top-5 right-5 flex gap-2">
                <button
                  className=" tooltip"
                  data-tooltip="Edit"
                  // onClick={() => handleShowContactForm(item)}
                >
                  <FiEdit2 />
                </button>

                <button
                  className=" tooltip"
                  data-tooltip="Delete"
                  // onClick={() => handleDeleteContactCard(item)}
                >
                  <FiTrash />
                </button>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </section>
      <ModalRequirements />
    </>
  );
};

export default ClientStudentViewInfo;
