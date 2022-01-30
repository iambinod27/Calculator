import React, { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

function Button() {
  const { Calculation } = useContext(CalcContext);
  const [output, setOutput] = Calculation;

  const handleClick = (e) => {
    setOutput(output.concat(e.target.name));
  };

  const reset = () => {
    setOutput("");
  };

  const del = () => {
    if (output === "ERROR") {
      setOutput("");
    } else {
      setOutput(output.slice(0, -1));
    }
  };

  const result = () => {
    try {
      setOutput(eval(output).toString());
    } catch {
      setOutput("ERROR");
    }
  };
  return (
    <section>
      <div className="container">
        <div className="grid-container">
          <button className="grid 1" name="7" onClick={handleClick}>
            7
          </button>
          <button className="grid 2" name="8" onClick={handleClick}>
            8
          </button>
          <button className="grid 3" name="9" onClick={handleClick}>
            9
          </button>
          <button className="grid 4" onClick={del}>
            DEL
          </button>
          <button className="grid 5" name="4" onClick={handleClick}>
            4
          </button>
          <button className="grid 6" name="5" onClick={handleClick}>
            5
          </button>
          <button className="grid 7" name="6" onClick={handleClick}>
            6
          </button>
          <button className="grid 8" name="+" onClick={handleClick}>
            +
          </button>
          <button className="grid 9" name="1" onClick={handleClick}>
            1
          </button>
          <button className="grid 10" name="2" onClick={handleClick}>
            2
          </button>
          <button className="grid 11" name="3" onClick={handleClick}>
            3
          </button>
          <button className="grid 12" name="-" onClick={handleClick}>
            -
          </button>
          <button className="grid 13" name="." onClick={handleClick}>
            .
          </button>
          <button className="grid 14" name="0" onClick={handleClick}>
            0
          </button>
          <button className="grid 15" name="/" onClick={handleClick}>
            /
          </button>
          <button className="grid 16" name="*" onClick={handleClick}>
            X
          </button>
          <button className="grids 17" onClick={reset}>
            RESET
          </button>
          <button className="grids 18" onClick={result}>
            =
          </button>
        </div>
      </div>
    </section>
  );
}

export default Button;
