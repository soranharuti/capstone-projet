import React, { useState, useEffect } from "react";
import Header from "./Header";
import Balance from "./Balance";
import AddTransaction from "./AddTransaction";
import IncomeList from "./IncomeList";
import ExpenseList from "./ExpenseList";
import "./Home.scss";
import Axios from "axios";
import Chart from "./Chart";

const Home = ({ token }) => {
  const [userData, setUserData] = useState({
    transactions: [],
    email: "",
    name: "",
  });
  useEffect(() => {
    async function fetchUserData() {
      const result = await Axios.get("http://localhost:8080/me", {
        headers: {
          "auth-token": token,
        },
      });
      setUserData(result.data);
    }
    fetchUserData();
  }, []);
  const handleAddTransaction = async (payload) => {
    const results = await Axios.post(
      `http://localhost:8080/addTransaction`,
      payload,
      {
        headers: {
          "auth-token": token,
        },
      }
    );
    const newUserData = { ...userData, transactions: results.data };
    setUserData(newUserData);
  };
  const handleDeleteTransaction = async (id) => {
    const results = await Axios.post(
      `http://localhost:8080/deleteTransaction`,
      { id },
      {
        headers: {
          "auth-token": token,
        },
      }
    );
    const newUserData = { ...userData, transactions: results.data };
    setUserData(newUserData);
  };

  const balance = userData.transactions.reduce(
    (acc, transaction) => Number(acc) + Number(transaction.amount),
    0
  );
  const incomeTransactions = userData.transactions.filter(
    (transaction) => transaction.amount > 0
  );
  const income = incomeTransactions.reduce(
    (acc, transaction) => Number(acc) + Number(transaction.amount),
    0
  );
  const expenseTransactions = userData.transactions.filter(
    (transaction) => transaction.amount < 0
  );
  const expense = expenseTransactions.reduce(
    (acc, transaction) => Number(acc) + Number(transaction.amount),
    0
  );

  return (
    
      <div className="container">
        <div className="app-wrapper">
         
          <Header name={userData.name} />

          <Balance balance={balance} income={income} expense={expense} />
          <AddTransaction
            transactions={userData}
            sendTransaction={handleAddTransaction}
          />
          <IncomeList
            incomeTransactions={incomeTransactions}
            deleteTransaction={handleDeleteTransaction}
          />
          <ExpenseList
            expenseTransactions={expenseTransactions}
            deleteTransaction={handleDeleteTransaction}
          />
           {/* <Chart totalExpense={expense} totalIncome={income} /> */}
        </div>
      </div>
    
  );
};

export default Home;
