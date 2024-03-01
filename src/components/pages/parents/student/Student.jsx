import useQueryData from "@/components/custom-hooks/useQueryData";
import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import NoData from "@/components/partials/NoData";
import TableLoading from "@/components/partials/TableLoading";
import ModalDelete from "@/components/partials/modals/ModalDelete";
import ModalError from "@/components/partials/modals/ModalError";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import { setIsAdd, setIsDelete } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext";
import React from "react";
import { FaAngleLeft, FaPlus } from "react-icons/fa";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { LuDot } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import ModalAddStudent from "../../developer/clients/student-info/modal-student/ModalAddStudent";
import ModalRequirements from "../../developer/clients/student-info/requirement/ModalRequirements";
import Navigation from "../Navigation";
import ModalEditStudent from "../../developer/students/StudentEdit/ModalEditStudent";

const Student = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [viewRequirements, setViewRequirements] = React.useState(false);
  const [isViewInfo, setIsViewInfo] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [dataItem, setData] = React.useState(null);
  const navigate = useNavigate();

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
    setId(item.students_aid);
    setData(item);
  };

  const handleViewInfoRequirements = (item) => {
    setItemEdit(item);
    setViewRequirements(true);
  };

  const { data: schoolYear } = useQueryData(
    "/v2/dev-school-year", // endpoint
    "get", // method
    "school-year" // key
  );

  const isOngoing =
    schoolYear?.count > 0 && schoolYear?.data[0].school_year_is_enrollment_open;

  const {
    isLoading,
    isFetching,
    error,
    data: mystudent,
  } = useQueryData(
    `/v2/dev-read-students/${store.credentials.data.parents_aid}`, // endpoint
    "get", // method
    "mystudent" // key
  );

  const {
    isLoading: parentIsLoading,
    isFetching: parentIsFetching,
    error: parentIsError,
    data: parent,
  } = useQueryData(
    `/v2/dev-parents/${store.credentials.data.parents_aid}`, // endpoint
    "get", // method
    "parent" // key
  );

  return (
    <>
      <Header isLoading={isLoading} schoolYear={schoolYear} />
      <section className="main__wrap flex flex-col relative h-[100vh] ">
        <div className={`grow ${store.isMenuExpand ? "expand" : ""}`}>
          <Navigation
            menu="my-student"
            isLoading={isLoading}
            error={error}
            schoolYear={schoolYear}
          />
          <main
            className={`main__content mt-[35px]  relative ${
              store.isMenuExpand ? "expand" : ""
            } ${isOngoing === 1 ? "customHeightOngoing" : "customHeight"}`}
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
              </div>
            </div>

            <div className="flex justify-between items-center max-w-[620px] w-full mb-3">
              <div>
                <h1 className="text-clampH1 mb-2">My Students</h1>
                <p className="text-xs opacity-75 hidden md:block">
                  List of client student enrolled for this school year
                </p>
              </div>
              <button
                className="btn btn--sm mt-1"
                data-tooltip="New"
                onClick={handleAddStudent}
              >
                <FaPlus /> <span>Add</span>
              </button>
            </div>

            <div className="max-w-[620px] w-full gap-4 mb-5 ">
              {(isLoading || isFetching) && <TableLoading />}
              {mystudent?.data.length === 0 ? (
                <NoData />
              ) : (
                mystudent?.data.map((item, key) => {
                  return (
                    <div
                      className="card border-b border-line p-4 relative mb-2 bg-primary"
                      key={key}
                    >
                      <h5>
                        {item.students_fname} {item.students_lname} -{" "}
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
                        className="block text-xs mb-2 text-accent"
                        onClick={() => handleViewInfoRequirements(item)}
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
        </div>
        <Footer />
      </section>

      {viewRequirements && (
        <ModalRequirements
          setViewRequirements={setViewRequirements}
          itemEdit={itemEdit}
          schoolYear={schoolYear}
        />
      )}

      {store.isAdd && (
        <ModalEditStudent setIsViewInfo={setIsViewInfo} dataItem={itemEdit} />
      )}

      {store.isDelete && (
        <ModalDelete
          mysqlApiDelete={`/v2/dev-students/${id}/${id}`}
          msg={"Are you sure you want to delete this record?"}
          item={`${dataItem.students_fname} ${dataItem.students_lname}`}
          queryKey={"mystudent"}
        />
      )}

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Student;
