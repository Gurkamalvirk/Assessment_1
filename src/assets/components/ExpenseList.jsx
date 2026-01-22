function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <div>
      <h3>Expenses</h3>

      {expenses.length === 0 && <p>No expenses added yet.</p>}

      {expenses.map((expense) => (
        <div key={expense.id} style={{ marginBottom: "5px" }}>
          <span>
            {expense.title} - ₹{expense.amount} ({expense.category})
          </span>
          <button
            onClick={() => onDeleteExpense(expense.id)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;
