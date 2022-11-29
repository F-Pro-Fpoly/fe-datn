import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = (props) => {
    const solieu = props.overview;

   let datee =  solieu.map((item,index) => {
      
      return  item.date
   
    })
   let death =  solieu.map((item,index) => {
      
      return  item.death
   
    })
   let recovered =  solieu.map((item,index) => {
      
      return  item.recovered
   
    })
   let cases =  solieu.map((item,index) => {
      
      return  item.cases
   
    })


  const labels = datee;
  
  const data = {
    labels: labels,
    datasets: [   
      {
        label: "Khỏi bệnh",
        backgroundColor: "rgb(40,167,69)",
        borderColor: "rgb(40,167,69)",
        data: recovered,
      },
      {
        label: "Ca mắc mới",
        backgroundColor: "rgb(237,28,36)",
        borderColor: "rgb(237,28,36)",
        data: cases,
      },
      {
        label: "Tử vong",
        backgroundColor: "rgb(51,51,51)",
        borderColor: "rgb(51,51,51)",
        data:death,
      }

    ],
  };
  return (
    <div>
      <Bar data={data} width={700}  height={550} />
    </div>
  );
};

export default BarChart;