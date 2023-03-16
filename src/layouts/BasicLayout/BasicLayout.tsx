import Loader from "@components/Loader/Loader";
import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";

const BasicLayout: FC = () => (
  <Suspense fallback={<Loader />}>
    <Outlet />
  </Suspense>
);

export default BasicLayout;
