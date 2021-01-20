import React from 'react';

export default function AddJob() {
  return (
    <div className="AddJob">
      <form action="">
        <div><span>Job Title</span><input type="text" className="text-input" name="title"/></div>
        <div><span>Company Name</span><input type="text" className="text-input" name="company"/></div>
        <div><span>Logo URL</span><input type="text" className="text-input" name="img"/></div>
        <div className="drop-input">
          <span>Job Type</span>
          <select name="type">
            <option value="parttime">Part Time</option>
            <option value="fulltime">Full Time</option>
            <option value="contract">Contract</option>
          </select>
        </div>
        
        <div><span>Job Location</span><input type="text" className="text-input" name="location"/></div>
        
        <div>
        <span>Filters</span>
          <div className="checkbox-input">
            <label>
              HTML
              <input type="checkbox" name="HTML"/>
            </label>
            <label>
              CSS
              <input type="checkbox" name="CSS"/>
            </label>
            <label>
              JavaScript
              <input type="checkbox" name="JavaScript"/>
            </label>
            <label>
              React
              <input type="checkbox" name="React"/>
            </label>
            <label>
              Ruby
              <input type="checkbox" name="Ruby"/>
            </label>
            <label>
              MongoDB
              <input type="checkbox" name="MongoDB"/>
            </label>
          </div>
        </div>
        
        <div><span>Salary</span><input type="text" className="text-input" name="salary"/></div>
          
          <div className="radio-input">
            <span>Feature?</span>
            <input type="radio" name="featured" value="yes"/> Yes
            <input type="radio" name="featured" value="no"/> No
          </div>
          
        <button type="submit">Submit</button>
          

      </form>
    </div>
  )
}
