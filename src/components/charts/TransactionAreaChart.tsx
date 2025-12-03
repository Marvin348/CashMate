import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import CustomTooltip from "../CustomTooltip";
import { formatDateDE } from "@/utils/formData";
import type { Transaction } from "@/types/transaction";

type ChartProps = {
  data: Transaction[];
  type: "income" | "expense";
};

const TransactionAreaChart = ({ data, type }: ChartProps) => {
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
        stroke={type === "income" ? "#22c55e" : "#ef4444"}
        fill={type === "income" ? "#22c55e" : "#ef4444"}
        strokeWidth={3}
        pointerEvents="none"
      />
    </AreaChart>
  );
};
export default TransactionAreaChart;
