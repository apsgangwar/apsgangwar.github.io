import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import CommingSoon from "./components/ComingSoon";
import reportWebVitals from "./reportWebVitals";
import Resume from "./components/Resume2";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Resume />
    {/* <CommingSoon /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
