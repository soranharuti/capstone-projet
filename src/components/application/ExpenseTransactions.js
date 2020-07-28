import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const ExpenseTransaction = ({ expenseTransaction, deleteTransaction }) => {
  console.log(expenseTransaction);
  return (
    <li className="transaction">
      <span className="transaction-text">{expenseTransaction.text}</span>
      <span className="transaction-amount">{expenseTransaction.amount}</span>
      <button
        onClick={() => deleteTransaction(expenseTransaction.id)}
        className="delete-btn"
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default ExpenseTransaction;

// import React, { useContext } from "react";
// import { GlobalContext } from "../../context/GlobalState";

// const ExpenseTransactions = ({ expenseTransaction }) => {
//   const { deleteTransaction } = useContext(GlobalContext);

//   return (
//     <li className="transaction">
//       <span className="transaction-text">{expenseTransaction.text}</span>
//       <span className="transaction=amount">{expenseTransaction.amount}</span>
//       <button
//         className="delete-btn"
//         onClick={() => deleteTransaction(expenseTransaction.id)}
//       >
//         <i className="fas fa-trash"></i>
//       </button>
//     </li>
//   );
// };

// export default ExpenseTransactions;
