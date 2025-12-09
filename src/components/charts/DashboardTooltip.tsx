import type { MonthlySummary } from "@/types/monthly-summary";
import { DASHBOARD_COLORS } from "@/constants/colors";

type DashboardTooltipProps = {
  active?: boolean;
  payload?: { payload: MonthlySummary }[];
};

const DashboardTooltip = ({ active, payload }: DashboardTooltipProps) => {
  if (!active || !payload || !payload.length) return null;

  const data = payload[0].payload;

  return (
    <div className="bg-white border border-gray-200 p-3 rounded-md shadow text-xs">
      <div className="flex items-center gap-1.5">
        <span
          className="size-2.5 rounded-sm"
          style={{ backgroundColor: DASHBOARD_COLORS.income }}
        ></span>
        <p className="font-semibold">{data.income}€</p>
      </div>
      <div className="flex items-center gap-1.5 pb-1">
        <span
          className="size-2.5 rounded-sm"
          style={{ backgroundColor: DASHBOARD_COLORS.expense }}
        ></span>
        <p className="font-semibold">{data.expense}€</p>
      </div>
      <div className="border-t border-gray-300 pt-1">
        <p>{data.month}</p>
      </div>
    </div>
  );
};
export default DashboardTooltip;
