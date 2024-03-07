import useQueryData from "@/components/custom-hooks/useQueryData";
import { queryData } from "@/components/helpers/queryData";
import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import NoData from "@/components/partials/NoData";
import ModalDelete from "@/components/partials/modals/ModalDelete";
import ModalError from "@/components/partials/modals/ModalError";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import TableSpinner from "@/components/partials/spinners/TableSpinner";
import {
  setError,
  setIsAdd,
  setIsDelete,
  setMessage,
  setSuccess,
} from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext";
import React from "react";
import { CiEdit, CiSquarePlus, CiTrash } from "react-icons/ci";
import { FaAngleLeft, FaPlus } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import {
  getGradeLevelOrderByStudentId,
  getRequirementsStatus,
  getStudentStatus,
} from "../../developer/all-students/functions-all-students";
import ModalAddStudent from "../../developer/clients/student-info/modal-student/ModalAddStudent";
import ModalRequirements from "../../developer/clients/student-info/requirement/ModalRequirements";
import ModalEditStudent from "../../developer/students/StudentEdit/ModalEditStudent";
import Navigation from "../Navigation";
import ModalReEnrolling from "@/components/partials/modals/ModalReEnrolling";

const Student = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [viewRequirements, setViewRequirements] = React.useState(false);
  const [isViewInfo, setIsViewInfo] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [dataItem, setData] = React.useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [isEnroll, setIsEnroll] = React.useState(false);

  const handleAddStudent = () => {
    if (isOngoing === 0 || !isOngoing) {
      dispatch(setError(true));
      dispatch(setMessage("There's no enrollment yet."));
      return;
    }
    setItemEdit(null);
    dispatch(setIsAdd(true));
  };

  const handleEdit = (item) => {
    setIsViewInfo(true);
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

  const getCurrentSchoolYear = schoolYear?.data.find(
    (item) => item.school_year_is_active === 1
  );

  const { data: studentRequirement } = useQueryData(
    `/v2/dev-students-requirement`, // endpoint
    "get", // method
    "students-requirements" // key
  );

  const { data: registrarRequirement } = useQueryData(
    "/v2/dev-requirement-registrar", // endpoint
    "get", // method
    "registrar-all-student" // key
  );

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

  const { data: parent } = useQueryData(
    `/v2/dev-parents/${store.credentials.data.parents_aid}`, // endpoint
    "get", // method
    "parent" // key
  );

  const { data: gradeLevel } = useQueryData(
    "/v2/dev-grade-level", // endpoint
    "get", // method
    "grade-level" // key
  );

  const handleEnroll = async (item) => {
    if (isOngoing === 0 || !isOngoing) {
      dispatch(setError(true));
      dispatch(setMessage("There's no enrollment yet."));
      return;
    }
    setIsEnroll(true);
    setData(item);
  };
  return (
    <>
      <Header isLoading={isLoading} schoolYear={schoolYear} />
      <section className="main__wrap flex flex-col relative h-[calc(100vh-40px)]">
        <div className={`grow ${store.isMenuExpand ? "expand" : ""}`}>
          <Navigation
            menu="my-student"
            isLoading={isLoading}
            error={error}
            schoolYear={schoolYear}
          />
          <main
            className={`main__content px-[13.5px] md:px-0 relative ${
              store.isMenuExpand ? "expand" : ""
            } ${isOngoing === 1 ? "customHeightOngoing" : "customHeight"}`}
          >
            <div className="main__header flex justify-between items-start lg:items-center my-2 pt-[44px] ">
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
              <div className="">
                <h1 className="text-clampH1 mb-2">My Students</h1>
                <p className="text-xs opacity-75 hidden md:block">
                  List of students
                </p>
              </div>
              <button
                className="btn btn--sm mt-1 hover:underline"
                data-tooltip="New"
                onClick={handleAddStudent}
              >
                <FaPlus /> <span>Add</span>
              </button>
            </div>

            <div className="max-w-[620px] w-full gap-4 mb-5 ">
              {(loading || isFetching) && <TableSpinner />}
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
                          {getStudentStatus(
                            item,
                            getCurrentSchoolYear,
                            studentRequirement,
                            registrarRequirement
                          )}
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
                        <span className="text-accentLight ">
                          {getRequirementsStatus(
                            item,
                            studentRequirement,
                            registrarRequirement
                          )}
                        </span>
                      </p>

                      <button
                        className="block text-xs mb-2 text-accent underline"
                        onClick={() => handleViewInfoRequirements(item)}
                      >
                        View Requirement
                      </button>

                      <div className="card__action absolute top-5 right-5 flex gap-2">
                        {isOngoing === 1 && (
                          <button
                            className="tooltip"
                            data-tooltip="Enroll"
                            onClick={() => handleEnroll(item)}
                          >
                            <CiSquarePlus />
                          </button>
                        )}
                        <button
                          className="tooltip"
                          data-tooltip="Edit"
                          onClick={() => handleEdit(item)}
                        >
                          <CiEdit />
                        </button>

                        <button
                          className="tooltip"
                          data-tooltip="Delete"
                          onClick={() => handleDelete(item)}
                        >
                          <CiTrash />
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
      {isViewInfo && (
        <ModalEditStudent
          setIsViewInfo={setIsViewInfo}
          dataItem={itemEdit}
          gradeLevel={gradeLevel}
        />
      )}{" "}
      {isEnroll && (
        <ModalReEnrolling
          mysqlApiEnroll={`/v2/dev-client-student/enroll`}
          msg={`Are you sure you want to enroll this student ?`}
          item={{
            ...dataItem,
            grade_level_order: getGradeLevelOrderByStudentId(
              gradeLevel,
              dataItem.current_students_grade_level_id
            ),
            current_students_sy_id: schoolYear?.data[0].school_year_aid,
          }}
          queryKey={"all-students"}
          setIsEnroll={setIsEnroll}
        />
      )}
      {store.isAdd && (
        <ModalAddStudent
          itemEdit={itemEdit}
          parent={parent}
          schoolYear={schoolYear}
        />
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
