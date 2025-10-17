import { ListItem, Typography } from "@mui/material";
import type { HistoryEntry } from "../../hooks/useCalculator";

interface HistoryItemProps {
  entry: HistoryEntry;
}

const HistoryItem = ({ entry }: HistoryItemProps) => {
  return (
    <ListItem
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end", // Выравниваем все по правому краю
        borderBottom: "1px solid #4f5b62", // Перенесли стиль сюда и немного изменили цвет
        pb: 1, // padding-bottom
        mb: 1, // margin-bottom
      }}
    >
      {/* Выражение (маленьким шрифтом) */}
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ wordBreak: "break-all" }}
      >
        {entry.expression}
      </Typography>

      {/* Результат (большим шрифтом) */}
      <Typography variant="h6" sx={{ wordBreak: "break-all" }}>
        {entry.result}
      </Typography>
    </ListItem>
  );
};

export default HistoryItem;
