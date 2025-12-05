import SummaryCard from "./SummaryCard";
import { DASHBOARD_CARDS } from "@/constants/dashboard-cards";

const SummaryCardGroup = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {DASHBOARD_CARDS.map((card) => (
          <div
            key={card.label}
            className="rounded-md custom-shadow"
          >
            <SummaryCard card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default SummaryCardGroup;
