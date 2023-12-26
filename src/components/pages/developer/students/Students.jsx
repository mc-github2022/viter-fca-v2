import BreadCrumbs from "@/components/partials/BreadCrumbs";
import Header from "@/components/partials/Header";
import Navigation from "@/components/partials/Navigation";
import React from "react";
import StudentList from "./StudentList";
import Footer from "@/components/partials/Footer";

const Students = () => {
  return (
    <>
      <Header />
      <section className="main__wrap flex relative ">
        <Navigation />

        <main className="main__content mt-[75px]">
          <div className="main__header">
            <BreadCrumbs />
            <h1 className=" text-3xl">Students List</h1>
            <p className="mb-4">List of students registered on the system.</p>
          </div>

          <StudentList />
        </main>

        <Footer />
      </section>
    </>
  );
};

export default Students;
