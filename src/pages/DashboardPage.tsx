import TransactionPieChart from "@/components/charts/TransactionPieChart";
import SummaryCardGroup from "@/components/dashboard/SummaryCardGroup";
import GridTransactions from "@/components/transaction/GridTransactions";
import { DASHBOARD_CARDS } from "@/constants/dashboard-cards";
import useTransactionsStore from "@/storage/useTransactionsStore";
import { calcTotal } from "@/utils/calcTotal";
const DashboardPage = () => {
  const transactions = useTransactionsStore((state) => state.transactions);

  const totalIncome = calcTotal(transactions, "income");
  const totalExpense = calcTotal(transactions, "expense");
  const totalBalance = transactions.reduce(
    (acc, { amount }) => acc + amount,
    0
  );

  const enrichedCards = [
    {
      ...DASHBOARD_CARDS[0],
      value: totalBalance,
    },
    {
      ...DASHBOARD_CARDS[1],
      value: totalIncome,
    },
    {
      ...DASHBOARD_CARDS[2],
      value: totalExpense,
    },
  ];

  const recentTransactions = [...transactions]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

  console.log(recentTransactions);

  return (
    <>
      <div className="mt-4">
        <SummaryCardGroup cards={enrichedCards} />
      </div>

      <div className="w-full mt-6 p-4 rounded-md custom-shadow">
        <h2 className="font-medium text-lg">Chart Übersicht</h2>
        <TransactionPieChart
          income={totalIncome}
          expense={totalExpense}
          balance={totalBalance}
        />
      </div>

      <div>
        <div className="mt-6 p-4 rounded-md custom-shadow">
          <h2 className="font-medium text-lg">Letzte Transaktionen</h2>
          <GridTransactions data={recentTransactions} />
        </div>
      </div>
    </>
  );
};
export default DashboardPage;
