import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { devNavUrl, getUserType } from "../helpers/functions-general";
import { setIsSearch, setStartIndex } from "../store/StoreAction";
import { StoreContext } from "../store/StoreContext.jsx";

const BreadCrumbs = ({ param = "" }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const location = useLocation();
  // const urlRolePath = getUserType();
  const urlRolePath = `${devNavUrl}/${
    store.credentials.data.role_name.toLowerCase() === "developer"
      ? "system"
      : store.credentials.data.role_name.toLowerCase()
  }`;
  const navigate = useNavigate();

  let currentLink = "";
  const handleClick = () => {
    dispatch(setStartIndex(0));
    dispatch(setIsSearch(false));
  };

  const crumbs = location.pathname
    .replace(`${urlRolePath}`, "")
    .replace(`v2`, "")
    .replace("-", " ")
    .split("/")
    .filter((crumb) => crumb !== "");

  return (
    <>
      <div className="breadcrumbs hidden lg:block pt-3">
        <ul
          className={`${
            crumbs.length > 2 ? "hidden" : "flex"
          } items-center gap-6 sm:flex`}
        >
          {crumbs.map((link, key) => {
            currentLink += `/${link.replace(" ", "-")}`;
            return (
              <li
                className={`text-[12px] opacity-70 hover:underline relative after:content-['/'] after:absolute after:top-0 after:-right-[15px] last:after:hidden last:opacity-100  last:pointer-events-none ${
                  (link === "settings" || link === "tools") &&
                  "pointer-events-none"
                }`}
                key={key}
              >
                <Link
                  to={`${urlRolePath}${currentLink}${param}`}
                  className="capitalize"
                  onClick={handleClick}
                >
                  {link.replace("-", " ").replace("_", "/").replace("-", " ")}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {crumbs.length > 2 && (
        <ul className="py-2 sm:hidden block">
          <button
            type="button"
            onClick={(e) => {
              navigate(-1);
              e.preventDefault();
            }}
          >
            {crumbs.length !== 1 && (
              <FaArrowLeft className="h-5 w-5 rounded-full" />
            )}
          </button>
        </ul>
      )}
    </>
  );
};

export default BreadCrumbs;
