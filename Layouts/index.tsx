import Footer from "@/components/Footer";
import Header from "@/components/Header";
import * as React from "react";

export interface LayoutProps {
}
interface Props {
  children: React.ReactNode;
}

const Layouts: React.FC<Props> = ({ children }) => {
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
