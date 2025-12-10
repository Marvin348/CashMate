import type { Transaction } from "@/types/transaction";
import { formatDateDE } from "@/utils/formData";
import { PAGE_COLORS } from "@/constants/colors";

type TooltipProps = {
  active?: boolean;
  payload?: { payload: Transaction }[];
  type: "income" | "expense";
};

const CustomTooltip = ({ active, payload, type }: TooltipProps) => {
  if (!active || !payload || !payload.length) return null;

  const data = payload[0].payload;
  return (
    <div className="bg-white border border-gray-200 p-3 rounded-md shadow text-xs">
      <p className="font-medium mb-1">{data.name}</p>
      <p className="border-b pb-1">
        Total:{" "}
        <span
          style={{
            color: type === "income" ? PAGE_COLORS.income : PAGE_COLORS.expense,
          }}
          className="font-semibold"
        >
          {data.amount}€
        </span>
      </p>
      <p className="pt-1">{formatDateDE(data.date)}</p>
    </div>
  );
};
export default CustomTooltip;
