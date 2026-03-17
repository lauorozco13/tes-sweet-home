import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";

const SiteLayout = () => {
  return (
    <div className="relative min-h-screen">
      <main>
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default SiteLayout;
