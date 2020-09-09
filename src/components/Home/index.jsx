import React, { Component } from "react";
import { withAuthorization } from "../Session";
import { withFirebase } from "../Firebase";

const Home = () => (
  <div className="my-5">
    <h1 className="text-center">Home</h1>
    <div className="container">
      <div className="row text-center">
        <div className="col-12">
          <SensorsForm />
        </div>
      </div>
    </div>
  </div>
);

class SensorsFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sensors: []
    };
  }

  componentDidMount() {
    this.props.firebase.sensorsRef().once("value", snapshot => {
      //Once because we don't need to consrantly be looking for new sensors here
      let sensors = snapshot.val();
      let newState = [];
      for (let sensor in sensors) {
        newState.push({
          id: sensor
          //Building: sensors[sensor].Building,
          //Faculty: sensors[sensor].Faculty,
          //ClosestRoom: sensors[sensor].ClosestRoom
        });
      }
      this.setState({
        sensors: newState
      });
    });
    console.log("Firebase: Loaded Sensor Names");
  }

  componentWillUnmount() {
    this.props.firebase.sensorsRef().off();
  }

  render() {
    const { sensors } = this.state;

    let sensorsList =
      sensors.length > 0 &&
      sensors.map((item, i) => {
        return (
          <option key={i} value={item.id}>
            {item.id}
          </option>
        );
      }, this);

    return (
      <>
        <form onSubmit={this.getSensorData}>
          <div className="form-row align-items-center">
            <div className="col-auto my-1">
              <label className="mr-sm-2" id="inlineFormCustomSelect">
                Choose a Sensor:
              </label>
              <select
                className="custom-select custom-select-lg mr-sm-2"
                id="inlineFormCustomSelect"
              >
                {sensorsList}
              </select>
            </div>
            <div className="col-12 justify-content-center ">
              <button type="submit" className="btn btn-success">
                Get Data
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

const condition = authUser => !!authUser;
const SensorsForm = withFirebase(SensorsFormBase);
export default withAuthorization(condition)(Home);
