import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  function handleAdd() {
    const newExpense = {
      id: Date.now(),
      title: title,
      amount: Number(amount),
      category: category,
    };

    onAddExpense(newExpense);

    // Clear inputs
    setTitle("");
    setAmount("");
    setCategory("Food");
  }

  return (
    <div>
      <h3>Add Expense</h3>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
        <option>Other</option>
      </select>
      <br />

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default ExpenseForm;
