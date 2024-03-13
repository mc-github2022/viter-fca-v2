import useQueryData from "@/components/custom-hooks/useQueryData";
import { queryData } from "@/components/helpers/queryData";
import BreadCrumbs from "@/components/partials/BreadCrumbs";
import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import NoData from "@/components/partials/NoData";
import Pills from "@/components/partials/Pills";
import ModalDelete from "@/components/partials/modals/ModalDelete";
import ModalError from "@/components/partials/modals/ModalError";
import ModalReEnrolling from "@/components/partials/modals/ModalReEnrolling";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import FetchingSpinner from "@/components/partials/spinners/FetchingSpinner";
import TableSpinner from "@/components/partials/spinners/TableSpinner";
import {
  setError,
  setIsAdd,
  setIsDelete,
  setMessage,
} from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext";
import React from "react";
import { CiSquarePlus } from "react-icons/ci";
import { FaAngleLeft, FaPlus, FaWpforms } from "react-icons/fa";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { LuDot } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import {
  getGradeLevelByStudentId,
  getGradeLevelOrderByStudentId,
  getRequirementsStatus,
  getStudentStatus,
} from "../../developer/all-students/functions-all-students";
import ModalAddStudent from "../../developer/clients/student-info/modal-student/ModalAddStudent";
import ModalRequirements from "../../developer/clients/student-info/requirement/ModalRequirements";
import ModalEditStudent from "../../developer/students/StudentEdit/ModalEditStudent";
import Navigation from "../Navigation";

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
    setLoading(true);
    if (isOngoing === 0 || !isOngoing) {
      dispatch(setError(true));
      dispatch(setMessage("There's no enrollment yet."));
      return;
    }

    if (item.current_students_sy_id === schoolYear?.data[0].school_year_aid) {
      const data = await queryData(
        "/v2/dev-client-student/already-enrolled",
        "post",
        {
          ...item,
          grade_level_order: getGradeLevelOrderByStudentId(
            gradeLevel,
            item.current_students_grade_level_id
          ),
          current_students_sy_id: schoolYear?.data[0].school_year_aid,
        }
      );

      console.log(data);

      if (data.success) {
        setLoading(false);
        setIsEnroll(true);
        setData(item);
        return;
      }

      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        setLoading(false);
        return;
      }
    }

    setLoading(false);
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
            className={`main__content pl-4 md:pr-[13.5px] relative ${
              store.isMenuExpand ? "expand" : ""
            } ${isOngoing === 1 ? "customHeightOngoing" : "customHeight"}`}
          >
            <div className="main__header flex justify-between items-start lg:items-center ">
              <div className="max-w-[620px] mt-[55px] flex items-start justify-between w-full">
                <div>
                  <h1 className="text-clampH1 mb-2 pt-2">My Student</h1>
                  <p className="mb-4 text-xs hidden lg:block">
                    List of clients/parents registered on the system.
                  </p>
                </div>

                <button
                  className="btn btn--sm mt-3 hover:underline"
                  data-tooltip="New"
                  onClick={handleAddStudent}
                >
                  <FaPlus /> <span className="text-[14px]">Add</span>
                </button>
              </div>
            </div>

            <div className="max-w-[620px] w-full gap-4 mb-5 ">
              {(loading || isFetching) && <FetchingSpinner />}
              {mystudent?.data.length === 0 ? (
                <NoData />
              ) : (
                mystudent?.data.map((item, key) => {
                  return (
                    <div
                      className="card border-b border-line py-4 relative mb-2 bg-primary"
                      key={key}
                    >
                      <h5>
                        {item.students_fname} {item.students_lname} -{" "}
                        <span className="text-accentLight font-bold">
                          {item.students_is_active === 0 ? (
                            <Pills label="Inactive" color="text-disable" />
                          ) : (
                            getStudentStatus(
                              item,
                              getCurrentSchoolYear,
                              studentRequirement,
                              registrarRequirement
                            )
                          )}
                        </span>
                      </h5>

                      <small className="flex mb-2 ">
                        {item.current_students_grade_level_id === 0 && "Grade "}
                        {getGradeLevelByStudentId(
                          gradeLevel,
                          item.current_students_grade_level_id
                        )}

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

                      {item.students_is_active === 1 && (
                        <div className="card__action absolute top-5 right-5 flex gap-2">
                          {isOngoing === 1 && (
                            <button
                              className="tooltip"
                              data-tooltip="Enroll"
                              onClick={() => handleEnroll(item)}
                            >
                              <FaWpforms className="text-[17px]" />
                            </button>
                          )}
                          <button
                            className="tooltip"
                            data-tooltip="Edit"
                            onClick={() => handleEdit(item)}
                          >
                            <FiEdit2 className="text-[17px]" />
                          </button>

                          {/* <button
                          className="tooltip"
                          data-tooltip="Delete"
                          onClick={() => handleDelete(item)}
                        >
                          <FiTrash className="text-[17px]" />
                        </button> */}
                        </div>
                      )}
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
