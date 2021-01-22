import React, { useState } from "react";
import filters from "../filters/filters.json";
import { v4 as uuidv4 } from "uuid";
import { postJob } from "../services/apiClient";
import { useDispatch } from "react-redux";
import { addJobs } from "../Store/actions";

export default function AddJob() {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [logoURL, setLogoURL] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobFilters, setJobFilters] = useState<any>([]);
  const [salary, setSalary] = useState(0);
  const [featured, setFeatured] = useState(false);

  const dispatch = useDispatch();

  function handleFilters(item: string) {
    jobFilters.includes(item)
      ? setJobFilters(jobFilters.filter((val: string) => val !== item))
      : setJobFilters([...jobFilters, item]);
  }

  async function handleSubmit(){
    const response = await postJob({
      title: jobTitle,
      company: companyName,
      featured,
      img: logoURL,
      location: jobLocation,
      salary: +salary,
      tags: jobFilters,
      type: jobType
    })

    if (response) {
      dispatch(addJobs(response))
    }
  }
  return (
    <div className="AddJob">
      <form onSubmit={() => handleSubmit()} action="/">
        <div>
          <span>Job Title</span>
          <input
            type="text"
            className="text-input"
            name="title"
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        <div>
          <span>Company Name</span>
          <input
            type="text"
            className="text-input"
            name="company"
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div>
          <span>Logo URL</span>
          <input
            type="text"
            className="text-input"
            name="img"
            onChange={(e) => setLogoURL(e.target.value)}
          />
        </div>
        <div className="drop-input">
          <span>Job Type</span>
          <select name="type" onChange={(e) => setJobType(e.target.value)}>
            <option value="Part Time">Part Time</option>
            <option value="Full Time">Full Time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
        <div>
          <span>Job Location</span>
          <input
            type="text"
            className="text-input"
            name="location"
            onChange={(e) => setJobLocation(e.target.value)}
          />
        </div>

        <div>
          <span>Filters</span>
          <div className="checkbox-input">
            {filters &&
              filters.map((item: string) => (
                <>
                  <label  htmlFor={item}>
                    {item}
                  </label>
                  <input
                    type="checkbox"
                    name={item}
                    id={item}
                    onChange={() => handleFilters(item)}
                  />
                </>
              ))}
          </div>
        </div>

        <div>
          <span>Salary</span>
          <input
            type="text"
            className="text-input"
            name="salary"
            onChange={(e) => setSalary(parseInt(e.target.value))}
          />
        </div>

        <div className="radio-input">
          <span>Feature?</span>
          <input
            type="radio"
            name="featured"
            value="yes"
            onChange={() => setFeatured(true)}
          />{" "}
          Yes
          <input
            type="radio"
            name="featured"
            value="no"
            onChange={() => setFeatured(false)}
          />{" "}
          No
        </div>

        <button type="submit">Submit </button>
      </form>
    </div>
  );
}
