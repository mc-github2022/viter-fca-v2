import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import Navigation from "@/components/partials/Navigation.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { FaAngleLeft, FaBars } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { TfiLock } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Profile = () => {
  const { store } = React.useContext(StoreContext);
  const [index, setIndex] = React.useState(1);
  const [show, setShow] = React.useState(false);

  const handleShowSubMenu = () => {
    setShow(!show);
  };

  return (
    <>
      <Header />
      <section className="main__wrap flex relative ">
        <Navigation menu="student" />

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

              <h1 className="text-clampH1 mb-0">User Account</h1>
              <p className="mb-4 text-xs hidden lg:block">
                Manage your information and account security
              </p>
            </div>
          </div>

          <div className="mt-5 bg-primary rounded-md max-w-[600px] border-line border shadow-sm relative pb-4">
            <header className=" py-2 pr-4 flex justify-end">
              <button className="text-lg md:hidden" onClick={handleShowSubMenu}>
                <FaBars />
              </button>
            </header>

            <div className=" pl-0  md:flex md:gap-5">
              <aside
                className={`mb-5 max-w-[150px] w-full subnav absolute md:static top-8 right-4 bg-primary z-40 shadow-sm border border-line md:shadow-none md:border-none ${
                  show ? "block" : "hidden"
                } md:block `}
              >
                <ul>
                  <li className={`${index === 1 ? "active" : ""}`}>
                    <button onClick={() => setIndex(1)} className="text-sm">
                      <HiOutlineUserCircle className="md:text-lg" /> Profile
                    </button>
                  </li>
                  <li className={`${index === 2 ? "active" : ""}`}>
                    <button onClick={() => setIndex(2)} className="text-sm">
                      <TfiLock className="md:text-lg" />
                      Password
                    </button>
                  </li>
                </ul>
              </aside>

              <div className="px-4 w-full">
                {index === 1 && (
                  <div className="profile__block min-h-[300px] w-full ">
                    <h6 className="mb-5">Update Account Information</h6>

                    <div className="form__wrap">
                      <label htmlFor="">First Name</label>
                      <input type="text" />
                    </div>

                    <div className="form__wrap">
                      <label htmlFor="">Last Name</label>
                      <input type="text" />
                    </div>

                    <div className="form__wrap">
                      <label htmlFor="">Email</label>
                      <input type="text" />
                    </div>

                    <div className="flex gap-3 mt-8">
                      <button className="btn btn--accent">Update</button>
                    </div>
                  </div>
                )}
                {index === 2 && (
                  <div className="profile__block min-h-[300px] w-full ">
                    <h6 className="mb-5">Update password</h6>

                    <div className="form__wrap">
                      <label htmlFor="">Old Password</label>
                      <input type="text" />
                    </div>

                    <div className="form__wrap">
                      <label htmlFor="">New Password</label>
                      <input type="text" />
                    </div>

                    <div className="form__wrap">
                      <label htmlFor="">Confirm Password</label>
                      <input type="text" />
                    </div>

                    <div className="flex  gap-3 mt-8">
                      <button className="btn btn--accent">Update</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </section>
    </>
  );
};

export default Profile;
