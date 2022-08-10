import React, { useEffect, useState } from "react";
import { VictoryPie } from "victory";
import { withFirebase } from "../Firebase";

const PieChartComponent = (props) => {
  const [chartData, setChartData] = useState([]);
  const [wastedata, setWastedata] = useState([]);

  //Bin data from Firebase Real time database
  const fbfunc = async (props) => {
    const fbData = props.firebase.latestDataRef("trottier1050");

    fbData.on("value", (snapshot) => {
      let data = [];

      //Our measured bin height is 78cm
      const binHeight = 78;

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
      chart();
    });
  };

  //Sets data and legend for the Pie Chart
  const chart = () => {
    setChartData([
      {
        x: `Paper/Cardboard \nPapier/Papier carton: \n${wastedata[0]}%`,
        y: wastedata[0],
      },
      { x: `Waste \nDéchets: \n${wastedata[1]}%`, y: wastedata[1] },
      {
        x: `Plastic/Glass \nPlastique/Verre: \n${wastedata[2]}%`,
        y: wastedata[2],
      },
      // { x: `Compost: \n${wastedata[1]}%`, y: wastedata[1] },
    ]);
  };

  const legendStyle = {
    data: {
      fillOpacity: 0.9,
      stroke: "white",
      strokeWidth: 2,
    },
    labels: {
      fontSize: 16,
      fill: "black",
    },
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
        <VictoryPie
          data={chartData}
          padding={{ top: 60, bottom: 60 }}
          colorScale={["#0374BB", "#040707", "#fbd506", "#b26328"]} //The fourth option is compost
          style={legendStyle}
        />
      ) : (
        <h3>LOADING...</h3>
      )}
    </div>
  );
};

const PieChart = withFirebase(PieChartComponent);
export default PieChart;
