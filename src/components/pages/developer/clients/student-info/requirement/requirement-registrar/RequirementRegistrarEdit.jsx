import { InputCheckbox, InputTextArea } from "@/components/helpers/FormInputs";
import { queryData } from "@/components/helpers/queryData";
import NoData from "@/components/partials/NoData";
import TableLoading from "@/components/partials/TableLoading";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
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

  let valueToAdd = [];
  let valueToRemove = [];

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

  valueToRemove = registrarRequirements?.data.filter((regItem) => {
    return !studentRequirement?.data.find((reqItem) => {
      return (
        regItem.requirement_registrar_aid === reqItem.students_requirements_id
      );
    });
  });

  const initVal = {
    ...valueToAdd,
  };

  const yupSchema = Yup.object({});

  const handleView = () => setIsEdit(false);
  return (
    <>
      {reqLoading || reqFetching || isLoading ? (
        <div className="max-w-[600px]">
          <TableLoading count={10} cols={2} />
        </div>
      ) : (
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            // console.log({
            //   requirements_id: Object.keys(values),
            //   students_requirements_student_id: itemEdit.students_aid,
            //   students_requirements_sy_id: syId,
            // });
            mutation.mutate({
              requirements_id: Object.keys(values),
              students_requirements_student_id: itemEdit.students_aid,
              students_requirements_sy_id: syId,
            });
          }}
        >
          {(props) => {
            console.log(valueToAdd);

            return (
              <>
                <Form>
                  <div className="mode__edit">
                    <div className="max-w-[600px] flex justify-between mb-2">
                      <h5>Add/Remove Registrar Requirement</h5>
                    </div>

                    <div className="max-w-[600px]  ">
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
                                />
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <NoData />
                      )}

                      {/* <div className="remarks mt-5">
                      <div className="form__wrap">
                        <InputTextArea
                          label="Remarks"
                          name="students_requirements_remarks"
                        />
                      </div>
                    </div> */}

                      <button
                        className="btn btn--accent mt-5"
                        type="submit"
                        disabled={mutation.isPending || !props.dirty}
                      >
                        {mutation.isPending ? <ButtonSpinner /> : "Save"}
                      </button>
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
