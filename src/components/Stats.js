function Stats({ initialItems }) {
  const totalItems = initialItems.length;
  const packedItems = initialItems.reduce(
    (acc, item) => acc + (item.packed ? 1 : 0),
    0
  );
  const completePercentage =
    totalItems !== 0 ? (packedItems / totalItems) * 100 : 0;
  return (
    <footer className="stats">
      <em>
        💼 You have {totalItems} items on your list, and you have packed{" "}
        {packedItems} items (
        {completePercentage === 0 ? 0 : completePercentage.toFixed(2)}%)
      </em>
    </footer>
  );
}

export default Stats;
