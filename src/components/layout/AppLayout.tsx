import { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <div>
      <Toaster position="top-right"/>
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
