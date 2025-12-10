import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import CustomTooltip from "@/components/charts/CustomTooltip";
import { formatDateDE } from "@/utils/formData";
import type { Transaction } from "@/types/transaction";
import { PAGE_COLORS } from "@/constants/colors";
import NoData from "@/components/NoData";
PAGE_COLORS;

type ChartProps = {
  data: Transaction[];
  type: "income" | "expense";
};

const TransactionAreaChart = ({ data, type }: ChartProps) => {

  if (data.length === 0)
    return <NoData message="📉​ Keine Daten für das Diagramm" />;

  return (
    <AreaChart
      style={{
        width: "100%",
        height: "100%",
      }}
      responsive
      data={data}
      margin={{
        top: 10,
        right: 10,
        left: 10,
        bottom: 30,
      }}
    >
      <XAxis
        dataKey="date"
        tickFormatter={formatDateDE}
        tickLine={false}
        axisLine={false}
        tick={{ fontSize: 12, fontWeight: 500 }}
        pointerEvents="none"
      />
      <YAxis
        width="auto"
        domain={["auto", "auto"]}
        tickLine={false}
        axisLine={false}
        tick={{ fontSize: 12, fontWeight: 500 }}
        pointerEvents="none"
      />
      <Tooltip cursor={false} content={<CustomTooltip type={type} />} />
      <Area
        type="monotone"
        dataKey="amount"
        stroke={type === "income" ? PAGE_COLORS.income : PAGE_COLORS.expense}
        fill={type === "income" ? PAGE_COLORS.income : PAGE_COLORS.expense}
        strokeWidth={3}
        pointerEvents="none"
        activeDot={{ r: 6 }}
        dot={false}
      />
    </AreaChart>
  );
};
export default TransactionAreaChart;
