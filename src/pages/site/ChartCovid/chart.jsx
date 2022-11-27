import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = (props) => {
    const solieu = props.overview;
    // console.log(solieu);


   let datee =  solieu.map((item,index) => {
      
      return {
        date: item.date,
        death: item.death
      }
       
    })

  const labels = datee;

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },

    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;