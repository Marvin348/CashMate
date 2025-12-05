import { RxDashboard } from "react-icons/rx";
import { LuWallet, LuFilter, LuHandCoins } from "react-icons/lu";

export const SIDEBAR_LINKS = [
  {
    to: "/",
    label: "Dashboard",
    icon: RxDashboard,
    activeColor: "bg-custom text-white",
  },
  {
    to: "/income",
    label: "Einkommen",
    icon: LuWallet,
    activeColor: "bg-custom text-white",
  },
  {
    to: "/expense",
    label: "Ausgaben",
    icon: LuHandCoins,
    activeColor: "bg-custom text-white",
  },
  {
    to: "/filter",
    label: "Filter",
    icon: LuFilter,
    activeColor: "bg-custom text-white",
  },
];
