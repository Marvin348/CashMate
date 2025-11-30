import TransactionModal from "@/components/transaction/TransactionModal";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type TransactionType = "expense" | "income";

const ExpensePage = () => {
  const type: TransactionType = "expense";

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <div>
      <Button variant="outline" onClick={() => setIsModalOpen(true)}>
        + Aushaben
      </Button>
      {isModalOpen && (
        <TransactionModal
          type={type}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};
export default ExpensePage;
