import { Paper } from "@mui/material"
import CalculatorButton from "../Button/Button"

interface KeypadProps {
    handleInput: (value: string) => void
    handleParentheses: () => void
    calculate: () => void
    clear: () => void
}

const Keypad = ({handleInput, handleParentheses, calculate, clear}: KeypadProps) => {
    return (
              <Paper
                elevation={0}
                sx={{
                  flex: 1,
                  borderRadius: "12px",
                  backgroundColor: "transparent",
                }}
              >
                {/* First Row */}
                <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                  <CalculatorButton clear onClick={clear}>
                    AC
</CalculatorButton>     
                  <CalculatorButton operation onClick={handleParentheses}>
                    ()
                  </CalculatorButton>
                  <CalculatorButton operation onClick={() => handleInput("%")}>
                    %
                  </CalculatorButton>
                  <CalculatorButton operation onClick={() => handleInput("÷")}>
                    ÷
                  </CalculatorButton>
                </div>

                {/* Second Row */}
                <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                  <CalculatorButton onClick={() => handleInput("7")}>
                    7
                  </CalculatorButton>
                  <CalculatorButton onClick={() => handleInput("8")}>
                    8
                  </CalculatorButton>
                  <CalculatorButton onClick={() => handleInput("9")}>
                    9
                  </CalculatorButton>
                  <CalculatorButton operation onClick={() => handleInput("*")}>
                    ×
                  </CalculatorButton>
                </div>

                {/* Third Row */}
                <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                  <CalculatorButton onClick={() => handleInput("4")}>
                    4
                  </CalculatorButton>
                  <CalculatorButton onClick={() => handleInput("5")}>
                    5
                  </CalculatorButton>
                  <CalculatorButton onClick={() => handleInput("6")}>
                    6
                  </CalculatorButton>
                  <CalculatorButton operation onClick={() => handleInput("-")}>
                    -
                  </CalculatorButton>
                </div>

                {/* Fourth Row */}
                <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                  <CalculatorButton onClick={() => handleInput("1")}>
                    1
                  </CalculatorButton>
                  <CalculatorButton onClick={() => handleInput("2")}>
                    2
                  </CalculatorButton>
                  <CalculatorButton onClick={() => handleInput("3")}>
                    3
                  </CalculatorButton>
                  <CalculatorButton operation onClick={() => handleInput("+")}>
                    +
                  </CalculatorButton>
                </div>

                {/* Fifth Row */}
                <div style={{ display: "flex", gap: "8px" }}>
                  <CalculatorButton zero onClick={() => handleInput("0")}>
                    0
                  </CalculatorButton>
                  <CalculatorButton onClick={() => handleInput(",")}>
                    ,
                  </CalculatorButton>
                  <CalculatorButton equals onClick={calculate}>
                    =
                  </CalculatorButton>
                </div>
              </Paper>
    )
}
export default Keypad;