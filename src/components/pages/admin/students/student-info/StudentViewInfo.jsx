import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import { getUrlParam } from "@/components/helpers/functions-general.jsx";
import BreadCrumbs from "@/components/partials/BreadCrumbs.jsx";
import Header from "@/components/partials/Header.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import Navigation from "../../Navigation";

const StudentViewInfo = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const id = getUrlParam().get("sid");
  const {
    isLoading: studentIsLoading,
    isFetching: studentIsFetching,
    error: studentIsError,
    data: student,
  } = useQueryData(
    `/v2/student/${id}`, // endpoint
    "get", // method
    "student" // key
  );

  console.log(student);

  return (
    <>
      <Header />
      <section className="main__wrap flex relative ">
        <Navigation menu="students" />
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
              <h1 className="text-clampH1 mb-1">
                {studentIsLoading || studentIsFetching ? (
                  <p>Loading</p>
                ) : (
                  <>
                    <span className="pr-2">
                      {student?.data[0].student_info_fname}
                    </span>
                    <span>{student?.data[0].student_info_lname}</span>
                  </>
                )}
              </h1>
              <p className="text-xs opacity-80 leading-relaxed text-balance max-w-[920px] w-full">
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
        </main>
      </section>
    </>
  );
};

export default StudentViewInfo;
