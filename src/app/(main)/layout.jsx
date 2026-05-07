import BreakingNews from "@/components/shared/BreakingNews";
import FooterPage from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <BreakingNews />
      <Navbar />
      {children}
      <FooterPage />
    </>
  );
};

export default MainLayout;
