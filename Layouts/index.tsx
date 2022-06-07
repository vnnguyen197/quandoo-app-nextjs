import Footer from "@/components/Footer";
import Header from "@/components/Header";
import * as React from "react";

export interface LayoutsProps {
  children: any;
}

const Layouts: React.FC<LayoutsProps> = ({ children }) => {
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
