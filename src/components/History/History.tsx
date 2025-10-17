import { Box, Typography, List, Button } from "@mui/material";
import HistoryItem from "./HistoryItem";
import type { HistoryEntry } from "../../hooks/useCalculator";
import DeleteIcon from "@mui/icons-material/Delete";

interface HistoryProps {
  history: HistoryEntry[];
  clearHistory: () => void;
}

const History = ({ history, clearHistory }: HistoryProps) => {
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
          overflowY: "auto", // Включаем прокрутку
          p: 1,
        }}
      >
        <List>
          {history.map((entry, index) => (
            <HistoryItem key={index} entry={entry} />
          ))}
        </List>
      </Box>
      <Button variant="contained" onClick={clearHistory}>
        <DeleteIcon color="error" />
        Очистить
      </Button>
    </Box>
  );
};

export default History;
