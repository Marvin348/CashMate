import { SIDEBAR_LINKS } from "@/constants/sidebar-links";
import { NavLink } from "react-router";

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
        className={`fixed left-0 top-0 bottom-0 p-4 bg-white rounded-md transform transition-transform duration-400 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:static md:border-r border-gray-200 shadow-xs md:translate-x-0 md:rounded-none`}
      >
        <nav className="flex flex-col gap-4 rounded-md">
          {SIDEBAR_LINKS.map(({ to, activeColor, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `sidebar-btn ${isActive ? `${activeColor}` : ""}`
              }
              onClick={onClose}
            >
              <Icon />
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};
export default Sidebar;
