import "./App.css";
import Padre from "./components/Padre";
import { ThemeProvider } from "./ThemeProvider";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Padre />
      </ThemeProvider>
    </div>
  );
}

export default App;
