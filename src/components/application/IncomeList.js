import React, {useContext} from 'react'
import {GlobalContext} from '../../context/GlobalState';
import IncomeTransaction from './IncomeTransactions'
const IncomeList = () => {
    const{incomeTransactions} = useContext(GlobalContext)

    console.log(incomeTransactions)
    return (
        <div className="transactions transactions-income">
            <h2>Transaction Histroy</h2>
                <ul className="transaction-list">
                    {incomeTransactions.map(incomeTransaction => (
                        <IncomeTransaction key={incomeTransaction.id}incomeTransaction ={incomeTransaction}/>
                    ))}
                    
                </ul>
        </div>
    );
};

export default IncomeList;
