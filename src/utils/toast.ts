import toast from "react-hot-toast";

const baseStyle = {
  borderRadius: "10px",
  background: "#ffffff",
  color: "#1f2937", 
  border: "1px solid #e5e7eb", 
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  padding: "12px 16px",
  fontSize: "14px",
};
const successIcon = {
  primary: "#22c55e",
  secondary: "#fff",
};

export const showTransactionCreated = () =>
  toast.success("Transaktion erstellt", {
    style: baseStyle,
    iconTheme: successIcon,
  });

export const showTransactionEdited = () =>
  toast.success("Transaktion bearbeitet", {
    style: baseStyle,
    iconTheme: successIcon,
  });

export const showTransactionDeleted = () =>
  toast.success("Transaktion gelöscht", {
    style: baseStyle,
    iconTheme: successIcon,
  });
