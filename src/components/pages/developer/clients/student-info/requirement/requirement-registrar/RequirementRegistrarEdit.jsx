import { InputCheckbox } from "@/components/helpers/FormInputs";
import { queryData } from "@/components/helpers/queryData";
import NoData from "@/components/partials/NoData";
import TableSpinner from "@/components/partials/spinners/TableSpinner";
import {
  setMessage,
  setSuccess,
  setValidate,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FaCheck } from "react-icons/fa";
import * as Yup from "yup";

const RequirementRegistrarEdit = ({
  registrarRequirements,
  setIsEdit,
  isLoading,
  studentRequirement,
  itemEdit,
  schoolYear,
  reqLoading,
  reqFetching,
  gradeLevel,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(`/v2/dev-students-requirement`, "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["students-requirements"] });
      // show error box
      if (data.success) {
        setIsEdit(false);
        dispatch(setSuccess(true));
        dispatch(setMessage("Record successfully updated."));
      }
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const syId = schoolYear?.count > 0 && schoolYear?.data[0].school_year_aid;

  const getPreSchoolRequirement = registrarRequirements?.data.filter(
    (levelItem) =>
      Number(levelItem.requirement_registrar_is_for_pre_school) === 1
  );

  const getGradeLevel = gradeLevel?.data.filter(
    (levelItem) =>
      Number(levelItem.grade_level_aid) ===
      Number(itemEdit.current_students_grade_level_id)
  );

  const handleCheck = async (e, requirementId) => {
    mutation.isPending = true;
    if (e.target.value === false || e.target.value === "") {
      await queryData(`/v2/dev-students-requirement`, "post", {
        students_requirements_id: requirementId,
        students_requirements_student_id: itemEdit.students_aid,
        students_requirements_sy_id: syId,
      });

      queryClient.invalidateQueries({ queryKey: ["students-requirements"] });

      dispatch(setSuccess(true));
      dispatch(setMessage("Record successfully added."));

      return;
    }

    await queryData(
      `/v2/dev-students-requirement/${requirementId}/${itemEdit.students_aid}`,
      "delete"
    );

    queryClient.invalidateQueries({ queryKey: ["students-requirements"] });

    dispatch(setSuccess(true));
    dispatch(setMessage("Record successfully removed."));

    return;
  };

  let valueToAdd = [];

  registrarRequirements?.data.map((regItem) => {
    return studentRequirement?.data.filter((reqItem) => {
      if (
        regItem.requirement_registrar_aid === reqItem.students_requirements_id
      ) {
        valueToAdd[regItem.requirement_registrar_aid] = true;
      }

      return;
    });
  });

  const initVal = {
    ...valueToAdd,
  };

  const yupSchema = Yup.object({});

  const handleView = () => setIsEdit(false);

  return (
    <>
      {reqLoading || isLoading || mutation.isPending ? (
        <div className="max-w-[600px] h-[50vh] relative">
          <TableSpinner />
        </div>
      ) : (
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            mutation.mutate({});
          }}
        >
          {(props) => {
            return (
              <>
                <Form>
                  <div className="mode__edit">
                    <div className="max-w-[600px] flex justify-between mb-2">
                      <h5>Add/Remove Registrar Requirement</h5>
                    </div>

                    <div className="max-w-[600px] relative">
                      {mutation.isPending && <TableSpinner />}
                      {getGradeLevel?.length > 0 &&
                      getGradeLevel[0]?.grade_level_is_pre_school === 1 ? (
                        getPreSchoolRequirement?.length > 0 ? (
                          getPreSchoolRequirement?.map((item, key) => {
                            return (
                              <div
                                className="list flex justify-between items-center py-2 border-b border-line"
                                key={key}
                              >
                                <div className="form__wrap flex items-center mt-3 gap-2 ">
                                  <InputCheckbox
                                    label={item.requirement_registrar_name}
                                    type="checkbox"
                                    name={item.requirement_registrar_aid}
                                    id={item.requirement_registrar_aid}
                                    disabled={
                                      mutation.isPending ||
                                      store.credentials.data.role_is_parent ===
                                        1
                                    }
                                    onClick={(e) =>
                                      store.credentials.data.role_is_parent ===
                                      1
                                        ? null
                                        : handleCheck(
                                            e,
                                            item.requirement_registrar_aid
                                          )
                                    }
                                  />
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <NoData />
                        )
                      ) : registrarRequirements?.count > 0 ? (
                        registrarRequirements?.data.map((item, key) => {
                          return (
                            <div
                              className="list flex justify-between items-center py-2 border-b border-line"
                              key={key}
                            >
                              <div className="form__wrap flex items-center mt-3 gap-2 ">
                                <InputCheckbox
                                  label={item.requirement_registrar_name}
                                  type="checkbox"
                                  name={item.requirement_registrar_aid}
                                  id={item.requirement_registrar_aid}
                                  disabled={
                                    mutation.isPending ||
                                    store.credentials.data.role_is_parent === 1
                                  }
                                  onClick={(e) =>
                                    store.credentials.data.role_is_parent === 1
                                      ? null
                                      : handleCheck(
                                          e,
                                          item.requirement_registrar_aid
                                        )
                                  }
                                />
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <NoData />
                      )}
                    </div>
                  </div>
                </Form>
              </>
            );
          }}
        </Formik>
      )}
    </>
  );
};

export default RequirementRegistrarEdit;
