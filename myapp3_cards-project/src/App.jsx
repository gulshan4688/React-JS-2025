import React from 'react'
import Card from './components/Card'

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Meta_Platforms_Inc._logo.svg",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hour",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$80/hour",
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon",
    datePosted: "4 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$120/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "1 day ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$95/hour",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hour",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    companyName: "Netflix",
    datePosted: "3 days ago",
    post: "Data Scientist",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$100/hour",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/28/Tesla_Motors.svg",
    companyName: "Tesla",
    datePosted: "2 days ago",
    post: "Automation Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$75/hour",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/3/35/OpenAI_Logo.svg",
    companyName: "OpenAI",
    datePosted: "Today",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$150/hour",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",
    companyName: "Spotify",
    datePosted: "3 days ago",
    post: "Frontend Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$60/hour",
    location: "Stockholm, Sweden"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Adobe_Incorporated_%282013%29_Logo.svg",
    companyName: "Adobe",
    datePosted: "1 week ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$85/hour",
    location: "San Jose, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/NVIDIA_logo.svg",
    companyName: "NVIDIA",
    datePosted: "2 days ago",
    post: "AI Researcher",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$140/hour",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Zoom_logo_2022.svg",
    companyName: "Zoom",
    datePosted: "4 days ago",
    post: "DevOps Engineer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$90/hour",
    location: "Remote"
  }
];

  return (
    <div className='parent' >
      {jobOpenings.map(function (elem, indx) {
        return <div key={indx}>
          <Card companyName={elem.companyName}
                     brandLogo={elem.brandLogo}
                     datePosted={elem.datePosted}
                     post={elem.post}
                     tag1={elem.tag1}
                     tag2={elem.tag2}
                     pay={elem.pay} 
                     location={elem.location}
        />
        </div>
      })}
    </div>
  )
}

export default App
  // must read for another way of doing this 

/*
The Usual Way (you’re already doing)

In your App.jsx:

{jobOpenings.map((job, index) => (
  <Card
    key={index}
    companyName={job.companyName}
    brandLogo={job.brandLogo}
    post={job.post}
    pay={job.pay}
    location={job.location}
  />
))}


Each Card only receives one job at a time.

🔹 What You’re Asking (Single prop → Card does the looping)

Yes, you can pass the entire array once, like this:

<Card jobOpenings={jobOpenings} />


Then inside the Card component, you handle the .map().

✅ Example Implementation
App.jsx
import React from 'react'
import Card from './Card'
import { jobOpenings } from './data'  // your array file

const App = () => {
  return (
    <div className="parent">
      <Card jobOpenings={jobOpenings} />
    </div>
  )
}

export default App

Card.jsx
import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = ({ jobOpenings }) => {
  return (
    <>
      {jobOpenings.map((job, index) => (
        <div className='card' key={index}>
          <div className="top">
            <img src={job.brandLogo} alt={job.companyName} />
            <button>Save <Bookmark size={12}/> </button>
          </div>

          <div className="center">
            <h2>{job.companyName}</h2>
            <span>{job.datePosted}</span>
            <h3>{job.post}</h3>
            <div className="tag">
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
      ))}
    </>
  )
}

export default Card
*/