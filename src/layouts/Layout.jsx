import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import CookieCard from "../components/ui/CookieCard";
import { Toaster } from "react-hot-toast";
import LeftBar from "./LeftBar";
import { useAuth } from "../context/Useauth";

const Layout = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div>
      {isAuthenticated && <LeftBar />}
      <Outlet />
      <Footer />
      <CookieCard />
      <Toaster position='top-right' />
    </div>
  );
};

export default Layout;
