import { lazy } from "react";
import { URLS } from "@constants/urls";
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";
import LayoutWrapper from "@layouts/LayoutWrapper/LayoutWrapper";
import BasicLayout from "@layouts/BasicLayout/BasicLayout";
import PrivateRoute from "@components/PrivateRoute/PrivateRoute";

// Lazy loading
const Login = lazy(() => import("@views/Login/Login"));
const Dashboard = lazy(() => import("@views/Dashboard/Dashboard"));
const Profile = lazy(() => import("@views/Profile/Profile"));
const Statistics = lazy(() => import("@views/Statistics/Statistics"));
const Calendar = lazy(() => import("@views/Calendar/Calendar"));

const Routes = () => (
  <LayoutWrapper>
    <Switch>
      {/* Public pages */}
      <Route path={URLS.root} element={<Navigate to={URLS.login} replace />} />
      <Route element={<BasicLayout />}>
        <Route path={URLS.login} element={<Login />} />
      </Route>

      {/* Private pages */}
      <Route element={<PrivateRoute />}>
        <Route element={<DashboardLayout />}>
          <Route index path={URLS.dashboard} element={<Dashboard />} />
          <Route path={URLS.profile} element={<Profile />} />
          <Route path={URLS.statistics} element={<Statistics />} />
          <Route path={URLS.calendar} element={<Calendar />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Route>
      </Route>
    </Switch>
  </LayoutWrapper>
);

export default Routes;
