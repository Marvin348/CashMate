import type { Transaction } from "@/types/transaction";
import { formatDateDE } from "@/utils/formData";

type TooltipProps = {
  active?: boolean;
  payload?: { payload: Transaction }[];
};

const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (!active || !payload || !payload.length) return null;

  const data = payload[0].payload;

  return (
    <div className="bg-white border border-gray-200 p-3 rounded-md shadow text-xs">
        <p className="font-bold mb-1">{data.name}</p>
      <p className="border-b pb-1">
        Total: <span className="font-semibold text-custom">{data.amount}</span>
      </p>
      <p className="pt-1">{formatDateDE(data.date)}</p>
    </div>
  );
};
export default CustomTooltip;
