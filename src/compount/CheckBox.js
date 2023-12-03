import { useState } from "react";
import Data from "./data/JobData";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function CheckBox({ name, filters, setFilters }) {
  const [collased, setCollased] = useState(false);
  const value = Data.jobs.filters[name];

  const handleCheckBox = (e) => {
    const exist = filters.find((key) => key === e.target.value);
    if (exist) {
      const removed = filters.filter((key) => key !== e.target.value);
      setFilters(removed);
    } else {
      setFilters([...filters, e.target.value]);
    }
  };

  return (
    <div className="checkBox">
      <div className="checkHeader">
        <h4>{name}</h4>
        <button onClick={() => setCollased(!collased)}>
          {collased ? (
            <FontAwesomeIcon icon={faAngleLeft} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} />
          )}
        </button>
      </div>
      {!collased &&
        value.map((filter) => {
          return (
            <div className="box" key={filter.key}>
              <input
                type="checkBox"
                checked={filters.find((key) => key === filter.key)}
                value={filter.key}
                onChange={handleCheckBox}
              />{" "}
              <p>{filter.key}</p>
            </div>
          );
        })}
    </div>
  );
}

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  setFilters: PropTypes.func.isRequired,
};

export default CheckBox;
