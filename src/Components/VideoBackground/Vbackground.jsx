import React from "react";
import "./Vbackground.css";
// import img1 from "../../assests/img1.jpg";
import SearchComponent from "../SearchComponent/SearchComponent";

function Vbackground() {
  return (
    <div className="vbackground">
      {/* <img className="bimage" src={img1} /> */}
      <div className="searchMain">
      <h1 className="searchheading">SEARCH TOPIC</h1>
        <SearchComponent />
      </div>
    </div>
  );
}

export default Vbackground;
