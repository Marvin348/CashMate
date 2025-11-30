import SummaryCard from "./SummaryCard";

const SummaryCardGroup = () => {
  const CARD_INFORMATION = ["Gesamtguthaben", "Einkommen", "Ausgaben"];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CARD_INFORMATION.map((card) => (
          <div key={card} className="border border-gray-200 rounded-md shadow-xs">
            <SummaryCard label={card} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default SummaryCardGroup;
