import { Paper, Stack } from "@mui/material";
import CalculatorButton from "../Button/Button";
import { buttonConfig } from "../../config/buttons";
import type { ButtonConfig } from "../../config/buttons";

interface KeypadProps {
  mode: "normal" | "scientific";
  handleInput: (value: string) => void;
  handleParentheses: () => void;
  handleBackspace: () => void;
  calculate: () => void;
  clear: () => void;
}

const Keypad = ({
  mode,
  handleInput,
  handleParentheses,
  calculate,
  clear,
  handleBackspace,
}: KeypadProps) => {
  const layout = buttonConfig[mode];

  const handleButtonClick = (button: ButtonConfig) => {
    switch (button.type) {
      case "digit":
      case "operator":
      case "decimal":
        handleInput(button.value);
        break;
      case "action":
        if (button.value === "AC") clear();
        break;
      case "parentheses":
        handleParentheses();
        break;
      case "equals":
        calculate();
        break;
      case "backspace":
        handleBackspace();
        break;
      default:
        break;
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{
        flex: 1,
        borderRadius: "12px",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack
        spacing={1}
        sx={{ flex: 1, display: "flex", flexDirection: "column" }}
      >
        {layout.map((row, rowIndex) => (
          <Stack key={rowIndex} direction="row" spacing={1} sx={{ flex: 1 }}>
            {row.map((button) => (
              <CalculatorButton
                key={button.label}
                {...button.props}
                onClick={() => handleButtonClick(button)}
                sx={{ flex: 1, width: "100%" }}
              >
                {button.label}
              </CalculatorButton>
            ))}
          </Stack>
        ))}
      </Stack>
    </Paper>
  );
};

export default Keypad;
