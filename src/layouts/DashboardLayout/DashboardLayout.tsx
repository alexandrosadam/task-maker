import MainHeader from "@components/MainHeader/MainHeader";
import { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <MainHeader />
      <main className="main-content">{children}</main>
    </>
  );
};

export default DashboardLayout;
