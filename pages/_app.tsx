import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import SildeFind from './SlideFind/component'
import RestaurantGuide from './RestaurantGuide'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
       <Component {...pageProps} />
       <SildeFind/>
       <RestaurantGuide/>
    </Layout>
  )
}

export default MyApp
