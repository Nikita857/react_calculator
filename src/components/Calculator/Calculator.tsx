import { Paper, Stack, Box } from "@mui/material";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";
import History from "../History/History";
import type { HistoryEntry } from "../../hooks/useCalculator";

interface CalculatorProps {
  isHistoryOpen: boolean;
  history: HistoryEntry[];
  calculatorMode: "normal" | "scientific";
  handleInput: (value: string) => void;
  handleParentheses: () => void;
  calculate: () => void;
  clear: () => void;
  expression: string;
}

const Calculator = ({
  isHistoryOpen,
  history,
  calculatorMode,
  handleInput,
  handleParentheses,
  calculate,
  clear,
  expression,
}: CalculatorProps) => {
  return (
    <Paper
      elevation={3}
      sx={{
        flex: 1, // Allow paper to grow
        p: 3,
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack direction="row" sx={{ height: "100%" }}>
        {/* History Panel (Left) - Conditionally rendered */}
        {isHistoryOpen && (
          <Box
            sx={{
              width: "45%",
              height: "100%",
              p: 2,
              borderRight: "1px solid #2c3e50",
            }}
          >
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
  );
};
export default Calculator;
