import Navbar from "@/components/shared/Navbar";
import React from "react";
import { montserrat } from "../layout";

const AuthLayout = ({ children }) => {
  return (
    <div className={`${montserrat.className} min-h-screen bg-base-200 flex flex-col`}>
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;