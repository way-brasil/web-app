import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  {
    label: "Home",
    path: "/home",
    icon: "/ico/driver.svg",
    disableIcon: "/ico/driver-white.svg",
  },
  {
    label: "Atividades",
    path: "/activities",
    icon: "/ico/list.svg",
    disableIcon: "/ico/list-white.svg",
  },
  {
    label: "Carteira",
    path: "/wallet",
    icon: "/ico/cash.svg",
    disableIcon: "/ico/cash-white.svg",
  },
  {
    label: "Perfil",
    path: "/settings",
    icon: "/ico/user.svg",
    disableIcon: "/ico/user-white.svg",
  },
];

const barBg = "var(--color-dark-brown-gray, #1F1B1A)";
const yellow = "var(--color-yellow, #FFD52C)";
const highlight = "var(--color-very-dark-gray-2, #1D1D1F)";
const NAVBAR_HEIGHT = 58;

const BottomNavBar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 16,
        display: "flex",
        justifyContent: "center",
        zIndex: 100,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 344,
          height: NAVBAR_HEIGHT,
          background: barBg,
          borderRadius: 29,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
          pointerEvents: "auto",
        }}
      >
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              style={{
                background: "none",
                border: "none",
                outline: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: isActive ? yellow : "var(--color-medium-gray)",
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                transition: "color 0.2s",
                position: "relative",
                minWidth: 60,
                zIndex: 1,
                padding: 0,
                height: "100%",
              }}
            >
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  minWidth: 60,
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="highlight-bar"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{
                      position: "absolute",
                      left: "auto",
                      top: "auto",
                      transform: "translate(-50%, -50%)",
                      width: 90,
                      height: `${NAVBAR_HEIGHT * 0.9}px`,
                      borderRadius: `${(NAVBAR_HEIGHT * 0.95) / 2}px`,
                      background: highlight,
                      zIndex: 0,
                      boxShadow: "0 4px 16px 0 rgba(0,0,0,0.25)",
                      border: `2px solid ${yellow}`,
                    }}
                  />
                )}
                <span
                  style={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 22,
                    marginTop: 6,
                  }}
                >
                  <img
                    src={isActive ? item.icon : item.disableIcon}
                    alt={item.label}
                    style={{ width: 22, height: 22, display: "block" }}
                  />
                </span>
                <span style={{ marginTop: 2, position: "relative", zIndex: 1 }}>
                  {item.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavBar;
