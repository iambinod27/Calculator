import React, { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

function Input() {
  const { Calculation } = useContext(CalcContext);
  const [output, setOutput] = Calculation;

  return (
    <header>
      <div className="container">
        <div className="result">
          <div className="output">{output}</div>
        </div>
      </div>
    </header>
  );
}
export default Input;
