import { Paper } from "@mui/material"

interface DisplayProps {
  expression: string
}

const Display = ({expression}: DisplayProps) => {
    return (
              <Paper
                elevation={1}
                sx={{
                  flex: "0 0 30%",
                  mb: 2,
                  borderRadius: "12px",
                  backgroundColor: "#2c3e50",
                  p: 3,
                  textAlign: "right",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <div
                  style={{
                    color: "white",
                    fontSize: "3rem",
                    fontWeight: "300",
                  }}
                >
                  {expression}
                </div>
              </Paper>
    )
}
export default Display;