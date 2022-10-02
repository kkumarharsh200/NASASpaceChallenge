import React, {useState} from "react";
import './SearchComponent.css'

function SearchComponent() {
  const [searchTopic, setSearchTopic] = useState("")
  return (
    <div className="searchInput">
      <form className="topicSearchForm">
        <button class="topicSearchButton">Search</button>
        <input
          className="topicInput"
          type="text"
          placeholder="Search Topic..."
          onChange={(e) => setSearchTopic(e.target.value)}
        ></input>
      </form>
      {/* <h1>{searchTopic}</h1> */}
    </div>
  );
}
export default SearchComponent;
