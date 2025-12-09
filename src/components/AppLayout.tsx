import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router";
import useTransactionsStore from "@/storage/useTransactionsStore";
const AppLayout = () => {
  const transactions = useTransactionsStore((state) => state.transactions);
  const editTransaction = useTransactionsStore(
    (state) => state.editTransaction
  );

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  console.log(transactions);
  console.log(editTransaction);

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
