import NoData from "@/components/partials/NoData.jsx";
import ServerError from "@/components/partials/ServerError.jsx";
import TableLoading from "@/components/partials/TableLoading.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { FiEdit2, FiList, FiTrash } from "react-icons/fi";
import ModalDeleteFinancial from "./ModalDeleteFinancial.jsx";
import ModalSummaryFinancial from "./ModalSummaryFinancial.jsx";

const FinancialTable = ({
  setItemEdit,
  setShowFinancial,
  isLoading,
  financialInfo,
  error,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const [id, setId] = React.useState(null);
  const [dataItem, setData] = React.useState(null);
  const [deleteFinancial, setDeleteFinancial] = React.useState(false);
  const [showSummary, setShowSummary] = React.useState(false);

  let counter = 1;

  const handleEdit = (item) => {
    setShowFinancial(true);
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    setDeleteFinancial(true);
    setId(item.financial_info_aid);
    setData(item);
  };
  const handleViewSummary = (item) => {
    setData(item);
    setShowSummary(true);
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
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  {(isLoading || financialInfo?.data.length === 0) && (
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

                  {financialInfo?.data.map((item, key) => (
                    <tr key={key}>
                      <td>{counter++}</td>
                      <td>{item.financial_info_financier_full_name},</td>
                      <td>
                        <ul className="flex ">
                          <li>
                            <button
                              className="tooltip text-base"
                              data-tooltip="Summary"
                              onClick={() => handleViewSummary(item)}
                            >
                              <FiList />
                            </button>
                          </li>

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

      {deleteFinancial && (
        <ModalDeleteFinancial
          mysqlApiDelete={`/v2/dev-info-financial/${id}`}
          msg={"Are you sure you want to delete this record?"}
          item={`${dataItem.financial_info_financier_full_name}`}
          queryKey={"financialInfo"}
          setDeleteFinancial={setDeleteFinancial}
        />
      )}

      {showSummary && (
        <ModalSummaryFinancial
          dataItem={dataItem}
          setShowSummary={setShowSummary}
        />
      )}
    </>
  );
};

export default FinancialTable;
