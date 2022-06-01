import * as React from "react";
import Footer from "../Footer";
import Header from "../Header";

export interface LayoutProps {
  children: any;
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
