import { Paper, Box } from "@mui/material";

interface DisplayProps {
  expression: string;
}

const Display = ({ expression }: DisplayProps) => {
  return (
    <Paper
      elevation={1}
      sx={{
        flex: "0 0 30%",
        mb: 2,
        borderRadius: "12px",
        backgroundColor: "#2c3e50",
        p: 3,
        display: "flex",
        justifyContent: "flex-end",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          color: "white",
          fontSize: "3rem",
          fontWeight: "300",
          whiteSpace: "nowrap",
          overflowX: "auto",
          // Стилизация скроллбара для лучшего вида
          '&::-webkit-scrollbar': {
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(255,255,255,0.2)',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: 'rgba(255,255,255,0.4)',
          },
        }}
      >
        {expression}
      </Box>
    </Paper>
  );
};

export default Display;
