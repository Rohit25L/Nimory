import React from 'react'


const Card = ({ image, title, size ,classs }) => {
  return (
   <div className={`${classs} ${size}`}>
      <img src={image} alt={title} />
      <div className="overlay">
        <p>{title}</p>
      </div>
    </div>
  )
}

export default Card
