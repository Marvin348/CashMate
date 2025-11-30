export type Transaction = {
  id: string;
  type: "income" | "expense";
  icon: string;
  name: string;
  amount: number;
  category: string;
  date: string;
};
