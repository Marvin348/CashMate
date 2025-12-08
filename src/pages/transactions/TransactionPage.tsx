import { useState } from "react";
import TransactionModal from "@/components/transaction/TransactionModal";
import { Button } from "@/components/ui/button";
import useTransactionsStore from "@/storage/useTransactionsStore";
import GridTransactions from "@/components/transaction/GridTransactions";
import TransactionAreaChart from "@/components/charts/TransactionAreaChart";
import type { Transaction } from "@/types/transaction";
import PageHeader from "@/components/PageHeader";

type TransactionPageProps = {
  type: "expense" | "income";
};

const TransactionPage = ({ type }: TransactionPageProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingTransaction, setEditingTransaction] =
    useState<Transaction | null>(null);

  const transactions = useTransactionsStore((state) => state.transactions);

  const filtered = transactions.filter((t) => t.type === type);

  console.log(filtered);
  console.log(editingTransaction);

  return (
    <>
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

      <div className="mt-4 p-4 w-full custom-shadow rounded-md">
        <div className="flex items-center justify-between mb-6 sm:mb-10">
          <div className="">
            <PageHeader type={type} />
          </div>
          <Button variant="outline" onClick={() => setIsModalOpen(true)}>
            {type === "income" ? "+ Einnahmen" : "+ Ausgaben"}
          </Button>
        </div>

        {filtered.length >= 1 ? (
          <div className="w-full h-[300px]">
            <TransactionAreaChart data={filtered} type={type} />
          </div>
        ) : (
          <div>Noch keine Daten vorhanden</div>
        )}
      </div>

      <div className="mt-6 p-4 custom-shadow rounded-md">
        <h2 className="font-bold text-lg mb-4">
          {type === "income" ? "Alle Einkommen" : "Alle Ausgaben"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 lg:gap-x-12 gap-x-8">
          <GridTransactions
            data={filtered}
            setIsModalOpen={() => setIsModalOpen(true)}
            setEditingTransaction={setEditingTransaction}
          />
        </div>
      </div>
    </>
  );
};
export default TransactionPage;
