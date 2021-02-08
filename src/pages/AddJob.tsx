import React, { useState } from "react";
import filters from "../filters/filters.json";
import { postJob } from "../services/apiClient";
import { useDispatch } from "react-redux";
import { addJobs } from "../Store/actions";
import { v4 as uuidv4 } from "uuid";
import BackBtn from "../components/BackBtn";

export default function AddJob() {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [logoURL, setLogoURL] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobFilters, setJobFilters] = useState<any>([]);
  const [salary, setSalary] = useState(0);
  const [featured, setFeatured] = useState(false);

  const [checked, setChecked] = useState<any>({});

  const dispatch = useDispatch();

  function handleFilters(item: string) {
    jobFilters.includes(item)
      ? setJobFilters(jobFilters.filter((val: string) => val !== item))
      : setJobFilters([...jobFilters, item]);
  }

  function toggleChecked(item: string) {
    handleFilters(item);
    setChecked({
      ...checked,
      [item]: !checked[item],
    });
  }

  async function handleSubmit() {
    const response = await postJob({
      title: jobTitle,
      company: companyName,
      featured,
      img: logoURL,
      location: jobLocation,
      salary: +salary,
      tags: jobFilters,
      type: jobType,
    });

    if (response) {
      dispatch(addJobs(response));
    }
  }
  return (
    <div className="AddJob">
      <BackBtn />
      <h1>Add a Job</h1>
      <form onSubmit={() => handleSubmit()} action="/">
        <div className="jobtitle-wrapper">
          <span>Job Title</span>
          <input
            type="text"
            className="text-input"
            name="title"
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>
        <div className="companyname-wrapper">
          <span>Company Name</span>
          <input
            type="text"
            className="text-input"
            name="company"
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>
        <div className="logourl-wrapper">
          <span>Logo URL</span>
          <input
            type="text"
            className="text-input"
            name="img"
            onChange={(e) => setLogoURL(e.target.value)}
            required
          />
          <span className="logourl-description">
            Please insert an url of your logo. To upload svg you can use
            <a
              href="https://svgur.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SvgShare
            </a>
            , and for other formats
            <a
              href="https://imgur.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Imgur
            </a>
            .
          </span>
        </div>
        <div className="drop-input">
          <span>Job Type</span>
          <select
            name="type"
            onChange={(e) => setJobType(e.target.value)}
            required
          >
            <option value="Part Time">Part Time</option>
            <option value="Full Time">Full Time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
        <div className="joblocation-wrapper">
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
          <span className="title-filters">Filters</span>
          <div className="checkbox-input">
            {filters &&
              filters.map((item: string) => (
                <div key={uuidv4()} className="checkmark-label">
                  <input
                    type="checkbox"
                    name={item}
                    checked={checked[item]}
                    onChange={() => toggleChecked(item)}
                  />
                  <label htmlFor={item}>
                    <span>{item}</span>
                  </label>
                </div>
              ))}
          </div>
        </div>
        <div className="salary-wrapper">
          <span>Salary</span>
          <input
            type="number"
            className="text-input"
            name="salary"
            onChange={(e) => setSalary(parseInt(e.target.value))}
            required
          />
        </div>

        <div className="radio-input">
          <span>Feature?</span>
          <div className="radiospan-wrapper">
            <div>
              <input
                type="radio"
                name="featured"
                value="yes"
                onChange={() => setFeatured(true)}
              />
              <span>Yes</span>
            </div>
            <div>
              <input
                type="radio"
                name="featured"
                value="no"
                onChange={() => setFeatured(false)}
              />
              <span>No</span>
            </div>
          </div>
        </div>
        <div className="submitbutton-wrapper">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
