import React, { useState } from "react";

function Item({ name, category }) {

  const [addItem, setAddItem] = useState(false);
  const itemStatus = addItem ? "in-cart" : "";

  function addAndRemove(){
    setAddItem(addItem => !addItem)
  }

  return (
    <li className={itemStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addAndRemove}>{addItem ? "Remove From" : "Add To"} Cart</button>
    </li>
  );
}

export default Item;
