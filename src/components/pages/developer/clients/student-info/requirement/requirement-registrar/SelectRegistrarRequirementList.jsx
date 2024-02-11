import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import {
  InputSelect,
  InputText,
  InputTextArea,
} from "@/components/helpers/FormInputs.jsx";
import { queryData } from "@/components/helpers/queryData.jsx";
import NoData from "@/components/partials/NoData.jsx";
import TableSpinner from "@/components/partials/spinners/TableSpinner.jsx";
import {
  setIsAdd,
  setMessage,
  setSuccess,
  setValidate,
} from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { useMutation } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import * as Yup from "yup";

const SelectRegistrarRequirementList = ({
  dataRegistrar,
  isLoading,
  itemEdit,
  setShowRequirement,
  parseData,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [selectedRequirement, setSelectedRequirement] = React.useState([]);

  const {
    isLoading: registrarloading,
    error,
    data: registrar,
  } = useQueryData(
    `/v2/dev-requirement-registrar`, // endpoint
    "get", // method
    "registrar" // key
  );

  const mutation = useMutation({
    mutationFn: (values) => queryData("/v2/req-registrar", "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch

      queryClient.invalidateQueries({ queryKey: ["clients"] });
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

  const handleSelectRequirementClose = () => setShowRequirement(false);

  const handleChange = (e, item) => {
    if (e.target.checked) {
      setSelectedRequirement([
        ...selectedRequirement,
        { ...item, selected: true },
      ]);
    } else {
      setSelectedRequirement(
        selectedRequirement.filter(
          (x) => x.requirement_registrar_aid !== item.requirement_registrar_aid
        )
      );
    }
  };

  const keys = ["requirement_registrar_aid, requirement_registrar_name"];
  let filteredPropertyRequirement = selectedRequirement?.map((item) => {
    const properties = keys.reduce((obj, key) => {
      obj[key] = item[key];
      return obj;
    }, {});
    return properties;
  });

  // const arr1Set = new Set(
  //   databaseRequirement.map((obj) => obj.requirement_registrar_aid)
  // );
  // const result = filteredPropertyRequirement.map((obj) =>
  //   arr1Set.has(obj.requirement_registrar_aid)
  //     ? { ...obj, selected: true }
  //     : obj
  // );

  // const arr1Set = new Set(
  //   JSON.parse(dataRegistrar.data[0].requirement_registrar_submitted).map(
  //     (obj) => obj.requirement_registrar_aid
  //   )
  // );

  // const result = registrar.data.map((obj) =>
  //   arr1Set.has(obj.requirement_registrar_aid)
  //     ? { ...obj, selected: true }
  //     : obj
  // );

  const initVal = {};

  const yupSchema = Yup.object({});

  return (
    <>
      <Formik
        initialValues={initVal}
        validationSchema={yupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          mutation.mutate({
            ...values,
            requirement_registrar_submitted: selectedRequirement,
            requirement_registrar_student_id: itemEdit.student_info_aid,
            requirement_registrar_user_id: itemEdit.student_info_user_id,
          });
        }}
      >
        {(props) => {
          return (
            <Form>
              <div className="requirement__list">
                <h5>Add/Remove Registrar Requirement</h5>

                {registrarloading ? (
                  <TableSpinner />
                ) : dataRegistrar.length === 0 ? (
                  <NoData />
                ) : (
                  result.data.map((item, index) => {
                    return (
                      <div
                        className="list max-w-[600px] flex justify-between items-center py-2 border-b border-line"
                        key={index}
                      >
                        <p className="text-xs">
                          {item.requirement_registrar_name}
                        </p>
                        <div className="flex gap-4">
                          <input
                            type="checkbox"
                            checked={item.selected}
                            onChange={(e) => handleChange(e, item)}
                          />
                        </div>
                      </div>
                    );
                  })
                )}

                <div className="mt-5 form__wrap">
                  <InputTextArea
                    label="Remarks"
                    name="requirement_registrar_remarks"
                  />
                </div>

                <div className="flex gap-2 py-2 mt-4">
                  <button className="btn btn--accent" type="submit">
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn btn--cancel"
                    onClick={handleSelectRequirementClose}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default SelectRegistrarRequirementList;
