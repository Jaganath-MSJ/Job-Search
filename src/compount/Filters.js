import { useContext } from "react";
import CheckBox from "./CheckBox";
import Data from "./data/JobData";

import "./styles/Filters.css";
import { FilterContext } from "./FilterContext";

function Filters() {
  const FilterName = Data.jobs.filterName;

  const {
    SelectedCount,
    location,
    company,
    jobSource,
    experience,
    education,
    salaryRange,
    datePosted,
    skills,
    setLocation,
    setCompany,
    setJobSource,
    setExperience,
    setEducation,
    setSalaryRange,
    setDatePosted,
    setSkills,
  } = useContext(FilterContext);

  const clearFilters = () => {
    setLocation([]);
    setCompany([]);
    setJobSource([]);
    setExperience([]);
    setEducation([]);
    setSalaryRange([]);
    setDatePosted([]);
    setSkills([]);
  };

  return (
    <div className="filters">
      <div className="filterHeader">
        <h3>Filter By</h3>
        <p>
          {SelectedCount} filters applied.{" "}
          <button onClick={clearFilters}>Clear All</button>
        </p>
      </div>
      <div className="line" />
      <CheckBox
        name={FilterName[0]}
        filters={location}
        setFilters={setLocation}
      />
      <div className="line" />
      <CheckBox
        name={FilterName[1]}
        filters={company}
        setFilters={setCompany}
      />
      <div className="line" />
      <CheckBox
        name={FilterName[2]}
        filters={jobSource}
        setFilters={setJobSource}
      />
      <div className="line" />
      <CheckBox
        name={FilterName[3]}
        filters={experience}
        setFilters={setExperience}
      />
      <div className="line" />
      <CheckBox
        name={FilterName[4]}
        filters={education}
        setFilters={setEducation}
      />
      <div className="line" />
      <CheckBox
        name={FilterName[5]}
        filters={salaryRange}
        setFilters={setSalaryRange}
      />
      <div className="line" />
      <CheckBox
        name={FilterName[6]}
        filters={datePosted}
        setFilters={setDatePosted}
      />
      <div className="line" />
      <CheckBox name={FilterName[7]} filters={skills} setFilters={setSkills} />
    </div>
  );
}

export default Filters;
