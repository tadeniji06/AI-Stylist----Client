import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import CookieCard from "../components/ui/CookieCard";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div>
      <Outlet />
      <Footer />
      <CookieCard />
      <Toaster position='top-right' />
    </div>
  );
};

export default Layout;
