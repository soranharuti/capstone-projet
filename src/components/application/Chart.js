import React from "react";
import { Pie } from "react-chartjs-2";

const Dankmemes = ({ totalIncome, totalExpense }) => {
  
  return (
    <div className="App">
      <div>
        <Pie
          data={{
            labels: ["Total Income", "Total Expenses"],
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
