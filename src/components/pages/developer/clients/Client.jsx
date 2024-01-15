import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import Navigation from "@/components/partials/Navigation.jsx";
import { setIsAdd } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { BsArchive } from "react-icons/bs";
import { FaAngleLeft, FaBars } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { TfiLock } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Client = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [formIndexParent, setFormIndexParent] = React.useState(1);
  const [formIndexContact, setFormIndexContact] = React.useState(1);
  const [formIndexFinancial, setFormIndexFinancial] = React.useState(1);
  const [isAddParent, setIsAddParent] = React.useState(false);
  const [isAddContact, setIsAddContact] = React.useState(false);
  const [isAddFinancial, setIsAddFinancial] = React.useState(false);
  const [show, setShow] = React.useState(false);

  const handleShowSubMenu = () => {
    setShow(!show);
  };

  const handleAdd = () => {
    setIsAddParent(true);
    setFormIndexParent(1);
  };

  const handleAddContact = () => {
    setIsAddContact(true);
    setFormIndexContact(1);
  };

  const handleAddFinancial = () => {
    setIsAddFinancial(true);
    setFormIndexFinancial(1);
  };

  const handleDismissParent = () => setIsAddParent(false);
  const handleDismissContact = () => setIsAddContact(false);
  const handleDismissFinancial = () => setIsAddFinancial(false);
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

              <h1 className="text-clampH1 mb-2">Parent & Guardian Records</h1>
              <p className="mb-4 text-xs hidden lg:block max-w-[650px] w-full">
                This parent & guardian record registration form is an official
                document that must be completed in its entirety and digitally
                signed by the parent or guardian. It must be accurate and
                complete before a student can be enrolled in FCA through the
                online enrollment system.
              </p>

              <button className="text-xs" onClick={handleAdd}>
                Add Parent or Guardian
              </button>
            </div>
          </div>

          <div className="my-5 bg-primary rounded-md max-w-[900px] border-line border shadow-sm relative p-4 md:pl-0">
            <div className="gap-8 md:flex">
              <aside className="max-w-[220px] w-full">
                <button className="pl-4 mb-2 font-bold">
                  Parent Information
                </button>
                <ul className={`pl-4 ${isAddParent ? "block" : "hidden"}`}>
                  <li className="pl-4 py-2">
                    <button onClick={() => setFormIndexParent(1)}>
                      Relationship
                    </button>
                  </li>
                  <li className="pl-4 py-2">
                    <button onClick={() => setFormIndexParent(2)}>Name</button>
                  </li>
                  <li className="pl-4 py-2">
                    <button onClick={() => setFormIndexParent(3)}>
                      Contact
                    </button>
                  </li>
                  <li className="pl-4 py-2">
                    <button onClick={() => setFormIndexParent(4)}>
                      Address
                    </button>
                  </li>
                  <li className="pl-4 py-2">
                    <button onClick={() => setFormIndexParent(5)}>Other</button>
                  </li>
                </ul>
              </aside>
              <div className="w-full">
                <div className={`${isAddParent ? "hidden" : "block"}`}>
                  <table>
                    <thead>
                      <tr>
                        <td>#</td>
                        <td>Name</td>
                        <td className="hidden md:block">Relationship</td>
                        <td>Action</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Nimfa Alimagno</td>
                        <td className="hidden md:block">Biological Mother</td>
                        <td>
                          <ul className="flex ">
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Edit"
                                onClick={() => handleEdit(item)}
                              >
                                <FiEdit2 />
                              </button>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {isAddParent && (
                  <>
                    {formIndexParent === 1 && (
                      <div className="form__block max-w-[450px] min-h-[460px] w-full">
                        <h6 className="mb-4">Relationship</h6>
                        <div className="form__wrap">
                          <label htmlFor="">Relationship to Student</label>
                          <input type="text" />
                        </div>

                        <div className="form__wrap">
                          <label htmlFor="">Reside with this individual</label>
                          <input type="text" />
                        </div>

                        <ul className="flex gap-2 mt-6">
                          <li>
                            <button className="btn btn--accent">Save</button>
                          </li>
                          <li>
                            <button
                              className="btn btn--cancel"
                              onClick={handleDismissParent}
                            >
                              Dismiss
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}

                    {formIndexParent === 2 && (
                      <div className="form__block max-w-[450px] min-h-[460px] w-full">
                        <h6 className="mb-4">Name</h6>
                        <div className="form__wrap">
                          <label htmlFor="">Title</label>
                          <input type="text" />
                        </div>

                        <div className="form__wrap">
                          <label htmlFor="">First Name</label>
                          <input type="text" />
                        </div>

                        <div className="form__wrap">
                          <label htmlFor="">Last Name</label>
                          <input type="text" />
                        </div>

                        <div className="form__wrap">
                          <label htmlFor="">Middle Name</label>
                          <input type="text" />
                        </div>

                        <div className="form__wrap">
                          <label htmlFor="">Maiden Last Name</label>
                          <input type="text" />
                        </div>

                        <ul className="flex gap-2 mt-6">
                          <li>
                            <button className="btn btn--accent">Save</button>
                          </li>
                          <li>
                            <button
                              className="btn btn--cancel"
                              onClick={handleDismissParent}
                            >
                              Dismiss
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}

                    {formIndexParent === 3 && (
                      <div className="form__block max-w-[450px] min-h-[460px] w-full">
                        <h6 className="mb-4">Contact</h6>
                        <div className="form__wrap">
                          <label htmlFor="">Email</label>
                          <input type="text" />
                        </div>

                        <div className="form__wrap">
                          <label htmlFor="">Mobile</label>
                          <input type="text" />
                        </div>

                        <div className="form__wrap">
                          <label htmlFor="">Landline (Optional)</label>
                          <input type="text" />
                        </div>

                        <ul className="flex gap-2 mt-6">
                          <li>
                            <button className="btn btn--accent">Save</button>
                          </li>
                          <li>
                            <button
                              className="btn btn--cancel"
                              onClick={handleDismissParent}
                            >
                              Dismiss
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}

                    {formIndexParent === 4 && (
                      <div className="form__block max-w-[450px] min-h-[460px] w-full">
                        <h6 className="mb-4">Address</h6>
                        <div className="form__wrap">
                          <label htmlFor="">Address</label>
                          <textarea className="h-[50px]"></textarea>
                        </div>

                        <div className="form__wrap">
                          <label htmlFor="">City</label>
                          <input type="text" />
                        </div>

                        <div className="form__wrap">
                          <label htmlFor="">Provice</label>
                          <input type="text" />
                        </div>

                        <div className="form__wrap">
                          <label htmlFor="">Zipcode</label>
                          <input type="text" />
                        </div>

                        <ul className="flex gap-2 mt-6">
                          <li>
                            <button className="btn btn--accent">Save</button>
                          </li>
                          <li>
                            <button
                              className="btn btn--cancel"
                              onClick={handleDismissParent}
                            >
                              Dismiss
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}

                    {formIndexParent === 5 && (
                      <div className="form__block max-w-[450px] min-h-[460px] w-full">
                        <h6 className="mb-4">Other</h6>
                        <div className="form__wrap">
                          <label htmlFor="">Religion</label>
                          <textarea className="h-[50px]"></textarea>
                        </div>

                        <div className="form__wrap">
                          <label htmlFor="">Occupation</label>
                          <input type="text" />
                        </div>

                        <ul className="flex gap-2 mt-6">
                          <li>
                            <button className="btn btn--accent">Save</button>
                          </li>
                          <li>
                            <button
                              className="btn btn--cancel"
                              onClick={handleDismissParent}
                            >
                              Dismiss
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          <button className="text-xs" onClick={() => handleAddContact()}>
            Add Contact
          </button>

          <div className="my-5 bg-primary rounded-md max-w-[900px] border-line border shadow-sm relative p-4 md:pl-0">
            <div className="md:flex gap-8">
              <aside className="max-w-[220px] w-full">
                <button className="pl-4 mb-2 font-bold">
                  Contact Information
                </button>
                <ul className={`pl-4 ${isAddContact ? "block" : "hidden"}`}>
                  <li className="pl-4 py-2">
                    <button onClick={() => setFormIndex(1)}>Contact</button>
                  </li>
                </ul>
              </aside>
              <div className="w-full">
                <div className={`${isAddContact ? "hidden" : "block"}`}>
                  <table>
                    <thead>
                      <tr>
                        <td>#</td>
                        <td>Name</td>
                        <td className="hidden md:table-cell">Email</td>
                        <td className="hidden md:table-cell">Phone</td>
                        <td>Action</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Nimfa Alimagno</td>
                        <td className="hidden md:table-cell">
                          nimfa.alimagno@fca.edu.ph
                        </td>
                        <td className="hidden md:table-cell">09221234567</td>

                        <td>
                          <ul className="flex ">
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Edit"
                                onClick={() => handleEdit(item)}
                              >
                                <FiEdit2 />
                              </button>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {isAddContact && (
                  <>
                    {formIndexContact === 1 && (
                      <div className="form__block max-w-[450px] min-h-[460px] w-full">
                        <h6 className="mb-4">Contact Information</h6>
                        <div className="form__wrap">
                          <label htmlFor="">Name</label>
                          <input type="text" />
                        </div>

                        <div className="form__wrap">
                          <label htmlFor="">Email</label>
                          <input type="text" />
                        </div>

                        <div className="form__wrap">
                          <label htmlFor="">Mobile Number</label>
                          <input type="text" />
                        </div>

                        <div className="form__wrap">
                          <label htmlFor="">Landline (Optional)</label>
                          <input type="text" />
                        </div>

                        <div className="form__wrap">
                          <label htmlFor="">Priority</label>
                          <input type="text" />
                        </div>

                        <ul className="flex gap-2 mt-6">
                          <li>
                            <button className="btn btn--accent">Save</button>
                          </li>
                          <li>
                            <button
                              className="btn btn--cancel"
                              onClick={handleDismissContact}
                            >
                              Dismiss
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          <button className="text-xs" onClick={() => handleAddFinancial()}>
            Add Financial
          </button>

          <div className="my-5 bg-primary rounded-md max-w-[900px] border-line border shadow-sm relative p-4 md:pl-0">
            <div className="md:flex gap-8">
              <aside className="max-w-[220px] w-full">
                <button className="pl-4 mb-2 font-bold">
                  Financial Information
                </button>
                <ul className={`pl-4 ${isAddFinancial ? "block" : "hidden"}`}>
                  <li className="pl-4 py-2">
                    <button onClick={() => setFormIndexFinancial(1)}>
                      Parent Gross Income
                    </button>
                  </li>

                  <li className="pl-4 py-2">
                    <button onClick={() => setFormIndexFinancial(2)}>
                      Child Financer Information
                    </button>
                  </li>
                </ul>
              </aside>
              <div className="w-full">
                <div className={`${isAddFinancial ? "hidden" : "block"}`}>
                  <table>
                    <thead>
                      <tr>
                        <td>#</td>
                        <td>Name</td>
                        <td className="hidden md:table-cell">Relationship</td>
                        <td className="hidden md:table-cell">Occupation</td>
                        <td>Action</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Nimfa Alimagno</td>
                        <td className="hidden md:table-cell">Father</td>
                        <td className="hidden md:table-cell">Boss</td>
                        <td>
                          <ul className="flex ">
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Edit"
                                onClick={() => handleEdit(item)}
                              >
                                <FiEdit2 />
                              </button>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {isAddFinancial && (
                  <>
                    {formIndexFinancial === 1 && (
                      <div className="form__block max-w-[450px] min-h-[460px] w-full">
                        <h6 className="mb-4">Financial Information</h6>
                        <div className="form__wrap">
                          <label htmlFor="">Father Income (Optional)</label>
                          <input type="text" />
                        </div>

                        <div className="form__wrap">
                          <label htmlFor="">Mother Income (Optional)</label>
                          <input type="text" />
                        </div>

                        <ul className="flex gap-2 mt-6">
                          <li>
                            <button className="btn btn--accent">Save</button>
                          </li>
                          <li>
                            <button
                              className="btn btn--cancel"
                              onClick={handleDismissFinancial}
                            >
                              Dismiss
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}

                    {formIndexFinancial === 2 && (
                      <div className="form__block max-w-[450px] min-h-[460px] w-full">
                        <h6 className="mb-4">Child's Education Financier</h6>
                        <div className="form__wrap">
                          <label htmlFor="">Fullname</label>
                          <input type="text" />
                        </div>

                        <div className="form__wrap">
                          <label htmlFor="">Relationship</label>
                          <input type="text" />
                        </div>

                        <div className="form__wrap">
                          <label htmlFor="">Occupation</label>
                          <input type="text" />
                        </div>

                        <div className="form__wrap">
                          <label htmlFor="">Monthly Income</label>
                          <input type="text" />
                        </div>

                        <ul className="flex gap-2 mt-6">
                          <li>
                            <button className="btn btn--accent">Save</button>
                          </li>
                          <li>
                            <button
                              className="btn btn--cancel"
                              onClick={handleDismissFinancial}
                            >
                              Dismiss
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </>
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

export default Client;
