import { DASHBOARD_COLORS } from "@/constants/colors";

const CustomLegend = () => {
  return (
    <div className="flex justify-center gap-4 text-sm">
      <div className="flex items-center gap-2">
        <span
          className="size-3 rounded-full"
          style={{ backgroundColor: DASHBOARD_COLORS.income }}
        ></span>
        <span className="text-black">Einkommen</span>
      </div>

      <div className="flex items-center gap-2">
        <span
          className="size-3 rounded-full"
          style={{ backgroundColor: DASHBOARD_COLORS.expense }}
        ></span>
        <span className="text-black">Ausgaben</span>
      </div>
    </div>
  );
};
export default CustomLegend;
