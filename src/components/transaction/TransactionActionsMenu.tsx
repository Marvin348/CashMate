import { GrEdit } from "react-icons/gr";
import { FaRegTrashCan } from "react-icons/fa6";

type TransactionActionsMenuProps = {
  onDelete: () => void;
  onEdit: () => void;
};
const TransactionActionsMenu = ({
  onDelete,
  onEdit,
}: TransactionActionsMenuProps) => {
  return (
    <div className="absolute -top-20 right-0 bg-white w-30 custom-shadow p-1 rounded-md z-30">
      <button
        className="w-full flex items-center justify-between gap-2 p-2 text-gray-900 hover:bg-gray-100 rounded-md"
        onClick={onEdit}
      >
        Bearbeiten
        <GrEdit />
      </button>
      <button
        className="w-full flex items-center justify-between gap-2 p-2 text-gray-900 hover:bg-gray-100 rounded-md"
        onClick={onDelete}
      >
        Löschen
        <FaRegTrashCan />
      </button>
    </div>
  );
};
export default TransactionActionsMenu;
