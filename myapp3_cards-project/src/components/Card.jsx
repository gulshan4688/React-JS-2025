import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (job) => {
  return (

      <div className='card' >
        <div className="top">
          <img src={job.brandLogo} alt="" />
          <button>save <Bookmark size={12}/> </button>
        </div>
        <div className="center">
          <h2>{job.companyName} <span>{job.datePosted}</span> </h2> 
          <h3>{job.post}</h3>
          <div className='tag' >
            <h4>{job.tag1}</h4>
            <h4>{job.tag2}</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{job.pay}</h3>
            <p>{job.location}</p>
          </div>
          <div>
            <button>Apply Now</button>
          </div>
        </div>
    </div>
  )
}

export default Card;
