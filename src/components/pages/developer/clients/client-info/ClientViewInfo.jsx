import BreadCrumbs from "@/components/partials/BreadCrumbs";
import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import Navigation from "@/components/partials/Navigation";
import { StoreContext } from "@/components/store/StoreContext";
import React from "react";
import { CiMobile3 } from "react-icons/ci";
import { FaAngleLeft } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { HiOutlineEnvelope, HiOutlineUsers } from "react-icons/hi2";
import { LiaHardHatSolid, LiaMapMarkerAltSolid } from "react-icons/lia";
import { MdOutlineContactEmergency } from "react-icons/md";
import { PiMapPinLight, PiPhoneThin } from "react-icons/pi";
import { RiProfileLine } from "react-icons/ri";
import { SlHome } from "react-icons/sl";
import { TfiLocationPin } from "react-icons/tfi";
<<<<<<< HEAD
import { TiPhoneOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
=======
import { Field, Formik, Form } from "formik"; // <== this correct import
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { TiPhoneOutline } from "react-icons/ti";
import { SlHome } from "react-icons/sl";
import { FiEdit2 } from "react-icons/fi";
import { getUrlParam } from "@/components/helpers/functions-general";
import useQueryData from "@/components/custom-hooks/useQueryData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "@/components/helpers/queryData";
import { InputText } from "@/components/helpers/FormInputs";
>>>>>>> d0869864fec17ba3c30c5e0064f256b0fe3f8387
const ClientViewInfo = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();
  const id = getUrlParam().get("id");

  const {
    isLoading,
    isFetching,
    error,
    data: parentInfo,
  } = useQueryData(
    `/v2/dev-info-parent/${id}`, // endpoint
    "get", // method
    "parentInfo" // key
  );

  console.log(parentInfo);

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        `/v2/dev-info-parent/${id}`, // endpoint
        "put",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["parentInfo"] });
      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage("Record successfully updated"));
      }
    },
  });

  const initVal = {
    parent_guardian_info_relationship_id: parentInfo?.data[0].relationship_name,
    parent_guardian_info_salutation:
      parentInfo?.data[0].parent_guardian_info_salutation,
    parent_guardian_info_fname: parentInfo?.data[0].parent_guardian_info_fname,
    parent_guardian_info_lname: parentInfo?.data[0].parent_guardian_info_lname,
    parent_guardian_info_mname: parentInfo?.data[0].parent_guardian_info_mname,
    parent_guardian_info_maiden_name:
      parentInfo?.data[0].parent_guardian_info_maiden_name,
    parent_guardian_info_email: parentInfo?.data[0].parent_guardian_info_email,
    parent_guardian_info_mobile:
      parentInfo?.data[0].parent_guardian_info_mobile,
    parent_guardian_info_landline:
      parentInfo?.data[0].parent_guardian_info_landline,
    parent_guardian_info_address:
      parentInfo?.data[0].parent_guardian_info_address,
    parent_guardian_info_province:
      parentInfo?.data[0].parent_guardian_info_province,
    parent_guardian_info_city: parentInfo?.data[0].parent_guardian_info_city,
    parent_guardian_info_zipcode:
      parentInfo?.data[0].parent_guardian_info_zipcode,
    parent_guardian_info_religion:
      parentInfo?.data[0].parent_guardian_info_religion,
    parent_guardian_info_occupation:
      parentInfo?.data[0].parent_guardian_info_occupation,
  };

  const yupSchema = Yup.object({
    user_system_fname: Yup.string().required("Required"),
  });

  return (
    <div>
      <Header />
      <section className="main__wrap flex relative ">
        <Navigation menu="clients" />
        <main
          className={`main__content mt-[35px] ${
            store.isMenuExpand ? "" : "expand"
          }`}
        >
          <div className="main__header flex justify-between items-start lg:items-center">
            <div>
              <Link to="/" className="flex gap-1 items-center lg:hidden">
                <FaAngleLeft /> Back
              </Link>
              <BreadCrumbs />
              <h1 className="text-clampH1 mb-0">Client List</h1>
              <p className="mb-4 text-xs hidden lg:block">
                List of clients/parents registered on the system.
              </p>
            </div>
          </div>

          <div className="clientinfo__block p-4 bg-primary border border-line shadow-sm rounded-sm max-w-[720px] w-full mb-5">
            <h4>Parent Information</h4>
            <h6 className="my-3 flex gap-2 items-center">
              <HiOutlineUsers className="text-lg" />
              Relationship
            </h6>
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
                    <div className="grid grid-cols-2 gap-4">
                      <div className="form__wrap">
                        <InputText
                          label="Relationship to Student"
                          type="text"
                          name="parent_guardian_info_relationship_id"
                          disabled={mutation.isLoading}
                        />
                      </div>
                    </div>

                    <h6 className="my-3 flex gap-2 items-center">
                      <RiProfileLine className="text-lg" />
                      Name
                    </h6>
                    <div className="form__wrap">
                      <InputText
                        label="Title"
                        type="text"
                        name="parent_guardian_info_salutation"
                        disabled={mutation.isLoading}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="form__wrap">
                        <InputText
                          label="First Name"
                          type="text"
                          name="parent_guardian_info_fname"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Last Name"
                          type="text"
                          name="parent_guardian_info_lname"
                          disabled={mutation.isLoading}
                        />
                      </div>

                      <div className="form__wrap">
                        <InputText
                          label="Middle Name"
                          type="text"
                          name="parent_guardian_info_mname"
                          disabled={mutation.isLoading}
                        />
                      </div>

                      <div className="form__wrap">
                        <InputText
                          label="Maiden Name"
                          type="text"
                          name="parent_guardian_info_maiden_name"
                          disabled={mutation.isLoading}
                        />
                      </div>
                    </div>

                    <h6 className="my-3 flex gap-2 items-center">
                      <MdOutlineContactEmergency className="text-lg" />
                      Contact
                    </h6>
                    <div className="form__wrap">
                      <InputText
                        label="Email"
                        type="email"
                        name="parent_guardian_info_email"
                        disabled={mutation.isLoading}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="form__wrap">
                        <InputText
                          label="Mobile"
                          type="text"
                          name="parent_guardian_info_mobile"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Landline"
                          type="text"
                          name="parent_guardian_info_landline"
                          disabled={mutation.isLoading}
                        />
                      </div>
                    </div>

                    <h6 className="my-3 flex gap-2 items-center">
                      <TfiLocationPin className="text-lg" />
                      Location
                    </h6>
                    <div className="form__wrap">
                      <InputText
                        label="Address"
                        type="text"
                        name="parent_guardian_info_address"
                        disabled={mutation.isLoading}
                      />
                    </div>
                    <div className="grid grid-cols-[1fr_1fr_100px] gap-4">
                      <div className="form__wrap">
                        <InputText
                          label="City"
                          type="text"
                          name="parent_guardian_info_city"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Province"
                          type="text"
                          name="parent_guardian_info_province"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Zip Code"
                          type="text"
                          name="parent_guardian_info_zipcode"
                          disabled={mutation.isLoading}
                        />
                      </div>
                    </div>

                    <h6 className="my-3 flex gap-2 items-center">
                      <LiaHardHatSolid className="text-lg" />
                      Other
                    </h6>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="form__wrap">
                        <InputText
                          label="Religion"
                          type="text"
                          name="parent_guardian_info_religion"
                          disabled={mutation.isLoading}
                        />
                      </div>
                      <div className="form__wrap">
                        <InputText
                          label="Occupation"
                          type="text"
                          name="parent_guardian_info_occupation"
                          disabled={mutation.isLoading}
                        />
                      </div>
                    </div>

                    <div className="client__info__action flex gap-4 mt-5">
                      <button
                        className="btn btn--accent"
                        type="submit"
                        disabled={mutation.isLoading || !props.dirty}
                      >
                        Save
                      </button>
                      <button className="btn btn--cancel">Dismiss</button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>

          <div className="clientinfo__card p-4 border border-line shadow-sm rounded-sm max-w-[720px] w-full bg-primary  mb-10">
            <div className="clientinfo__card__detail">
              <h5 className="mb-3 pb-2 border-b border-line text-center flex items-center justify-center">
                Ms. Nimfa Alimagno - Guardian
                <button className="ml-3 tooltip" data-tooltip="Edit">
                  <FiEdit2 />
                </button>
              </h5>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col items-center">
                  <HiOutlineEnvelope className="text-xl" />
                  <p className="text-xs mt-2">acalelvin4@gmail.com</p>
                </div>

                <div className="flex flex-col items-center">
                  <CiMobile3 className="text-xl" />
                  <p className="text-xs mt-2">9232754451</p>
                </div>

                <div className="flex flex-col items-center">
                  <SlHome className="text-xl" />
                  <p className="text-xs text-center mt-2">
                    107 Farconville Subdivision, Phase II-A, Prof. AC Koo St.,
                    Purok 1,
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <LiaMapMarkerAltSolid className="text-xl" />
                  <p className="text-xs text-center mt-2">
                    Brgy. San Gregorio Laguna <br />
                    San Pablo City 4000
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="clientinfo__block p-4 bg-primary border border-line shadow-sm rounded-sm max-w-[720px] w-full mb-5">
            <h4 className="mb-3">Emergency Contact Information</h4>

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
                    <div className="form__wrap">
                      <label htmlFor="">Name</label>
                      <input type="text" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="form__wrap ">
                        <label htmlFor="">Email</label>
                        <input type="text" />
                      </div>
                      <div className="form__wrap ">
                        <label htmlFor="">Mobile Number</label>
                        <input type="text" />
                      </div>
                      <div className="form__wrap">
                        <label htmlFor="">Landline</label>
                        <input type="text" />
                      </div>

                      <div className="form__wrap">
                        <label htmlFor="">Priority</label>
                        <input type="text" />
                      </div>
                    </div>

                    <div className="client__info__action flex gap-4 mt-5">
                      <button className="btn btn--accent ">Save</button>
                      <button className="btn btn--cancel">Dismiss</button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>

          {/* EDIT MON */}
          <div className="max-w-[720px] w-full gap-4 mb-5">
            <div className="card bg-primary border border-line relative p-4">
              <div className="flex gap-3 items-center">
                <div className="avatar w-14 h-14 bg-accent text-primary grid place-content-center rounded-full text-2xl">
                  NA
                </div>
                <ul>
                  <li className="font-bold">Subdivision Guardian</li>
                  <li className="text-xs opacity-80">Guardian</li>
                </ul>
                <button
                  className="absolute top-5 right-5 tooltip"
                  data-tooltip="Edit"
                >
                  <FiEdit2 />
                </button>
              </div>
              <ul className="text-xs mt-4 flex  gap-10 items-start">
                <li className="mb-3 flex gap-2">
                  <PiMapPinLight className="text-sm" />
                  07 Farconville Subdivision, Phase II-A, St., Purok 1 <br />
                  Brgy. San Gregorio Laguna San Pablo City 4000
                </li>

                <li className="mb-3 ">
                  <p className="flex gap-2 mb-1">
                    <CiMobile3 className="text-sm" /> 0922 1234 123
                  </p>
                  <p className="flex gap-2">
                    <PiPhoneThin className="text-sm" />
                    049 552 1234
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-[720px] w-full gap-4">
            <div className="card bg-primary border border-line relative p-4">
              <div className="flex gap-3 items-center">
                <div className="avatar w-14 h-14 bg-accent text-primary grid place-content-center rounded-full text-2xl">
                  NA
                </div>
                <ul>
                  <li className="font-bold">Subdivision Guardian</li>
                  <li className="text-xs opacity-80">Guardian</li>
                </ul>
                <button
                  className="absolute top-5 right-5 tooltip"
                  data-tooltip="Edit"
                >
                  <FiEdit2 />
                </button>
              </div>
              <ul className="text-xs mt-4 flex  gap-10 items-start">
                <li className="mb-3 flex gap-2">
                  <PiMapPinLight className="text-sm" />
                  07 Farconville Subdivision, Phase II-A, St., Purok 1 <br />
                  Brgy. San Gregorio Laguna San Pablo City 4000
                </li>

                <li className="mb-3 ">
                  <p className="flex gap-2 mb-1">
                    <CiMobile3 className="text-sm" /> 0922 1234 123
                  </p>
                  <p className="flex gap-2">
                    <PiPhoneThin className="text-sm" />
                    049 552 1234
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="clientinfo__card p-4 border border-line shadow-sm rounded-sm max-w-[720px] w-full bg-primary  mb-10">
            <div className="clientinfo__card__detail">
              <h5 className="mb-3 pb-2 border-b border-line text-center">
                Elvin Acal - Primary
              </h5>
              <div className="grid grid-cols-3 gap-5">
                <div className="flex flex-col items-center">
                  <HiOutlineEnvelope className="text-xl" />
                  <p className="text-xs mt-2">acalelvin4@gmail.com</p>
                </div>

                <div className="flex flex-col items-center">
                  <CiMobile3 className="text-xl" />
                  <p className="text-xs mt-2">9232754451</p>
                </div>

                <div className="flex flex-col items-center">
                  <TiPhoneOutline className="text-xl" />
                  <p className="text-xs mt-2">049 665 1253</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </section>
    </div>
  );
};

export default ClientViewInfo;
