import React from 'react'

const IncomeTransactions = ({incomeTransaction, deleteTransaction}) => {
    return (
        <li className="transaction">
        <span className="transaction-text">{incomeTransaction.text}</span>
        <span className="transaction=amount">{incomeTransaction.amount}</span>
        <button className="delete-btn" onClick={()=> deleteTransaction(incomeTransaction.id)}>
            <i className="fas fa-trash"></i>
        </button>

    </li>
    )
}

export default IncomeTransactions;
