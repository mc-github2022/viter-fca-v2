import BreadCrumbs from "@/components/partials/BreadCrumbs";
import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import Navigation from "@/components/partials/Navigation";
import { StoreContext } from "@/components/store/StoreContext";
import React from "react";
import { CiMobile3 } from "react-icons/ci";
import { FaAngleLeft } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { HiOutlineEnvelope, HiOutlineUsers } from "react-icons/hi2";
import { LiaHardHatSolid, LiaMapMarkerAltSolid } from "react-icons/lia";
import { MdOutlineContactEmergency } from "react-icons/md";
import { PiMapPinLight, PiPhoneThin } from "react-icons/pi";
import { RiProfileLine } from "react-icons/ri";
import { SlHome } from "react-icons/sl";
import { TfiLocationPin } from "react-icons/tfi";
import { TiPhoneOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
const ClientViewInfo = () => {
  const { store, dispatch } = React.useContext(StoreContext);
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
              <Link to="/" className="flex gap-1 items-center lg:hidden">
                <FaAngleLeft /> Back
              </Link>
              <BreadCrumbs />
              <h1 className="text-clampH1 mb-0">Client List</h1>
              <p className="mb-4 text-xs hidden lg:block">
                List of clients/parents registered on the system.
              </p>
            </div>
          </div>

          <div className="clientinfo__block p-4 bg-primary border border-line shadow-sm rounded-sm max-w-[720px] w-full mb-5">
            <h4>Parent Information</h4>
            <h6 className="my-3 flex gap-2 items-center">
              <HiOutlineUsers className="text-lg" />
              Relationship
            </h6>
            <div className="grid grid-cols-2 gap-4">
              <div className="form__wrap">
                <label htmlFor="">Relationship to Student</label>
                <input type="text" />
              </div>

              <div className="form__wrap">
                <label htmlFor="">Relationship to Student</label>
                <input type="text" />
              </div>
            </div>

            <h6 className="my-3 flex gap-2 items-center">
              <RiProfileLine className="text-lg" />
              Name
            </h6>
            <div className="form__wrap max-w-[100px] w-full">
              <label htmlFor="">Title</label>
              <input type="text" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="form__wrap ">
                <label htmlFor="">First Name</label>
                <input type="text" />
              </div>
              <div className="form__wrap">
                <label htmlFor="">Last Name</label>
                <input type="text" />
              </div>

              <div className="form__wrap">
                <label htmlFor="">Middle Name (Optional)</label>
                <input type="text" />
              </div>

              <div className="form__wrap">
                <label htmlFor="">Maiden Last Name</label>
                <input type="text" />
              </div>
            </div>

            <h6 className="my-3 flex gap-2 items-center">
              <MdOutlineContactEmergency className="text-lg" />
              Contact
            </h6>
            <div className="form__wrap">
              <label htmlFor="">Email</label>
              <input type="text" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="form__wrap ">
                <label htmlFor="">Mobile</label>
                <input type="text" />
              </div>
              <div className="form__wrap">
                <label htmlFor="">Landline</label>
                <input type="text" />
              </div>
            </div>

            <h6 className="my-3 flex gap-2 items-center">
              <TfiLocationPin className="text-lg" />
              Location
            </h6>
            <div className="form__wrap">
              <label htmlFor="">Address</label>
              <input type="text" />
            </div>
            <div className="grid grid-cols-[1fr_1fr_100px] gap-4">
              <div className="form__wrap ">
                <label htmlFor="">City</label>
                <input type="text" />
              </div>
              <div className="form__wrap">
                <label htmlFor="">Province</label>
                <input type="text" />
              </div>

              <div className="form__wrap">
                <label htmlFor="">Zipcode</label>
                <input type="text" />
              </div>
            </div>

            <h6 className="my-3 flex gap-2 items-center">
              <LiaHardHatSolid className="text-lg" />
              Other
            </h6>

            <div className="grid grid-cols-2 gap-4">
              <div className="form__wrap ">
                <label htmlFor="">Religion</label>
                <input type="text" />
              </div>
              <div className="form__wrap">
                <label htmlFor="">Occupation</label>
                <input type="text" />
              </div>
            </div>

            <div className="client__info__action flex gap-4 mt-5">
              <button className="btn btn--accent ">Save</button>
              <button className="btn btn--cancel">Dismiss</button>
            </div>
          </div>

          <div className="clientinfo__card p-4 border border-line shadow-sm rounded-sm max-w-[720px] w-full bg-primary  mb-10">
            <div className="clientinfo__card__detail">
              <h5 className="mb-3 pb-2 border-b border-line text-center flex items-center justify-center">
                Ms. Nimfa Alimagno - Guardian
                <button className="ml-3 tooltip" data-tooltip="Edit">
                  <FiEdit2 />
                </button>
              </h5>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col items-center">
                  <HiOutlineEnvelope className="text-xl" />
                  <p className="text-xs mt-2">acalelvin4@gmail.com</p>
                </div>

                <div className="flex flex-col items-center">
                  <CiMobile3 className="text-xl" />
                  <p className="text-xs mt-2">9232754451</p>
                </div>

                <div className="flex flex-col items-center">
                  <SlHome neOutline className="text-xl" />
                  <p className="text-xs text-center mt-2">
                    107 Farconville Subdivision, Phase II-A, Prof. AC Koo St.,
                    Purok 1,
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <LiaMapMarkerAltSolid neOutline className="text-xl" />
                  <p className="text-xs text-center mt-2">
                    Brgy. San Gregorio Laguna <br />
                    San Pablo City 4000
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="clientinfo__block p-4 bg-primary border border-line shadow-sm rounded-sm max-w-[720px] w-full mb-5">
            <h4 className="mb-3">Emergency Contact Information</h4>

            <div className="form__wrap">
              <label htmlFor="">Name</label>
              <input type="text" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="form__wrap ">
                <label htmlFor="">Email</label>
                <input type="text" />
              </div>
              <div className="form__wrap ">
                <label htmlFor="">Mobile Number</label>
                <input type="text" />
              </div>
              <div className="form__wrap">
                <label htmlFor="">Landline</label>
                <input type="text" />
              </div>

              <div className="form__wrap">
                <label htmlFor="">Priority</label>
                <input type="text" />
              </div>
            </div>

            <div className="client__info__action flex gap-4 mt-5">
              <button className="btn btn--accent ">Save</button>
              <button className="btn btn--cancel">Dismiss</button>
            </div>
          </div>

          {/* EDIT MON */}
          <div className="max-w-[720px] w-full gap-4 mb-5">
            <div className="card bg-primary border border-line relative p-4">
              <div className="flex gap-3 items-center">
                <div className="avatar w-14 h-14 bg-accent text-primary grid place-content-center rounded-full text-2xl">
                  NA
                </div>
                <ul>
                  <li className="font-bold">Subdivision Guardian</li>
                  <li className="text-xs opacity-80">Guardian</li>
                </ul>
                <button
                  className="absolute top-5 right-5 tooltip"
                  data-tooltip="Edit"
                >
                  <FiEdit2 />
                </button>
              </div>
              <ul className="text-xs mt-4 flex  gap-10 items-start">
                <li className="mb-3 flex gap-2">
                  <PiMapPinLight className="text-sm" />
                  07 Farconville Subdivision, Phase II-A, St., Purok 1 <br />
                  Brgy. San Gregorio Laguna San Pablo City 4000
                </li>

                <li className="mb-3 ">
                  <p className="flex gap-2 mb-1">
                    <CiMobile3 className="text-sm" /> 0922 1234 123
                  </p>
                  <p className="flex gap-2">
                    <PiPhoneThin className="text-sm" />
                    049 552 1234
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-[720px] w-full gap-4">
            <div className="card bg-primary border border-line relative p-4">
              <div className="flex gap-3 items-center">
                <div className="avatar w-14 h-14 bg-accent text-primary grid place-content-center rounded-full text-2xl">
                  NA
                </div>
                <ul>
                  <li className="font-bold">Subdivision Guardian</li>
                  <li className="text-xs opacity-80">Guardian</li>
                </ul>
                <button
                  className="absolute top-5 right-5 tooltip"
                  data-tooltip="Edit"
                >
                  <FiEdit2 />
                </button>
              </div>
              <ul className="text-xs mt-4 flex  gap-10 items-start">
                <li className="mb-3 flex gap-2">
                  <PiMapPinLight className="text-sm" />
                  07 Farconville Subdivision, Phase II-A, St., Purok 1 <br />
                  Brgy. San Gregorio Laguna San Pablo City 4000
                </li>

                <li className="mb-3 ">
                  <p className="flex gap-2 mb-1">
                    <CiMobile3 className="text-sm" /> 0922 1234 123
                  </p>
                  <p className="flex gap-2">
                    <PiPhoneThin className="text-sm" />
                    049 552 1234
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="clientinfo__card p-4 border border-line shadow-sm rounded-sm max-w-[720px] w-full bg-primary  mb-10">
            <div className="clientinfo__card__detail">
              <h5 className="mb-3 pb-2 border-b border-line text-center">
                Elvin Acal - Primary
              </h5>
              <div className="grid grid-cols-3 gap-5">
                <div className="flex flex-col items-center">
                  <HiOutlineEnvelope className="text-xl" />
                  <p className="text-xs mt-2">acalelvin4@gmail.com</p>
                </div>

                <div className="flex flex-col items-center">
                  <CiMobile3 className="text-xl" />
                  <p className="text-xs mt-2">9232754451</p>
                </div>

                <div className="flex flex-col items-center">
                  <TiPhoneOutline className="text-xl" />
                  <p className="text-xs mt-2">049 665 1253</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </section>
    </div>
  );
};

export default ClientViewInfo;
