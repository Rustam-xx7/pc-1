import React from "react";
import "./card.css";

const cards = (props) => {
  return (
    <>
      <div className="card" style={{color: "whitesmoke"}}> 
         {/* inline styling  */}
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </>
  );
};

export default cards;
