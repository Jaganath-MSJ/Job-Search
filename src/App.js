import "./App.css";
import { useState, useEffect, useMemo } from "react";
import Data from "./compount/data/JobData";
import Navigation from "./compount/Navigation";
import Filters from "./compount/Filters";
import Jobs from "./compount/Jobs";
import { SearchContext } from "./compount/SearchContext";
import { FilterContext } from "./compount/FilterContext";
import { datePostedFilter } from "./compount/Utils";

function App() {
  const [searchJobs, setSearchJobs] = useState("");
  const [location, setLocation] = useState([]);
  const [company, setCompany] = useState([]);
  const [jobSource, setJobSource] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [salaryRange, setSalaryRange] = useState([]);
  const [datePosted, setDatePosted] = useState([]);
  const [skills, setSkills] = useState([]);

  const [filtered, setFiltered] = useState([]);
  const allJobs = useMemo(
    () => Data.jobs.items.map((value) => value._source),
    []
  );

  useEffect(() => {
    let res = allJobs;
    if (searchJobs) {
      res = res.filter((value) => value.job_role.includes(searchJobs));
    }
    if (location.length > 0) {
      res = res.filter((value) => location.includes(value.location));
    }
    if (company.length > 0) {
      res = res.filter((value) => company.includes(value.company_name));
    }
    if (jobSource.length > 0) {
      res = res.filter((value) => jobSource.includes(value.source));
    }
    if (experience.length > 0) {
      res = res.filter((value) =>
        experience.includes(value.Transform_Experience_Bin)
      );
    }
    if (education.length > 0) {
      res = res.filter((value) => education.includes(value.education));
    }
    if (salaryRange.length > 0) {
      res = res.filter((value) =>
        salaryRange.includes(value.Transform_Salary_Bin)
      );
    }
    if (datePosted.length > 0) {
      res = res.filter((value) => {
        return datePosted.some((element) => {
          return datePostedFilter(value.date_string, element);
        });
      });
    }
    if (skills.length > 0) {
      res = res.filter((value) => {
        return skills.some((element) => {
          return value.tech_skills.includes(element);
        });
      });
    }
    setFiltered(res);
  }, [
    searchJobs,
    location,
    company,
    jobSource,
    experience,
    education,
    salaryRange,
    datePosted,
    skills,
    allJobs,
  ]);

  const allFilters = [
    location,
    company,
    jobSource,
    experience,
    education,
    salaryRange,
    datePosted,
    skills,
  ];

  const SelectedCount = allFilters.reduce((x, y) => {
    return y.length > 0 ? x + 1 : x;
  }, 0);

  const searchContextValue = useMemo(
    () => ({
      searchJobs,
      setSearchJobs,
    }),
    [searchJobs]
  );

  const filterContextValue = useMemo(
    () => ({
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
    }),
    [
      SelectedCount,
      location,
      company,
      jobSource,
      experience,
      education,
      salaryRange,
      datePosted,
      skills,
    ]
  );

  return (
    <div className="App">
      <SearchContext.Provider value={searchContextValue}>
        <Navigation />
      </SearchContext.Provider>
      <div className="Home">
        <FilterContext.Provider value={filterContextValue}>
          <Filters />
        </FilterContext.Provider>
        <Jobs items={filtered} />
      </div>
    </div>
  );
}

export default App;
