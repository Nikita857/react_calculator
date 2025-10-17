import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  FormControlLabel,
  Switch,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface HeaderProps {
  isHistoryOpen: boolean;
  calculatorMode: "normal" | "scientific";
  toggleHistory: () => void;
  toggleMode: () => void;
}

const Header = ({
  isHistoryOpen,
  calculatorMode,
  toggleHistory,
  toggleMode,
}: HeaderProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleToggleHistory = () => {
    toggleHistory();
    handleMenuClose();
  };

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#1a2a41" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Калькулятор
          </Typography>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleToggleHistory}>
          {isHistoryOpen ? "Скрыть" : "Показать"} историю
        </MenuItem>
        <MenuItem>
          <FormControlLabel
            control={
              <Switch
                checked={calculatorMode === "scientific"}
                onChange={toggleMode}
              />
            }
            label="Инженерный режим"
          />
        </MenuItem>
      </Menu>
    </>
  );
};

export default Header;
