import { LuWallet } from "react-icons/lu";

type SummaryCardProps = {
  label: string;
};

const SummaryCard = ({ label }: SummaryCardProps) => {
  return (
    <div className="flex items-center gap-4 p-4">
      <div className="bg-amber-600 rounded-full size-12 flex items-center justify-center">
        <LuWallet className="text-white text-lg" />
      </div>
      <div>
        <p className="text-gray-500">{label}</p>
        <p className="text-lg font-medium">1000€</p>
      </div>
    </div>
  );
};
export default SummaryCard;
