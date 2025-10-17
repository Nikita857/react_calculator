import { CssBaseline } from "@mui/material";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { useCalculator } from "./hooks/useCalculator";
import Header from "./components/Header/Header"; // Импортируем новый компонент
import CalculatorLayout from "./components/Layout/CalculatorLayout";
import Calculator from "./components/Calculator/Calculator";

// Create a dark theme based on the image
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0c1521", // The very dark blue background
      paper: "#1a2a41", // The slightly lighter blue for panels
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

function App() {
  const calculator = useCalculator();

  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [calculatorMode, setCalculatorMode] = useState<"normal" | "scientific">(
    "normal"
  );

  const toggleHistory = () => {
    setIsHistoryOpen(!isHistoryOpen);
  };

  const toggleMode = () => {
    setCalculatorMode(calculatorMode === "normal" ? "scientific" : "normal");
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <CalculatorLayout>
        <Header
          isHistoryOpen={isHistoryOpen}
          calculatorMode={calculatorMode}
          toggleHistory={toggleHistory}
          toggleMode={toggleMode}
        />
        <Calculator
          isHistoryOpen={isHistoryOpen}
          calculatorMode={calculatorMode}
          {...calculator} //Оптимизируем передачу пропсов с помощью spread
          //  (Все функции которые лежат в хуке автоматически передаются в компонент)
        />
      </CalculatorLayout>
    </ThemeProvider>
  );
}

export default App;
