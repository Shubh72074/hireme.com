import React from "react";
import "./../main.css";

export default function searchbox() {
  return (
    <section className="search-box">
      <div className="search-box-wrap">
        <div className="search-job-type">
          <input
            type="search"
            name="jobtype"
            id="jobsearch"
            placeholder='Search "Job Title"'
          />
        </div>
        <div className="search-job-location">
          <select name="state" id="selectcity">
            <option value="0">Select City</option>
            <option value="navimumbai">Navi Mumbai</option>
            <option value="thane">Thane</option>
            <option value="pune">Pune</option>
            <option value="mumbai">Mumbai</option>
            <option value="vashi">Vashi</option>
            <option value="nagpur">Nagpur</option>
          </select>
          <button id="fdjb">Find Jobs</button>
        </div>
      </div>
    </section>
  );
}
