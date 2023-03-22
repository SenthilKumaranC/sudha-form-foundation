import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NewHireForm from "./components/NewHireForm/NewHireForm";

function App() {
  return (
    <div className="App">
      <div className="Header">Header</div>
      <div className="Body">
        <NewHireForm></NewHireForm>
      </div>
      <div className="Footer">Footer</div>
    </div>
  );
}

export default App;
