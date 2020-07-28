import React from "react";
import IncomeTransaction from "./IncomeTransactions";
const IncomeList = ({ incomeTransactions, deleteTransaction }) => {
  return (
    <div className="transactions transactions-income">
      <h2>Income Histroy</h2>
      <ul className="transaction-list">
        {incomeTransactions.map((incomeTransaction) => (
          <IncomeTransaction
            key={incomeTransaction.id}
            incomeTransaction={incomeTransaction}
            deleteTransaction={deleteTransaction}
          />
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
