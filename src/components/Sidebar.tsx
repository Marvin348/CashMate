import { RxDashboard } from "react-icons/rx";
import { LuWallet } from "react-icons/lu";
import { TbFileInvoice } from "react-icons/tb";
import { LuFilter } from "react-icons/lu";
import { Link } from "react-router";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      <div
        className={`overlay ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>
      <aside
        className={`fixed left-0 top-0 bottom-0 p-4 bg-white rounded-md transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:static md:h-screen md:border-r border-gray-200 shadow-xs md:translate-x-0 md:rounded-none`}
      >
        <nav className="flex flex-col gap-4 rounded-md">
          <div>
            <Link to="/" className="sidebar-btn bg-custom text-white">
              <RxDashboard /> Dashboard
            </Link>
          </div>
          <div>
            <Link to="/income" className="sidebar-btn">
              <LuWallet /> Einkommen
            </Link>
          </div>
          <div>
            <Link to="/expense" className="sidebar-btn">
              <TbFileInvoice /> Ausgaben
            </Link>
          </div>
          <div>
            <Link to="/filter" className="sidebar-btn">
              <LuFilter /> Filter
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
};
export default Sidebar;
