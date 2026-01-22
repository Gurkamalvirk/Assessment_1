function TotalAmount({ expenses }) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div>
      <h3>Total Spent</h3>
      <p>₹ {total}</p>
    </div>
  );
}

export default TotalAmount;
