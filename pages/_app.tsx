import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import Restaurants from './RestaurantsQuanDoo'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
 
 useEffect(() => {
   typeof document !== undefined ? require("bootstrap/dist/js/bootstrap") : null;
 }, []);
 
  return (
    <Layout>
        <Component {...pageProps} />
        <Restaurants/>
    </Layout>
  )
}

export default MyApp
