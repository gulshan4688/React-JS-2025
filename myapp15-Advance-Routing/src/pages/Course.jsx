import React from 'react'
import { Link } from 'react-router-dom'

const Course = () => {
  return (
    <div>
      <h1>Course Page</h1>
      <div className=' flex flex-row items-center justify-center gap-11 text-2xl ' >

        <Link to="/courses/:courseId" className='' >Course Details</Link>
      </div>
    </div>
  )
}

export default Course
