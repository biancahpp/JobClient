import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

export default function Header() {
  return (
    <div className="Header">
      <div className="addjob-wrapper">
        <Link to={'/addJob'} className="addjob-link">
          <FiPlus className="btn-addjob"/>
          <span>Add a Job</span>
        </Link>
      </div>
      
    </div>
  )
}
