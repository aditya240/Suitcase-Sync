import { useState } from "react";

function Form({ setItems }) {
  const [description, setDesc] = useState("");
  const [quantity, setQty] = useState(1);

  function handleAdd(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    setItems((initialItems) => [...initialItems, newItem]);

    setDesc("");
    setQty(1);
  }

  return (
    <form className="add-form" onSubmit={handleAdd} id="form">
      <h3>What do you need for your trip?</h3>
      <select value={quantity} onChange={(e) => setQty(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
