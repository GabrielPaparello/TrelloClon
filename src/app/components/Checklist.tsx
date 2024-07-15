import React, { useState } from "react";

const Checklist: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem(e.target.value);
  };

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  return (
    <div>
      <h2>Checklist</h2>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={handleInputChange}
          placeholder="Add new item"
        />
        <button onClick={handleAddItem}>Add</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
