import React from "react";
import { useStateTheme } from "../ThemeProvider";
import Hijo from "./Hijo";

const Padre = () => {
  const { backgroundColor } = useStateTheme();
  return (
    <div
      style={{
        backgroundColor: backgroundColor ? "white" : "black",
        color: backgroundColor ? "black" : "white",
      }}
    >
      <h1>Hola soy el padre</h1>
      <Hijo />
    </div>
  );
};

export default Padre;
