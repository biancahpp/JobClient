import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Landing({details}:any) {
  return (
    <div className="Landing">
      {details ? details.map((item:any) => 
        <div key={uuidv4()}>
          <img src={item.img} alt="company-logo"/>
          {item.featured === true && <div>Featured</div>}
          <div>{item.title}</div>
          <div>{item.date}</div>
          <div>{item.type}</div> 
          <div>{item.location}</div>
          <div>{item.salary}</div>
          <div className="tags">
            {item.tags && item.tags.map((item:any) => <div key={uuidv4()}>{item}</div>)}
          </div>

        </div>
        
      )
      : 
      <div>Loading</div>}
    </div>
  )
}
