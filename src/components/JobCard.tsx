import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { apiDeleteJob } from "../services/apiClient";
import { deleteJobs } from "../Store/actions";
import moment from "moment";
import { FiTrash2 } from 'react-icons/fi';

export default function JobCard({ details, handleFilter }: any) {

  const dispatch = useDispatch();

  const [ filters, setFilters ] = useState<any>([]);

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

  function filterTags(tag:string){
    if (!filters.includes(tag)){
      let addTag = [...filters, tag];
      setFilters(addTag);
      handleFilter(addTag);
    }
  }

  function removeTag(it:string){
    console.log(it)
    let remove = filters.filter((tag:string) => tag !== it)

    setFilters(remove);
    handleFilter(remove);
  }

  return (
    <div className="JobCard">
      {filters && 
      <div className="filters-wrapper">
        {filters.map((it:string) => <div key={uuidv4()} >{ <div>
          <span className="filters-active">{it}</span>
          <button onClick={() => removeTag(it)}>X</button>
        </div>
        
        }</div>)}
      </div>
      }
      {details ? (
        details.map((item: any) => (
          <div key={uuidv4()} className="JobCard__card">
            <img src={item.img} alt="company-logo" />
            <div className="job-header">
              <h3>{item.company}</h3>
              {item.featured === true && <span> Featured </span>}
            </div>
            <h2>{item.title}</h2>
            <span className="job-salary">
              {formatMoney(item.salary)}
            </span>
            <div className="job-specs">
              <span>{moment(item.date, "x").fromNow()}</span>
              <span>{item.type}</span>
              <span>{item.location}</span>
            </div>

            <div className="tags">
              {item.tags &&
                item.tags.map((tag: any) => <div key={uuidv4()} className="tag" onClick={() => filterTags(tag)}>{tag}</div>)}
            </div>
            <button onClick={() => handleDelete(item._id)} className="delete-btn"> <FiTrash2 size={26}/> </button>
          </div>
        ))
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
