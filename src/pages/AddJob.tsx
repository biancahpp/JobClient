import React, { useState } from "react";
import filters from "../filters/filters.json";
import { postJob } from "../services/apiClient";
import { useDispatch } from "react-redux";
import { addJobs } from "../Store/actions";
import { v4 as uuidv4 } from "uuid";


export default function AddJob() {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [logoURL, setLogoURL] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobFilters, setJobFilters] = useState<any>([]);
  const [salary, setSalary] = useState(0);
  const [featured, setFeatured] = useState(false);

  const [ checked, setChecked ] = useState<any>({});

  const dispatch = useDispatch();

  function handleFilters(item: string) {
    jobFilters.includes(item)
      ? setJobFilters(jobFilters.filter((val: string) => val !== item))
      : setJobFilters([...jobFilters, item]);
  }

  function toggleChecked (item: string) {
    handleFilters(item);
    setChecked({
      ...checked,
      [item]: !checked[item]
    });
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
      <h1>Add a Job</h1>
      <form onSubmit={() => handleSubmit()} action="/">
        <div>
          <span>Job Title</span>
          <input
            type="text"
            className="text-input"
            name="title"
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <span>Company Name</span>
          <input
            type="text"
            className="text-input"
            name="company"
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>
        <div>
          <span>Logo URL</span>
          <input
            type="text"
            className="text-input"
            name="img"
            onChange={(e) => setLogoURL(e.target.value)}
            required
          />
          <span>Please insert an url of your svg logo. To upload one you can use <a href="https://svgur.com/">SvgShare</a>. </span>
        </div>
        <div className="drop-input">
          <span>Job Type</span>
          <select name="type" onChange={(e) => setJobType(e.target.value)}
          required>
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
            required
          />
        </div>

        <div className="checkbox-wrapper">
          <span>Filters</span>
          <div className="checkbox-input">
            {filters &&
              filters.map((item: string) => (
                <React.Fragment key={uuidv4()}>
                  <label  htmlFor={item}>
                    {item}
                  </label>
                  <input
                    type="checkbox"
                    name={item}
                    checked={checked[item]}
                    onChange={() => toggleChecked(item)}
                  />
                </React.Fragment>
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
            required
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
