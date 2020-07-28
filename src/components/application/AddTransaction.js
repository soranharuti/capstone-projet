import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../../context/GlobalState";

const AddTransaction = ({ sendTransaction }) => {
  // const { addIncome, addExpense } = useContext(GlobalContext);

  // const [income, setIncome] = useState({
  //   incomeText: "",
  //   incomeAmount: 0,
  // });

  // const { incomeText, incomeAmount } = income;

  // const onChangeIncome = (e) => {
  //   setIncome({ ...income, [e.target.name]: e.target.value });
  // };

  // const onSubmitIncome = (e) => {
  //   e.preventDefault();

  //   if (incomeText !== "") {
  //     const newIncomeTransaction = {
  //       id: uuidv4(),
  //       incomeText,
  //       incomeAmount: incomeAmount * 1,
  //     };

  //     addIncome(newIncomeTransaction);

  //     setIncome({
  //       incomeText: "",
  //       incomeAmount: 0,
  //     });
  //   }
  // };

  // const [expense, setExpense] = useState({
  //   expenseText: "",
  //   expenseAmount: 0,
  // });

  // const { expenseText, expenseAmount } = expense;

  // const onChangeExpense = (e) => {
  //   setExpense({ ...expense, [e.target.name]: e.target.value });
  // };

  // const onSubmitExpense = (e) => {
  //   e.preventDefault();

  //   if (expenseText !== "") {
  //     const newExpenseTransaction = {
  //       id: uuidv4(),
  //       expenseText,
  //       expenseAmount: expenseAmount * 1,
  //     };

  //     addExpense(newExpenseTransaction);

  //     setExpense({
  //       expenseText: "",
  //       expenseAmount: 0,
  //     });
  //   }
  // };
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
        <button
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
          <button
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
