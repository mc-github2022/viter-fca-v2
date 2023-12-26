import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setIsSearch, setStartIndex } from "../store/StoreAction";
import { getUserType } from "../helpers/functions-general";
import { StoreContext } from "../store/StoreContext";

const BreadCrumbs = ({ param = "" }) => {
  return (
    <>
      <div className="breadcrumbs">
        <ul className="flex">
          <li
            className={`text-[12px] text-dark hover:underline relative after:content-['/'] after:absolute after:top-0 after:-right-[15px] last:after:hidden last:opacity-100  last:pointer-events-none ${"pointer-events-none"}`}
          >
            <Link to="" className="capitalize">
              Home
            </Link>
          </li>
        </ul>
      </div>
      {/* {crumbs.length > 2 && (
        <ul className="py-2 sm:hidden block">
          <button type="button">
            <FaArrowLeft className="h-5 w-5 rounded-full" />
          </button>
        </ul>
      )} */}
    </>
  );
};

export default BreadCrumbs;
