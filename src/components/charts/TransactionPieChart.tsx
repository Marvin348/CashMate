import { PieChart, Pie, ResponsiveContainer, Label, Legend } from "recharts";
import CustomLegend from "../CustomLegend";

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
    { name: "Einnahmen", value: income, fill: "#f97316" },
    { name: "Ausgaben", value: expense, fill: "#e53935" },
  ];

  // { name: "Gesamtsumme", value: balance, fill: "#4c51bf" },

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
            value={`${balance}€`}
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
