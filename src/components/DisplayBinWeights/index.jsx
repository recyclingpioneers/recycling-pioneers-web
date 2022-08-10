import React, { useEffect, useState } from "react";
import { withFirebase } from "../Firebase";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BinWeightsComponent = (props) => {
  const [weightData, setWeightData] = useState({});

  //Bin data from Firebase Real time database
  const fbfunc = async (props) => {
    // Using the MAC address of the bin in Trottier 1050
    const fbData = props.firebase.latestDataRef("3C-61-05-13-06-B8");
    fbData.on("value", (snapshot) => {
      let data = {};
      data["Compost"] =
        snapshot.child("CW").val() < 0 ? 0 : snapshot.child("CW").val();
      data["Plastic"] =
        snapshot.child("PW").val() < 0 ? 0 : snapshot.child("PW").val();
      data["Recycling"] =
        snapshot.child("RW").val() < 0 ? 0 : snapshot.child("RW").val();
      data["Waste"] =
        snapshot.child("WW").val() < 0 ? 0 : snapshot.child("WW").val();
      setWeightData(data);
    });
  };

  useEffect(() => {
    if (Object.keys(weightData).length === 0) fbfunc(props);
    console.log(weightData);
  }, [weightData, props]);

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Bin Weights (kg)",
        font: {
          size: 30,
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        ticks: {
          font: {
            size: 20,
          },
        },
      },
    },
    layout: {
      padding: {
        bottom: 150,
        left: 50,
        right: 50,
      },
    },
  };
  const chartData = {
    labels: ["Compost", "Plastic", "Recycling", "Waste"],
    datasets: [
      {
        label: "Bin Weights (kg)",
        data: [
          weightData["Compost"],
          weightData["Plastic"],
          weightData["Recycling"],
          weightData["Waste"],
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ height: "70%" }}>
      <Bar options={options} data={chartData} />
    </div>
  );
};

const BinWeights = withFirebase(BinWeightsComponent);
export default BinWeights;
