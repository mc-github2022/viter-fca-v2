import useQueryData from "@/components/custom-hooks/useQueryData";
import { InputSelect, InputText } from "@/components/helpers/FormInputs.jsx";
import { queryData } from "@/components/helpers/queryData.jsx";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import {
  setError,
  setIsAdd,
  setIsShowModal,
  setMessage,
  setSuccess,
  setValidate,
} from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FaTimes } from "react-icons/fa";
import * as Yup from "yup";

const ModalAddStudent = ({ schoolYear }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();
  const [onFocusUser, setOnFocusUser] = React.useState(false);
  const [dataUser, setDataUser] = React.useState([]);
  const [dataSelected, setDataSelected] = React.useState([]);
  const [searchUser, setSearchUser] = React.useState("");
  const refUser = React.useRef();

  const { data: gradeLevel } = useQueryData(
    "/v2/dev-grade-level", // endpoint
    "get", // method
    "grade-level" // key
  );

  const { data: parents } = useQueryData(
    "/v2/dev-parents", // endpoint
    "get", // method
    "parents-students" // key
  );

  const handleClose = () => {
    dispatch(setIsShowModal(false));
    setTimeout(() => {
      dispatch(setIsAdd(false));
      dispatch(setIsShowModal(true));
    }, 200);
  };

  const syId = schoolYear?.data.find((item) => item.school_year_aid);

  const mutation = useMutation({
    mutationFn: (values) => queryData("/v2/dev-students", "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["students"] });
      // show error box
      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage("Record successfully added."));
      }
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const handleSearchParent = (e) => {
    setOnFocusUser(true);
    setSearchUser(e.target.value);
    setDataSelected([]);
    const filteredData = parents?.data.filter((entry) => {
      console.log(entry);
      return Object.values(entry).some(
        (stringValue) =>
          typeof stringValue === "string" &&
          (stringValue.toUpperCase().includes(e.target.value) ||
            stringValue.toLowerCase().includes(e.target.value) ||
            stringValue
              .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
              .includes(e.target.value))
      );
    });
    setDataUser(filteredData);
  };
  const handleClickOutsideParent = (e) => {
    if (
      refUser.current !== undefined &&
      refUser.current !== null &&
      !refUser.current.contains(e.target)
    ) {
      setOnFocusUser(false);
    }
  };

  const handleClickParent = (item, props) => {
    setSearchUser(`${item.parents_fname} ${item.parents_lname}`);
    setDataSelected(item);

    props.values.search = `${item.parents_fname} ${item.parents_lname}`;
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutsideParent);
    return () =>
      document.removeEventListener("click", handleClickOutsideParent);
  }, []);

  const initVal = {
    students_parent_id: "",
    students_lrn: "",
    students_fname: "",
    students_lname: "",
    students_mname: "",
    students_gender: "",
    students_birth_date: "",
    students_email: "",
    students_mobile: "",
    students_landline: "",
    school_year_students_last_learning_type: "",
    school_year_students_sy_id: syId.school_year_aid,
    school_year_students_grade_level_id: "",
  };

  const yupSchema = Yup.object({
    students_fname: Yup.string().required("Required"),
    students_lname: Yup.string().required("Required"),
    students_gender: Yup.string().required("Required"),
    students_email: Yup.string().email("Invalid email"),
    school_year_students_last_learning_type: Yup.string().required("Required"),
    school_year_students_grade_level_id: Yup.string().required("Required"),
  });

  return (
    <>
      <div className={`modal modal--side  ${store.isShowModal ? "show" : ""}`}>
        <div className="modal__backdrop" onClick={handleClose}></div>

        <div className="modal__main ">
          <div className="modal__header">
            <h3>Add Student</h3>
            <button onClick={handleClose}>
              <FaTimes />
            </button>
          </div>

          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              if (dataSelected?.length === 0) {
                dispatch(setValidate(true));
                dispatch(setMessage("Parent cannot be empty."));
                return;
              }

              // console.log(values);
              mutation.mutate({
                ...values,
                students_parent_id: dataSelected.parents_aid,
              });
            }}
          >
            {(props) => {
              return (
                <Form className="flex flex-col h-full max-h-[1200px] overflow-y-auto">
                  <div className="modal__body custom__scroll">
                    <div className="form__wrap">
                      <InputText
                        label="Parent"
                        type="text"
                        name="search"
                        disabled={mutation.isPending}
                        placeholder="Search parent here"
                        onChange={(e) => handleSearchParent(e)}
                        onFocus={() => {
                          setOnFocusUser(true);
                          setDataUser(parents?.data);
                        }}
                        refVal={refUser}
                        value={searchUser}
                      />

                      {onFocusUser && (
                        <ul className="absolute z-50 h-52 overflow-y-auto w-full bg-white border border-gray-200 rounded-md">
                          {dataUser?.length > 0 ? (
                            dataUser?.map((item, key) => {
                              {
                                return (
                                  <button
                                    type="button"
                                    className="p-1 pl-3 pr-3 w-full text-left break-all bg-white hover:bg-gray-100  focus:bg-gray-100 focus:outline-none cursor-pointer duration-200"
                                    key={key}
                                    onClick={() =>
                                      handleClickParent(item, props)
                                    }
                                  >
                                    {item.parents_fname} {item.parents_lname}
                                  </button>
                                );
                              }
                            })
                          ) : (
                            <li className="mt-8 p-2 w-full text-center bg-white focus:bg-gray-200 border-b border-white">
                              No Data
                            </li>
                          )}
                        </ul>
                      )}
                    </div>

                    <div className="form__wrap">
                      <InputText
                        disabled={mutation.isPending}
                        label="LRN (Optional)"
                        type="text"
                        name="students_lrn"
                      />
                    </div>

                    <div className="form__wrap">
                      <InputSelect
                        disabled={mutation.isPending}
                        label="Grade Level"
                        name="school_year_students_grade_level_id"
                      >
                        <option value="" hidden></option>
                        {gradeLevel?.count > 0 ? (
                          gradeLevel?.data.map((item, key) => {
                            return (
                              <option value={item.grade_level_aid} key={key}>
                                {item.grade_level_name}
                              </option>
                            );
                          })
                        ) : (
                          <option value="" disabled>
                            No data
                          </option>
                        )}
                      </InputSelect>
                    </div>

                    <div className="form__wrap">
                      <InputSelect
                        disabled={mutation.isPending}
                        label="Learning Type"
                        name="school_year_students_last_learning_type"
                      >
                        <option value="" hidden></option>
                        <option value="onsite">Face-to-Face</option>
                        <option value="online">Online</option>
                      </InputSelect>
                    </div>

                    <div className="form__wrap">
                      <InputText
                        disabled={mutation.isPending}
                        label="First Name"
                        type="text"
                        name="students_fname"
                      />
                    </div>

                    <div className="form__wrap">
                      <InputText
                        disabled={mutation.isPending}
                        label="Middle Name (Optional)"
                        type="text"
                        name="students_mname"
                      />
                    </div>

                    <div className="form__wrap">
                      <InputText
                        disabled={mutation.isPending}
                        label="Last Name"
                        type="text"
                        name="students_lname"
                      />
                    </div>

                    <div className="form__wrap">
                      <InputSelect
                        disabled={mutation.isPending}
                        label="Gender"
                        name="students_gender"
                      >
                        <option value="" hidden></option>
                        <option value="m">Male</option>
                        <option value="f">Female</option>
                      </InputSelect>
                    </div>

                    <div className="form__wrap">
                      <InputText
                        disabled={mutation.isPending}
                        label="Birth Date (Optional)"
                        type="date"
                        name="students_birth_date"
                      />
                    </div>

                    <div className="form__wrap">
                      <InputText
                        disabled={mutation.isPending}
                        label="Email (Optional)"
                        type="email"
                        name="students_email"
                      />
                    </div>

                    <div className="form__wrap">
                      <InputText
                        disabled={mutation.isPending}
                        label="Mobile (Optional)"
                        type="text"
                        name="students_mobile"
                      />
                    </div>

                    <div className="form__wrap">
                      <InputText
                        disabled={mutation.isPending}
                        label="Landline (Optional)"
                        type="text"
                        name="students_landline"
                      />
                    </div>
                  </div>
                  <div className="modal__action ">
                    <button
                      className="btn btn--accent"
                      type="submit"
                      disabled={mutation.isPending || !props.dirty}
                    >
                      {mutation.isPending ? <ButtonSpinner /> : "Save"}
                    </button>
                    <button
                      className="btn btn--cancel"
                      type="button"
                      onClick={handleClose}
                      disabled={mutation.isPending}
                    >
                      Discard
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ModalAddStudent;
