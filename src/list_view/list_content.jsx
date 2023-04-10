import React, { useState } from 'react';

const GroceryList = () => {
  const [groceries, setGroceries] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleNewItemChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleAddItem = () => {
    setGroceries([...groceries, newItem]);
    setNewItem('');
  };

  const handleDeleteItem = (index) => {
    setGroceries(groceries.filter((_, i) => i !== index));
  };

  const handleEditItem = (index, newValue) => {
    const updatedGroceries = [...groceries];
    updatedGroceries[index] = newValue;
    setGroceries(updatedGroceries);
  };

  return (
    <div>
      
      <ul>
        {groceries.map((grocery, index) => (
          <li key={index}>
            <input
              type="text"
              value={grocery}
              onChange={(event) => handleEditItem(index, event.target.value)}
            />
            <button class="btn btn-outline-danger" onClick={() => handleDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <input type="text" value={newItem} onChange={handleNewItemChange} />
      <button class="btn btn-outline-success" onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default GroceryList;



