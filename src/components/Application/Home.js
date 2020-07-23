import React, { Component } from "react";
// import './Application.scss'

import "../../App.css";

import { Header } from "./Header";
import { Balance } from "./Balance";
import { IncomeExpenses } from "./IncomeExpenses";
import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransaction";

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <div className="home__container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    );
  }
}
