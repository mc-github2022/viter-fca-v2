import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import NoData from "@/components/partials/NoData.jsx";
import ServerError from "@/components/partials/ServerError.jsx";
import TableLoading from "@/components/partials/TableLoading.jsx";
import ModalDelete from "@/components/partials/modals/ModalDelete.jsx";
import { setIsDelete } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { FiEdit2, FiTrash } from "react-icons/fi";
import ModalDeleteContact from "./ModalDeleteContact.jsx";

const ContactTable = ({ setItemEdit, setShowContact }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const credentialUserId = store.credentials.data.user_system_aid;

  const [id, setId] = React.useState(null);
  const [dataItem, setData] = React.useState(null);
  const [deleteContact, setDeleteContact] = React.useState(false);

  let counter = 1;
  const {
    isLoading,
    isFetching,
    error,
    data: contactInfo,
  } = useQueryData(
    `/v2/dev-read-info-contact/${credentialUserId}`, // endpoint
    "get", // method
    "contactInfo" // key
  );

  const handleEdit = (item) => {
    setShowContact(true);
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    setDeleteContact(true);
    setId(item.contact_aid);
    setData(item);
  };

  return (
    <>
      <div className="my-5 bg-primary rounded-md max-w-[900px] border-line border shadow-sm relative p-4 md:pl-0">
        <div className="gap-8 md:flex">
          <aside className="md:max-w-[220px] w-full md:pl-4 mb-2">
            <h4 className=" font-bold">Contact Information</h4>
          </aside>
          <div className="w-full">
            <div className="">
              <table className="table__sm">
                <thead>
                  <tr>
                    <td>#</td>
                    <td>Name</td>
                    <td className="hidden md:block">Mobile</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  {(isLoading || contactInfo?.data.length === 0) && (
                    <tr className="text-center ">
                      <td colSpan="100%" className="p-10">
                        {isLoading ? (
                          <TableLoading count={20} cols={3} />
                        ) : (
                          <NoData />
                        )}
                      </td>
                    </tr>
                  )}

                  {error && (
                    <tr className="text-center ">
                      <td colSpan="100%" className="p-10">
                        <ServerError />
                      </td>
                    </tr>
                  )}

                  {contactInfo?.data.map((item, key) => (
                    <tr key={key}>
                      <td>{counter++}</td>
                      <td>{item.contact_name},</td>
                      <td className="hidden md:block">{item.contact_mobile}</td>
                      <td>
                        <ul className="flex ">
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Edit"
                              onClick={() => handleEdit(item)}
                            >
                              <FiEdit2 />
                            </button>
                          </li>

                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Delete"
                              onClick={() => handleDelete(item)}
                            >
                              <FiTrash />
                            </button>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {deleteContact && (
        <ModalDeleteContact
          mysqlApiDelete={`/v2/dev-info-contact/${id}`}
          msg={"Are you sure you want to delete this record?"}
          item={`${dataItem.contact_name}`}
          queryKey={"contactinfo"}
          setDeleteContact={setDeleteContact}
        />
      )}
    </>
  );
};

export default ContactTable;
