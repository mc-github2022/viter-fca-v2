import React from "react";
import { useNavigate } from "react-router-dom";
import { IconPageNotFound } from "./svg/IconPageNotFound.jsx";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="md:h-screen gap-1">
        <main className="overflow-hidden ">
          <div className="max-w-[1250px] w-full mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2 px-4 justify-center items-center mt-10">
              <div className="flex flex-col items-start max-w-[550px] w-full  md:h-[70vh] justify-center order-2 md:order-1">
                <span className="block mb-2 text-gray-300">Error 404</span>
                <h1 className="text-3xl md:text-6xl mb-4">We Lost That Page</h1>
                <p className="text-lg mb-7">
                  Sorry, the page you are looking for doesn't exist, has been
                  moved, deleted or you do not have access for this page.
                </p>

                <button
                  className="btn btn--accent"
                  onClick={() => navigate(-1)}
                >
                  Back
                </button>
              </div>

              <div className="flex flex-col items-start max-w-[450px] w-full md:h-[70vh] justify-start md:justify-center md:justify-self-end order-1  ">
                <IconPageNotFound color="#21710f" />
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default PageNotFound;
