import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import NotFound from "../pages/global/NotFound/NotFound";
import UserLayout from "../layouts/UserLayout";

// Páginas Públicas
import Login from "../pages/global/Login/Login";

// Páginas do Usuário
import UserHome from "../pages/user/Home/Home";
import UserActivities from "../pages/user/Activities/Activities";
import UserWallet from "../pages/user/Wallet/Wallet";
import UserProfile from "../pages/user/Profile/Profile";

// Páginas do Motorista
import DriverSignUp from "../pages/driver/SignUp/SignUp";
import DriverHome from "../pages/driver/Home/Home";
import DriverTrips from "../pages/driver/Trips/Trips";
import DriverWallet from "../pages/driver/Wallet/Wallet";
import DriverProfile from "../pages/driver/Profile/Profile";

export const router = createBrowserRouter([
  // Redirecionamento da rota raiz
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },

  // Rotas Públicas
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/driver/signup",
    element: <DriverSignUp />,
  },

  // Rotas Protegidas do Usuário
  {
    element: <ProtectedRoute userType="user" />,
    children: [
      {
        element: <UserLayout />,
        children: [
          { path: "/home", element: <UserHome /> },
          { path: "/activities", element: <UserActivities /> },
          { path: "/wallet", element: <UserWallet /> },
          { path: "/settings", element: <UserProfile /> },
        ],
      },
    ],
  },

  // Rotas Protegidas do Motorista
  {
    element: <ProtectedRoute userType="driver" />,
    children: [
      {
        path: "/driver/home",
        element: <DriverHome />,
      },
      {
        path: "/driver/trips",
        element: <DriverTrips />,
      },
      {
        path: "/driver/wallet",
        element: <DriverWallet />,
      },
      {
        path: "/driver/profile",
        element: <DriverProfile />,
      },
    ],
  },

  // Rota curinga para páginas não encontradas
  {
    path: "*",
    element: <NotFound />,
  },
]);
