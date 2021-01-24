import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { apiDeleteJob } from "../services/apiClient";
import { deleteJobs } from "../Store/actions";
import moment from "moment";

export default function JobCard({ details }: any) {

  const dispatch = useDispatch();

  async function handleDelete(id: string) {
    const response = await apiDeleteJob(id);
    if (response) {
      dispatch(deleteJobs(id));
    }
  }

  function formatMoney(number: number) {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  return (
    <div className="JobCard">
      {details ? (
        details.map((item: any) => (
          <div key={uuidv4()} className="JobCard__card">
            <img src={item.img} alt="company-logo" />
            <div className="job-header">
              <h3>{item.company}</h3>
              {item.featured === true && <span> Featured </span>}
            </div>
            <h2>{item.title}</h2>
            <span>{formatMoney(item.salary)}</span>
            <div className="job-specs">
              <span>{moment(item.date, "x").fromNow()}</span>
              {console.log(item.date.toString())}
              <span>{item.type}</span>
              <span>{item.location}</span>
            </div>

            <div className="tags">
              {item.tags &&
                item.tags.map((item: any) => <div key={uuidv4()}>{item}</div>)}
            </div>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </div>
        ))
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
