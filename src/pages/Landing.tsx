import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import JobCard from '../components/JobCard';


export default function Landing({details}:any) {

  const [ currentFilter, setCurrentFilter ] = useState(details);

  useEffect(() => setCurrentFilter(details), [details])

  function filterJobs(tag:string[]){
    tag.length > 0 ? setCurrentFilter(details.filter((obj:any) => tag.some(r => obj.tags.includes(r)))) :
    setCurrentFilter(details)
  }

  return (
    <div className="Landing">
      <Header />
      <JobCard details={currentFilter} handleFilter={(tag:string[]) => filterJobs(tag)}/>      
    </div>
  )
}
