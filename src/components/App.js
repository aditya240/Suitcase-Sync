import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [initialItems, setItems] = useState([]);

  function handleDelete(id) {
    setItems((initialItems) => initialItems.filter((item) => item.id !== id));
  }

  function handleCheck(id) {
    setItems((initialItems) =>
      initialItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleReset() {
    const confirmed = window.confirm(
      "Are you sure, you want to clear the list?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form setItems={setItems} />
      <PackingList
        initialItems={initialItems}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
        handleReset={handleReset}
      />
      <Stats initialItems={initialItems} />
    </div>
  );
}

export default App;
