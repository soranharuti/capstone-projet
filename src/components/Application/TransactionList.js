import React from 'react'
// import './Application.scss';
import '../../App.css';

export const TransactionList = () => {
    return (
        <ul className="list">
       <li className="minus">
          Cash <span>-$400</span><button className="delete-btn">x</button>
        </li> 
      </ul>
    )
}
