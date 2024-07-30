import useQueryData from "@/components/custom-hooks/useQueryData";
import ModalError from "@/components/partials/modals/ModalError";
import ModalSuccess from "@/components/partials/modals/ModalSuccess";
import {
  setError,
  setIsSettingAdd,
  setMessage,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import SchoolYearFormAddEdit from "./SchoolYearFormAddEdit";
import SchoolYearFormEditEnrollment from "./SchoolYearFormEditEnrollment";
import SchoolYearList from "./SchoolYearList";

const SchoolYear = ({ index, isGreaterThanEndYear }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [editEnrollment, setIsEditEnrollment] = React.useState(false);

  const {
    isLoading,
    isFetching,
    error,
    data: schoolYear,
  } = useQueryData(
    "/v2/dev-school-year", // endpoint
    "get", // method
    "school-year" // key
  );

  const getOngoingSchoolYear =
    schoolYear?.count > 0 &&
    schoolYear?.data.filter((item) => item.school_year_is_active === 1);

  const handleAdd = () => {
    if (getOngoingSchoolYear?.length > 0) {
      dispatch(setError(true));
      dispatch(setMessage(" There is already an on-going SY."));
      return;
    }
    dispatch(setIsSettingAdd(true));
    setItemEdit(null);
  };

  if (index === 17 || (index === 17 && isGreaterThanEndYear)) {
    return (
      <>
        <div className="">
          <div className="bg-primary">
            <h2 className="mb-3">School Year</h2>
            <p className="text-xs mb-5">
              Set list of staff that will be available to the current school
              year
            </p>
          </div>

          {!store.isSettingAdd && !editEnrollment && (
            <div className="max-h-full h-[400px] xr:h-[570px] lg:max-h-[680px] w-full overflow-y-auto custom__scroll">
              <button
                className="flex gap-1 items-center mt-2 text-xs hover:underline mb-5"
                onClick={handleAdd}
              >
                <AiOutlinePlus /> Add New
              </button>

              <SchoolYearList
                setItemEdit={setItemEdit}
                setIsEditEnrollment={setIsEditEnrollment}
                isLoading={isLoading}
                isFetching={isFetching}
                error={error}
                schoolYear={schoolYear}
                getOngoingSchoolYear={getOngoingSchoolYear}
              />
            </div>
          )}

          {store.isSettingAdd && <SchoolYearFormAddEdit itemEdit={itemEdit} />}

          {editEnrollment && (
            <SchoolYearFormEditEnrollment
              itemEdit={itemEdit}
              setIsEditEnrollment={setIsEditEnrollment}
            />
          )}

          {store.success && <ModalSuccess />}
          {store.error && <ModalError />}
        </div>
      </>
    );
  }
};

export default SchoolYear;
