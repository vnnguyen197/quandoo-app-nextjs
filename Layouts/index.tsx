import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Example from "@/components/SlideFind";
import * as React from "react";

export interface LayoutsProps {
  children: string[];
}

const Layouts: React.FC<LayoutsProps> = ({ children }) => {
  return (
    <>
      <div className="app-root">
        <Header />
        {/* <Example/> */}
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layouts 
