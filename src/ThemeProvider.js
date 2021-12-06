import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children, color = true }) => {
  const [backgroundColor, setBackgroundColor] = useState(color);
  const [style, setStyle] = useState({
    light: {
      backgroundColor: "white",
      color: "black",
    },
    dark: {
      backgroundColor: "black",
      color: "white",
    },
    borderSon: {
      border: "2px solid green",
    },
  });

  const valuesToPass = {
    backgroundColor,
    setBackgroundColor,
    style,
    setStyle,
  };

  return (
    <ThemeContext.Provider value={valuesToPass}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useStateTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useContext must be used within a ThemeProvider");
  }

  return context;
};
