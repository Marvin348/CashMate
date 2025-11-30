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
  addTransaction: (newObject: TransactionFormData) => void;
};

const useTransactionsStore = create<StoreState>()(
  persist(
    (set) => ({
      transactions: [],

      addTransaction: (newObject) =>
        set((state) => {
          const id: string = crypto.randomUUID();
          const updatedObject = { ...newObject, id };

          return { transactions: [...state.transactions, updatedObject] };
        }),
    }),

    {
      name: "transactions",
      partialize: (state) => ({ transactions: state.transactions }),
    }
  )
);

export default useTransactionsStore;
