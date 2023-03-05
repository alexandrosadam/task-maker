import MainHeader from "@components/MainHeader/MainHeader";
import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

type LayoutWrapperProps = {
  children: ReactNode;
};

const LayoutWrapper: FC<LayoutWrapperProps> = ({ children }) => <>{children}</>;

export default LayoutWrapper;
