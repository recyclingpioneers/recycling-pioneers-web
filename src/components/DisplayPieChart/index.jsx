import React, { useEffect, useState } from "react";
import { VictoryPie } from "victory";
import { withFirebase } from "../Firebase";

const PieChartComponent = (props) => {
  const [chartData, setChartData] = useState([]);
  const [wastedata, setWastedata] = useState([]);
  
  const fbfunc = async(props) => {
    const fbData = props.firebase.latestDataRef("trottier1050")   
   
    fbData.on('value', snapshot => {
      let data = []; 
      let centData1 = snapshot.child('RD').val()+snapshot.child('CD').val()+snapshot.child('WD').val()+snapshot.child('PD').val();
    
      data.push(Math.round((snapshot.child('RD').val()*100)/centData1));
      data.push(Math.round((snapshot.child('CD').val()*100)/centData1));
      data.push(Math.round((snapshot.child('WD').val()*100)/centData1));
      data.push(Math.round((snapshot.child('PD').val()*100)/centData1));

        setWastedata(data);
        chart();
    })
  }
  
  const chart = () => {
    setChartData([
      { x: `Paper/Cardboard \nPapier/Papier carton: \n${wastedata[0]}%`, y: wastedata[0] },
      { x: `Compost: \n${wastedata[1]}%`, y: wastedata[1] },
      { x: `Waste \nDéchets: \n${wastedata[2]}%`, y: wastedata[2] },
      { x: `Plastic/Glass \nPlastique/Verre: \n${wastedata[3]}%`, y: wastedata[3] }
    ]);
  };



  const legendStyle ={
    data: {
      fillOpacity: 0.9, stroke: "white", strokeWidth: 2
    },
    labels: {
      fontSize: 22, fill: "black",
    }
  }

  useEffect(() => {
    if(wastedata.length==0){
      fbfunc(props);
    }
    chart();
  },[wastedata]);

  return (
        <div style={{height:"70%"}}>
            {wastedata.length>0 && chartData.length>0
            ?<VictoryPie data={chartData} colorScale={["#0374BB", "#b26328","#040707", "#fbd506"]}  style={legendStyle} />
            : <h3>LOADING...</h3>}
        </div> 
  );
};

const PieChart = withFirebase(PieChartComponent)
// export default PieChartComponent;
export default PieChart;
