import { FaBars } from "react-icons/fa6";
import logo from "@/assets/CashMate.svg"

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
        <img className="w-30 h-auto" src={logo} alt="CashMate" />
      </div>
    </header>
  );
};
export default Header;
