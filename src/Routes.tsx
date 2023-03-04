import { URLS } from "@constants/urls";
import { FC } from "react";
import { Routes as Switch, Route, BrowserRouter as Router } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";
import Dashboard from "@views/Dashboard/Dashboard";
import Profile from "@views/Profile/Profile";
import Statistics from "@views/Statistics/Statistics";
import Calendar from "@views/Calendar/Calendar";

const Routes: FC = () => (
  <>
    <Router>
      <DashboardLayout>
        <Switch>
          <Route path={URLS.root} element={<Dashboard />} />
          <Route path={URLS.profile} element={<Profile />} />
          <Route path={URLS.statistics} element={<Statistics />} />
          <Route path={URLS.calendar} element={<Calendar />} />
        </Switch>
      </DashboardLayout>
    </Router>
  </>
);

export default Routes;
