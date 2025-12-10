import type { Transaction } from "@/types/transaction";
import { formatDateDE } from "@/utils/formData";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { groupTransactionsByMonth } from "@/utils/groupTransactionsByMonth";
import DashboardTooltip from "@/components/charts/DashboardTooltip";
import CustomLegend from "@/components/charts/CustomLegend";
import { DASHBOARD_COLORS } from "@/constants/colors";
import NoData from "@/components/NoData";

type IncomeExpenseChartProps = {
  data: Transaction[];
};

const IncomeExpenseChart = ({ data }: IncomeExpenseChartProps) => {
  if (data.length === 0)
    return <NoData message="📉​ Keine Daten für das Diagramm" />;

  const chartData = groupTransactionsByMonth(data);

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
        stroke={DASHBOARD_COLORS.income}
        fill={DASHBOARD_COLORS.income}
        activeDot={false}
        strokeWidth={4}
        pointerEvents="none"
      />
      <Line
        type="monotone"
        dataKey="expense"
        stroke={DASHBOARD_COLORS.expense}
        fill={DASHBOARD_COLORS.expense}
        activeDot={false}
        strokeWidth={4}
        pointerEvents="none"
      />
    </LineChart>
  );
};
export default IncomeExpenseChart;
