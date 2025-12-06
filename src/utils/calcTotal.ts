import type { Transaction } from "@/types/transaction";

export const calcTotal = (array: Transaction[], type: "income" | "expense") =>
  array
    .filter((t) => t.type === type)
    .reduce((acc, { amount }) => acc + amount, 0);
