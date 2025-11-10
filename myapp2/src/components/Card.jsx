import React from 'react'

const Card = (props) => {
  // console.log(props);
  return (
    <>
     
      <div className="card">
        <img src={props.imgAdd} alt="" />
        <h1> {props.user} , {props.age} </h1>
        <p>Lorem ipsum ipisicing elit. Qui ab perferendis, neque nam fugit eos dolorum saepe non aut iste!</p>
        <button>view profile</button>
      </div>
    </>
  )
}

export default Card;

// when u pass like [<Card user='mani' age = '18' /> ] this u can takeout single in Card({name,age})
// or you can takeout them like a object Card(props) now props is an object and u need to get user = props.user and age = props.age
// pass string wiht single or double quotes and number with bracket eg: age = {18} and name = 'mani'

