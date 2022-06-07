import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Layouts from 'Layouts';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
 
 useEffect(() => {
   typeof document !== undefined ? require("bootstrap/dist/js/bootstrap") : null;
 }, []);
 
  return (
    <Layouts>
        <Component {...pageProps} />
    </Layouts>
  )
}

export default MyApp
