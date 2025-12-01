import { RxDashboard } from "react-icons/rx";
import { LuWallet, LuFilter } from "react-icons/lu";
import { TbFileInvoice } from "react-icons/tb";

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
    icon: TbFileInvoice,
    activeColor: "bg-custom text-white",
  },
  {
    to: "/filter",
    label: "Filter",
    icon: LuFilter,
    activeColor: "bg-custom text-white",
  },
];
