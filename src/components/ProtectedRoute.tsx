import {  Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  userType?: "user" | "driver";
}

const ProtectedRoute = ({ }: ProtectedRouteProps) => {
  // TODO: Implementar verificação do token no localStorage
  // const token = localStorage.getItem("token");
  // const userTypeFromStorage = localStorage.getItem("userType") as
  //   | "user"
  //   | "driver"
  //   | null;

  // if (!token) {
  //   return <Navigate to="/login" replace />;
  // }

  // if (userType && userType !== userTypeFromStorage) {
  //   return <Navigate to="/login" replace />;
  // }

  return <Outlet />;
};

export default ProtectedRoute;
