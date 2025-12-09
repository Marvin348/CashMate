import IncomeExpenseChart from "@/components/charts/IncomeExpenseChart";
import TransactionPieChart from "@/components/charts/TransactionPieChart";
import SummaryCardGroup from "@/components/dashboard/SummaryCardGroup";
import GridTransactions from "@/components/transaction/GridTransactions";
import { FaArrowRight } from "react-icons/fa";
import { DASHBOARD_CARDS } from "@/constants/dashboard-cards";
import useTransactionsStore from "@/storage/useTransactionsStore";
import { calcTotal } from "@/utils/calcTotal";
import { getRecentTransactions } from "@/utils/getRecentTransactions";
import { Link } from "react-router";

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

  const recentTransactions = getRecentTransactions(transactions);
  const recentIncomeTransactions = getRecentTransactions(
    transactions,
    "income"
  );
  const recentExpenseTransactions = getRecentTransactions(
    transactions,
    "expense"
  );

  return (
    <>
      <div className="mt-4">
        <SummaryCardGroup cards={enrichedCards} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-6 mt-6">
        <div className="w-full p-4 rounded-md custom-shadow">
          <h2 className="font-medium text-lg">Chart Übersicht</h2>
          <div className="w-full h-full">
            <TransactionPieChart
              income={totalIncome}
              expense={totalExpense}
              balance={totalBalance}
            />
          </div>
        </div>

        <div className="w-full p-4 rounded-md custom-shadow">
          <h2 className="font-medium text-lg mb-2">Letzte Transaktionen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:grid-cols-1">
            <GridTransactions data={recentTransactions} showActions={false} />
          </div>
        </div>
      </div>

      <div className="mt-6 w-full h-[400px] p-4 rounded-md custom-shadow">
        <IncomeExpenseChart data={transactions} />
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-6">
        <div className="w-full p-4 rounded-md custom-shadow">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-lg mb-2">Letzte Einkommen</h2>
            <Link className="text-gray-700 hover:text-black" to="/income">
              <FaArrowRight />
            </Link>
          </div>
          <GridTransactions data={recentIncomeTransactions} />
        </div>

        <div className="w-full p-4 rounded-md custom-shadow">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-lg mb-2">Letzte Ausgaben</h2>
            <Link className="text-gray-700 hover:text-black" to="/expense">
              <FaArrowRight />
            </Link>
          </div>
          <GridTransactions data={recentExpenseTransactions} />
        </div>
      </div>
    </>
  );
};
export default DashboardPage;
