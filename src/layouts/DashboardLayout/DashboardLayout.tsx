import MainHeader from "@components/MainHeader/MainHeader";
import { main, content } from "./styles";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "@components/Loader/Loader";

const DashboardLayout = () => (
  <div css={main}>
    <div className="main-content-container">
      <MainHeader />
      <div id="scroll-container" css={content}>
        <main className="main-content-wrapper">
          <Suspense fallback={<Loader />}></Suspense>
          <Outlet />
        </main>
      </div>
    </div>
  </div>
);

export default DashboardLayout;
