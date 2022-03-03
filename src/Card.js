import React from 'react';
import "./App.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imgUrl} alt="Avatar" style={{width: '100%'}} />
      <div className="container">
        <h4>
          <b>{props.name}</b>
        </h4>
        <p>{props.designation}</p>
        <p>{props.children}</p>
      </div>
    </div>
  );
}

export default Card;