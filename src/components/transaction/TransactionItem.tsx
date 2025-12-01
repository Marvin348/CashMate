import type { Transaction } from "@/types/transaction";
import { formatDateDE } from "@/utils/formData";
import { IoTrendingUpOutline, IoTrendingDownOutline } from "react-icons/io5";
import type { IconType } from "react-icons/lib";

type TransactionItemProps = {
  trans: Transaction;
  icon?: {
    icon: IconType;
    value: string;
    bg: string;
    color: string;
  };
};

const TransactionItem = ({ trans, icon }: TransactionItemProps) => {
  const { name, date, amount } = trans;
  const Icon = icon?.icon;

  return (
    <>
      {Icon && (
        <div
          className={`${icon.bg} ${icon.color} rounded-full size-8 flex items-center justify-center`}
        >
          <Icon />
        </div>
      )}
      <div className="">
        <p className="font-semibold">{name}</p>
        <p className="text-gray-500 text-xs">{formatDateDE(date)}</p>
      </div>
      <div className="flex items-center gap-1 ml-auto text-xs text-green-600/90 bg-green-500/20 p-1 rounded-md font-medium">
        {`${amount}€`}
        <IoTrendingUpOutline />
      </div>
    </>
  );
};
export default TransactionItem;
