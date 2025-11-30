import { IoClose } from "react-icons/io5";
import TransactionForm from "./TransactionForm";

type TransactionModalProps = {
  type: "income" | "expense";
  onClose: () => void;
};

const TransactionModal = ({ type, onClose }: TransactionModalProps) => {
  const labels = {
    income: "Einkommen hinzufügen",
    expense: "Ausgaben hinzufügen",
  };

  return (
    <div className="overlay flex items-center justify-center z-100 px-8">
      <div className="bg-white w-100 h-auto rounded-md p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-medium">{labels[type]}</h2>
          <button
            className="cursor-pointer text-gray-500 hover:text-black"
            onClick={onClose}
          >
            <IoClose className="size-5" />
          </button>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <TransactionForm type={type} />
        </div>
      </div>
    </div>
  );
};
export default TransactionModal;
