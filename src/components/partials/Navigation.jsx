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
              <Link to={`${devNavUrl}/settings`}>Settings</Link>
            </li>
            <ul className="ml-12 text-black">
              <li>Users</li>
              <li>Departmemt</li>
              <li>Notifications</li>
              <li>Parents Relationship</li>
              <li>Grade Level</li>
              <li>Learning Type</li>
              <li>Requirement Registration</li>
              <li>Requirement Finance</li>
              <li>Requirement IT</li>
              <li>Tuition Fee Category</li>
              <li>Scheme</li>
              <li>Schedule of Fees</li>
              <li>Rooms</li>
            </ul>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
