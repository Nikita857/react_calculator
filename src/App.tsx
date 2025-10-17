import { Container, Grid, Paper, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { useCalculator } from "./hooks/useCalculator";
import Display from "./components/Display/Display";
import Keypad from "./components/Keypad/Keypad";
import History from "./components/History/History";

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
  
  const {expression, handleInput, handleParentheses, calculate, clear, history} = useCalculator();

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
        <Grid
          container
          sx={{
            height: "75vh",
            width: "80vw",
            maxWidth: "1200px",
            margin: 0,
          }}
        >
          {/* History Panel (Left) */}
          <Grid item xs={4} sx={{ p: 1 }}>
            <Paper 
              elevation={3} 
              sx={{ 
                height: '100%', 
                borderRadius: '16px',
                backgroundColor: "background.paper",
              }}
            >
              <History history={history} />
            </Paper>
          </Grid>

          {/* Calculator Panel */}
          <Grid item xs={8} sx={{ p: 1 }}>
            <Paper
              elevation={3}
              sx={{
                height: "100%",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "background.paper",
                p: 3,
              }}
            >
              {/* DISPLAY */}
              <Display expression={expression}/>

              {/* KEYPAD with props from useCalculator hook */}
              <Keypad 
                handleInput={handleInput} 
                handleParentheses={handleParentheses} 
                calculate={calculate} 
                clear={clear}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;