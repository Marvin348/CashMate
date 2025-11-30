import { useState } from "react";
import TransactionModal from "../components/transaction/TransactionModal";
import { Button } from "@/components/ui/button";
import IncomeChart from "@/components/income/IncomeChart";
import useTransactionsStore from "@/storage/useTransactionsStore";
import GridTransactions from "@/components/GridTransactions";

type TransactionType = "expense" | "income";

const IncomePage = () => {
  const type: TransactionType = "income";

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const transactions = useTransactionsStore((state) => state.transactions);

  const incomeTransactions = transactions.filter((t) => t.type === type);

  console.log(incomeTransactions);

  return (
    <div>
      <Button variant="outline" onClick={() => setIsModalOpen(true)}>
        + Einkommen
      </Button>
      {isModalOpen && (
        <TransactionModal type={type} onClose={() => setIsModalOpen(false)} />
      )}
      <div className="mt-8 w-full h-[300px]">
        <IncomeChart data={incomeTransactions} />
      </div>
      <div>
        <GridTransactions data={incomeTransactions} />
      </div>
    </div>
  );
};
export default IncomePage;
