import { FC } from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { AppBar, Link, Toolbar, Typography } from "@mui/material";
import { headerContainer } from "./styles";

const MainHeader: FC = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#3386b8" }} css={headerContainer}>
      <Toolbar className="toolbar-container">
        <div className="logo-container">
          <AddTaskIcon className="logo" />
          <Typography variant="h4">Daily manager</Typography>
        </div>
        <li className="navigation-items">
          <Link href="#" color="inherit" underline="hover" className="list-item">
            Statistics
          </Link>
          <Link href="#" color="inherit" underline="hover" className="list-item">
            Calendar
          </Link>
          <Link href="#" color="inherit" underline="hover" className="list-item">
            Profile
          </Link>
        </li>
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
