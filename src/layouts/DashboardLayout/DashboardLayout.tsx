import MainHeader from "@components/MainHeader/MainHeader";
import { FC, ReactNode } from "react";
import { main, content } from "./styles";
import { Outlet } from "react-router-dom";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout: FC = ({ children }: DashboardLayoutProps) => (
  <div css={main}>
    <div className="main-content-container">
      <MainHeader />
      <div id="scroll-container" css={content}>
        <main className="main-content-wrapper">
          <Outlet />
        </main>
      </div>
    </div>
  </div>
);

export default DashboardLayout;
