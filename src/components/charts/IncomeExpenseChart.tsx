import type { Transaction } from "@/types/transaction";
import { formatDateDE } from "@/utils/formData";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { groupTransactionsByMonth } from "@/utils/groupTransactionsByMonth";
import DashboardTooltip from "@/components/charts/DashboardTooltip";
import CustomLegend from "@/components/charts/CustomLegend";

type IncomeExpenseChartProps = {
  data: Transaction[];
};

const IncomeExpenseChart = ({ data }: IncomeExpenseChartProps) => {
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
      <Tooltip
        cursor={{
          stroke: "transparent",
          fill: "transparent",
        }}
        content={<DashboardTooltip />}
      />
      <Legend content={<CustomLegend />} />
      <Line
        type="monotone"
        dataKey="income"
        stroke="#f97316"
        activeDot={false}
        strokeWidth={4}
      />
      <Line
        type="monotone"
        dataKey="expense"
        stroke="#e53935"
        activeDot={false}
        strokeWidth={4}
      />
    </LineChart>
  );
};
export default IncomeExpenseChart;
