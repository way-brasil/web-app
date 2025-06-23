import React from "react";
import { Outlet } from "react-router-dom";
import BottomNavBar from "../components/basics/BottomNavBar";

const UserLayout: React.FC = () => {
  return (
    <>
      <Outlet />
      <BottomNavBar />
    </>
  );
};

export default UserLayout;
