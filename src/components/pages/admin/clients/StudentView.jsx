import BreadCrumbs from "@/components/partials/BreadCrumbs";
import React from "react";
import { FaAngleLeft, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const StudentView = () => {
  return (
    <>
      <div className="m-2">
        <div className="studentListCard flex gap-10 border-2 border-red-600 rounded-md p-4 items-center">
          <div className="studentProfilePhoto h-2 w-4">
            <span className="text-2xl font-bold bg-[#dadada]">JG</span>
          </div>
          <div className="cardLrn">
            <h5>LRN</h5>
            <p>00308280818</p>
          </div>
          <div className="cardGrade">
            <h5>Grade</h5>
            <p>Kinder</p>
          </div>
          <div className="cardStatus">
            <h5>Status</h5>
            <p>Enrolled</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentView;
