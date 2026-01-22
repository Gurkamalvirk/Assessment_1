import { useState } from "react";
import ExpenseForm from "./assets/components/ExpenseForm";
import ExpenseList from "./assets/components/ExpenseList";
import ExpenseFilter from "./assets/components/ExpenseFilter";
import TotalAmount from "./assets/components/TotalAmount";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <h1>Personal Expense Tracker</h1>
      <ExpenseForm />
      <ExpenseFilter />
      <ExpenseList />
      <TotalAmount />
    </>
  );
}

export default App;
