import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import ItemForm from "./ItemForm";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [search, setSearch] = useState("");

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  function handleSearchChange(newSearch) {
    setSearch(newSearch);
  }

  const itemsToDisplay = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header
        isDarkMode={isDarkMode}
        onDarkModeClick={handleDarkModeClick}
      />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ShoppingList
        items={itemsToDisplay}
        search={search}
        onSearchChange={handleSearchChange}
      />
    </div>
  );
}

export default App;
