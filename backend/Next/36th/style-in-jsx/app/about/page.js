"use client";

import React from "react";

const about = () => {
  return (
    <div>
      <div className="container">
        <h1>This is my about Page .</h1>
        <p>This is my paragraph</p>

        <style jsx>
          {`
        .container{
            background-color: red ;
            color:black;
            font-bold;
            margin:0;
            padding:0;
            }
            `}
        </style>
      </div>
      <div className="container">
        <h1>Hey this is secon container</h1>
      </div>
    </div>
  );
};

export default about;
