import React from "react";
import "./styles/Banner.css";

function Banner(props) {
  return (
    <div className="Banner animated fadeIn">
      <div className="Banner__container">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}

export default Banner;
