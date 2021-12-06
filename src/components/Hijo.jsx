import React from "react";
import { useStateTheme } from "../ThemeProvider";
import Nieto from "./Nieto";

const Hijo = () => {
  const { backgroundColor, style } = useStateTheme();
  return (
    <div>
      <h1 style={!backgroundColor ? style.borderSon : {}}>Hola soy el Hijo</h1>
      <Nieto />
    </div>
  );
};

export default Hijo;
