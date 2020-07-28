import React, { useContext } from "react";
import Chart from './Chart'
const Balance = ({ balance = 0, income, expense }) => {

  return (
    <div className="balance">
      <h2>Your Balance</h2>
      <h3>${balance}</h3>
      <div className="income-expense">
        <div className="plus">
          <h3>Income</h3>
          <p>+${income}</p>
        </div>
        <div className="minus">
          <h3>Expenses</h3>
          <p>${expense}</p>
        </div>
      </div>

      <Chart />
    </div>
  );
};

export default Balance;
