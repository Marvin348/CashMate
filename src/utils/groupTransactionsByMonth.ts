import type { Transaction } from "@/types/transaction";
import type { MonthlySummary } from "@/types/monthly-summary";

export const groupTransactionsByMonth = (transactions: Transaction[]) => {
  const monthly: Record<string, MonthlySummary> = {};

  transactions.forEach((t) => {
    const month = t.date.slice(0, 7);

    if (!monthly[month]) {
      monthly[month] = { month, income: 0, expense: 0 };
    }

    if (t.type === "income") {
      monthly[month].income += t.amount;
    } else {
      monthly[month].expense += t.amount;
    }
  });

  return Object.values(monthly).sort((a, b) => a.month.localeCompare(b.month));
};
