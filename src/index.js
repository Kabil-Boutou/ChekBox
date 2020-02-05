import React from "react";
import ReactDOM from "react-dom";
import Demo from "./demo";
import "./styles.css";

function App() {
  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Demo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
