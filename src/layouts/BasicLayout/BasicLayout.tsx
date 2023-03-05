import { CircularProgress } from "@mui/material";
import { FC, ReactNode, Suspense } from "react";
import { Outlet } from "react-router-dom";

type BasicLayoutProps = {
  children: ReactNode;
};

const BasicLayout: FC = ({ children }: BasicLayoutProps) => (
  <>
    <Outlet />
  </>
);

export default BasicLayout;
