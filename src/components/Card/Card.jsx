import React from 'react';
import './Card.css';

const Card = ({ name,  title,  imageClass }) => {
  return (
     <div className={`card`}>
        <div className={`card-bg ${imageClass}`} />
      <div className="content">
        <div className="name">{name}</div>
       
        <div className="title">
         {title}
        </div>
      </div>
      <div className="dots orange-dots"></div>
      <div className="dots pink-dots"></div>
    </div>
  );
};

export default Card;
