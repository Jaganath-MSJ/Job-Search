import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBell,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import "./styles/Navigation.css";

import { SearchContext } from "./SearchContext";
import { useContext } from "react";

function Navigation() {
  const { searchJobs, setSearchJobs } = useContext(SearchContext);
  const handleSearchJobs = (e) => {
    setSearchJobs(e.target.value.trim());
  };

  return (
    <nav>
      <h1>Jobs</h1>
      <div>
        <input
          type="search"
          placeholder="Search Jobs"
          value={searchJobs}
          onChange={handleSearchJobs}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
      </div>
      <ul>
        <li>
          <FontAwesomeIcon icon={faUser} className="icon" />
        </li>
        <li>
          <FontAwesomeIcon icon={faBell} className="icon" />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
