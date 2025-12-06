import type { Transaction } from "@/types/transaction";
import { ICON_OPTIONS } from "@/constants/icon-options";
import TransactionItem from "./TransactionItem";
import useTransactionsStore from "@/storage/useTransactionsStore";

type GridTransactionsProps = {
  data: Transaction[];
  setIsModalOpen?: () => void;
  setEditingTransaction?: (value: Transaction | null) => void;
};

const GridTransactions = ({
  data,
  setIsModalOpen,
  setEditingTransaction,
}: GridTransactionsProps) => {
  const onDelete = useTransactionsStore((state) => state.deleteTransaction);

  if (data.length === 0) {
    return <div className="text-gray-500 text-sm">Keine Daten gefunden</div>;
  }

  return (
    <>
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
              onDelete={() => onDelete(trans.id)}
              onEdit={() => {
                setEditingTransaction?.(trans);
                setIsModalOpen?.();
              }}
            />
          </div>
        );
      })}
    </>
  );
};
export default GridTransactions;
