// import { createBrowserRouter } from "react-router-dom";
import { createHashRouter } from "react-router-dom";
import { LoginPage } from "@/pages/LoginPage";
import { TreePage } from "@/pages/TreePage";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicOnlyRoute } from "./PublicOnlyRoute";
import { AppLayout, AuthLayout } from "../layout";

export const router = createHashRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        element: <PublicOnlyRoute />,
        children: [
          {
            path: "/login",
            element: <LoginPage />,
          },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: "/",
            element: <TreePage />,
          },
        ],
      },
    ],
  },
]);
