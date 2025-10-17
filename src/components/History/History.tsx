import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

// Определяем props: компонент принимает массив строк
interface HistoryProps {
  history: string[];
}

const History = ({ history }: HistoryProps) => {
  return (
    <Box
      sx={{
        height: "100%",
        p: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5" gutterBottom>
        История
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          overflow: "auto", // Включаем прокрутку
          border: "1px solid #2c3e50",
          borderRadius: "8px",
          p: 1,
        }}
      >
        <List>
          {history.map((entry, index) => (
            <ListItem key={index} disablePadding>
              <ListItemText
                primary={entry}
                primaryTypographyProps={{
                  style: {
                    textAlign: "right",
                    wordBreak: "break-all", // Перенос длинных строк
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default History;
