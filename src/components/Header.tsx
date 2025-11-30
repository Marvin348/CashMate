import { FaBars } from "react-icons/fa6";

type HeaderProps = {
  isSidebarOpen: () => void;
};

const Header = ({ isSidebarOpen }: HeaderProps) => {
  return (
    <header className="py-4 px-4 border-b border-gray-200 shadow-xs">
      <div className="flex items-center gap-4">
        <button
          className="block md:hidden cursor-pointer"
          onClick={isSidebarOpen}
        >
          <FaBars />
        </button>
        <h2 className="font-bold text-xl">CashMate</h2>
      </div>
    </header>
  );
};
export default Header;
