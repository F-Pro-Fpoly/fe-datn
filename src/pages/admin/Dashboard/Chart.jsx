import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChartAdmin = (props) => {
    const solieu = props.overview;

   let specialists_name =  solieu.map((item,index) => {
      
      return  item.specialists_name
   
    })

   let price =  solieu.map((item,index) => {
      
      return  item.price
   
    })

  const labels = specialists_name;
  
  const data = {
    labels: labels,
    datasets: [   
      
      {
        label: "Doanh thu của chuyên khoa",
        backgroundColor: "rgb(237,28,36)",
        borderColor: "rgb(237,28,36)",
        data: price
      }
  
    ],
  };
  return (
    <div>
      <Bar data={data} width={700}  height={550} />
    </div>
  );
};

export default BarChartAdmin;