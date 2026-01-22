function ExpenseFilter({ selectedCategory, onChangeCategory }) {
  return (
    <div>
      <h3>Filter by Category</h3>

      <select
        value={selectedCategory}
        onChange={(e) => onChangeCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;
