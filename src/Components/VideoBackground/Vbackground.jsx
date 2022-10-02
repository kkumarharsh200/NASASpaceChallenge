import React,{useState, useContext} from "react";
import axios from 'axios'
import "./Vbackground.css";
// import img1 from "../../assests/img1.jpg";
import SearchComponent from "../SearchComponent/SearchComponent";
import { Search } from "../../Context";

function Vbackground() {
  const {search,setSearch} = useContext(Search)
  const [Ddata, setDdata] = useState([])

  function fetcher() {
    const data = axios.get(`http://127.0.0.1:5000/serve/${search}`)
    setDdata(data)
  }

  return (
    <div className="vbackground">
      {/* <img className="bimage" src={img1} /> */}
      <div className="searchMain" onClick={fetcher}>
      <h1 className="searchheading">SEARCH TOPIC</h1>
        <SearchComponent />
      </div>
    </div>
  );
}

export default Vbackground;
