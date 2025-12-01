import type { Transaction } from "@/types/transaction";
import { ICON_OPTIONS } from "@/constants/icon-options";
import TransactionItem from "./TransactionItem";

type GridTransactionsProps = {
  data: Transaction[];
};

const GridTransactions = ({ data }: GridTransactionsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
      {data.map((trans) => {
        const icon = ICON_OPTIONS.find((i) => i.value === trans.icon);

        return (
          <div key={trans.id} className="flex items-center gap-6 border-b border-gray-100 text-sm py-2">
            <TransactionItem
              icon={icon}
              trans={trans}
            />
          </div>
        );
      })}
    </div>
  );
};
export default GridTransactions;
