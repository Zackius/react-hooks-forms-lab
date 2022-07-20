import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(onItemForSubmit) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const manageSubmit = (e) => {
    e.preventDefault();
    onItemForSubmit({
      id: uuid(),
      name,
      category,
    });
    setCategory([onItemForSubmit, ...name]);
    setCategory("");
  };

  return (
    <form className="NewItem" onSubmit={manageSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleName} />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
