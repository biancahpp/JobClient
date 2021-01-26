import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import JobCard from '../components/JobCard';


export default function Landing({details}:any) {

  const [ currentFilter, setCurrentFilter ] = useState(details);

  useEffect(() => setCurrentFilter(details), [details])

  function filterJobs(tag:string[]){
    
    setCurrentFilter(details.filter((obj:any) => ))
    

    
  }

  return (
    <div className="Landing">
      <Header />
      <JobCard details={currentFilter} handleFilter={(tag:string[]) => filterJobs(tag)}/>      
    </div>
  )
}
