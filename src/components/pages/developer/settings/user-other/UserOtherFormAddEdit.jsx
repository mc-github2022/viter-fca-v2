import useQueryData from "@/components/custom-hooks/useQueryData";
import { InputSelect, InputText } from "@/components/helpers/FormInputs";
import { queryData } from "@/components/helpers/queryData";
import NoData from "@/components/partials/NoData";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import {
  setError,
  setIsSettingAdd,
  setMessage,
  setSuccess,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const UserOtherFormAddEdit = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();
  const [onFocusTrainer, setOnFocusTrainer] = React.useState(false);
  const [dataTrainer, setDataTrainer] = React.useState([]);
  const [dataSelected, setDataSelected] = React.useState([]);
  const [searchTrainer, setSearchTrainer] = React.useState("");
  const refTrainer = React.useRef();

  const handleClose = () => {
    dispatch(setIsSettingAdd(false));
  };

  const {
    isLoading: isLoadingRole,
    isFetching: isFetchingRole,
    error: errorRole,
    data: roles,
  } = useQueryData(
    "/v2/dev-roles", // endpoint
    "get", // method
    "roles" // key
  );

  const {
    isLoading: isLoadingStaff,
    isFetching: isFetchingStaff,
    error: errorStaff,
    data: staff,
  } = useQueryData(
    "/v2/user-other/staff", // endpoint
    "get", // method
    "user-other-staff" // key
  );

  const getNonDeveloperRole = roles?.data.filter(
    (item) => item.role_is_active === 1 && item.role_is_developer !== 1
  );

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v2/user-other/${itemEdit.user_other_aid}`
          : "/v2/user-other",
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["user"] });

      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        dispatch(setIsSettingAdd(false));
        dispatch(setSuccess(true));
        dispatch(
          setMessage(`Record successfully ${itemEdit ? "updated" : "added"}.`)
        );
      }
    },
  });

  const initVal = {
    user_other_aid: itemEdit ? itemEdit.user_other_aid : "",
    user_other_fname: itemEdit ? itemEdit.user_other_fname : "",
    user_other_lname: itemEdit ? itemEdit.user_other_lname : "",
    user_other_email: itemEdit ? itemEdit.user_other_email : "",
    user_other_role_id: itemEdit ? itemEdit.user_other_role_id : "",
    user_other_email_old: itemEdit ? itemEdit.user_other_email : "",
    select_user: "",
  };

  const yupSchema = Yup.object({
    select_user: !itemEdit && Yup.string().required("Required"),
    user_other_role_id: Yup.string().required("Required"),
    user_other_fname: itemEdit && Yup.string().required("Required"),
    user_other_lname: itemEdit && Yup.string().required("Required"),
    user_other_email: itemEdit && Yup.string().required("Required"),
  });

  const handleSearchTrainer = (e) => {
    setOnFocusTrainer(true);
    setSearchTrainer(e.target.value);
    const filteredData = staff?.data.filter((entry) =>
      Object.values(entry).some(
        (stringValue) =>
          typeof stringValue === "string" &&
          (stringValue.toUpperCase().includes(e.target.value) ||
            stringValue.toLowerCase().includes(e.target.value) ||
            stringValue
              .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
              .includes(e.target.value))
      )
    );

    setDataTrainer(filteredData);
  };

  const handleClickOutsideTrainer = (e) => {
    if (
      refTrainer.current !== undefined &&
      refTrainer.current !== null &&
      !refTrainer.current.contains(e.target)
    ) {
      setOnFocusTrainer(false);
    }
  };

  const handleClickTrainer = (item) => {
    setSearchTrainer(
      `${item.settings_staff_fname} ${item.settings_staff_lname}`
    );
    setDataSelected(item);
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutsideTrainer);
    return () =>
      document.removeEventListener("click", handleClickOutsideTrainer);
  }, []);

  return (
    <>
      <div className="settings__addEdit mb-8 max-w-[350px] w-full">
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            // console.log({
            //   ...values,
            //   user_other_fname: itemEdit
            //     ? values.user_other_fname
            //     : dataSelected.settings_staff_fname,
            //   user_other_lname: itemEdit
            //     ? values.user_other_lname
            //     : dataSelected.settings_staff_lname,
            //   user_other_email: itemEdit
            //     ? values.user_other_email
            //     : dataSelected.settings_staff_email,
            // });
            mutation.mutate({
              ...values,
              user_other_fname: itemEdit
                ? values.user_other_fname
                : dataSelected.settings_staff_fname,
              user_other_lname: itemEdit
                ? values.user_other_lname
                : dataSelected.settings_staff_lname,
              user_other_email: itemEdit
                ? values.user_other_email
                : dataSelected.settings_staff_email,
            });
          }}
        >
          {(props) => {
            return (
              <Form>
                {!itemEdit && (
                  <div className="form__wrap text-xs mb-3">
                    <InputSelect
                      label="Select user"
                      name="select_user"
                      disabled={
                        mutation.isPending ||
                        isLoadingRole ||
                        isFetchingRole ||
                        isLoadingStaff ||
                        isFetchingStaff
                      }
                    >
                      {isLoadingRole ||
                      isFetchingRole ||
                      isLoadingStaff ||
                      isFetchingStaff ? (
                        <option disabled value="">
                          Loading...
                        </option>
                      ) : errorRole || errorStaff ? (
                        <option disabled value="">
                          API / Network Error
                        </option>
                      ) : (
                        <>
                          <option value="" hidden></option>
                          <option value="staff">Staff</option>
                          <option value="parent">Parent</option>
                        </>
                      )}
                    </InputSelect>
                  </div>
                )}

                {props.values.select_user !== "" && (
                  <div className="form__wrap text-xs mb-3">
                    <InputText
                      label={
                        props.values.select_user === "staff"
                          ? "Staff"
                          : "Parent"
                      }
                      type="text"
                      name="search"
                      disabled={mutation.isPending}
                      placeholder="Search staff here"
                      onChange={(e) => handleSearchTrainer(e)}
                      onFocus={() => {
                        setOnFocusTrainer(true);
                        setDataTrainer(staff?.data);
                      }}
                      refVal={refTrainer}
                      value={searchTrainer}
                    />

                    {onFocusTrainer && (
                      <ul className="absolute z-50 h-52 overflow-y-auto w-full bg-white border border-gray-200 rounded-md">
                        {dataTrainer?.length > 0 ? (
                          dataTrainer?.map((item, key) => (
                            <button
                              type="button"
                              className="p-1 pl-3 pr-3 w-full text-left break-all bg-white hover:bg-gray-100  focus:bg-gray-100 focus:outline-none cursor-pointer duration-200"
                              key={key}
                              onClick={() => handleClickTrainer(item)}
                            >
                              {item.settings_staff_fname}{" "}
                              {item.settings_staff_lname} (
                              {item.settings_staff_email === ""
                                ? "No email provided."
                                : item.settings_staff_email}
                              )
                            </button>
                          ))
                        ) : (
                          <li className="mt-8 p-2 w-full text-center bg-white focus:bg-gray-200 border-b border-white">
                            No Data
                          </li>
                        )}
                      </ul>
                    )}
                  </div>
                )}

                {itemEdit && (
                  <>
                    <div className="form__wrap text-xs mb-3">
                      <InputText
                        label="First Name"
                        type="text"
                        name="user_other_fname"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="form__wrap text-xs mb-3">
                      <InputText
                        label="Last Name"
                        type="text"
                        name="user_other_lname"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="form__wrap text-xs mb-3">
                      <InputText
                        label="Email"
                        type="text"
                        name="user_other_email"
                        disabled={mutation.isPending}
                      />
                    </div>
                  </>
                )}

                {(props.values.select_user !== "" || itemEdit) && (
                  <div className="form__wrap text-xs mb-3">
                    <InputSelect
                      label="Roles"
                      name="user_other_role_id"
                      disabled={
                        mutation.isPending || isLoadingRole || isFetchingRole
                      }
                    >
                      {isLoadingRole || isFetchingRole ? (
                        <option disabled value="">
                          Loading...
                        </option>
                      ) : errorRole ? (
                        <option disabled value="">
                          API / Network Error
                        </option>
                      ) : (
                        <>
                          <option value="" hidden></option>
                          {getNonDeveloperRole?.length > 0 ? (
                            getNonDeveloperRole?.map((item, key) => {
                              return (
                                <option key={key} value={item.role_aid}>
                                  {item.role_name}
                                </option>
                              );
                            })
                          ) : (
                            <option value="" disabled>
                              No data
                            </option>
                          )}
                        </>
                      )}
                    </InputSelect>
                  </div>
                )}

                {/* <div className="form__wrap text-xs mb-3">
                  <InputText
                    label="Last Name"
                    type="text"
                    name="user_other_lname"
                    disabled={mutation.isPending}
                  />
                </div>

                <div className="form__wrap text-xs mb-3">
                  <InputText
                    label="Email"
                    type="email"
                    name="user_other_email"
                    disabled={mutation.isPending}
                  />
                </div> */}

                <div className={`settings__actions flex gap-2 mt-4`}>
                  <button className="btn btn--accent" type="submit">
                    {mutation.isPending ? (
                      <ButtonSpinner />
                    ) : itemEdit ? (
                      "Save"
                    ) : (
                      "Add"
                    )}
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
    </>
  );
};

export default UserOtherFormAddEdit;
