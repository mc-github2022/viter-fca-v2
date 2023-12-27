import BreadCrumbs from "@/components/partials/BreadCrumbs.jsx";
import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import Navigation from "@/components/partials/Navigation.jsx";
import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const StudentInfo = () => {
  return (
    <>
      <Header />
      <section className="main__wrap flex relative ">
        <Navigation />

        <main className="main__content mt-[65px]">
          <div className="main__header flex justify-between items-start lg:items-center">
            <div>
              <Link to="/" className="flex gap-1 items-center lg:hidden">
                <FaAngleLeft /> Back
              </Link>
              <BreadCrumbs />
              <h1 className="text-clampH1 mb-2">Ramon, Plaza</h1>
              <h4>Edit Student Profile</h4>
              <p className="mb-4 text-xs leading-5">
                The student registration form is used to enroll a student who is
                new to Frontline Christian Academy, Inc., or who is returning to
                the school after one (1) or more years of not being enrolled in
                FCA. All information entered in this form is for school use only
                and is strictly confidential. No part of this document may be
                disclosed in any manner to a third party without the prior
                written consent of the person filling this out.
              </p>
            </div>
          </div>

          <section className="profile__wrapper p-4 bg-primary border-gray-200 border shadow-sm rounded-md">
            <div className="profile__block hover:border-gray-900 flex justify-between items-center py-5 flex-col lg:flex-row border-b border-gray-200">
              <div className="profile__header flex gap-2 items-center flex-col lg:flex-row  mb-2 lg:mb-0">
                <h4 className="mb-0">
                  Student Profile
                  <span className="hidden lg:inline-block pl-1"> -</span>
                </h4>
                <p className="text-[#2d9216] py-[2px] border border-gray-200 mb-0 text-[10px] px-2 bg-gray-50 rounded-md">
                  Complete
                </p>
              </div>

              <Link to="/" className="btn btn--disable ">
                Edit
              </Link>
            </div>

            <div className="profile__block hover:border-gray-900 flex justify-between items-center py-5 flex-col lg:flex-row border-b border-gray-200">
              <div className="profile__header flex gap-2 items-center flex-col lg:flex-row  mb-2 lg:mb-0">
                <h4 className="mb-0">
                  Student Code of Conduct
                  <span className="hidden lg:inline-block pl-1"> -</span>
                </h4>
                <p className="text-[#2d9216] py-[2px] border border-gray-200 mb-0 text-[10px] px-2 bg-gray-50 rounded-md">
                  Complete
                </p>
              </div>

              <Link to="/" className="btn btn--disable ">
                Read
              </Link>
            </div>

            <div className="profile__block hover:border-gray-900 flex justify-between items-center py-5 flex-col lg:flex-row border-b border-gray-200">
              <div className="profile__header flex gap-2 items-center flex-col lg:flex-row  mb-2 lg:mb-0">
                <h4 className="mb-0">
                  Parent/Guardian Declaration
                  <span className="hidden lg:inline-block pl-1"> -</span>
                </h4>
                <p className="text-[#2d9216] py-[2px] border border-gray-200 mb-0 text-[10px] px-2 bg-gray-50 rounded-md">
                  Complete
                </p>
              </div>

              <Link to="/" className="btn btn--disable">
                Read
              </Link>
            </div>

            <div className="profile__block hover:border-gray-900 flex justify-between items-center py-5 flex-col lg:flex-row border-b border-gray-200">
              <div className="profile__header flex gap-2 items-center flex-col lg:flex-row  mb-2 lg:mb-0">
                <h4 className="mb-0">
                  Parent Consent
                  <span className="hidden lg:inline-block pl-1"> -</span>
                </h4>
                <p className="text-[#2d9216] py-[2px] border border-gray-200 mb-0 text-[10px] px-2 bg-gray-50 rounded-md">
                  Complete
                </p>
              </div>

              <Link to="/" className="btn btn--disable ">
                Read
              </Link>
            </div>

            <div className="profile__block hover:border-gray-900 flex justify-between items-center py-5 flex-col lg:flex-row mb-4">
              <div className="profile__header flex gap-2 items-center flex-col lg:flex-row  mb-2 lg:mb-0">
                <h4 className="mb-0">
                  Parent Commitment Form
                  <span className="hidden lg:inline-block pl-1"> -</span>
                </h4>
                <p className="text-[#2d9216] py-[2px] border border-gray-200 mb-0 text-[10px] px-2 bg-gray-50 rounded-md">
                  Complete
                </p>
              </div>

              <Link to="/" className="btn btn--disable  ">
                Read
              </Link>
            </div>
            <div className="flex justify-center lg:justify-start mb-20 lg:mb-0">
              <button className="btn btn--accent " disabled>
                Alread Submitted your registration
              </button>
            </div>
          </section>
        </main>

        <Footer />
      </section>
    </>
  );
};

export default StudentInfo;
