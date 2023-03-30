import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NewHireForm from "./components/NewHireForm/NewHireForm";
import FormLogicUncontrolled from "./components/FormLogic/FormLogic_Uncontrolled";
import FormLogicControlled from "./components/FormLogic/FormLogic_Controlled";
import FormLogicControlledWithReuse from "./components/FormLogic/FormLogic_ControlledWithReuse";

function App() {
  return (
    <div className="App">
      <div className="Header">Header</div>
      <div className="Body">
        {/* <NewHireForm></NewHireForm> */}
        {/* <FormLogicUncontrolled></FormLogicUncontrolled> */}
        <FormLogicControlledWithReuse></FormLogicControlledWithReuse>
      </div>
      <div className="Footer">Footer</div>
    </div>
  );
}

export default App;
