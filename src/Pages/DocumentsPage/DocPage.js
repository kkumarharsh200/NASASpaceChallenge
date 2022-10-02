import React, {useEffect, useContext, useState} from "react";
import './DocPage.css'
// import Navbar from '../../Components/Navbar/Navbar'
import SearchForm from "../../Components/SearchForm/SearchForm";
// import CourselItem from '../../Components/CourselItems/CourselItem'
import SingleDoc from "../SingleDoc/SingleDoc";
import axios from "axios";
import { Search } from "../../Context";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function DocPage({setState}) {
  // const {search, setSearch} = useContext(Search)
  // const [Ddata, setDdata] = useState([])

  //   async function fetcher() {
  //     const data = await axios.get(`http://127.0.0.1:5000/serve/${search}`)
  //     if(data) {
  //       console.log
  //     setDdata(data)
  //     }
  //   }

  return (
    <div>
      {/* <Navbar/> */}
      <SearchForm />
      {/* <CourselItem/> */}
      <h1 className="searchtitlemain">Search Results</h1>
      <div className="outergrid">
        {arr.length === 0 ? 
        <h1>No Output yet</h1> : arr.map((item) => (
          <SingleDoc />
        ))}
      </div>
    </div>
  );
}

export default DocPage;
