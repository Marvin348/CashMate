import type { Transaction } from "@/types/transaction";
import { ICON_OPTIONS } from "@/constants/icon-options";
import TransactionItem from "@/components/transaction/TransactionItem";
import useTransactionsStore from "@/storage/useTransactionsStore";
import NoData from "@/components/NoData";
import { showTransactionDeleted } from "@/utils/toast";

type GridTransactionsProps = {
  data: Transaction[];
  setIsModalOpen?: () => void;
  showActions?: boolean;
};

const GridTransactions = ({
  data,
  setIsModalOpen,
  showActions,
}: GridTransactionsProps) => {
  const onDelete = useTransactionsStore((state) => state.deleteTransaction);
  const setEditTransaction = useTransactionsStore(
    (state) => state.setEditTransaction
  );

  if (data.length === 0) {
    return <NoData message="Keine Transaktionen gefunden" />;
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
              onDelete={() => {
                onDelete(trans.id);
                showTransactionDeleted();
              }}
              onEdit={() => {
                setEditTransaction?.(trans);
                setIsModalOpen?.();
              }}
              showActions={showActions}
            />
          </div>
        );
      })}
    </>
  );
};
export default GridTransactions;
