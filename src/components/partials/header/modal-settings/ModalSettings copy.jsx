import React from "react";
import { FaBars } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { FiEdit2, FiTrash } from "react-icons/fi";
const ModalSettings = () => {
  const [showSideNav, setShowSideNav] = React.useState(false);

  const handleShowSideNav = () => {
    setShowSideNav(!showSideNav);
  };
  return (
    <>
      <div className={`modal modal--settings `}>
        <div className="modal__backdrop bg-black/80"></div>
        <div className="modal__settings relative z-50 h-screen flex justify-center items-center">
          <div className="bg-white max-w-[800px] max-h-[700px] w-full h-full overflow-y-hidden m-5">
            <div className="modal__settings__header p-2 uppercase flex justify-between border-b border-line bg-primary">
              <div className="flex item-center gap-4">
                <button className="text-base" onClick={handleShowSideNav}>
                  <FaBars />
                </button>
                <h5 className="mb-0 font-normal">Settings</h5>
              </div>
              <button>
                <LiaTimesSolid />
              </button>
            </div>
            <div className="flex gap-2 ">
              <aside
                className={`${
                  showSideNav ? "show" : ""
                } modal__settings__nav hidden bg-primary absolute lg:static  -left-full top-0  w-[200px] z-20 p-4 shadow `}
              >
                <ul className="mb-10 overflow-auto h-full">
                  <li className="mb-4">
                    <Link to="#">Department</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="#">Department</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="#">Department</Link>
                  </li>

                  <li className="mb-4">
                    <Link to="#">Department</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="#">Department</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="#">Department</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="#">Department</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="#">Department</Link>
                  </li>

                  <li className="mb-4">
                    <Link to="#">Department</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="#">Department</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="#">Department</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="#">Department</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="#">Department</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="#">Department</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="#">Department</Link>
                  </li>

                  <li className="mb-4">
                    <Link to="#">Department</Link>
                  </li>

                  <li className="mb-4">
                    <Link to="#">Department</Link>
                  </li>

                  <li className="mb-4">
                    <Link to="#">Department</Link>
                  </li>

                  <li className="mb-4">
                    <Link to="#">Department</Link>
                  </li>

                  <li className="mb-4">
                    <Link to="#">Department</Link>
                  </li>

                  <li className="mb-4">
                    <Link to="#">Department</Link>
                  </li>

                  <li className="mb-4">
                    <Link to="#">Department</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="#">Department</Link>
                  </li>

                  <li className="mb-4">
                    <Link to="#">Department</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="#">Department</Link>
                  </li>
                </ul>
              </aside>
              <main className="modal__settings__main p-2 w-full ">
                <h2 className="mb-3">Department</h2>
                <p className="text-xs mb-5">
                  Set list of departments that will be available to the current
                  school year
                </p>

                <button className="flex gap-1 items-center mt-2 text-xs text-accent hover:underline mb-5">
                  <AiOutlinePlus /> Add New Department
                </button>

                {/* <div className="settings__addEdit mb-8 max-w-[350px] w-full">
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
                      <button className="btn btn--cancel"> Discard</button>
                    </div>
                  </form>
                </div> */}

                <div>
                  <h5 className="text-sm">List</h5>

                  <div className="datalist mt-2 max-h-[300px] h-full overflow-auto">
                    <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1 w-[97%]">
                      <p>Registrar</p>
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

                    <div className="datalist__item text-xs  flex justify-between items-center border-b border-line pb-1 w-[97%]">
                      <p>Registrar</p>
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

                    <div className="datalist__item text-xs flex justify-between items-center  border-b border-line pb-1 w-[97%] ">
                      <p>Registrar</p>
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

                    <div className="datalist__item text-xs flex justify-between items-center  border-b border-line pb-1 w-[97%] ">
                      <p>Registrar</p>
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

                    <div className="datalist__item text-xs flex justify-between items-center  border-b border-line pb-1 w-[97%] ">
                      <p>Registrar</p>
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

                    <div className="datalist__item text-xs flex justify-between items-center  border-b border-line pb-1 w-[97%] ">
                      <p>Registrar</p>
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

                    <div className="datalist__item text-xs flex justify-between items-center  border-b border-line pb-1 w-[97%] ">
                      <p>Registrar</p>
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

                    <div className="datalist__item text-xs flex justify-between items-center  border-b border-line pb-1 w-[97%] ">
                      <p>Registrar</p>
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
                    <div className="datalist__item text-xs flex justify-between items-center  border-b border-line pb-1 w-[97%] ">
                      <p>Registrar</p>
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

                    <div className="datalist__item text-xs flex justify-between items-center  border-b border-line pb-1 w-[97%] ">
                      <p>Registrar</p>
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
                    <div className="datalist__item text-xs flex justify-between items-center  border-b border-line pb-1 w-[97%] ">
                      <p>Registrar</p>
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

                    <div className="datalist__item text-xs flex justify-between items-center  border-b border-line pb-1 w-[97%] ">
                      <p>Registrar</p>
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

                    <div className="datalist__item text-xs flex justify-between items-center  border-b border-line pb-1 w-[97%] ">
                      <p>Registrar</p>
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

                    <div className="datalist__item text-xs flex justify-between items-center  border-b border-line pb-1 w-[97%] ">
                      <p>Registrar</p>
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

                    <div className="datalist__item text-xs flex justify-between items-center  border-b border-line pb-1 w-[97%] ">
                      <p>Registrar</p>
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

                    <div className="datalist__item text-xs flex justify-between items-center  border-b border-line pb-1 w-[97%] ">
                      <p>Registrar</p>
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

                    <div className="datalist__item text-xs flex justify-between items-center  border-b border-line pb-1 w-[97%] ">
                      <p>Registrarxxxx</p>
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
                </div>

                <div>asdfasdfasd</div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSettings;
