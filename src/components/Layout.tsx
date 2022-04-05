import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: { children: any }) => {
  return (
    <div className="relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
