import type { Transaction } from "@/types/transaction";

export const getRecentTransactions = (
  transactions: Transaction[],
  type?: "income" | "expense"
) => {
  let result = [...transactions];

  if (type) {
    result = result.filter((t) => t.type === type);
  }

  return result
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);
};
