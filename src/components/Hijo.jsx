import React from "react";
import { useStateTheme } from "../ThemeProvider";
import Nieto from "./Nieto";

const Hijo = () => {
  const { backgroundColor } = useStateTheme();
  return (
    <div>
      <h1
        style={{
          border: backgroundColor ? "" : "2px solid green",
        }}
      >
        Hola soy el Hijo
      </h1>
      <Nieto />
    </div>
  );
};

export default Hijo;
