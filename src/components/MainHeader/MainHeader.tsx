import { FC } from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { headerContainer } from "./styles";
import { URLS } from "@constants/urls";
import { Link } from "react-router-dom";

const MainHeader: FC = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#3386b8" }} css={headerContainer}>
      <Toolbar className="toolbar-container">
        <Link className="logo-container" to={URLS.root}>
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
          <Link to={URLS.profile} className="list-item">
            Profile
          </Link>
        </li>
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
