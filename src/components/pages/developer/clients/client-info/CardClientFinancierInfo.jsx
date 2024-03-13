import {
  getPesoSign,
  numberWithCommas,
  pesoSign,
} from "@/components/helpers/functions-general.jsx";
import NoData from "@/components/partials/NoData.jsx";
import ServerError from "@/components/partials/ServerError.jsx";
import TableLoading from "@/components/partials/TableLoading.jsx";
import ModalInvalidRequestError from "@/components/partials/modals/ModalInvalidRequestError.jsx";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { LiaHardHatSolid } from "react-icons/lia";
import { LuDot } from "react-icons/lu";
import { PiBriefcase, PiCoinsLight } from "react-icons/pi";
import { SlPeople } from "react-icons/sl";
import ModalDeleteInfoCard from "./ModalDeleteInfoCard.jsx";

const CardClientFinancierInfo = ({
  financierInfo,
  setItemEdit,
  setShowFinancierForm,
  error,
  isLoading,
  isFetching,
}) => {
  const [cardId, setCardId] = React.useState(null);
  const [dataItem, setData] = React.useState(null);
  const [deleteFinancier, setDeleteFinancier] = React.useState(false);

  const handleShowFinancierForm = (item) => {
    setItemEdit(item);
    setShowFinancierForm(true);
  };

  return (
    <div>
      <div className="max-w-[620px] w-full mb-5 relative">
        <h3 className="">Financial Information</h3>
        <p className="text-xs opacity-75">
          Setup student financier information
        </p>

        {financierInfo.data[0].parents_financier_name === "" && (
          <button
            className="btn btn--sm mt-3 hover:underline hover:!bg-[unset] tooltip text-[14px]"
            data-tooltip="New"
            onClick={handleShowFinancierForm}
          >
            <FaPlus /> Add
          </button>
        )}
      </div>

      <div className="max-w-[620px] w-full gap-4 mb-2">
        {isLoading ? (
          <TableLoading count={20} cols={3} />
        ) : !isLoading && financierInfo.data.length === 0 ? (
          <NoData />
        ) : error ? (
          <ServerError />
        ) : (
          financierInfo.data.map((item, key) => (
            <React.Fragment key={key}>
              <div className="card bg-primary rounded-sm grid grid-cols-[1fr,5rem] items-center">
                <ul>
                  <li className="mb-1">{item.parents_financier_name}</li>

                  <li className="md:flex gap-2 text-xs items-center mb-2 ">
                    <PiBriefcase className="text-base" />
                    {item.parents_financier_occupation
                      ? item.parents_financier_occupation
                      : "unspecified"}
                  </li>

                  <li className="md:flex gap-2 text-xs items-center mb-2 ">
                    <SlPeople className="text-base" />
                    {item.parents_financier_relationship
                      ? item.parents_financier_relationship
                      : "unspecified"}
                  </li>

                  <li className="md:flex gap-2 text-xs items-center mb-2 ">
                    <PiCoinsLight className="text-base" />
                    <span>
                      {pesoSign}
                      {item.parents_financier_income
                        ? numberWithCommas(
                            Number(item.parents_financier_income)
                          )
                        : "unspecified"}
                    </span>
                  </li>
                </ul>
                <div className="card__action bottom-5 right-0 justify-end flex gap-2 ">
                  <button
                    className=" tooltip"
                    data-tooltip="Edit"
                    onClick={() => handleShowFinancierForm(item)}
                  >
                    <FiEdit2 className="text-[17px]" />
                  </button>
                </div>
              </div>
            </React.Fragment>
          ))
        )}
      </div>

      {deleteFinancier && (
        <ModalDeleteInfoCard
          mysqlApiDelete={`/v2/dev-info-financial/${cardId}`}
          msg={"Are you sure you want to delete this record?"}
          item={dataItem.financial_info_financier_full_name}
          queryKey={"financierInfo"}
          setDelete={setDeleteFinancier}
        />
      )}
    </div>
  );
};

export default CardClientFinancierInfo;
