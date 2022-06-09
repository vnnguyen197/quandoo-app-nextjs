import Footer from "@/components/Footer";
import Header from "@/components/Header";
import * as React from "react";

export interface LayoutProps {
}
export interface LayoutsProps {
  children: string[];
}

const Layouts: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="app-root">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layouts 
