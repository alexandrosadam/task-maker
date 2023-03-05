import { URLS } from "@constants/urls";
import { Routes as Switch, Route, BrowserRouter as Router } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";
import Dashboard from "@views/Dashboard/Dashboard";
import Profile from "@views/Profile/Profile";
import Statistics from "@views/Statistics/Statistics";
import Calendar from "@views/Calendar/Calendar";
import Login from "@views/Login/Login";
import BasicLayout from "@layouts/BasicLayout/BasicLayout";
import React from "react";
import LayoutWrapper from "@layouts/LayoutWrapper/LayoutWrapper";

//const Login = React.lazy(() => import("@views/Login/Login"));

const Routes = () => (
  <LayoutWrapper>
    <Switch>
      <Route path={URLS.root} element={<Login />} />

      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path={URLS.profile} element={<Profile />} />
        <Route path={URLS.statistics} element={<Statistics />} />
        <Route path={URLS.calendar} element={<Calendar />} />
      </Route>

      {/* <BasicLayout> */}

      {/* </BasicLayout> */}

      {/* <DashboardLayout>
        <Route path={URLS.dashboard} element={<Dashboard />} />
      </DashboardLayout> */}
      {/* <Route path={URLS.profile} element={<Profile />} />
      <Route path={URLS.statistics} element={<Statistics />} />
      <Route path={URLS.calendar} element={<Calendar />} /> */}
      {/* <Route path={URLS.dashboard}>
        <Dashboard />
      </Route> */}
      {/* <DashboardLayout>
        <Route path={URLS.profile} element={<Profile />} />
        </DashboardLayout>
        <DashboardLayout>
        <Route path={URLS.statistics} element={<Statistics />} />
        </DashboardLayout>
        <DashboardLayout>
        {/* </BasicLayout> */}
      {/* <Route path={URLS.calendar} element={<Calendar />} /> */}
      {/* </DashboardLayout> */}
    </Switch>
  </LayoutWrapper>
);

export default Routes;
