import { calculateYearsMonthsDays } from "./Utils";

import CompanyLogo from "./img/CompanyLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

function JobDetails({ job }) {
  return (
    <div className="jobDetails">
      <div className="topDetails">
        <div>
          <img src={CompanyLogo} alt="company_logo" />
        </div>
        <div className="details">
          <h2>{job.job_role}</h2>
          <p>{job.company_name}</p>
          <p>{job.job_location}</p>
        </div>
        <div className="skills">
          <div>
            <h4>Skill Match</h4>
          </div>
          <div className="circle-container">
            <div className="circle">
              <div className="item layer-1">
                <div className="fill"></div>
              </div>
              <div className="item layer-2">
                <div className="fill"></div>
              </div>
              <div className="inside-content">78%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="buttonDetails">
        <div className="applyDetails">
          <p>
            Posted {calculateYearsMonthsDays(new Date(job.date_string+" "))} .{" "}
            {job.count_applied} applicants
          </p>
        </div>
        <div className="applyButton">
          <button>APPLY NOW</button>
          <FontAwesomeIcon
            icon={faBookmark}
            className="bookmarkIcon"
            size="2x"
          />
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
