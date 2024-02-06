import TableSpinner from "@/components/partials/spinners/TableSpinner.jsx";
import { setMessage, setValidate } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const SelectRegistrarRequirementList = ({
  requirement,
  registrar,
  isLoading,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const { showRequirement, setShowRequirement } = requirement;

  const handleSelectRequirementClose = () => setShowRequirement(false);
  const [requirementList, setRequirementList] = React.useState([]);

  const keys = ["requirement_registrar_aid", "requirement_registrar_name"];

  const filteredRequirement = registrar?.data.map((item) => {
    const filtered = keys.reduce((obj, key) => {
      obj[key] = item[key];
      return obj;
    }, {});
    return filtered;
  });

  const handleAdd = (item) => {
    const exist = requirementList.find(
      (x) => x.requirement_registrar_aid === item.requirement_registrar_aid
    );
    if (exist !== undefined) {
      dispatch(setMessage("This requirement is already added."));
      dispatch(setValidate(true));
    } else {
      setRequirementList([...requirementList, { ...item }]);
    }
  };

  const handleRemove = (item) => {
    (x) => x.requirement_registrar_aid === item.requirement_registrar_aid;
    setRequirementList(
      requirementList.filter(
        (x) => x.requirement_registrar_aid !== item.requirement_registrar_aid
      )
    );
  };

  return (
    <>
      <div className="requirement__list">
        <h5>Add/Remove Registrar Requirement</h5>

        {isLoading && <TableSpinner />}

        {filteredRequirement.length === 0 ? (
          <NoData />
        ) : (
          filteredRequirement.map((item, index) => (
            <React.Fragment key={index}>
              <div className="max-w-[600px] flex justify-between items-center py-2 border-b border-line">
                <p className="text-xs">{item.requirement_registrar_name}</p>

                <div className="flex gap-4">
                  <button
                    className="tooltip"
                    data-tooltip="Add"
                    onClick={() => handleAdd(item)}
                  >
                    <FiPlus />
                  </button>

                  <button
                    className="tooltip"
                    data-tooltip="Remove"
                    onClick={() => handleRemove(item)}
                  >
                    <FiMinus />
                  </button>
                </div>
              </div>
            </React.Fragment>
          ))
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
    </>
  );
};

export default SelectRegistrarRequirementList;
