import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import JobCard from '../components/JobCard';


export default function Landing({details}:any) {

  return (
    <div className="Landing">
      <Header />
      <Link to={'/addJob'}>Add a Job</Link>
      <JobCard details={details}/>      
    </div>
  )
}
