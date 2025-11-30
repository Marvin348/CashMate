import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";
import useTransactionsStore from "@/storage/useTransactionsStore";
const AppLayout = () => {
  const transactions = useTransactionsStore((state) => state.transactions);

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  console.log(transactions);

  return (
    <div>
      <Header isSidebarOpen={() => setIsSidebarOpen(true)} />
      <div className="flex">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <main className="container flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default AppLayout;
