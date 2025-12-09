import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Transaction } from "@/types/transaction";

type TransactionFormData = {
  type: "income" | "expense";
  icon: string;
  name: string;
  amount: number;
  category: string;
  date: string;
};

type StoreState = {
  transactions: Transaction[];
  editTransaction: Transaction | null;
  addTransaction: (newObject: TransactionFormData) => void;
  setEditTransaction: (transaction: Transaction | null) => void;
  deleteTransaction: (id: string) => void;
  updateTransaction: (id: string, updatedData: Partial<Transaction>) => void;
};

const useTransactionsStore = create<StoreState>()(
  persist(
    (set) => ({
      transactions: [],
      editTransaction: null,

      addTransaction: (newObject) =>
        set((state) => {
          const id: string = crypto.randomUUID();
          const updatedObject = { ...newObject, id };

          return { transactions: [...state.transactions, updatedObject] };
        }),

      setEditTransaction: (transaction) =>
        set({ editTransaction: transaction }),

      deleteTransaction: (id) =>
        set((state) => ({
          transactions: state.transactions.filter((trans) => trans.id !== id),
        })),

      updateTransaction: (id, updatedData) =>
        set((state) => ({
          transactions: state.transactions.map((trans) =>
            trans.id === id ? { ...trans, ...updatedData } : trans
          ),
        })),
    }),

    {
      name: "transactions",
      partialize: (state) => ({ transactions: state.transactions }),
    }
  )
);

export default useTransactionsStore;
