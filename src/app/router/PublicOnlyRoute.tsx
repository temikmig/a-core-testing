import { Navigate, Outlet } from "react-router-dom";

const isAuth = () => {
  return Boolean(localStorage.getItem("token"));
};

export const PublicOnlyRoute = () => {
  if (isAuth()) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
