import React from "react";
import './DocPage.css'
// import Navbar from '../../Components/Navbar/Navbar'
import SearchForm from "../../Components/SearchForm/SearchForm";
// import CourselItem from '../../Components/CourselItems/CourselItem'
import SingleDoc from "../SingleDoc/SingleDoc";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function DocPage({setState}) {
  return (
    <div>
      {/* <Navbar/> */}
      <SearchForm />
      {/* <CourselItem/> */}
      <h1 className="searchtitlemain">Search Results</h1>
      <div className="outergrid">
        {arr.map((item) => (
          <SingleDoc />
        ))}
      </div>
    </div>
  );
}

export default DocPage;
