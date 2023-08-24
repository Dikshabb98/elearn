import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card'>
        <div >
      
            <h2 className='card_title'>{props.title}</h2>
            <img className='card_image' src={props.image}  />
             <p className='card_about'>{props.about}</p>
        <button className='card_btn'>{props.btn}</button>
        </div>
    </div>
  )
}

export default Card;