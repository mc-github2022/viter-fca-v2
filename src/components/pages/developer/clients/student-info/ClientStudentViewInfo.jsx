import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import {
  formatMobileNumber,
  getUrlParam,
} from "@/components/helpers/functions-general.jsx";
import BreadCrumbs from "@/components/partials/BreadCrumbs.jsx";
import Footer from "@/components/partials/Footer.jsx";
import Header from "@/components/partials/Header.jsx";
import Navigation from "@/components/partials/Navigation.jsx";
import NoData from "@/components/partials/NoData.jsx";
import TableLoading from "@/components/partials/TableLoading.jsx";
import ModalDelete from "@/components/partials/modals/ModalDelete.jsx";
import { setIsAdd, setIsDelete } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { CiMobile3 } from "react-icons/ci";
import { FaAngleLeft, FaPlus } from "react-icons/fa";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LuDot } from "react-icons/lu";
import { PiPhoneThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import ModalAddStudent from "./form/ModalAddStudent.jsx";
import ModalRequirements from "./requirement/ModalRequirements.jsx";

const ClientStudentViewInfo = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [viewRequirements, setViewRequirements] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [dataItem, setData] = React.useState(null);
  const cid = getUrlParam().get("cid");
  const navigate = useNavigate();

  const handleViewInfoRequirements = () => setViewRequirements(true);

  const handleAddStudent = () => {
    setItemEdit(null);
    dispatch(setIsAdd(true));
  };

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.student_info_aid);
    setData(item);
  };

  const {
    isLoading,
    isFetching,
    error,
    data: mystudent,
  } = useQueryData(
    `/v2/student-parent-id/${cid}`, // endpoint
    "get", // method
    "mystudent" // key
  );

  return (
    <>
      <Header />
      <section className="main__wrap flex relative ">
        <Navigation menu="clients" />
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
              <h1 className="text-clampH1 mb-5">
                Loverboy
                {/* {userIsLoading || userIsFetching ? (
                  <p>Loading</p>
                ) : (
                  <>
                    <span className="pr-2">
                      {userAccount?.data[0].user_other_fname}
                    </span>
                    <span>{userAccount?.data[0].user_other_lname}</span>
                  </>
                )} */}
              </h1>
            </div>
          </div>

          <div className="flex justify-between items-center max-w-[620px] w-full mb-3">
            <div>
              <h3 className="">Student</h3>
              <p className="text-xs opacity-75">
                List of client student enrolled for this school year
              </p>
            </div>

            <button
              className="tooltip"
              data-tooltip="New"
              onClick={handleAddStudent}
            >
              <FaPlus />
            </button>
          </div>

          <div className="max-w-[620px] w-full gap-4 mb-5 bg-primary">
            {isLoading || (isFetching && <TableLoading />)}
            {mystudent?.data.length === 0 ? (
              <NoData />
            ) : (
              mystudent?.data.map((item, key) => {
                return (
                  <div
                    className="card  border border-line p-4 rounded-sm relative"
                    key={key}
                  >
                    <h5>
                      {item.student_info_fname} {item.student_info_lname} -{" "}
                      <span className="text-accentLight font-bold">
                        Enrolled
                      </span>
                    </h5>
                    <small className="flex mb-2 ">
                      {item.grade_level_name}

                      {item.student_info_reference_no ? (
                        <>
                          <LuDot className="text-xl" />
                          {item.student_info_reference_no}
                        </>
                      ) : (
                        ""
                      )}
                    </small>

                    <p className="text-xs my-2">
                      Requirement Status:{" "}
                      <span className="text-accentLight ">Complete</span>
                    </p>

                    <button
                      className="block text-xs mb-2"
                      onClick={handleViewInfoRequirements}
                    >
                      View Requirement
                    </button>

                    <div className="card__action absolute top-5 right-5 flex gap-2">
                      <button
                        className=" tooltip"
                        data-tooltip="Edit"
                        onClick={() => handleEdit(item)}
                      >
                        <FiEdit2 />
                      </button>

                      <button
                        className=" tooltip"
                        data-tooltip="Delete"
                        onClick={() => handleDelete(item)}
                      >
                        <FiTrash />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </main>

        <Footer />
      </section>

      {viewRequirements && (
        <ModalRequirements setViewRequirements={setViewRequirements} />
      )}

      {store.isAdd && <ModalAddStudent itemEdit={itemEdit} />}

      {store.isDelete && (
        <ModalDelete
          mysqlApiDelete={`/v2/student/${id}`}
          msg={"Are you sure you want to delete this record?"}
          item={`${dataItem.student_info_fname} ${dataItem.student_info_lname}`}
          queryKey={"mystudent"}
        />
      )}
    </>
  );
};

export default ClientStudentViewInfo;
