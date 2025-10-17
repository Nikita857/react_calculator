import { Paper, Stack } from "@mui/material";
import CalculatorButton from "../Button/Button";
import { buttonConfig} from "../../config/buttons";
import type { ButtonConfig } from "../../config/buttons";

interface KeypadProps {
  mode: 'normal' | 'scientific';
  handleInput: (value: string) => void;
  handleParentheses: () => void;
  calculate: () => void;
  clear: () => void;
}

const Keypad = ({ mode, handleInput, handleParentheses, calculate, clear }: KeypadProps) => {

  const layout = buttonConfig[mode];

  const handleButtonClick = (button: ButtonConfig) => {
    switch (button.type) {
      case 'digit':
      case 'operator':
      case 'decimal':
        handleInput(button.value);
        break;
      case 'action':
        if (button.value === 'AC') clear();
        break;
      case 'parentheses':
        handleParentheses();
        break;
      case 'equals':
        calculate();
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
      }}
    >
      <Stack spacing={1}>
        {layout.map((row, rowIndex) => (
          <Stack key={rowIndex} direction="row" spacing={1}>
            {row.map((button) => (
              <CalculatorButton
                key={button.label}
                {...button.props}
                onClick={() => handleButtonClick(button)}
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