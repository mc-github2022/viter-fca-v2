import BreadCrumbs from "@/components/partials/BreadCrumbs";
import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import Navigation from "@/components/partials/Navigation";
import { StoreContext } from "@/components/store/StoreContext";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaAngleLeft, FaPlus } from "react-icons/fa";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";

const Settings = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  return (
    <>
      <Header />
      <section className="main__wrap flex relative ">
        <Navigation menu="settings" submenu="department" />

        <main
          className={`main__content mt-[45px] ${
            store.isMenuExpand ? "" : "expand"
          } `}
        >
          <div className="main__header flex justify-between items-start lg:items-center">
            <div>
              <Link to="/" className="flex gap-1 items-center lg:hidden">
                <FaAngleLeft /> Back
              </Link>
              <BreadCrumbs />
              <h1 className="text-clampH1 mb-4">Settings</h1>
            </div>
          </div>

          <div className="bg-primary border border-line rounded-md max-w-[1100px] w-full overflow-x-auto ">
            <div className="flex gap-10 relative">
              <aside className="setting__nav absolute bg-primary p-4  -left-[200px] lg:static max-w-[210px] w-full">
                <ul>
                  <li className="mb-2">
                    <Link to="#">Department</Link>
                  </li>

                  <li className="mb-2">
                    <Link to="#">Notification</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Parent Relationship</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Grade Level</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Learning Type</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Requirement - Registrar</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Requirement - Finance</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Requirement - IT</Link>
                  </li>

                  <li className="mb-2">
                    <Link to="#">Tuition Fee Category</Link>
                  </li>

                  <li className="mb-2">
                    <Link to="#">Tuition Fee Scheme</Link>
                  </li>

                  <li className="mb-2">
                    <Link to="#">Schedule of Fees</Link>
                  </li>

                  <li className="mb-2">
                    <Link to="#">Users</Link>
                  </li>

                  <li className="mb-2">
                    <Link to="#">Roles</Link>
                  </li>

                  <li className="mb-2">
                    <Link to="#">Developers</Link>
                  </li>
                </ul>
              </aside>
              <main className="setting__main p-4">
                <h2 className="mb-3">Department</h2>
                <p className="text-xs mb-5 max-w-[560px] w-full">
                  Set list of departments that will be available to the current
                  school year
                </p>
                <button className="flex gap-1 items-center mt-2 text-xs text-accent hover:underline mb-5">
                  <AiOutlinePlus /> Add New Department
                </button>

                <div className="settings__addEdit mb-8 max-w-[350px] w-full">
                  <form action="">
                    <div className="form__group text-xs mb-3">
                      <label htmlFor="">Title</label>
                      <input type="text" />
                    </div>

                    <div className="form__group text-xs mb-3 ">
                      <label htmlFor="">Description</label>
                      <textarea type="text" />
                    </div>

                    <div className="settings__actions flex gap-2">
                      <button className="btn btn--accent"> Save</button>
                      <button className="btn btn--cancel" type="cancel">
                        Discard
                      </button>
                    </div>
                  </form>
                </div>

                <div className="datalist mb-10">
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student records </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1">
                    <p>Registrar</p>
                    <p>Manage all student recordsxxxxx </p>
                    <ul className="datalist__action flex items-center">
                      <li className=" ">
                        <button className="tooltip" data-tooltip="Edit">
                          <FiEdit2 />
                        </button>
                      </li>

                      <li>
                        <button className="tooltip" data-tooltip="Delete">
                          <FiTrash />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </main>

        <Footer />
      </section>
    </>
  );
};

export default Settings;
