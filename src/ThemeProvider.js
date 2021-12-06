import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children, color = true }) => {
  const [backgroundColor, setBackgroundColor] = useState(color);

  const valuesToPass = {
    backgroundColor,
    setBackgroundColor,
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
    throw new Error("useTeamProvider must be used within a ThemeProvider");
  }

  return context;
};
