import { Container, Paper, CssBaseline, Stack, Box, AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [calculatorMode, setCalculatorMode] = useState<'normal' | 'scientific'>('normal');

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleHistory = () => {
    setIsHistoryOpen(!isHistoryOpen);
    handleMenuClose();
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
          <AppBar position="static" sx={{ bgcolor: "#1a2a41" }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Калькулятор
              </Typography>
            </Toolbar>
          </AppBar>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={toggleHistory}>{isHistoryOpen ? 'Скрыть' : 'Показать'} историю</MenuItem>
            <MenuItem>
              <FormControlLabel
                control={<Switch checked={calculatorMode === 'scientific'} onChange={toggleMode} />}
                label="Инженерный режим"
              />
            </MenuItem>
          </Menu>
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