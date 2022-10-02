import React, {useState, useContext} from "react";
import { Search } from "../../Context";
import './SearchComponent.css'

function SearchComponent() {
  // const [searchTopic, setSearchTopic] = useState("")
  const {search, setSearch} = useContext(Search)
  console.log(search)
  return (
    <div className="searchInput">
      <form className="topicSearchForm">
        <button class="topicSearchButton">Search</button>
        <input
          className="topicInput"
          type="text"
          placeholder="Search Topic..."
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </form>
      {/* <h1>{searchTopic}</h1> */}
    </div>
  );
}
export default SearchComponent;
