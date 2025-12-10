import { PieChart, Pie, ResponsiveContainer, Label, Legend } from "recharts";
import CustomLegend from "@/components/charts/CustomLegend";
import NoData from "@/components/NoData";
import { DASHBOARD_COLORS } from "@/constants/colors";
import { formatMoney } from "@/utils/formatMoney";

type TransactionPieChartProps = {
  income: number;
  expense: number;
  balance: number;
};

const TransactionPieChart = ({
  income,
  expense,
  balance,
}: TransactionPieChartProps) => {
  const data = [
    { name: "Einnahmen", value: income, fill: DASHBOARD_COLORS.income },
    { name: "Ausgaben", value: expense, fill: DASHBOARD_COLORS.expense },
  ];

  if (!income && !expense)
    return <NoData message="📉​ Keine Daten für das Diagramm" />;

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          innerRadius="60%"
          outerRadius="80%"
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          pointerEvents="none"
        >
          <Legend content={<CustomLegend />} />
          <Label
            value={formatMoney(balance)}
            position="center"
            style={{
              fontSize: "17px",
              fontWeight: "500",
              fill: "black",
            }}
          />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
export default TransactionPieChart;
