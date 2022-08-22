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
    const fbData = props.firebase.latestDataRef("3C:61:05:13:06:B8");
    fbData.on("value", (snapshot) => {
      let data = {};
      data["Waste"] =
        snapshot.child("WW").val() < 0 ? 0 : snapshot.child("WW").val();
      data["Compost"] =
        snapshot.child("CW").val() < 0 ? 0 : snapshot.child("CW").val();
      data["Recycling"] =
        snapshot.child("RW").val() < 0 ? 0 : snapshot.child("RW").val();
      data["Plastic"] =
        snapshot.child("PW").val() < 0 ? 0 : snapshot.child("PW").val();
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
    labels: ["Waste", "Compost", "Recycling", "Plastic"],
    datasets: [
      {
        label: "Bin Weights (kg)",
        data: [
          weightData["Waste"],
          weightData["Compost"],
          weightData["Recycling"],
          weightData["Plastic"],
        ],
        backgroundColor: [
          "rgba(0, 0, 0, 1)",
          "rgba(214, 113, 31, 1)",
          "rgba(0, 0, 255, 1)",
          "rgba(255, 225, 0, 1)",
        ],
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
