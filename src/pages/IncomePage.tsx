import { useState } from "react";
import TransactionModal from "../components/transaction/TransactionModal";
import { Button } from "@/components/ui/button";
import useTransactionsStore from "@/storage/useTransactionsStore";
import GridTransactions from "@/components/transaction/GridTransactions";
import TransactionAreaChart from "@/components/charts/TransactionAreaChart";
import type { Transaction } from "@/types/transaction";

type TransactionType = "expense" | "income";

const IncomePage = () => {
  const type: TransactionType = "income";

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingTransaction, setEditingTransaction] =
    useState<Transaction | null>(null);

  const transactions = useTransactionsStore((state) => state.transactions);

  const incomeTransactions = transactions.filter((t) => t.type === type);

  console.log(incomeTransactions);

  console.log(editingTransaction);

  return (
    <div>
      {isModalOpen && (
        <TransactionModal
          type={type}
          onClose={() => {
            setEditingTransaction(null);
            setIsModalOpen(false);
          }}
          editingTransaction={editingTransaction}
        />
      )}

      <div className="mt-8 p-4 w-full h-[300px] custom-shadow rounded-md">
        <div className="text-right mb-2">
          <Button variant="outline" onClick={() => setIsModalOpen(true)}>
            + Einkommen
          </Button>
        </div>
        {incomeTransactions.length >= 1 ? (
          <TransactionAreaChart data={incomeTransactions} type="income" />
        ) : (
          <div>Noch keine Daten vorhanden</div>
        )}
      </div>

      <div className="mt-6 p-4 custom-shadow rounded-md">
        <h2 className="font-bold text-lg mb-4">Alle Einnahmen</h2>
        <GridTransactions
          data={incomeTransactions}
          type="income"
          setIsModalOpen={() => setIsModalOpen(true)}
          setEditingTransaction={setEditingTransaction}
        />
      </div>
    </div>
  );
};
export default IncomePage;
