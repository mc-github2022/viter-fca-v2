import { BsPersonVcardFill } from "react-icons/bs";
import { FaReceipt } from "react-icons/fa";
import { IoFastFood, IoPeopleSharp } from "react-icons/io5";
import { MdSettings } from "react-icons/md";
import { Link } from "react-router-dom";
import { devNavUrl } from "../helpers/functions-general.jsx";
const Navigation = ({ menu }) => {
  return (
    <>
      <nav className="h-full bg-white">
        <div className="flex flex-col justify-between h-full p-2 ">
          <ul className="mt-3">
            <li className={`nav-item ${menu === "settings" ? "active" : ""}`}>
              <MdSettings />
              <Link to={`${devNavUrl}/clients`}>Settings</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
