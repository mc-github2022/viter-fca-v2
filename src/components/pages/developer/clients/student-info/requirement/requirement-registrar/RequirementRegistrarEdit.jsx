import { InputCheckbox, InputTextArea } from "@/components/helpers/FormInputs";
import { queryData } from "@/components/helpers/queryData";
import NoData from "@/components/partials/NoData";
import TableLoading from "@/components/partials/TableLoading";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import FetchingSpinner from "@/components/partials/spinners/FetchingSpinner";
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
import { AiOutlineSave } from "react-icons/ai";
import { LiaTimesSolid } from "react-icons/lia";
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
                      {registrarRequirements?.count > 0 ? (
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
                                  disabled={mutation.isPending}
                                  onClick={(e) =>
                                    handleCheck(
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
