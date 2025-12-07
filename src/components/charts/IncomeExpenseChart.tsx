import type { Transaction } from "@/types/transaction";
import { formatDateDE } from "@/utils/formData";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { groupTransactionsByMonth } from "@/utils/groupTransactionsByMonth";
import DashboardTooltip from "../DashboardTooltip";
import CustomLegend from "../CustomLegend";

type IncomeExpenseChartProps = {
  data: Transaction[];
};

const IncomeExpenseChart = ({ data }: IncomeExpenseChartProps) => {
  const LEGENT_LABELS = {
    income: "Einkommen",
    expense: "Ausgaben",
  };

  const chartData = groupTransactionsByMonth(data);

  console.log(chartData);

  return (
    <LineChart
      style={{
        width: "100%",
        height: "100%",
        aspectRatio: 1.618,
      }}
      responsive
      data={chartData}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <XAxis
        dataKey="month"
        tickFormatter={formatDateDE}
        domain={["auto", "auto"]}
        tick={{ fontSize: 12, fontWeight: 500 }}
        tickLine={false}
        pointerEvents="none"
      />
      <YAxis
        width="auto"
        tick={{ fontSize: 12, fontWeight: 500 }}
        tickLine={false}
        pointerEvents="none"
      />
      <Tooltip cursor={false} content={<DashboardTooltip />} />
      <Legend content={<CustomLegend />} />
      <Line
        type="monotone"
        dataKey="income"
        stroke="#f97316"
        activeDot={{ r: 8 }}
        strokeWidth={3}
        pointerEvents="none"
      />
      <Line
        type="monotone"
        dataKey="expense"
        stroke="#e53935"
        strokeWidth={3}
        pointerEvents="none"
      />
    </LineChart>
  );
};
export default IncomeExpenseChart;
