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
  requirement,
  registrar,
  isLoading,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const { showRequirement, setShowRequirement } = requirement;
  const [selectedRequirement, setSelectedRequirement] = React.useState([]);

  const databaseRequirement = [];

  const handleSelectRequirementClose = () => setShowRequirement(false);

  const keys = ["requirement_registrar_aid", "requirement_registrar_name"];
  let filteredPropertyRequirement = registrar?.data.map((item) => {
    const properties = keys.reduce((obj, key) => {
      obj[key] = item[key];
      return obj;
    }, {});
    return properties;
  });

  const arr1Set = new Set(
    databaseRequirement.map((obj) => obj.requirement_registrar_aid)
  );
  const result = filteredPropertyRequirement.map((obj) =>
    arr1Set.has(obj.requirement_registrar_aid)
      ? { ...obj, selected: true }
      : obj
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

  const handleChange = (e, item) => {
    if (e.target.checked) {
      setSelectedRequirement([...selectedRequirement, { ...item }]);
    } else {
      setSelectedRequirement(
        selectedRequirement.filter(
          (x) => x.requirement_registrar_aid !== item.requirement_registrar_aid
        )
      );
    }
  };

  const initVal = {};

  const yupSchema = Yup.object({});

  return (
    <>
      <Formik
        initialValues={initVal}
        validationSchema={yupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          mutation.mutate(values);
        }}
      >
        {(props) => {
          return (
            <Form>
              <div className="requirement__list">
                <h5>Add/Remove Registrar Requirement</h5>

                {isLoading && <TableSpinner />}

                {filteredPropertyRequirement.length === 0 ? (
                  <NoData />
                ) : (
                  result.map((item, index) => {
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
                  <label htmlFor="">Remarks</label>
                  <textarea
                    name=""
                    id=""
                    cols="20"
                    rows="5"
                    className="max-w-[400px] w-full"
                  ></textarea>
                </div>

                <div className="flex gap-2 py-2 mt-4">
                  <button className="btn btn--accent">Save</button>
                  <button
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
