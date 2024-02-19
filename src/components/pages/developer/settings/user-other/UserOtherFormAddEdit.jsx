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
  setValidate,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const UserOtherFormAddEdit = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();
  const [onFocusUser, setOnFocusUser] = React.useState(false);
  const [dataUser, setDataUser] = React.useState([]);
  const [dataSelected, setDataSelected] = React.useState([]);
  const [searchUser, setSearchUser] = React.useState("");
  const refUser = React.useRef();
  const [select, setSelect] = React.useState("");

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

  const {
    isLoading: isLoadingParents,
    isFetching: isFetchingParents,
    error: errorParents,
    data: parents,
  } = useQueryData(
    "/v2/user-other/parents", // endpoint
    "get", // method
    "user-other-parents" // key
  );

  const getNonDeveloperRole = roles?.data.filter(
    (item) =>
      item.role_is_active === 1 &&
      item.role_is_developer !== 1 &&
      item.role_is_parent !== 1
  );

  const getpParentRole = roles?.data.find(
    (item) => item.role_is_active === 1 && item.role_is_parent === 1
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
    // search: "",
  };

  const yupSchema = Yup.object({
    select_user: !itemEdit && Yup.string().required("Required"),
    user_other_role_id: select === "staff" && Yup.string().required("Required"),
    user_other_fname: itemEdit && Yup.string().required("Required"),
    user_other_lname: itemEdit && Yup.string().required("Required"),
    user_other_email: itemEdit && Yup.string().required("Required"),
    // search: !itemEdit && Yup.string().required("Required"),
  });

  const handleSearchTrainer = (e) => {
    setOnFocusUser(true);
    setSearchUser(e.target.value);
    setDataSelected([]);

    if (select === "staff") {
      const filteredData = staff?.data.filter((entry) =>
        Object.values(entry).some(
          (stringValue) =>
            typeof stringValue === "string" &&
            (stringValue.toUpperCase().includes(e.target.value) ||
              stringValue.toLowerCase().includes(e.target.value) ||
              stringValue
                .replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                  letter.toUpperCase()
                )
                .includes(e.target.value))
        )
      );
      setDataUser(filteredData);
    } else {
      const filteredData = parents?.data.filter((entry) =>
        Object.values(entry).some(
          (stringValue) =>
            typeof stringValue === "string" &&
            (stringValue.toUpperCase().includes(e.target.value) ||
              stringValue.toLowerCase().includes(e.target.value) ||
              stringValue
                .replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                  letter.toUpperCase()
                )
                .includes(e.target.value))
        )
      );
      setDataUser(filteredData);
    }
  };

  const handleClickOutsideTrainer = (e) => {
    if (
      refUser.current !== undefined &&
      refUser.current !== null &&
      !refUser.current.contains(e.target)
    ) {
      setOnFocusUser(false);
    }
  };

  const handleClickTrainer = (item, props) => {
    setSearchUser(
      select === "staff"
        ? `${item.settings_staff_fname} ${item.settings_staff_lname}`
        : `${item.parents_fname} ${item.parents_lname}`
    );
    setDataSelected(item);

    props.values.search =
      select === "staff"
        ? `${item.settings_staff_fname} ${item.settings_staff_lname}`
        : `${item.parents_fname} ${item.parents_lname}`;
  };

  const handleSelectUser = (e) => {
    setSelect(e.target.value);
    setSearchUser("");
    setDataSelected([]);
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutsideTrainer);
    return () =>
      document.removeEventListener("click", handleClickOutsideTrainer);
  }, []);

  console.log(dataSelected?.length);

  return (
    <>
      <div className="settings__addEdit mb-8 max-w-[350px] w-full">
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          validateOnChange="false"
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            // if (dataSelected?.length === 0) {
            //   dispatch(setValidate(true));
            //   dispatch(
            //     setMessage(
            //       select === "staff"
            //         ? "Staff cannot be empty."
            //         : "Parent cannot be empty."
            //     )
            //   );
            //   return;
            // }

            console.log({
              ...values,
              user_other_fname: itemEdit
                ? values.user_other_fname
                : select === "staff"
                ? dataSelected.settings_staff_fname
                : dataSelected.parents_fname,
              user_other_lname: itemEdit
                ? values.user_other_lname
                : select === "staff"
                ? dataSelected.settings_staff_lname
                : dataSelected.parents_lname,
              user_other_email: itemEdit
                ? values.user_other_email
                : select === "staff"
                ? dataSelected.settings_staff_email
                : dataSelected.parents_email,
              user_other_role_id: itemEdit
                ? values.user_other_role_id
                : select === "parent"
                ? getpParentRole.role_aid
                : values.user_other_role_id,
            });

            mutation.mutate({
              ...values,
              user_other_fname: itemEdit
                ? values.user_other_fname
                : select === "staff"
                ? dataSelected.settings_staff_fname
                : dataSelected.parents_fname,
              user_other_lname: itemEdit
                ? values.user_other_lname
                : select === "staff"
                ? dataSelected.settings_staff_lname
                : dataSelected.parents_lname,
              user_other_email: itemEdit
                ? values.user_other_email
                : select === "staff"
                ? dataSelected.settings_staff_email
                : dataSelected.parents_email,
              user_other_role_id: itemEdit
                ? values.user_other_role_id
                : select === "parent"
                ? getpParentRole.role_aid
                : values.user_other_role_id,
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
                      disabled={mutation.isPending}
                      onChange={(e) => handleSelectUser(e, props)}
                    >
                      <option value="" hidden></option>
                      <option value="staff">Staff</option>
                      <option value="parent">Parent</option>
                    </InputSelect>
                  </div>
                )}

                {select !== "" && (
                  <div className="form__wrap text-xs mb-3">
                    <InputText
                      label={select === "staff" ? "Staff" : "Parent"}
                      type="text"
                      name="search"
                      disabled={mutation.isPending}
                      placeholder={
                        select === "staff"
                          ? "Search staff here"
                          : "Search parent here"
                      }
                      onChange={(e) => handleSearchTrainer(e)}
                      onFocus={() => {
                        setOnFocusUser(true);
                        setDataUser(
                          select === "staff" ? staff?.data : parents?.data
                        );
                      }}
                      refVal={refUser}
                      value={searchUser}
                    />

                    {onFocusUser && (
                      <ul className="absolute z-50 h-52 overflow-y-auto w-full bg-white border border-gray-200 rounded-md">
                        {dataUser?.length > 0 ? (
                          dataUser?.map((item, key) => {
                            {
                              return select === "staff" ? (
                                <button
                                  type="button"
                                  className="p-1 pl-3 pr-3 w-full text-left break-all bg-white hover:bg-gray-100  focus:bg-gray-100 focus:outline-none cursor-pointer duration-200"
                                  key={key}
                                  onClick={() =>
                                    handleClickTrainer(item, props)
                                  }
                                >
                                  {item.settings_staff_fname}{" "}
                                  {item.settings_staff_lname} (
                                  {item.settings_staff_email === ""
                                    ? "No email provided."
                                    : item.settings_staff_email}
                                  )
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  className="p-1 pl-3 pr-3 w-full text-left break-all bg-white hover:bg-gray-100  focus:bg-gray-100 focus:outline-none cursor-pointer duration-200"
                                  key={key}
                                  onClick={() =>
                                    handleClickTrainer(item, props)
                                  }
                                >
                                  {item.parents_fname} {item.parents_lname} (
                                  {item.parents_email === ""
                                    ? "No email provided."
                                    : item.parents_email}
                                  )
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

                {(select !== "" || itemEdit) && select !== "parent" && (
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
