import { useState } from "react";
import ExpenseForm from "./assets/components/ExpenseForm";
import ExpenseList from "./assets/components/ExpenseList";
import ExpenseFilter from "./assets/components/ExpenseFilter";
import TotalAmount from "./assets/components/TotalAmount";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function addExpense(expense) {
    setExpenses((prev) => [...prev, expense]);
  }

  function deleteExpense(id) {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  }

  const filteredExpenses =
    selectedCategory === "All"
      ? expenses
      : expenses.filter((e) => e.category === selectedCategory);

  return (
    <>
      <h1>Personal Expense Tracker</h1>

      <ExpenseForm onAddExpense={addExpense} />

      <ExpenseFilter
        selectedCategory={selectedCategory}
        onChangeCategory={setSelectedCategory}
      />

      <ExpenseList
        expenses={filteredExpenses}
        onDeleteExpense={deleteExpense}
      />

      <TotalAmount expenses={filteredExpenses} />
    </>
  );
}

export default App;
