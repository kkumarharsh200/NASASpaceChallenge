import React from "react";
import './DropItem.css'

function DropItem({ data }) {
console.log(data)
  return (
      <p className="topicTitle">{data.name}</p>
  );
}

export default DropItem;
