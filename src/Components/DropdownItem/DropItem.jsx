import React,{useContext} from "react";
import { Search } from "../../Context";
import './DropItem.css'

function DropItem({ data }) {
const  {search, setSearch} = useContext(Search)
// console.log(data)
  return (
      <p className="topicTitle" value={data.name} key = {data.name} onClick = {(e) => setSearch(e.target.value)}>{data.name}</p>
  );
}

export default DropItem;
