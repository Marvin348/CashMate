import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import DashboardPage from "./pages/DashboardPage.tsx";
import AppLayout from "./components/AppLayout.tsx";
import ExpensePage from "./pages/ExpensePage.tsx";
import IncomePage from "./pages/IncomePage.tsx";
import FilterPage from "./pages/FilterPage.tsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "expense",
        element: <ExpensePage />,
      },
      {
        path: "income",
        element: <IncomePage />,
      },
      {
        path: "filter",
        element: <FilterPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
