import { Container, Paper, CssBaseline, Stack, Box } from "@mui/material";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { useCalculator } from "./hooks/useCalculator";
import Display from "./components/Display/Display";
import Keypad from "./components/Keypad/Keypad";
import History from "./components/History/History";
import Header from "./components/Header/Header"; // Импортируем новый компонент

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
  const { expression, handleInput, handleParentheses, calculate, clear, history } = useCalculator();
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [calculatorMode, setCalculatorMode] = useState<'normal' | 'scientific'>('normal');

  const toggleHistory = () => {
    setIsHistoryOpen(!isHistoryOpen);
  };

  const toggleMode = () => {
    setCalculatorMode(calculatorMode === 'normal' ? 'scientific' : 'normal');
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container
        maxWidth={false}
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "background.default",
          padding: 2,
        }}
      >
        <Box sx={{ height: "80vh", width: "50vw", maxWidth: "1000px", display: "flex", flexDirection: "column", borderRadius: "24px", overflow: "hidden" }}>
          <Header
            isHistoryOpen={isHistoryOpen}
            calculatorMode={calculatorMode}
            toggleHistory={toggleHistory}
            toggleMode={toggleMode}
          />
          <Paper
            elevation={3}
            sx={{
              flex: 1, // Allow paper to grow
              p: 3,
              bgcolor: "background.paper",
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Stack direction="row" sx={{ height: "100%" }}>
              {/* History Panel (Left) - Conditionally rendered */}
              {isHistoryOpen && (
                <Box sx={{ width: "45%", height: "100%", p: 2, borderRight: "1px solid #2c3e50" }}>
                  <History history={history} />
                </Box>
              )}

              {/* Calculator Panel (Right) */}
              <Box sx={{ flex: 1, p: 2, display: "flex", flexDirection: "column" }}>
                <Display expression={expression} />
                <Keypad
                  mode={calculatorMode}
                  handleInput={handleInput}
                  handleParentheses={handleParentheses}
                  calculate={calculate}
                  clear={clear}
                />
              </Box>
            </Stack>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
