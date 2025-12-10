import type { CardType } from "@/types/dashboard";
import { formatMoney } from "@/utils/formatMoney";

type SummaryCardProps = {
  card: CardType;
};

const SummaryCard = ({ card }: SummaryCardProps) => {
  const { label, color, icon: Icon, value } = card;

  return (
    <div className="flex items-center gap-4 p-4">
      <div
        style={{ backgroundColor: color }}
        className="rounded-full size-12 flex items-center justify-center text-white"
      >
        <Icon className="text-xl" />
      </div>
      <div>
        <p className="text-gray-600">{label}</p>
        <p className="font-medium">{formatMoney(value)}</p>
      </div>
    </div>
  );
};
export default SummaryCard;
