import SummaryCard from "./SummaryCard";
import type { CardType } from "@/types/dashboard";

type SummaryCardGroupProps = {
  cards: CardType[];
};

const SummaryCardGroup = ({ cards }: SummaryCardGroupProps) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div key={card.label} className="rounded-md custom-shadow">
            <SummaryCard card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default SummaryCardGroup;
