import React from 'react'

const Temp = ({response}) => {
  return (
    <div>
      {
        response.map((elem, idx)=>(
          <div key={idx} >
            <h1>{elem.id}</h1>
            <p>{elem.title}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Temp
