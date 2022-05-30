import * as React from "react";
import Footer from "../Footer";
import Header from "../Header";

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
