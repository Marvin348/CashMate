import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router";
const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <div>
      <Header isSidebarOpen={() => setIsSidebarOpen(true)} />
      <div className="flex">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <main className="mt-4 w-full max-w-[1600px] mx-auto px-8 flex-1 pb-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default AppLayout;
