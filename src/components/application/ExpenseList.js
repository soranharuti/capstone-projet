
import React from 'react';
import ExpenseTransactions from './ExpenseTransactions';

const ExpenseList = ({expenseTransactions, deleteTransaction}) => {

    return (
        <div className="transactions transactions-expense">
            <h2>Expenses Histroy</h2>
                <ul className="transaction-list">
                {expenseTransactions.map(expenseTransaction => (
                        <ExpenseTransactions key={expenseTransaction.id} expenseTransaction={expenseTransaction} deleteTransaction={deleteTransaction}/>
                    ))}
                </ul>
        </div>
    );
};

export default ExpenseList;
