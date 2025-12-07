import type { Transaction } from "@/types/transaction";
import { formatDateDE } from "@/utils/formData";
import { IoTrendingUpOutline, IoTrendingDownOutline } from "react-icons/io5";
import type { IconType } from "react-icons/lib";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import TransactionActionsMenu from "./TransactionActionsMenu";
import { PAGE_COLORS } from "@/constants/colors";

type TransactionItemProps = {
  trans: Transaction;
  icon?: {
    icon: IconType;
    value: string;
    bg: string;
    color: string;
  };
  onDelete: () => void;
  onEdit: () => void;
};

const TransactionItem = ({
  trans,
  icon,
  onDelete,
  onEdit,
}: TransactionItemProps) => {
  const { name, date, amount } = trans;
  const Icon = icon?.icon;

  const [isOpen, setIsOpen] = useState(false);

  const type = trans.type;

  return (
    <>
      {Icon && (
        <div
          className={`${icon.bg} ${icon.color} size-8 rounded-full flex items-center justify-center`}
        >
          <Icon />
        </div>
      )}
      <div className="flex-1 min-w-0"> 
        <p className="font-semibold wrap-break-word truncate">{name}</p>
        <p className="text-gray-500 text-xs">{formatDateDE(date)}</p>
      </div>
      <div style={{
                  color: type === "income" ? PAGE_COLORS.income : PAGE_COLORS.expense,
                }}
        className={`flex items-center gap-1 ml-auto text-xs p-1 rounded-md font-medium ${
          type === "income"
            ? "bg-green-500/20"
            : "bg-red-500/20"
        }`}
      >
        {`${amount}€`}
        {type === "income" ? (
          <IoTrendingUpOutline />
        ) : (
          <IoTrendingDownOutline />
        )}
      </div>
      <button
        className="text-gray-700 hover:text-black"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <BsThreeDotsVertical />
      </button>
      {isOpen && (
        <TransactionActionsMenu
          onDelete={() => {
            setIsOpen(false);
            onDelete();
          }}
          onEdit={() => {
            onEdit();
            setIsOpen(false);
          }}
        />
      )}
    </>
  );
};
export default TransactionItem;
