import React from 'react'

const Card = ({user}) => {
  return (
    <>
     
      <div className="card">
        <img src="https://images.pexels.com/photos/9002742/pexels-photo-9002742.jpeg" alt="" />
        <h1> {user} </h1>
        <p>Lorem ipsum ipisicing elit. Qui ab perferendis, neque nam fugit eos dolorum saepe non aut iste!</p>
        <button>view profile</button>
      </div>
    </>
  )
}

export default Card;
