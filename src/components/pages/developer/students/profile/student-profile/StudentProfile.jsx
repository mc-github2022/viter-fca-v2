import BreadCrumbs from "@/components/partials/BreadCrumbs.jsx";
import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import Navigation from "@/components/partials/Navigation.jsx";
import React from "react";
import { FaAngleLeft, FaAngleRight, FaRegListAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const StudentProfile = () => {
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

          <section className=" p-4 bg-primary border-gray-200 border shadow-sm rounded-md mb-10">
            <div className="info__block py-3 mb-3 border-b  border-line">
              <div className="md:flex gap-10">
                <h4 className="mb-4 md:basis-1/4">Classification</h4>
                <div className="md:grid  md:grid-cols-2 lg:grid-cols-3  gap-x-10 md:basis-3/4">
                  <div className="form__wrap">
                    <label htmlFor="">School Year</label>
                    <select name="" id="">
                      <option value="1">2023-2024</option>
                      <option value="1">2023-2024</option>
                      <option value="1">2023-2024</option>
                      <option value="1">2023-2024</option>
                    </select>
                  </div>

                  <div className="form__wrap">
                    <label htmlFor="">Learning Type</label>
                    <select name="" id="">
                      <option value="1">Face to Face</option>
                      <option value="1">Hybrid School</option>
                    </select>
                  </div>

                  <div className="form__wrap">
                    <label htmlFor="">Learning Reference No. (Optional)</label>
                    <input type="text" />
                  </div>

                  <div className="form__wrap">
                    <label htmlFor="">Learning Reference No. (Optional)</label>
                    <select name="" id="">
                      <option value="1">Grade 1</option>
                      <option value="1">Grade 2</option>
                      <option value="1">Grade 3</option>
                      <option value="1">Grade 4</option>
                      <option value="1">Grade 5</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="info__block py-3 mb-3   border-line">
              <div className="md:flex gap-10">
                <h4 className="mb-4 md:basis-1/4">Profile</h4>
                <div className="md:grid  md:grid-cols-2 lg:grid-cols-3  gap-x-10 md:basis-3/4">
                  <div className="form__wrap">
                    <label htmlFor="">Last Name (Suffix.)</label>
                    <input type="text" />
                  </div>

                  <div className="form__wrap">
                    <label htmlFor="">Fist Name </label>
                    <input type="text" />
                  </div>

                  <div className="form__wrap">
                    <label htmlFor="">Middle Name </label>
                    <input type="text" />
                  </div>

                  <div className="form__wrap">
                    <label htmlFor="">Gender</label>
                    <select name="" id="">
                      <option value="1">Grade 1</option>
                      <option value="1">Grade 2</option>
                    </select>
                  </div>

                  <div className="form__wrap">
                    <label htmlFor="">Birthday</label>
                    <input type="date" />
                  </div>

                  <div className="form__wrap">
                    <label htmlFor="">Birth Place</label>
                    <input type="text" />
                  </div>

                  <div className="form__wrap">
                    <label htmlFor="">Email (Optional)</label>
                    <input type="email" />
                  </div>

                  <div className="form__wrap">
                    <label htmlFor="">Mobile (Optional)</label>
                    <input type="Phone" />
                  </div>

                  <div className="form__wrap">
                    <label htmlFor="">Landline (Optional)</label>
                    <input type="Phone" />
                  </div>
                </div>
              </div>
            </div>

            <div className="info__block py-3 mb-3 border-b  border-line">
              <div className="md:flex gap-10">
                <h4 className="mb-4 md:basis-1/4">Address</h4>
                <div className="md:grid    gap-x-10 md:basis-3/4">
                  <div className="form__wrap">
                    <label htmlFor="">Select Parent Address</label>
                    <select name="" id="">
                      <option value="1">2023-2024</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="info__block py-3 mb-3 border-b border-line">
              <div className="md:flex gap-10">
                <h4 className="mb-4 md:basis-1/4">Institutional Email</h4>
                <div className="md:grid    gap-x-10 md:basis-3/4">
                  <div className="form__wrap">
                    <label htmlFor="">Student Institutional Email</label>
                    <input type="email" />
                  </div>
                </div>
              </div>
            </div>

            <div className="info__block py-3 mb-3 border-line">
              <div className="md:flex gap-10">
                <h4 className="mb-4 md:basis-1/4">Last School Address</h4>
                <div className="md:grid  md:grid-cols-2 lg:grid-cols-3  gap-x-10 md:basis-3/4">
                  <div className="form__wrap">
                    <label htmlFor="">Last School Attended</label>
                    <input type="text" />
                  </div>

                  <div className="form__wrap">
                    <label htmlFor="">GPA Last School Year </label>
                    <input type="text" />
                  </div>

                  <div className="form__wrap">
                    <label htmlFor="">Grade Level Last School Year</label>
                    <select name="" id="">
                      <option value="1">Grade 1</option>
                      <option value="1">Grade 2</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="info__block py-3 mb-3 border-line">
              <div className="md:flex gap-10">
                <h4 className="mb-4 md:basis-1/4">Last School Address</h4>
                <div className="md:grid    gap-x-10 md:basis-3/4">
                  <div className="form__wrap">
                    <label htmlFor="">School Address</label>
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>

            <div className="info__block py-3 mb-3 border-b border-line">
              <div className="md:flex gap-10">
                <h4 className="mb-4 md:basis-1/4">Other</h4>
                <div className="md:grid    gap-x-10 md:basis-3/4">
                  <div className="form__wrap">
                    <label htmlFor="">
                      Was the student ever submitted to any form of disciplinary
                      action? If so, why
                    </label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className="info__block py-3 mb-3  border-line">
              <div className="md:flex gap-10">
                <h4 className="mb-4 md:basis-1/4">Medical Information</h4>
                <div className="md:grid  md:grid-cols-2 lg:grid-cols-3  gap-x-10 md:basis-3/4">
                  <div className="form__wrap">
                    <label htmlFor="">Pediatrician/Family Doctor</label>
                    <input type="text" />
                  </div>

                  <div className="form__wrap">
                    <label htmlFor="">Contact Number </label>
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>

            <div className="info__block py-3 mb-3 border-line">
              <div className="md:flex gap-10">
                <h4 className="mb-4 md:basis-1/4">Medical Notes</h4>
                <div className="md:grid    gap-x-10 md:basis-3/4">
                  <div className="form__wrap">
                    <label htmlFor="">
                      Are there any serious medical conditions about which you
                      wish the school to be aware? Please indicate below:
                    </label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className="info__block py-3 mb-3 border-b border-line">
              <div className="md:flex gap-10">
                <h4 className="mb-4 md:basis-1/4">Family Circumstance</h4>
                <div className="md:grid    gap-x-10 md:basis-3/4">
                  <div className="form__wrap">
                    <label htmlFor="">
                      Are there any family circumstances about which you wish
                      the school to be aware? Please indicate below.:
                    </label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                  </div>
                  <small className="italic text-[10px]">
                    I am aware that if I fail to disclose any significant
                    information of this nature, FCA will not be held liable in
                    case of any untoward incidents resulting from related
                    circumstances.
                  </small>
                </div>
              </div>
            </div>

            <button className="btn btn--accent ">Submit</button>
          </section>
        </main>

        <Footer />
      </section>
    </>
  );
};

export default StudentProfile;
