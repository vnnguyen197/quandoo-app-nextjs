import Footer from 'features/Footer';
import * as React from 'react';
import Header from '../Header';

export interface LayoutsProps {
}

export default function Layouts (props: LayoutsProps) {
  return (
    <div>
      <Header/>
      <Footer/>
    </div>
  );
}
