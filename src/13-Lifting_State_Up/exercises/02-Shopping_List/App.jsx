import React from "react";

import AddNewItemForm from "./AddNewItemForm";

function App() {
  const [items, setItems] = React.useState([
    // { label: "Apple", id: 123 },
    // { label: "Banana", id: 321 },
  ]);

  function generateUniqueString(length) {
    return Math.random()
      .toString(36)
      .substring(2, 2 + length);
  }

  function handleAddItem(label) {
    const newItem = {
      label,
      id: generateUniqueString(5),
    };

    const itemsCopy = [...items, newItem];
    console.log(itemsCopy);
    setItems(itemsCopy);
  }

  return (
    <div className="wrapper">
      <div className="list-wrapper">
        <ol className="shopping-list">
          {items.map(({ label, id }) => (
            <li key={id}>{label}</li>
          ))}
        </ol>
      </div>
      <AddNewItemForm handleAddItem={handleAddItem} />
    </div>
  );
}

export default App;
