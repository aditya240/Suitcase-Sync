function Item({ item, handleDelete, handleCheck }) {
  return (
    <li>
      <span>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => handleCheck(item.id)}
        />
      </span>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <span>
        <button onClick={() => handleDelete(item.id)}>❌</button>
      </span>
    </li>
  );
}

export default Item;
