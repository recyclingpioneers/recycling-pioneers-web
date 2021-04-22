import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

import App from "./App.jsx";
import Firebase, { FirebaseContext } from "./components/Firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
// import Monitor from "./components/Monitor";

ReactDOM.render(
<FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
