import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import type { Transaction } from "@/types/transaction";
import { formatDateDE } from "@/utils/formData";
import CustomTooltip from "../CustomTooltip";

type IncomeChartProps = {
  data: Transaction[];
};

const IncomeChart = ({ data }: IncomeChartProps) => {

  return (
    <LineChart
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
        bottom: 0,
      }}
    >
      <XAxis
        dataKey="date"
        tickFormatter={formatDateDE}
        tickLine={false}
        tick={{ fontSize: 12, fontWeight: 500 }}
      />
      <YAxis
        domain={["auto", "auto"]}
        tickLine={false}
        tick={{ fontSize: 12, fontWeight: 500 }}
      />
      <Tooltip content={<CustomTooltip />} cursor={false} />
      <Line
        type="monotone"
        dataKey="amount"
        stroke="#4c51bf"
        activeDot={{ r: 8 }}
        strokeWidth={3}
      />
    </LineChart>
  );
};
export default IncomeChart;
