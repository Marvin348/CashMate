import { useState } from "react";
import TransactionModal from "@/components/transaction/TransactionModal";
import { Button } from "@/components/ui/button";
import useTransactionsStore from "@/storage/useTransactionsStore";
import GridTransactions from "@/components/transaction/GridTransactions";
import TransactionAreaChart from "@/components/charts/TransactionAreaChart";
import type { Transaction } from "@/types/transaction";

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
            <h2 className="font-bold text-xl">
              {type === "income" ? "Einnahmen im Blick" : "Ausgaben im Blick"}
            </h2>
            <p className="text-sm text-gray-600">
              {type === "income"
                ? "Behalte deine Einnahmen im Auge und sieh, wohin dein Geld fließt."
                : "Verfolge deine Ausgaben und entdecke Sparpotenziale im Alltag."}
            </p>
          </div>
          <Button variant="outline" onClick={() => setIsModalOpen(true)}>
            {type === "income" ? "+ Einkommen" : "+ Ausgaben"}
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
          {type === "income" ? "Alle Einnahmen" : "Alle Ausgaben"}
        </h2>
        <GridTransactions
          data={filtered}
          setIsModalOpen={() => setIsModalOpen(true)}
          setEditingTransaction={setEditingTransaction}
        />
      </div>
    </>
  );
};
export default TransactionPage;
