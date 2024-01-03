import BreadCrumbs from "@/components/partials/BreadCrumbs.jsx";
import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import Navigation from "@/components/partials/Navigation.jsx";
import React from "react";
import { FaAngleLeft, FaAngleRight, FaRegListAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ParentDeclaration = () => {
  return (
    <>
      <Header />
      <section className="main__wrap flex relative ">
        <Navigation menu="student" />

        <main className="main__content mt-[65px]">
          <div className="main__header flex justify-between items-center">
            <div>
              <Link to="/" className="flex gap-1 items-center lg:hidden">
                <FaAngleLeft /> Back
              </Link>
              <BreadCrumbs />
              <h1 className="text-clampH1 mb-2">Parent/Guardian Declaration</h1>
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
              <h5>I hereby declare that:</h5>

              <ol className="list-decimal list-inside">
                <li>
                  I have given all necessary and relevant information regarding
                  my child to the school management, and filled out the
                  appropriate forms with valid, true, accurate information,
                  especially with regards to my child's health and dietary
                  management concerns.
                </li>
                <li>
                  I understand that the school will do its best to keep my child
                  safe while on the school premises, and will not allow my child
                  to be released to any unauthorized person(s).
                </li>
                <li>
                  I understand that when my child is released safely from
                  school, the school no longer holds any civil or legal
                  responsibility for my child, and shall remain free from any
                  and all claims/charges of liability.
                </li>
                <li>
                  I understand that my child, if four (4) years old and above,
                  is included in the school's Group Accident Insurance Plan,
                  with accidental medical reimbursement up to a certain amount.
                  I agree to cover the costs of any medical eventualities that
                  exceed the limited of this coverage.
                </li>
                <li>
                  I hereby agree to waive any responsibility on the part of
                  Frontline Christian Academy, its trustees, officers, faculty,
                  staff, and any agents of any kind thereof in relation to any
                  loss, damage, death, injury, or accident that may happen to my
                  child/children, unless such loss, damage, injury, accident, or
                  death resulted from the fault or gross negligence of Frontline
                  Christian Academy. I render Frontline Christian Academy and
                  all of the afore-mentioned free and harmless from any
                  liability, suit, or claim filed due to any untoward incident
                  that may occur that is beyond the control of the persons in
                  charge.
                </li>
                <li>
                  I understand in the event of any medical emergency, in which
                  after several attempts to contact the legal gaurdians have
                  been unsuccessful, I/we confer upon the school administration
                  and the attending physicians involved the authority to make
                  medical decisions in my/our stead regardless of the results or
                  consequences of any such decisions and attendant actions
                  taken.
                </li>
                <li>
                  I will respect and uphold the values, vision, and mission of
                  FCA to the best of my ability.
                </li>
                <li>
                  I will encourage and support my child / children in upholding
                  the FCA student code of conduct and the Student Handbook.
                </li>
                <li>
                  I will pay the agreed-upon school fees on or before declared
                  due dates. I understand that failing to do so will result in a
                  penalty of 2% per day on the entire overdue amount, beginning
                  on the day of the due date and ending on the last day of
                  exams.
                </li>
                <li>
                  I will strive my best to foster and maintain a conducive
                  learning environment in the home, and provide any assistance
                  that my child needs for his/her school work.
                </li>
                <li>
                  I will do my best to maintain open, honest, appropriate and
                  professional communication with the school, and direct
                  questions and concerns towards the appropriate parties
                  concerned.
                </li>
              </ol>
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

export default ParentDeclaration;
