import JobDetails from "./JobDetails";
import PropTypes from "prop-types";

import "./styles/Jobs.css";

function Jobs({ items }) {
  return (
    <div className="allJobs">
      <div className="searchJobs">
        <div>
          <h2>
            SEARCH RESULTS/<span>JOBS - {items.length} results</span>
          </h2>
        </div>
        <div className="sortJobs">
          <p>Sort By</p>
          <select>
            <option>Latest</option>
            <option>Closing Date</option>
          </select>
        </div>
      </div>
      <div className="jobs">
        <div>
          <div className="jobHeader" />
          <div className="jobTitle">
            <h3>Jobs</h3>
          </div>
        </div>
        {items.length > 0 ? (
          items.map((job) => {
            return <JobDetails job={job} key={job.job_id} />;
          })
        ) : (
          <div className="noJobFound">No Jobs Found</div>
        )}
      </div>
    </div>
  );
}

Jobs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Jobs;
