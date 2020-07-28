import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";

const Dankmemes = ({ totalIncome, totalExpense }) => {
  const [chartData, setChartData] = useState({});

  // const chart = () => {
  //   let title = [];
  //   let amount = [];
  //   axios
  //     .get("http://localhost:8080/me")
  //     .then(res => {
  //       console.log(res.data.transactions);
  //       for (const dataObj of res.data.transactions) {
  //         title.push(parseInt(dataObj.text));
  //         amount.push(parseInt(dataObj.amount));
  //       }
  //       setChartData({
  //         labels: amount,
  //         datasets: [
  //           {
  //             label: "level of thickness",
  //             data: title,
  //             backgroundColor: ["rgba(75, 192, 192, 0.6)"],
  //             borderWidth: 4
  //           }
  //         ]
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  //   console.log(title, amount);
  // };

  // useEffect(() => {
  //   chart();
  // }, []);
  return (
    <div className="App">
      <div>
        <Pie
          data={{
            labels: ["totalIncome", "totalExpense"],
            datasets: [
              {
                fill: true,
                backgroundColor: ["#1CB794", "#FD7677"],
                data: [totalIncome, totalExpense],
              },
            ],
          }}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </div>
  );
};

export default Dankmemes;
