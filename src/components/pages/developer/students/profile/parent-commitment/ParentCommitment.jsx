import BreadCrumbs from "@/components/partials/BreadCrumbs.jsx";
import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import Navigation from "@/components/partials/Navigation.jsx";
import { FaAngleLeft, FaRegListAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ParentCommitment = () => {
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
              <h1 className="text-clampH1 mb-2">Parent Commitment Form</h1>
            </div>

            <div className="flex gap-2">
              <Link to="/" className="btn btn--accent min-w-[40px] text-base">
                <FaRegListAlt />
                <span className="hidden lg:block text-xs">Profile</span>
              </Link>
            </div>
          </div>

          <section className="profile__wrapper p-4 bg-primary border-gray-200 border shadow-sm rounded-md mb-10">
            <div className="article pb-5 border-b border-gray-100 mb-5">
              <p>
                As a partner of the school in the education of my child, I
                commit myself to the following matters:
              </p>

              <ol className="list-[upper-roman]">
                <li>
                  <h6> Academic Matters</h6>
                  <ol className="list-[lower-roman]">
                    <li>
                      I will read, understand and abide by the rules and
                      regulations stipulated in the FCA Student Handbook.
                    </li>
                    <li>
                      I will be actively involved in educating my children
                    </li>
                    <li>
                      I will provide a conducive learning environment for my
                      child at home and do my best to keep the learning space
                      free from distractions and disturbances.
                    </li>
                  </ol>
                </li>

                <li>
                  <h6>Communication</h6>
                  <ol className="list-[lower-roman]">
                    <li>
                      I will keep an open and honest path of communication with
                      the school and my child’s teachers regarding the education
                      of my child.
                    </li>
                    <li>
                      I pledge to communicate any concerns I may have about my
                      child's schooling to the right people, including my
                      child's class adviser and the school management. I also
                      commit to collaborating with the school to ensure the best
                      education for my child, and to refrain from speaking ill
                      of or discrediting the school to others. I acknowledge
                      that consistently discrediting the school to others
                      indicates a lack of confidence in its ability to provide
                      quality education for my child. If this is the case, I may
                      opt to voluntarily withdraw my child from FCA in
                      accordance with the school's student withdrawal policies.
                      Further, the school management may revoke my enrollment
                      privileges, subject to management’s evaluation.
                    </li>

                    <li>
                      I commit to attending the Parenting Peer Groups
                      facilitated by FCA, either in-person or virtually
                    </li>

                    <li>
                      I commit to attending the Parent-Teacher Conferences
                      either in-person or virtually.
                    </li>

                    <li>
                      I commit to attending the Quarterly Parent-Teacher
                      Assemblies, either in-person or virtually.
                    </li>
                  </ol>
                </li>

                <li>
                  <h6>Disclosure</h6>
                  <ol className="list-[lower-roman]">
                    <li>
                      I have given FCA full disclosure of my child’s former and
                      current school liabilities, as well as each child’s
                      learning and development needs, physical and learning
                      disability/ies (if any) which FCA may use as a basis for
                      recommending supplementary services, if needed.
                    </li>
                  </ol>
                </li>

                <li>
                  <h6>Picture Authorization</h6>
                  <ol className="list-[lower-roman]">
                    <li>
                      I have given FCA full disclosure of my child’s former and
                      current school liabilities, as well as each child’s
                      learning and development needs, physical and learning
                      disability/ies (if any) which FCA may use as a basis for
                      recommending supplementary services, if needed.
                    </li>
                  </ol>
                </li>

                <li>
                  <h6>Data Privacy</h6>
                  <ol className="list-[lower-roman]">
                    <li>
                      The protection of your information and privacy is
                      essential to us as an educational provider. We comply with
                      all applicable data protection laws under the DATA PRIVACY
                      ACT OF 2012. You authorize and consent to the use and
                      transfer of said information for valid and legitimate
                      purposes.
                    </li>

                    <li>
                      I understand that all shared passwords and access to
                      resources, links, emails, files and other resources, both
                      paid and unpaid, will be for my child/ren and will not be
                      shared with others.
                    </li>
                  </ol>
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

export default ParentCommitment;
