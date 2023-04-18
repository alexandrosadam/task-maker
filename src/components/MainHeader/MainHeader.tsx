import { FC, useState, MouseEvent } from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { AppBar, Toolbar, Typography, Select, MenuItem, Menu, Button } from "@mui/material";
import { headerContainer } from "./styles";
import { URLS } from "@constants/urls";
import { Link, useNavigate } from "react-router-dom";
import authService from "@utils/services/AuthService";

const MainHeader: FC = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    setAnchorEl(null);
    navigate(URLS.profile);
  };

  const handleLogoutUser = () => {
    setAnchorEl(null);
    authService.removeTokens();
    navigate(URLS.login);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#3386b8" }} css={headerContainer}>
      <Toolbar className="toolbar-container">
        <Link className="logo-container" to={URLS.dashboard}>
          <AddTaskIcon className="logo" />
          <Typography variant="h4">Daily manager</Typography>
        </Link>
        <li className="navigation-items">
          <Link to={URLS.statistics} className="list-item">
            Statistics
          </Link>
          <Link to={URLS.calendar} className="list-item">
            Calendar
          </Link>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            className="list-item"
            onClick={handleClick}
            disableRipple
          >
            Profile
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleProfile}>Profile settings</MenuItem>
            <MenuItem onClick={handleLogoutUser}>Logout</MenuItem>
          </Menu>
        </li>
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
