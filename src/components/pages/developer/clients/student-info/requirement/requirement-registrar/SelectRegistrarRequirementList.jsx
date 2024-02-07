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

  // const databaseRequirement = [
  //   {
  //     requirement_registrar_aid: 5,
  //     requirement_registrar_name: "Good Moral Certificate",
  //   },

  //   {
  //     requirement_registrar_aid: 3,
  //     requirement_registrar_name: "xxxx",
  //   },
  // ];

  const [selectedRequirement, setSelectedRequirement] = React.useState([]);

  const keys = ["requirement_registrar_aid", "requirement_registrar_name"];
  const filteredPropertyRequirement = registrar?.data.map((item) => {
    const properties = keys.reduce((obj, key) => {
      obj[key] = item[key];
      return obj;
    }, {});
    return properties;
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

  return (
    <>
      <div className="requirement__list">
        <h5>Add/Remove Registrar Requirement</h5>

        {isLoading && <TableSpinner />}

        {filteredPropertyRequirement.length === 0 ? (
          <NoData />
        ) : (
          filteredPropertyRequirement.map((item, index) => (
            <div
              className="list max-w-[600px] flex justify-between items-center py-2 border-b border-line"
              key={index}
            >
              <p className="text-xs">{item.requirement_registrar_name}</p>
              <div className="flex gap-4">
                <input
                  type="checkbox"
                  onChange={(e) => handleChange(e, item)}
                />
              </div>
            </div>
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
