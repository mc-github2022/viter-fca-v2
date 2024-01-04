import BreadCrumbs from "@/components/partials/BreadCrumbs.jsx";
import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import Navigation from "@/components/partials/Navigation.jsx";
import React from "react";
import { FaAngleLeft, FaAngleRight, FaRegListAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ParentConsent = () => {
  return (
    <>
      <Header />
      <section className="main__wrap flex relative ">
        <Navigation />

        <main className="main__content mt-[65px]">
          <div className="main__header flex justify-between items-center">
            <div>
              <Link to="/" className="flex gap-1 items-center lg:hidden">
                <FaAngleLeft /> Back
              </Link>
              <BreadCrumbs />
              <h1 className="text-clampH1 mb-2">Parent Consent</h1>
            </div>

            <div className="flex gap-2">
              <Link to="/" className="btn btn--accent min-w-[40px] text-base">
                <FaRegListAlt />
                <span className="hidden lg:block text-xs">Profile</span>
              </Link>

              <Link to="/" className="btn btn--accent min-w-[40px] text-base">
                <span className="hidden lg:block text-xs">Commitment Form</span>
                <FaAngleRight />
              </Link>
            </div>
          </div>

          <section className="profile__wrapper p-4 bg-primary border-gray-200 border shadow-sm rounded-md mb-10">
            <div className="article pb-5 border-b border-gray-100 mb-5">
              <p>
                I as the parent or legal guardian hereby acknowledge that I have
                been informed of the details of the conduct of Implementation of
                Limited Face-to-Face learning modality. I understand that
                FRONTLINE CHRISTIAN ACADEMY INC shall implement the minimum
                public health standards set by the government to minimize risk
                of the spread of COVID 19, but it cannot guarantee that my child
                will not become ill. I acknowledge that my child/ren’s in
                persons attendance in school will include associating with
                teachers, fellow learners and school personnel, and other
                persons inside and outside that may put my child at risk of
                COVID 19 transmission, notwithstanding the precautions
                undertaken by the school. I acknowledge that my child/ren’s
                participation in this activity is completely voluntary. While
                there remains the risk of possible COVID 19 transmissions to my
                child/dren, and to the members of my household, I freely assume
                the said risk and I permit my child/dren to attend the school
                under this activity, the Face-to-Face Summer Classes. I am aware
                that the symptoms of COVID 19 include but are not limited to,
                fever or chills, cough, shortness of breath or difficulty of
                breathing, body and headache, loss of taste and smell, sore
                throat, congestion, nausea, vomiting and diarrhea. I confirm
                that my child/dren currently has none of those symptoms, and is
                in good health. I will not allow my child/dren to physically go
                to school to attend classes if my child/dren or any members of
                my household develops any said symptoms or any other illness
                that may or may not be related to COVID 19. I will also inform
                the school and not allow my child/dren to attend Face-to-Face
                classes if my child/dren or any of my household members tests
                positive for COVID 19. My child/dren and I, with my household
                members, will follow the required health and safety protocols
                and procedures adopted by the school and our community. To the
                extent allowed by law and rules, I hereby agree to waive,
                release and discharge any and all claims, causes of action,
                damages and rights against the school and its personnel as well
                as officials and personnel of the Department of Education
                relative to the conduct of the activity.
              </p>
            </div>

            <button className="btn btn--accent " disabled>
              Alread Submitted your registration
            </button>
          </section>
        </main>

        <Footer />
      </section>
    </>
  );
};

export default ParentConsent;
