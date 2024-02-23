import { FiEdit2, FiTrash } from "react-icons/fi";

const StudentViewInfo = ({ setShowRequirement, setIsViewInfo }) => {
  const handleShowRequirement = () => setShowRequirement(true);
  const handleShowViewInfo = () => setIsViewInfo(true);
  return (
    <>
      <div className="student__card bg-primary  rounded-sm relative mb-2  max-w-[420px] w-full border-b border-line">
        <h5 className="mb-1.5">Khael Sebastian Acal</h5>
        <ul className="grid grid-cols-[90px_1fr] gap-4 mb-1.5 text-xs ">
          <li className="min-w-[80px]">Grade Level: </li>
          <li>Grade II </li>
        </ul>

        <ul className="grid grid-cols-[90px_1fr] gap-4 mb-1.5 text-xs ">
          <li className="min-w-[80px]">LRN: </li>
          <li>1234-1234-456 </li>
        </ul>

        <ul className="grid grid-cols-[90px_1fr] gap-4 mb-1.5 text-xs ">
          <li className="min-w-[80px]">Status: </li> <li>Enrolled </li>
        </ul>

        <ul className="grid grid-cols-[90px_1fr] gap-4 mb-1.5 text-xs ">
          <li className="min-w-[80px]">Requirements: </li>
          <li>
            <button
              className="underline text-accent"
              onClick={handleShowRequirement}
            >
              Incompleted
            </button>
          </li>
        </ul>

        <ul className="grid grid-cols-[90px_1fr] gap-4 mb-1.5 text-xs ">
          <li className="min-w-[80px]">Tuition Scheme: </li>
          <li>
            <button className="underline text-accent ">
              View scheme selected
            </button>
          </li>
        </ul>

        <div className="card__action absolute top-1 right-0  flex gap-2 ">
          <button
            className=" tooltip"
            data-tooltip="Edit"
            onClick={() => handleShowViewInfo()}
          >
            <FiEdit2 />
          </button>

          <button
            className=" tooltip"
            data-tooltip="Delete"
            // onClick={() => handleDeleteContactCard(item)}
          >
            <FiTrash />
          </button>
        </div>
      </div>
    </>
  );
};

export default StudentViewInfo;
