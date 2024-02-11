import useQueryData from "@/components/custom-hooks/useQueryData.jsx";
import NoData from "@/components/partials/NoData.jsx";
import TableLoading from "@/components/partials/TableLoading.jsx";
import ModalValidate from "@/components/partials/modals/ModalValidate.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import { FiEdit, FiEdit2, FiPlus } from "react-icons/fi";
import { PiMegaphoneLight } from "react-icons/pi";

const TableRegistrarRequirement = ({
  setShowRequirement,
  itemEdit,
  dataRegistrar,
  isLoading,
  parseRequirement,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const { parseData, setParseData } = parseRequirement;

  const handleShowSelectRequirement = () => setShowRequirement(true);

  React.useEffect(() => {
    if (!isLoading) {
      setParseData(dataRegistrar.data[0].requirement_registrar_submitted);
    }
  }, []);

  return (
    <div>
      <ul className="flex justify-end gap-4">
        <li>
          <button
            className="flex justify-center items-center gap-2  mb-2 text-xs tooltip"
            data-tooltip="Edit"
            onClick={handleShowSelectRequirement}
          >
            <FiEdit2 />
          </button>
        </li>

        <li>
          <button
            className="flex justify-center items-center gap-2  mb-2 text-xs tooltip"
            data-tooltip="Notify"
            // onClick={handleShowSelectRequirement}
          >
            <PiMegaphoneLight className="text-sm" />
          </button>
        </li>
      </ul>

      {isLoading ? (
        <TableLoading count={20} cols={3} />
      ) : isLoading &&
        JSON.parse(dataRegistrar.data[0].requirement_registrar_submitted)
          .length === 0 ? (
        <NoData />
      ) : (
        <>
          <div className="table__wrapper">
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                </tr>
              </thead>
              <tbody>
                {JSON.parse(
                  dataRegistrar.data[0].requirement_registrar_submitted
                ).map((item, key) => {
                  return (
                    <tr key={key}>
                      <td>{item.requirement_registrar_name}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="remarks max-w-[500px] mt-10">
            <h6>Note:</h6>
            <p className="text-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam doloremque quas reiciendis consequuntur numquam
              distinctio nemo atque deleniti qui eligendi?
            </p>

            <p>{}</p>
          </div>
        </>
      )}

      {store.validate && <ModalValidate />}
    </div>
  );
};

export default TableRegistrarRequirement;
