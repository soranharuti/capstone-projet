import React from "react";
// import "./Application.scss";
import '../../App.css';

export const IncomeExpenses = () => {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">100</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">50</p>
      </div>
    </div>
  );
};
