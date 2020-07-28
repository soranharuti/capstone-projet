import React, { useState } from "react";


const AddTransaction = ({ sendTransaction }) => {
  
  const [incomeText, setIncomeText] = useState("");
  const [incomeAmount, setIncomeAmount] = useState(0);

  const [expenseText, setExpenseText] = useState("");
  const [expenseAmount, setExpenseAmount] = useState(0);

  const handleExpenseTextChange = (e) => {
    setExpenseText(e.target.value);
  };
  const handleExpenseAmountChange = (e) => {
    setExpenseAmount(e.target.value);
  };

  const handleIncomeTextChange = (e) => {
    setIncomeText(e.target.value);
  };
  const handleIncomeAmountChange = (e) => {
    setIncomeAmount(e.target.value);
  };
  const handleAddTransaction = (type) => {
    if (type === "income") {
      sendTransaction({ text: incomeText, amount: Number(incomeAmount) });
    }
    if (type === "expense") {
      sendTransaction({ text: expenseText, amount: -Number(expenseAmount) });
    }
  };
  return (
    <div className="form-wrapper">
      <div className="input-group income">
        <input
          type="text"
          name="incomeText"
          value={incomeText}
          placeholder="Add Income..."
          autoComplete="off"
          onChange={handleIncomeTextChange}
        />
        <input
          type="number"
          name="incomeAmount"
          value={incomeAmount}
          placeholder="Amount"
          autoComplete="off"
          onChange={handleIncomeAmountChange}
        />
        <button type="submit"
          disabled={!incomeText || !incomeAmount}
          onClick={() => handleAddTransaction("income")}
        >
          submit
        </button>
      </div>

      <div>
        <div className="input-group expense">
          <input
            type="text"
            name="expenseText"
            value={expenseText}
            placeholder="Add Expense..."
            autoComplete="off"
            onChange={handleExpenseTextChange}
          />
          <input
            type="number"
            name="expenseAmount"
            value={expenseAmount}
            placeholder="Amount"
            autoComplete="off"
            onChange={handleExpenseAmountChange}
          />
          <button type="submit"
            disabled={!expenseText || !expenseAmount}
            onClick={() => handleAddTransaction("expense")}
          >
            submit
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;
