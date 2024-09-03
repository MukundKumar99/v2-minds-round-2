import "./index.css";
import { IoMdHome } from "react-icons/io";
import { MdOutlineCleaningServices } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";

const Navbar = () => (
  <nav className="nav-bg-container">
    <div className="home-container">
      <IoMdHome /> Home
    </div>
    <div className="nav-link-container">
      <ul className="link-container">
        <li className="nav-link">
          <MdOutlineCleaningServices /> Archive Cleanup
        </li>
        <li className="nav-link">
          <IoMdSearch /> Search
        </li>
        <li className="nav-link">
          <FaPlusCircle /> Create new Backup set
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
