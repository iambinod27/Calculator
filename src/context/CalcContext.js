import React, { createContext, useState } from "react";

export const CalcContext = createContext();

export const CalcProvider = ({ children }) => {
  const [output, setOutput] = useState("");

  return (
    <CalcContext.Provider
      value={{
        Calculation: [output, setOutput],
      }}
    >
      {children}
    </CalcContext.Provider>
  );
};
