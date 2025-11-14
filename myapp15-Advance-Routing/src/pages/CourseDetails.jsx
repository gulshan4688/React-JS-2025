import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {

    const params = useParams();
    const {courseId}  = useParams();
    console.log(params);

    return (
        <div>
            <h1> {params.courseId} Course Details</h1>
        </div>
    )
}

export default CourseDetails
