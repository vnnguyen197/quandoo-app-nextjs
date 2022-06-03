import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import Restaurants from './RestaurantsQuanDoo'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
        <Component {...pageProps} />
        <Restaurants/>
    </Layout>
  )
}

export default MyApp
