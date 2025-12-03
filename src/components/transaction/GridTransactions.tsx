import type { Transaction } from "@/types/transaction";
import { ICON_OPTIONS } from "@/constants/icon-options";
import TransactionItem from "./TransactionItem";
import useTransactionsStore from "@/storage/useTransactionsStore";

type GridTransactionsProps = {
  data: Transaction[];
  type: "income" | "expense";
  setIsModalOpen: () => void;
  setEditingTransaction: (value: Transaction | null) => void;
};

const GridTransactions = ({
  data,
  type,
  setIsModalOpen,
  setEditingTransaction,
}: GridTransactionsProps) => {
  const onDelete = useTransactionsStore((state) => state.deleteTransaction);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
      {data.map((trans) => {
        const icon = ICON_OPTIONS.find((i) => i.value === trans.icon);

        return (
          <div
            key={trans.id}
            className="relative flex items-center gap-2 md:gap-4 border-b border-gray-100 text-sm py-2"
          >
            <TransactionItem
              icon={icon}
              trans={trans}
              type={type}
              onDelete={() => onDelete(trans.id)}
              onEdit={() => {
                setEditingTransaction(trans);
                setIsModalOpen();
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
export default GridTransactions;
