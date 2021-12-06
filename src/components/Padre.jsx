import React from "react";
import { useStateTheme } from "../ThemeProvider";
import Hijo from "./Hijo";

const Padre = () => {
  const { backgroundColor, style } = useStateTheme();
  return (
    <div style={backgroundColor ? style.light : style.dark}>
      <h1>Hola soy el padre</h1>
      <Hijo />
    </div>
  );
};

export default Padre;
