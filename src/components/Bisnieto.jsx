import React from "react";
import { useStateTheme } from "../ThemeProvider";

const Bisnieto = () => {
  const { backgroundColor, setBackgroundColor } = useStateTheme();

  const handleChecked = (e) => {
    const checked = e.target.checked;
    setBackgroundColor(checked);
  };

  return (
    <div
      style={{
        fontSize: backgroundColor ? "18px" : "24px",
      }}
    >
      <h1>Hola soy el Bisnieto</h1>
      <label className="switch">
        <input type="checkbox" defaultChecked onClick={handleChecked} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Bisnieto;
