import TransactionModal from "@/components/transaction/TransactionModal";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import GridTransactions from "@/components/transaction/GridTransactions";
import useTransactionsStore from "@/storage/useTransactionsStore";
import TransactionAreaChart from "@/components/charts/TransactionAreaChart";

type TransactionType = "expense" | "income";

const ExpensePage = () => {
  const type: TransactionType = "expense";

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const transactions = useTransactionsStore((state) => state.transactions);

  const expenseTransactions = transactions.filter(
    (trans) => trans.type === type
  );

  return (
    <div>
      {isModalOpen && (
        <TransactionModal type={type} onClose={() => setIsModalOpen(false)} />
      )}

      <div className="mt-8 p-4 w-full h-[300px] shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-md">
        <div className="text-right mb-2">
          <Button variant="outline" onClick={() => setIsModalOpen(true)}>
            + Aushaben
          </Button>
        </div>
        {expenseTransactions.length >= 1 ? (
          <TransactionAreaChart data={expenseTransactions} type="expense" />
        ) : (
          <div>Noch keine Daten vorhanden</div>
        )}
      </div>

      <div className="mt-6 p-4 shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-md">
        <h2 className="font-bold text-lg mb-4">Alle Ausgaben</h2>
        <GridTransactions data={expenseTransactions} type="expense" />
      </div>
    </div>
  );
};
export default ExpensePage;
