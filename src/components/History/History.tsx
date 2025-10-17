import { Box, Typography, List} from "@mui/material";
import HistoryItem from "./HistoryItem";
import type { HistoryEntry } from "../../hooks/useCalculator";

interface HistoryProps {
  history: HistoryEntry[];
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
          p: 1,
        }}
      >
        <List>
          {history.map((entry, index) => (
            <HistoryItem key={index} entry={entry}/> 
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default History;
