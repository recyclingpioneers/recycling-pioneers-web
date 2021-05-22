import React, { useEffect, useState } from "react";
import { VictoryGroup, VictoryChart, VictoryBar } from "victory";
import { withFirebase } from "../Firebase";

const BarGraphComponent = props => {
  const [chartData, setChartData] = useState([]);
  const [wastedata, setWastedata] = useState([]);

  const [backgroundChartData, setBackgroundChartData] = useState([]);
  const [fullData, setFullData] = useState([]);

  //Bin data from Firebase Real time database
  const fbfunc = async props => {
    const fbData = props.firebase.latestDataRef("trottier1050");

    fbData.on("value", snapshot => {
      let data = [];

      //Our measured bin height is 78cm
      const binHeight = 78;
      const numOfBins = 3;

      //Get Reading Values
      //Values of Distances
      //Logic for all: The height of the actual garbage is bin height - reading
      // If that value is less than 0 for some reason then set it to 0 instead

      let recyclingDistance =
        binHeight - snapshot.child("RD").val() < 0
          ? 0
          : binHeight - snapshot.child("RD").val();

      let wasteDistance =
        binHeight - snapshot.child("WD").val() < 0
          ? 0
          : binHeight - snapshot.child("WD").val();

      let plasticDistance =
        binHeight - snapshot.child("PD").val() < 0
          ? 0
          : binHeight - snapshot.child("PD").val();

      /*
      let compostDistance =
        binHeight - snapshot.child("CD").val() < 0
          ? 0
          : binHeight - snapshot.child("CD").val();
          */

      let totalDistance = recyclingDistance + wasteDistance + plasticDistance; //Excluding compost for now

      data.push(Math.round((recyclingDistance * 100.0) / totalDistance));
      data.push(Math.round((wasteDistance * 100.0) / totalDistance));
      data.push(Math.round((plasticDistance * 100.0) / totalDistance));
      //data.push(Math.round((compostDistance * 100.0) / totalDistance));

      setWastedata(data);

      //Add Data for background chart:
      let backgroundData = [];
      for (let i = 0; i < numOfBins; i++) {
        backgroundData.push(100);
      }
      setFullData(backgroundData);

      chart();
    });
  };

  //Sets data and legend for the Bar Graph
  const chart = () => {
    setChartData([
      {
        //Waste
        x: "Waste \n Déchets \n",
        y: wastedata[1],
        y0: 0
      },
      {
        // Paper (recycling)
        x: "Paper/Cardboard \n Papier/Papier carton \n",
        y: wastedata[0],
        y0: 0
      },
      {
        //Plastic
        x: "Plastic/Glass \n Plastique/Verre \n",
        y: wastedata[2],
        y0: 0
      }
      // { Compost not included yet },
    ]);

    //Data used for the background chart
    setBackgroundChartData([
      {
        //Waste
        x: "Waste \n Déchets \n",
        y: fullData[1],
        y0: 0
      },
      {
        // Paper (recycling)
        x: "Paper/Cardboard \n Papier/Papier carton \n",
        y: fullData[0],
        y0: 0
      },
      {
        //Plastic
        x: "Plastic/Glass \n Plastique/Verre \n",
        y: fullData[2],
        y0: 0
      }
      // { Compost not included yet },
    ]);
  };

  const graphStyle = {
    data: {
      fill: ({ datum }) =>
        datum.x === "Paper/Cardboard \n Papier/Papier carton \n"
          ? "#0374BB" // Blue for Paper Cardboard
          : datum.x === "Waste \n Déchets \n"
          ? "#040707" //Black for Waste
          : "#fbd506" //Else Yellow for Plastic
    },
    labels: { fill: "black" }
  };

  const backgroundGraphStyle = {
    data: {
      fill: ({ datum }) =>
        datum.x === "Paper/Cardboard \n Papier/Papier carton \n"
          ? "#0374BB" // Blue for Paper Cardboard
          : datum.x === "Waste \n Déchets \n"
          ? "#040707" //Black for Waste
          : "#fbd506", //Else Yellow for Plastic
      fillOpacity: 0.3
    },

    labels: { fill: "black" }
  };

  useEffect(() => {
    if (wastedata.length == 0) {
      fbfunc(props);
    }
    chart();
  }, [wastedata]);

  return (
    <div style={{ height: "70%" }}>
      {wastedata.length > 0 && chartData.length > 0 ? (
        <VictoryGroup>
          <VictoryChart domainPadding={60}>
            <VictoryBar
              data={backgroundChartData}
              barWidth={100}
              domain={{ y: [0, 80] }} // Set y scale to 0 - 100
              style={backgroundGraphStyle}
              cornerRadius={{ topLeft: 10, topRight: 10 }}
            />
          </VictoryChart>

          <VictoryChart domainPadding={60}>
            <VictoryBar
              data={chartData}
              barWidth={100}
              labels={({ datum }) => `${datum.y}%`}
              domain={{ y: [0, 80] }} // Set y scale to 0 - 100
              style={graphStyle}
              cornerRadius={{ topLeft: 10, topRight: 10 }}
            />
          </VictoryChart>
        </VictoryGroup>
      ) : (
        <h3>LOADING...</h3>
      )}
    </div>
  );
};

const BarGraph = withFirebase(BarGraphComponent);
export default BarGraph;
